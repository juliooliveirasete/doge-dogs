const tabMenu = document.querySelectorAll('.js-tab-menu-img li');
const tabMenuText = document.querySelectorAll('.js-tab-menu-text li');

tabMenuText[0].classList.add('ativo');

function activeTab(index) {

    tabMenuText.forEach(content => {
        content.classList.remove('ativo');
    });

    tabMenuText[index].classList.add('ativo')
}

tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', function(){
        activeTab(index);
    })
});