const checkBlock = ( option ) => {
    const el = option.el;
    const navEl = option.navEl;
    const checkEl = option.checkEl;
    const checkDetect = option.detectCheck;
    const checkVisibility = option.visCheck;
    const types = option.type;
    const checkInfo = option.check;

    let check = document.querySelector(el);
    
    const checks = ( option ) => {

        const booleon = option.booleon;
        const index = option.index;

        switch ( booleon ) {

            case 'true':
                if ( document.querySelectorAll(navEl)[`${index}`].classList.contains('activ') ) {
                    
                    return;
                } else {

                    (() => { 
                        document.querySelectorAll(navEl)[`${index}`].classList.add('activ');
                        document.querySelectorAll(checkEl)[`${index}`].classList.add('activ');
                    
                    })();
                }
            break;
    
            case 'false':
                if ( !document.querySelectorAll(navEl)[`${index}`].classList.contains('activ') ) {
                    
                    return;
                } else {
                    
                    (() => {
                        document.querySelectorAll(navEl)[`${index}`].classList.remove('activ');
                        document.querySelectorAll(checkEl)[`${index}`].classList.remove('activ');
                    })();
                }
            break;
        } 
    };

    const checkElements = ( option ) => {
        const tr = option.true;
        const fl = option.false;

        if ( el !== null ) {

            check = document.querySelector(el);
        } else {
    
            check = document.querySelector('[class*="banner"]');
        };
        
        if ( check === null ) {
        
            tr();
        } else {
            
            if ( 
                window.getComputedStyle(check).display !== 'none' || 
                check.clientHeight !== 0
            ) {   
                        
                fl();
            } else {

                tr();
            }
        };
    };

    const ifBunners = ( option ) => {
        const checkBanners = option.check;
        const if1 = option.if_1;
        const if2 = option.if_2;

        if ( checkBanners ) {
                
            if1();
        } else {

            if2();
        }
    };

    checkElements({
        true: () => { 
            ifBunners({
                check: document.querySelector(el).classList.contains('banner'),
                if_1: () => { checks({booleon:'true', index: 0}) },
                if_2: () => { checks({booleon:'true', index: 1}) }
            })    
        },
        false: () => { 
            ifBunners({
                check: document.querySelector(el).classList.contains('banner'),
                if_1: () => { checks({booleon:'false', index: 0}) },
                if_2: () => { checks({booleon:'false', index: 1}) }
            })    
        },
    });

    if ( checkDetect ) {
        
        let checkDtMd = document.querySelector(checkDetect);

        if ( checkDtMd ) {

            checks({booleon:'false', index: 1});
        } else {

            checks({booleon:'true', index: 1});
        }
    };

    if ( checkVisibility ) {
        
        let count = 0;
        let checkVisEl = document.querySelectorAll(checkVisibility);

        if ( checkVisEl ) {

            checkVisEl.forEach(i => {

                if ( window.getComputedStyle(i).filter !== 'none' ) {
                    
                    count++
                } 
            });

            if ( count === 3 ) {
            
                checks({booleon:'false', index: 2});
            } else {
    
                checks({booleon:'true', index: 2});
            };
        };
    };

    if ( types === 'true' ) {

        checks({booleon:'true', index: 0});
    }; 

    if ( checkInfo === 'analyst' ) {

        if ( window.getComputedStyle(check).display === 'none' ) {
            
            checkElements({
                true: () => { 
                    checks({booleon:'true', index: 1});
                },
                false: () => { 
                    checks({booleon:'false', index: 1});
                },
            });
        };
    };
}

export default checkBlock;