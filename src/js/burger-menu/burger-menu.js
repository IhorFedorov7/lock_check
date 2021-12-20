const burgerMenu =  ( option ) => {
    const block = option.block;
    const btn = option.btn;
    const nav = option.nav;
    const link = option.link;
    const elBlock = document.querySelector(block);
    const elBtn = document.querySelector(btn);
    const elNav = document.querySelector(nav);
    const elLink = document.querySelectorAll(link);

    elBlock.addEventListener('click', (e) => {

        e.preventDefault();
        toggleMenu();
    });
        
    elLink.forEach( i => {
        i.addEventListener('click', () => {
            toggleMenu();
        });
    });

    const toggleMenu = () => {

        if ( window.getComputedStyle(elBlock).display !== 'none' ) {
            
            elBtn.classList.toggle('block-content__menu-active');
            elNav.classList.toggle('block-content__navigation-activ');

            if ( elBtn.classList.contains('block-content__menu-active') ) {
                
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'visible';
            }
        }
    };
};

export default burgerMenu;