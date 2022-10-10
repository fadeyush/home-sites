import './scss/style.scss';

function showSearch() {
    const navToggle = document.querySelector(".main-nav__item-search");
    const navMain = document.querySelector(".item-search__content");

    navToggle.addEventListener("click", function () {
        navMain.classList.toggle("item-search__content--active");
        navToggle.classList.toggle("main-nav__item-search--active");
    });
}

showSearch();

function showMenu() {
    const navToggle = document.querySelector(".main-nav__item-menu");
    const navMain = document.querySelector(".item-menu__content");

    navToggle.addEventListener("click", function () {
        navMain.classList.toggle("item-menu__content--active");
        navToggle.classList.toggle("main-nav__item-menu--active");
    });
}

showMenu();


function showcooperationItem() {
        const cooperationList = document.querySelectorAll('.cooperation__info-item');
        const cooperationButtonsParent = document.querySelector('.cooperation__name-list');
        const cooperationButtons = document.querySelectorAll('.cooperation__name-item');

        let slideIndex = 0;

        function showCooperationList(i = 0) {
            cooperationList[i].classList.add('cooperation__info-item--active');
            cooperationButtons[i].classList.add('cooperation__name-item--active');
        };
        
        function hideCooperationList() {
            cooperationList.forEach(cooperationItem => {
                cooperationItem.classList.remove('cooperation__info-item--active');
            });

            cooperationButtons.forEach((cooperationButton) => {
                cooperationButton.classList.remove('cooperation__name-item--active');
            })
        }

        cooperationButtonsParent.addEventListener('click', (event) => {
            const target = event.target;

            if (target && cooperationButtons) {
                cooperationButtons.forEach((cooperationButton, i) => {
                    if (target == cooperationButton) {
                        hideCooperationList();
                        showCooperationList(i);
                    }
                });
            }
        });
}

showcooperationItem();