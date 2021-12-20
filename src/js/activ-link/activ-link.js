const activeLink = ( option ) => {
    const links = option.activ;
    const classEl = option.class;
    const el = document.querySelectorAll(links);

    el.forEach(link => {
        if ( 
            link.getAttribute('href').replace('#', '') ===
            location.hash.replace('#', '') 
        ) {

            addClass(link);
        }
    });

    function addClass (e) {
        let elem = e.querySelector('h3');

        removeClass();
        
        if ( elem ) {

            elem.classList.add(classEl);
        }  
    }

    function removeClass() {
        el.forEach(i => {
            let elem = i.querySelector(`h3.${classEl}`);

            if ( elem ) {

                elem.classList.remove(classEl);
            }
        });
    }
    
    el.forEach(i => {
        i.addEventListener('click', () => {
            addClass(i)
        });
    });
}

export default activeLink;