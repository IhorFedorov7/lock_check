import burgerMenu from './burger-menu/burger-menu';
import activeLink from './activ-link/activ-link';
import scrolling from './scroll-nav/scroll-nav';
import { obj } from './create-section/struktur/obj';
import { styleObj } from './create-banners/dynamic/obj';
import { styleModuleObj } from './create-banners/detect/obj';
import { styleModuleObjAdsOne } from './ads_banners/banner_1/obj';
import { styleModuleObjAdsTwe } from './ads_banners/banner_2/obj';
import bannersAds_one from './ads_banners/banner_1/ads';
import bannersAds_twe from './ads_banners/banner_2/ads';
import addingBlock from './create-section/struktur/section__constructor';
import removeEl from './fix/remove';
import Constructor from './options/constructor';
import bannetCreateDynamic from './create-banners/dynamic/dynamic-banner';
import createStyles from './options/filling__styles';
import bannerCreateDisclosure from './create-banners/disclosure/disclosure-banner';
import detectBanner from './create-banners/detect/detect-banner';
import googleAdsBanner from './create-banners/google-ads/google-ads__banner';
import yandexAdsBanner from './create-banners/yandex-ads/yandex-ads__banner';
import checkMutation from './options/motation-el';
import checkBlock from './create-banners/check/check-banner';
import scrollTopSection from './scroll-top-section/scroll-top-section';
import getElement from './options/create-el';
import SERVER from './server/server';
import checkBlockGrade from './check-block/check-block';

window.onload = function() {

    if ( document.readyState == 'loading' ) {

        document.addEventListener('DOMContentLoaded', start);
    } else {

        start();
    };
};

