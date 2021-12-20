const scrollTopSection = ( option ) => {
    const relativ = option.relativ;
    const dynamicEl = option.dynamic;
    const heightBlock = option.height;

    const elem = document.querySelector(relativ);
    const el = document.querySelector(dynamicEl);
    const animationEl = document.querySelector(heightBlock);

    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

    let lastScroll = 0;

    if ( el ) {
        const setHeight = el.offsetHeight;

        animationEl.style.height = `${setHeight}px`;
        
        if ( !el.classList.contains('activ') ) {
            
            el.classList.add('activ');
        }

        window.addEventListener('scroll', () => {
            let returnsSize = elem.getBoundingClientRect().top;
            
            if ( scrollPosition() > lastScroll ) {
                if ( returnsSize < -setHeight + 16 ) {
                    if ( el.classList.contains('activ') ) {

                        el.classList.remove('activ');
                    }
                }
                
                if ( returnsSize < -setHeight ) {
                    if ( !el.classList.contains('shift') ) {

                        el.classList.add('shift');
                        el.classList.add('down');
                        el.classList.remove('up');
                    }
                }

                if ( returnsSize < -setHeight - 64 ) {
                    if ( !el.classList.contains('scroll') ) {

                        el.classList.add('scroll');
                        setTimeout(() => {
                            el.classList.add('anim'); 
                        }, 50);
                    }
                }

                if ( returnsSize < -setHeight - 128 ) {
                    if ( !el.classList.contains('down') ) {

                        el.classList.remove('down');
                    }
                }
            } else if ( scrollPosition() < lastScroll  ) {
                if ( returnsSize > -setHeight - 128 ) {
                    if ( !el.classList.contains('up') ) {
                        
                        el.classList.add('up');    
                        el.classList.remove('down');
                    }
                }

                if ( returnsSize > -setHeight - 64 ) {
                    if ( el.classList.contains('shift') ) {
                        
                        el.classList.remove('anim');
                        el.classList.remove('shift');
                        setTimeout(() => {
                            el.classList.remove('scroll');
                        }, 50)
                    }
                }

                if ( returnsSize > -setHeight ) {
                    if ( !el.classList.contains('activ') ) {

                        el.classList.remove('up');
                    } 
                }

                if ( returnsSize > -setHeight  + 16 ) {
                    if ( !el.classList.contains('activ') ) {
                        
                        setTimeout(() => {
                            if ( !el.classList.contains('activ') ) {
                                
                                el.classList.add('activ');
                            } else {
                                
                                return;
                            }
                        }, 200);
                    }
                }
            }

            lastScroll = scrollPosition();
        });
    }  
};

export default scrollTopSection;
