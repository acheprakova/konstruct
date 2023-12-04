"use strict"

function tabs() {

    const tabsBtn = document.querySelectorAll(".nav__item");
    const tabsItems = document.querySelectorAll(".content");

    tabsBtn.forEach(onTabClick);

    function onTabClick(item) {

        item.addEventListener('click', function (e) {
            e.preventDefault();
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.getElementById(tabId);

            if(!currentBtn.classList.contains('active') ) {

                tabsBtn.forEach(function (item) {
                    item.classList.remove('active');
                })

                tabsItems.forEach(function (item) {
                    item.classList.remove('active');
                })

                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            }
        });
    }

}

tabs()