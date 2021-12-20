const bannetCreateDynamic = ( option ) => {
    let lastScroll = 0;
    let elTop;
    let elBn;

    const stylesCr = option.styleCr;
    const elemCr = option.elemCr;
    const elemCrStatic = option.elemCrStatic;
   
    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const containtHide = () => elBn.classList.contains('top-banner_content');

    (() => {

        stylesCr();
        elemCrStatic();
        elemCr();

        elTop = document.querySelector('.top-banner');
        elBn = elTop.querySelector('div[class="trigger"]');
        elTop.style.opacity = '1';
        elTop.style.setProperty("display","block","important");

        window.addEventListener('scroll', () => {

            if ( scrollPosition() > lastScroll ) {
                
                if (
                    !document.querySelector('.top-banner') ||
                    document.querySelectorAll('.top-banner').length <= 0 &&
                    containtHide()
                ) {
        
                    if ( document.querySelector('.top-banner') ) {
                            
                        elTop = document.querySelector('.top-banner');
                        elBn = elTop.querySelector('div[class="trigger"]');
                        elTop.style.opacity = '1';
                    }
                } else {  
        
                    elBn.classList.add('top-banner_content');
                    elTop.style.setProperty("display","block","important");
                    document.querySelector('.top-banner').style.opacity = '1';
                }
            } else if (
                scrollPosition() < lastScroll && 
                containtHide()
            ) {
                if ( document.querySelector('.top-banner') ) {   
                  
                    document.querySelector('.top-banner').style.opacity = '0';
                }
            }
                           
            lastScroll = scrollPosition();
        });
    })();
};

export default bannetCreateDynamic;