function start() {

    //создание блоков контента для блокировки
    addingBlock( obj );
    
    //удалить лишние елементы из маски созданного контента
    removeEl([
        '.analyst_type .content-block__examination-content-ads',
        '.error_type .content-block__examination-content-ads'
    ]);

    //Создание гугл баннера
    googleAdsBanner({
        elemCrStatic: () => {
            Constructor({
                block: '.content-block__examination-content-ads.google-Ads', 
                blockRoot: getElement('script', {
                    attr: {
                        type: 'text/javascript',
                    }
                })
            });
            Constructor({
                block: '.content-block__examination-content-ads.google-Ads', 
                blockRoot: getElement('ins', {
                    class: ['adsbygoogle'],
                    attr: {
                        style: 'display:block',
                        data : {
                            adClient: 'ca-pub-6430039911615607',
                            adSlot: '4852376176',
                            adFormat: 'auto',
                        }
                    }
                })
            });
            Constructor({
                block: '.content-block__examination-content-ads.google-Ads', 
                blockRoot: getElement('script', {
                }),
            });
        }
    });

    //Создание яндекс баннера
    yandexAdsBanner({
        elemCrStatic: () => {
            Constructor({
                block: '.content-block__examination-content-ads.yandex-Ads', 
                blockRoot: getElement('div', {
                    attr: {
                        id: 'yandex_rtb_R-A-491776-1',
                    }
                })
            });
            Constructor({
                block: '.content-block__examination-content-ads.yandex-Ads',
                blockRoot: getElement('script', {
                    attr: {
                        type: 'text/javascript',
                    }
                }),
            });
        }
    })
    
    //создание статического баннера 
    const ads = () => {
        Constructor({
            block: '.content-block__examination-content-ads.banner_static', 
            blockRoot: getElement('div', {
                class: ['banner','ads']
            })
        });

        if ( document.querySelector('.content-block__examination-content-ads.banner_static > .banner') ) {
            createStyles( styleModuleObjAdsOne );
            bannersAds_one({
                el: '.content-block__examination-content-ads.banner_static > .banner'
            });
        }
    };

    ads();


    //создание блока для динамического рекламного контента 
    Constructor({
        block: '.content-block__examination-content-ads.banner_dynamic',
        blockRoot: getElement('div', {
            class: ['block_dynamic'],
            attr: {
                style: 'height: 100%; position: relative;',
            }
        }),
    });

    //создание динамического контента
    bannetCreateDynamic({

        styleCr: () => { 
            //создание элемента style в head и его наполнение
            createStyles( styleObj ); 
        },
        elemCrStatic: () => {
            Constructor({
                block: '.block_dynamic', 
                blockRoot: getElement('div', {
                    class: ['content']
                }),
                creates: [
                    { 
                        0: getElement('div', {
                            class: ['content_block'], 
                        }),
                    },
                    { 
                        0: getElement('p', {
                            class: ['content_txt'], 
                        }),
                        content : `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 

                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. `
                    }
                ]
            });
        },
        elemCr: () => { 
            Constructor({
                block: '.block_dynamic', 
                blockRoot: getElement('div', {
                    class: ['top-banner','ads', 'banner']
                }),
                creates: [
                    { 
                        0: getElement('div', {
                            class: ['trigger'], 
                        })
                    },
                    { 
                        0: getElement('img',{
                            class: ['img__banner','img__ads'], 
                            attr: {
                                src: './img/partner_1.png',
                                alt: 'Lern new JS Framework',
                                width: '100%',
                                height: '100%',
                            }
                        }),
                    }
                ]
            });
        },
    });

    //создание статического баннера 
    bannerCreateDisclosure({
        el: '.banner_disclosure .banner',
        create: () => {
            Constructor({
                block: '.content-block__examination-content-ads.banner_disclosure', 
                blockRoot: getElement('div', {
                    class: ['banner','ads'],
                    attr: {
                        style: 'height: 100%; position: relative;',
                    }

                })
            })

            if ( document.querySelector('.content-block__examination-content-ads.banner_disclosure > .banner') ) {
                createStyles( styleModuleObjAdsTwe );
                bannersAds_twe({
                    el: '.content-block__examination-content-ads.banner_disclosure > .banner'
                });
            }
        } 
    });

    Constructor({
        block: '.content-block__examination-content-ads.banner_detect',
        blockRoot: getElement('div', {
            class: ['banner_detect'],
            attr: {
                style: 'position: relative;',
            }
        }),
    });

    //Детект
    //создание баннера ловишки для детекта  
    detectBanner({
        el: '.banner_detect .banner',
        create: 'div[class^="banner_detect"]',
        elemCrStatic: () => {
            Constructor({
                block: '.content-block__examination-content-ads.banner_detect .banner_detect', 
                blockRoot: getElement('div', {
                    class: ['banner','ads']
                }),
                creates: [
                    { 
                        0: getElement('img',{
                            class: ['img__banner','img__ads'], 
                            attr: {
                                src: './img/partner_2.png',
                                alt: 'Everyone can looks like IT guy with macbook',
                                width: '100%',
                                height: '100%',
                            }
                        }),
                    }
                ]
            });

            Constructor({
                block: '[class^="banner_detect"]', 
                blockRoot: getElement('div', {
                    class: ['content']
                }),
                creates: [
                    { 
                        0: getElement('div', {
                            class: ['content_block'], 
                        }),
                    },
                    { 
                        0: getElement('p', {
                            class: ['content_txt'], 
                        }),
                        content : `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 

                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. `
                    }
                ]
            });
        },
        styleCr: () => { 
            //создание элемента style в head и его наполнение
            createStyles( styleModuleObj ); 
        },
    });

    // //добавление класса activ для сворачивания блока
    // clickHidingCcontent({
    //     el: 'input[type="checkbox"]#AdLock.accordion'
    // });

    SERVER({
        domenNameCheck: [{ 
            domen:  /pagead2.googlesyndication.com/,
            funCheck: () => { 
                checkBlock({
                    el: ['div.google-Ads .adsbygoogle'], 
                    navEl: '.content_type .check__activity.google-Ads',
                    checkEl: '.content_type .check__activity.google-Ads', 
                    type: 'true'
                })
            }
        },
        { 
            domen: /.yandex.ru/,
            funCheck: () => { 
                checkBlock({
                    el: ['div.yandex-Ads [id^="yandex"]'], 
                    navEl: '.content_type .check-nav__activity.yandex-Ads',
                    checkEl: '.content_type .check__activity.yandex-Ads', 
                    type: 'true'
                })
            }
        },
        { 
            domen: /www.google-analytics.com/, 
            funCheck: () => {
                checkBlock({
                    el: ['div.google-analyst'], 
                    navEl: ['.analyst_type .check-nav__activity.google-analyst'],
                    checkEl: ['.analyst_type .check__activity.google-analyst'],
                    type: 'true'
                })
            }
        },
        { 
            domen: /static.hotjar.com/, 
            funCheck: () => {
                checkBlock({
                    el: ['div.hotjar-analyst'], 
                    navEl: ['.analyst_type .check-nav__activity.hotjar-analyst'],
                    checkEl: ['.analyst_type .check__activity.hotjar-analyst'], 
                    type: 'true'
                })
            }
        },
        { 
            domen: /.cloudfront.net/, 
            funCheck: () => {
                checkBlock({
                    el: ['div.cloudfront-analyst'], 
                    navEl: ['.analyst_type .check-nav__activity.cloudfront-analyst'],
                    checkEl: ['.analyst_type .check__activity.cloudfront-analyst'],
                    type: 'true'
                })
            }
        }]
    });

    checkBlock({
        el: ['div.google-Ads .adsbygoogle'], 
        navEl: ['.content_type .check-nav__activity.google-Ads'],
        checkEl: ['.content_type .check__activity.google-Ads'], 
        check: 'analyst'
    });

    checkBlock({
        el: ['div.yandex-Ads [id^="yandex"]'], 
        navEl: ['.content_type .check-nav__activity.yandex-Ads'],
        checkEl: ['.content_type .check__activity.yandex-Ads'], 
        check: 'analyst'
    });

    //проверка на скрытие рекламного блока .banner_static
    checkBlock({
        el: ['div.banner_static div.banner'], 
        navEl: ['.banner_type .check-nav__activity.banner_static'],
        checkEl:['.banner_type .check__activity.banner_static'],
    });

    //проверка на скрытие рекламного блока .banner_dynamic
    checkBlock({
        el: ['div.banner_dynamic div.banner'], 
        navEl: ['.banner_type .check-nav__activity.banner_dynamic'],
        checkEl: ['.banner_type .check__activity.banner_dynamic'],
    });

    //проверка на скрытие рекламного блока .banner_disclosure
    checkBlock({
        el: ['div.banner_disclosure div.banner'], 
        navEl: ['.banner_type .check-nav__activity.banner_disclosure'],
        checkEl: ['.banner_type .check__activity.banner_disclosure']
    });

    //проверка на скрытие рекламного блока .banner_detect
    checkBlock({
        el: ['div.banner_detect div.banner'], 
        navEl: ['.banner_type .check-nav__activity.banner_detect'],
        checkEl: ['.banner_type .check__activity.banner_detect'],
        detectCheck: '#openModal',
        visCheck: ['.banner_detect div[class^="content"],.banner_detect p[class^="content"]'],
    });

    //проверка на изменение в дом дереве и вызов функции проверки
    checkMutation('.app', () => {

        checkBlock({
            el: ['div.banner_static div.banner'], 
            navEl: ['.banner_type .check-nav__activity.banner_static'],
            checkEl:['.banner_type .check__activity.banner_static'],
        }); 

        checkBlock({
            el: ['div.banner_dynamic div.banner'], 
            navEl: ['.banner_type .check-nav__activity.banner_dynamic'],
            checkEl: ['.banner_type .check__activity.banner_dynamic'],
        });

        checkBlock({
            el: ['div.banner_disclosure div.banner'], 
            navEl: ['.banner_type .check-nav__activity.banner_disclosure'],
            checkEl: ['.banner_type .check__activity.banner_disclosure']
        });

        checkBlock({
            el: ['div.banner_detect div.banner'], 
            navEl: ['.banner_type .check-nav__activity.banner_detect'],
            checkEl: ['.banner_type .check__activity.banner_detect'],
            detectCheck: '#openModal',
            visCheck: ['.banner_detect div[class^="content"]','.banner_detect p[class^="content"]'],
        });

        checkBlockGrade({
            check: 'div.adLock__check.check__activity',
            change: '.check-block__grade-dynamic',
            text: '.check-block__info-text > p'
        });

        checkBlockGrade({
            check: '.content_type div.adLock__check.check__activity',
            change: '.content-block__dynamic.content_type'
        });

        checkBlockGrade({
            check: '.banner_type div.adLock__check.check__activity',
            change: '.content-block__dynamic.banner_type'
        });

        checkBlockGrade({
            check: '.analyst_type div.adLock__check.check__activity',
            change: '.content-block__dynamic.analyst_type'
        });
    });

    checkBlockGrade({
        check: '.banner_type div.adLock__check.check__activity',
        change: '.content-block__dynamic.banner_type'
    });

    burgerMenu({
        btn: '.block-content__menu',
        block: '.block-content__burger-menu',
        nav: '.block-content__navigation',
        click: '.block-content__left',
        link: 'a:not([aria-label="logo"])'
    });

    const triggerWidth = () => {

        activeLink({
            activ: ['.block-content__navigation a', '.block-content__logo a'],
            class: 'active'
        });
    
        scrollTopSection({
            relativ: '.block-content__right',
            dynamic: [
                '[class$="check-block__background"]','.check-block__background.activ'
            ] ,
            height: '.check-block__section'  
        });
    
        scrolling({
            el: 'a[href^="#"]:not(.close)',
            speed: 0.1
        });
    };

    triggerWidth();
    
    window.onresize = () => {
        
        triggerWidth();
    };
};

