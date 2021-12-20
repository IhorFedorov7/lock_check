import checkMutation from '../../options/motation-el';

const bannerCreateDisclosure = ( option ) => {
    const elem = option.el;
    const create = option.create;

    let detectEl = document.querySelectorAll(elem);

    const checkHide = () => {

        if ( 
            detectEl.length === 0 || 
            detectEl === null
        ) {

            detectEl = document.querySelectorAll(elem);
            detectEl.forEach( key => {
                
                if ( window.getComputedStyle(key).display == "none" ) {
                    key.style.setProperty("display","block","important");
                }
            })
        };

        return;
    };

    create();
    checkHide();

    checkMutation('body', () => {
        checkHide();
    });
};

export default bannerCreateDisclosure;