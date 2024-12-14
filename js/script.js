const nav = document.querySelector(".nav");
const logoLink = document.querySelector(".logo__link");
const navList = document.querySelector('.nav__list')
const navButton = document.querySelector(".nav__btn");
const burgerMenuBtn = document.querySelectorAll('.burger__menu_btn')
const burgeMenu = document.querySelector('.burger__menu')
const images = document.querySelectorAll('.second__bg_img_block')
const tot = document.querySelectorAll('.tot')

function checkScreenWidth() {
        if (window.innerWidth <= 1081) {
        if (nav.firstChild !== navButton) {
            nav.insertBefore(navButton, logoLink);
            navButton.textContent = 'CALL ME';
        }
        } else {
            if (nav.firstChild !== logoLink) {
                nav.insertBefore(logoLink, navButton);
                nav.insertBefore(logoLink, navList);
                navButton.textContent = 'CALL ME BACK';
            }
        }
}
burgerMenuBtn.forEach((i) => {
    i.addEventListener('click', () => {
        burgeMenu.scrollIntoView({ behavior: 'smooth', block: 'start' });
        burgeMenu.classList.toggle('active')
        console.log('asd');
        if (burgeMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    })
})

window.addEventListener("resize", checkScreenWidth());
checkScreenWidth()

tot.forEach((i, index) => {
    i.addEventListener('click', (e) => {
        tot.forEach((j) => {
            j.classList.remove('active');
        })
        i.classList.add('active');
        images.forEach((j) => {
            j.style.display = 'none';
        })
        images[index].style.display = 'flex';
    })
});




// const ul = document.querySelector('.first__bg_list');
// document.querySelector('.arrow__back').addEventListener('click', () => {
//     ul.querySelectorAll('li a').forEach((i, index) => {
//         if(i.classList.contains('link__item_active') && index === 0) {
//             ul.style.transform = `translateX(30%)`;
//             document.querySelector('.arrow__back').classList.add('hidden');
//             return;
//         }
//         else if (i.classList.contains('link__item_active')) {
//             ul.querySelectorAll('li a').forEach((j) => {
//                 j.classList.remove('link__item_active');
//             });
//             mainIndex = index - 1;
//             let elem = ul.querySelectorAll('li a')
//             elem.forEach((j, index) => {
//                 if(mainIndex === index) {
//                     console.log(index + ' ' + mainIndex);
//                     j.classList.add('link__item_active');
//                     ul.style.transform += `translateX(6%)`;
//                 }
//             })
//             elem[index].classList.add('link__item_active');
//         }
//     });
//     ul.querySelectorAll('li a').forEach((i, index) => {
//         if(i.classList.contains('link__item_active') && index === 0) {
//             ul.style.transform = `translateX(30%)`;
//             document.querySelector('.arrow__back').classList.add('hidden');
//             return;
//         }
//     })
// })
// ul.querySelectorAll('li a').forEach((i, index) => {
//     i.addEventListener('click', (e) => {
//         e.preventDefault();
//         if(index === 0) {
//             ul.style.transform = `translateX(30%)`;
//             document.querySelector('.arrow__back').classList.add('hidden');
//             return;
//         }
//         else {
//             document.querySelector('.arrow__back').classList.remove('hidden');
//         }
//         let ulIndex = 0;
//         ul.querySelectorAll('li a').forEach((j, index) => {
//             if(j.classList.contains('link__item_active')) {
//                 ulIndex = index
//             }

            
//         })
//         ul.querySelectorAll('li a').forEach((j) => {
//             j.classList.remove('link__item_active');
//         })
//         i.classList.add('link__item_active');
//         console.log(ulIndex);
//         console.log(index);
//         if(index > ulIndex) {

//             console.log(((index + 1) - (ulIndex + 1)) * 10);
            
//             ul.style.transform += `translateX(${-((index + 1) - (ulIndex + 1)) * 6}%)`;
            
//         }
//         else {
//             console.log(-((ulIndex + 1) - (index + 1)) * 10);
//             ul.style.transform += `translateX(${((ulIndex + 1) - (index + 1)) * 6}%)`;
//         }
//     })
// });
