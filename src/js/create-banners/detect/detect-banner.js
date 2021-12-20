import checkMutation from '../../options/motation-el';

const detectBanner = ( option ) => {
    const elem = option.el;
    const elemCrStatic = option.elemCrStatic;
    const elModul = option.create;
    const stylesCr = option.styleCr;
    
    let detectEl = document.querySelectorAll(elem);
    let count = 0;

    elemCrStatic();
    stylesCr();

    const detectBlock = () => {

        document.querySelector(elModul).innerHTML += `
            <div id="openModal" class="modal__detect">
                <div class="modal__detect-dialog">
                    <div class="modal__detect-content">
                        <div class="modal__detect-header">
                            <h3 class="modal__detect-title">Detect AdLock</h3>
                            <a href="#close" title="Close" class="close">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1847 14.9991L7.71436 9.52879L2.25761 14.9855L0.456741 13.1847L5.9135 7.72792L0.456741 2.27116L2.27115 0.456758L7.72791 5.91352L13.1847 0.456758L14.9855 2.25762L9.52877 7.71438L14.9991 13.1847L13.1847 14.9991Z" fill="#E5E5E5"/>
                            </svg>
                            </a>
                        </div>
                        <div class="modal__detect-body">    
                            <h2>Please turn off your adblocker</h2>
                        </div>
                    </div>
                </div>
            </div>
        `

        const blure = document.querySelectorAll(['.banner_detect div[class^="content"],.banner_detect p[class^="content"]']);
        
        blure.forEach(i => {
            i.style.setProperty("filter","blur(.3rem)",'important');
        });
    };

    const checkHide = () => {
        
        if ( 
            detectEl.length === 0 || 
            detectEl === null
        ) {

            detectEl = document.querySelectorAll(elem);
        } else {

            detectEl = document.querySelectorAll(elem);

            detectEl.forEach( key => {

                if ( window.getComputedStyle(key).display == "none" ) {
                    if ( count === 0 ) {

                        detectBlock();
                        count++
                    }  
                }
            })
        }

        return;
    };
    
    (() => {
        checkHide();
        checkMutation('body', () => {

            checkHide();
        });
    })();
}

export default detectBanner;