const clickHidingCcontent = (option) => {
    const el = option.el;
    const click = document.querySelectorAll(el);
    
    click.forEach( i => {
        i.addEventListener('click', (e) => {
            let a = e.currentTarget.parentElement.parentElement.nextElementSibling; 
            const ruls = a.classList.contains('activ');
            
            if ( ruls ){

                a.classList.remove('activ');
            } else {
                
                a.classList.add('activ');
            }
        })
    })
}

export default clickHidingCcontent;