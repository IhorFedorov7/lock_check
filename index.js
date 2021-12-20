window.onload = function() {

    if ( document.readyState == 'loading' ) {

        document.addEventListener('DOMContentLoaded', start);
    } else {

        start();
    };
};

const getElement = ( tagName, option ) => {
        
    const classNames =  option.class;
    const attributes =  option.attr;
    const element = document.createElement( tagName );
    
    if ( classNames ) {

        element.classList.add( ...classNames );
    };

    if ( attributes ) {
        
        for ( const attribute in attributes ) {
            
            if ( element[attribute] !== undefined ) {
                
                element[attribute] = attributes[attribute];
            }
            
        };

        if ( attributes.data ) {

            const data = attributes.data;

            for ( const key in data ) {

                const elemData = element.dataset;
                elemData[key] = data[key];
            }
        };
    };

    return element;
};

const Constructor = ( option ) => {
    const blockEL = option.block;
    const blockRoot = option.blockRoot;
    const createEl = option.creates;

    const elternBanner = document.querySelector(blockEL);
    const block = blockRoot;
    
    if ( blockRoot ) {
    
        elternBanner.append( block );
    };

    if ( createEl ) {
        
        let count = 0;
        let el;

        createEl.forEach( key => {

            if ( key[0] ) {

                if ( 
                    block && 
                    count == 0 
                ) {
                    
                    el = key[0];
                    block.append( el );
                } else if ( count > 0 ) {
                    
                    el.append( key[0] );
                    el = key[0];
                } else {
                    
                    elternBanner.append( key[0] );
                };
            } else {
                el = block;
            }

            if ( key.content ) {
                
                el.innerHTML = key.content;
            };

            count++;
        });
    };
};

const objSection = {
    0: {
        name: 'Контекстная реклама',
        info: `Это основной и самый распространенный вид рекламы на сайтах.
        Ее легко настроить и не надо самому искать рекламодателей.
        Также эти сервисы собирают данные о вас, чтобы подобрать вам подходящую рекламу.`,
        class: 'content_type',
        block: [ 
            {
                type: 'Google AdSense',
                act: ['Выполненено правило: ', 'Скрыт элемент: '],
                class: 'google-Ads'
            },
            {
                type: 'Яндекс Директ/РСЯ',
                act: ['Выполненено правило: ', 'Скрыт элемент: '],
                class: 'yandex-Ads'
            } 
        ]
    },
    1: {
        name: 'Баннерная реклама',
        info: `Этот вид рекламы часто используется на крупных сайтах, которые продают место под рекламу. Её сложнее всего заблокировать, поскольку трудно отличить рекламную картинку от обычной. Часто правила написаны для каждого сайта отдельно, поэтому эта проверка не совсем честная. Она проверяет только наличие ключевых слов в пути к файлу либо доступность флеша.`,
        class: 'banner_type',
        block: [ 
            {
                type: 'Статичное изображение',
                act: ['Скрыт элемент: '],
                class: 'banner_static'
            },
            {
                type: 'Динамический изображение',
                act: ['Скрыт элемент: '],
                class: 'banner_dynamic'
            },
            {
                type: 'Раскрытие баннера',
                act: ['Скрыт элемент: '],
                class: 'banner_disclosure'
            },
            {
                type: 'Детект',
                act: ['Скрыт элемент: ', 'Детект убран: ', 'Контент видем: '],
                class: 'banner_detect'
            }
        ]
    },
    2: {
        name: 'Сервисы аналитики',
        info: `Эти сервисы следят за вашими действиями на сайте и собирают о вас информацию. Они нужны только владельцу сайта, для пользователя это только лишние запросы и код который нужно выполнять. К сожалению их блокировка иногда может полностью сломать сайт.`,
        class: 'analyst_type',
        block: [ 
            {
                type: 'Google Analytics',
                act: ['Выполненено правило: '],
                class: 'google-anal'
            },
            {
                type: 'Hotjar',
                act: ['Выполненено правило: '],
                class: 'hotjar-anal'
            },
            {
                type: 'Яндекс-метрика',
                act: ['Выполненено правило: '],
                class: 'yandex-anal'
            }
        ]
    },
};

const styleObj = {
    '.block_dynamic>.top-banner' : [
        'position: absolute;',
        'width: var(--width-percent);',
        'top: calc(var(--width-percent) - 90%);',
        'z-index: 100;',
        'display: block;',
        
    ],
    '.top-banner_content' : [
        'width: calc(var(--width-percent) - 60%);',
        'height: var(--width-percent);',
        'margin: auto;'
    ],
    '.top-banner_img' : [
        'width: var(--width-percent);',
        'height: var(--width-percent);'
    ],
    'max-width: 820px' : {
        '.top-banner' : [
            'top: calc(var(--width-percent) - 70%);'
        ],
        '.top-banner_content' : [
            'width: var(--width-percent);'
        ]
    },
};

const styleModuleObj = {
    '.modal__detect' : [
        'position:  absolute;',
        'top: 0;',
        'right: 0;',
        'bottom: 0;',
        'left: 0;',
        'background: var(--input-rbg);',
        'z-index: 100;',
        'opacity: 1;',
        '-webkit-transition: opacity 200ms ease-in;',
        '-moz-transition: opacity 200ms ease-in;',
        'transition: opacity 200ms ease-in;',
        'pointer-events: auto;',
        'margin: 0;',
        'padding: 0;'
    ],
    '.modal__detect-dialog' : [
        'position: relative;',
        'width: calc(var( --width-percent) / 2);',
        'margin: calc(var( --width-percent) - 93%) auto;'
    ],
    '.modal__detect-content' : [
        'position: relative;',
        'display: -webkit-box;',
        'display: -webkit-flex;',
        'display: -ms-flexbox;',
        'display: flex;',
        '-webkit-box-orient: vertical;',
        '-webkit-box-direction: normal;',
        '-webkit-flex-direction: column;',
        '-ms-flex-direction: column;',
        'flex-direction: column;',
        'background-color: var(--color-white);',
        '-webkit-background-clip: padding-box;',
        'background-clip: padding-box;',
        'border: 1px solid rgba(0,0,0,.2);',
        'border-radius: .3rem;',
        'outline: 0;'
    ],
    '.modal__detect-header' : [
        'display: -webkit-box;',
        'display: -webkit-flex;',
        'display: -ms-flexbox;',
        'display: flex;',
        '-webkit-box-align: center;',
        '-webkit-align-items: center;',
        '-ms-flex-align: center;',
        'align-items: center;',
        '-webkit-box-pack: justify;',
        '-webkit-justify-content: space-between;',
        '-ms-flex-pack: justify;',
        'justify-content: space-between;',
        'padding: calc(var(--width-px) - 85px);',
        'border-bottom: 1px solid var(--color-light-gray);'
    ],
    '.modal__detect-title' : [
        'margin-top: 0;',
        'margin-bottom: 0;',
        'line-height: 1.5;',
        'font-size: 1.25rem;',
        'font-weight: calc(var(--font-w) * 5);',
        'color: var(--color-black)!important;'
    ],
    '.close' : [
        'float: right;',
        'font-family: sans-serif;',
        'font-size: calc(var(--width-px) - 76px);',
        'font-weight: calc(var(--font-w) * 7);',
        'line-height: 1;',
        'color: var(--color-black);',
        'text-shadow: 0 1px 0 var(--color-white);',
        'opacity: .5;',
        'text-decoration: none;'
    ],
    '.close:focus, .close:hover' : [
        'color: var(--color-black);',
        'text-decoration: none;',
        'cursor: pointer;',
        'opacity: .75;'
    ],
    '.modal__detect-body' : [
        'position: relative;',
        '-webkit-box-flex: 1;',
        '-webkit-flex: 1 1 auto;',
        ' -ms-flex: 1 1 auto;',
        'flex: 1 1 auto;',
        'padding: calc(var(--width-px) - 85px);',
        'overflow: auto;',
        'color: var(--color-black)!important;',
        'font-size: calc(var(--width-px) - 85px);'
    ],
    'min-width: 768px' : {
        '.modal__detect-content' : [
            '-webkit-box-shadow: var(--input-shadow);',
            'box-shadow: var(--input-shadow);',
            'height: var( --width-percent);'
        ]
    },
    'max-width: 820px' : {
        '.modal__detect-dialog' : [
            'width: calc(var( --width-percent) - 30%);',
            'margin: calc(var( --width-percent) - 93%) auto;',
            'top: calc(var( --width-percent) - 70%);'
        ]
    },
    'max-width: 660px' : {
        '.modal__detect-dialog' : [
            'width: var( --width-percent);',
            'margin: auto;',
            'top: calc(var( --width-percent) - 60%);'
        ]
    }
};

const createStyles = ( obj ) => {
    const style = getElement( 'style', { class: ['styles'], } );
    const arrStyle = Object.entries( obj );
    //style.textContent = '@import "./style/root.css" all;';

    document.head.appendChild( style );
      
    for ( let key in arrStyle ) {
        
        if ( arrStyle[key][1].constructor !== Object ) {

            style.innerHTML += `
                ${arrStyle[key][0]} { 
                    ${arrStyle[key][1].join(' ')} 
                }
            `;
        } else { 
            
            const arr = arrStyle[key];
            const arrs = Object.entries( arr[1] );

            let templete = '';

            for ( let i in arrs ) {
                templete += `
                    ${arrs[i][0]}{
                        ${arrs[i][1].join(' ')}
                    }
                `;    
            };

            style.innerHTML += `
                @media(${arr[0]}) { 
                    ${ templete }
                }
            `;
        };
    };
};

const checkMutation = (el, callback) => {
    const elem = document.querySelector(el);
    const observer = new MutationObserver((mutations) => {
        setTimeout(() => {
            callback(mutations);
        }, 50);
    });
    
    observer.observe(elem, {
        attributes: true,
        childList: true,
        subtree: true,
    });
};

function start() {
    
    // (( console ) => {
    
    //     const getBlock = ( option ) => {
    //         let width = option.w;
    //         let height = option.h;
    
    //         return {
    //             string: '+',
    //             style: `font-size: 1px; padding: ${Math.floor(height/2)}px ${Math.floor(width/2)}px;`
    //         }
    //     };
    
    //     console.img = ( option ) => {
    //         let url = option.url;
    //         let scale = option.scale || 1;
    //         let img = getElement('img', {
    //             attr: {
    //                 src: url
    //             }
    //         });
    
    //         img.onload = function () {
                
    //             let el = getBlock({
    //                 w: this.width * scale, 
    //                 h: this.height * scale
    //             });
    
    //             console.log("%c" + el.string, el.style + "background: url(" + url + "); background-size: " + this.width * scale + "px" + this.height * scale + "px; color: transparent;");
    //         };
    //     };
    
    // })( console );
    
    const addingBlock = (obj) => {
        
        const arr = Object.entries(obj);
    
        arr.forEach( key => {
            let name = key[1].name;
            let info = key[1].info;
            let className = key[1].class;
            let obj = key[1].block;
    
            document.querySelector('.app').innerHTML += `
                <section class="content-block__background">
                    <div class="content-block__container width">
                        <div class="accordion__block">
                            <div class="content-block__switch">
                                <h1>${name}</h1>
                                <input type="checkbox" id="AdLock" class="accordion" checked>
                            </div>
                            <div class="content-block__description">
                                <p class="indent">
                                    ${info}
                                </p>
                            </div>
                        </div>
                        <div class="content-block__verstecken activ">
                            <div class="content-block__examination ${className}"></div>
                        </div>
                    </div>
                </section>
            `
            
            obj.forEach( i => {
                let tyle = i.type;
                let act = i.act;
                let classType = i.class;
                let templete = '';

                const create = () => {

                    act.forEach(acts => {

                        templete += `
                            <div class="content-block__examination-info">
                                <h3>${acts}</h3>
                                <div class="checkbox">
                                    <input type="checkbox" id="AdLock__check" class="check__activity ${ classType == undefined ? '' : classType }" disabled>
                                    <label for="AdLock__check" class="label-check__activity">
                                        <h3>Нет</h3>
                                    </label>
                                </div>
                            </div>
                        `
                    });
                };

                create();
                
                document.querySelector(`.${className}`).innerHTML += `
                    <div class="content-block__examination-switch">
                        <!--<input type="checkbox" id="AdLock" >-->
                        <h2>${tyle}</h2>
                    </div>
                    <div class="content-block__verstecken">
                        ${ templete }
                        <div class="content-block__examination-content-ads ${ classType == undefined ? '' : classType }"></div>
                    </div>
                `
            });
        });
    };
    
    const removeEl = (elem) => {
        const el = document.querySelectorAll(elem);
        
        el.forEach( i => {
            
            i.style.setProperty("display","none",'important');
        })
    };
    
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
    };

    
    const checkBlock = ( option ) => {
        const el = option.el;
        const nav = option.navEl;
        const checkDetect = option.detectCheck;
        const checkVisibility = option.visCheck;
        const types = option.type;
        const checkInfo = option.check;
    
        let check = document.querySelector(el);
        let elLabel;
        
        const checks = ( option ) => {
    
            const booleon = option.booleon;
            const index = option.index;
    
            elLabel = document.querySelectorAll(nav)[`${index}`];
    
            if ( elLabel !== undefined ) {
    
                elLabel = elLabel.nextElementSibling;
    
                switch ( booleon ) {
    
                    case 'true':
                       (() => { 
                            elLabel.querySelector('h3').textContent = 'Да';
                            document.querySelectorAll(nav)[`${index}`].checked = true;
                       })();
                    break;
        
                    case 'false':
                        (() => {
                            elLabel.querySelector('h3').textContent = 'Нет';
                            document.querySelectorAll(nav)[`${index}`].checked = false;
                        })();
                    break;
                } 
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
    
        checkElements({
            true: () => { 
                checks({booleon:'true', index: 0});
            },
            false: () => { 
                checks({booleon:'false', index: 0});
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
    
        if ( checkInfo === 'anal' ) {
    
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
    };
    
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
                        <h3 class="modal__detect-title">Detect bloking</h3>
                        <a href="#close" title="Close" class="close">×</a>
                        </div>
                        <div class="modal__detect-body">    
                        <h2>Не блокируйте если не умеете</h2>
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
        };
        
        (() => {
            checkHide();
            checkMutation('body', () => {
                checkHide();
            });
        })();
    };
    
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
        };
    
        create();
        checkHide();
    
        checkMutation('body', () => {
            checkHide();
        });
    };
    
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
    
            window.addEventListener('scroll', () => {
    
                if ( scrollPosition() > lastScroll ) {
                    
                    if (
                        !document.querySelector('.top-banner') ||
                        document.querySelectorAll('.top-banner').length <= 0 &&
                        containtHide()
                    ) {
            
                        elTop = document.querySelector('.top-banner');
                        elBn = elTop.querySelector('div[class="trigger"]');
                    } else {  
            
                        elBn.classList.add('top-banner_content');
                        elTop.style.setProperty("display","block","important");
                    }
                } else if (
                    scrollPosition() < lastScroll && 
                    containtHide()
                ) {
                    if ( document.querySelector('.top-banner') ) {   
                      
                        document.querySelector('.top-banner').style.display = 'none';
                    }
                }
                               
                lastScroll = scrollPosition();
            });
        })();
    };
    
    const googleAdsBanner = ( option ) => {
        const elemCrStatic = option.elemCrStatic;
    
        elemCrStatic();
    };
    
    const yandexAdsBanner = ( option ) => {
        const elemCrStatic = option.elemCrStatic;
    
        elemCrStatic();
    };
    
    const SERVER = ( option ) => {
    
        const dom = option.domenNameCheck;
        const performance = ( 
            window.performance || 
            window.mozPerformance || 
            window.msPerformance || 
            window.webkitPerformance || 
            {}
        );
    
        let obj = performance.getEntries();
        
        obj.forEach(i => {

            if ( 
                i.domainLookupEnd === 0 && 
                i.domainLookupStart === 0 &&
                i.initiatorType === 'script'
            ) {
        
                dom.forEach( key => {

                    if ( key.domen.test(i.name) ) {
                        
                        key.funCheck();
                    }
                })
            };  
        })
    
        return obj = {};
    };
    
    const checkBlockGrade = ( option ) => {
    
        const elCheck = option.check;
        const elDynamic = option.change;
        const elCheckDom = document.querySelectorAll(elCheck);
        
        let lengthNotAcriv = 0;
        let count = 0;
    
        elCheckDom.forEach( key => {
    
            if ( key.parentElement.parentElement.parentElement.parentElement.classList[1] !== 'activ' ) {
                
                lengthNotAcriv++;
                if ( key.textContent === "Да" ) {
                    count ++;
                }
            }
        });
        
        document.querySelector(elDynamic).textContent = Math.round(( 100 / lengthNotAcriv ) * count );
    };

    // const checkVersionIos = () => {
    //     const userDeviceArray = [
    //         {device: 'Android', platform: /Android/},
    //         {device: 'iPhone', platform: /iPhone/},
    //         {device: 'iPad', platform: /iPad/},
    //     ];
        
    //     const platforms = navigator.userAgent;
        
    //     userDeviceArray.forEach( i => {
    //         if ( 
    //             i.platform.test(platforms) && 
    //             (i.device == 'iPhone' || 
    //             i.device == 'iPad' ||
    //             i.device == 'Android')
    //         ) {
                
    //             return false;
    //         } else {
    //             console.img({
    //                 url: "https://adlock.com/wp-content/themes/mdgm/img/logo.svg"
    //             });
    //         }
    //     })
    // };

    // checkVersionIos();

    //создание блоков контента для блокировки
    addingBlock( objSection );
    
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
                        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
                        async: 'async'
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
                creates: [{
                    content : '(adsbygoogle = window.adsbygoogle || []).push({});'
                }]
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
                creates: [{
                    content : `
                        (function(w, d, n, s, t) {
                            w[n] = w[n] || [];
                            w[n].push(function() {
                                Ya.Context.AdvManager.render({
                                    blockId: "R-A-491776-1",
                                    renderTo: "yandex_rtb_R-A-491776-1",
                                    async: true
                                });
                            });
                            t = d.getElementsByTagName("script")[0];
                            s = d.createElement("script");
                            s.type = "text/javascript";
                            s.src = "//an.yandex.ru/system/context.js";
                            s.async = true;
                            t.parentNode.insertBefore(s, t);
                        })(this, this.document, "yandexContextAsyncCallbacks");`
                }]
 
            });
        }
    })
    
    //создание статического баннера 
    Constructor({
        block: '.content-block__examination-content-ads.banner_static', 
        blockRoot: getElement('div', {
            class: ['banner','ads']
        }),
        creates: [
            { 
                0: getElement('img',{
                    class: ['img__banner','img__ads'], 
                    attr: {
                        src: 'https://i.picsum.photos/id/931/400/600.jpg?hmac=nSDJTfU1zLqNXLhIHb6HRX2n5eNZKeczNg0mC5vBdic',
                        alt: 'реклама красивой горы',
                    }
                })
            },
        ]
    });

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
                        content : 'В отличие от сервисов метрики и аналитики этими сервисами пользуются разработчики, чтобы в случае ошибки на сайте узнать о ней. Сервисы следят почти за всеми действиями пользователя чтобы сообщение об ошибке было максимально полное. Чаще всего если их отключить ничего не сломается.В отличие от сервисов метрики и аналитики этими сервисами пользуются разработчики, чтобы в случае ошибки на сайте узнать о ней. Сервисы следят почти за всеми действиями пользователя чтобы сообщение об ошибке было максимально полное. Чаще всего если их отключить ничего не сломается.В отличие от сервисов метрики и аналитики этими сервисами пользуются разработчики, чтобы в случае ошибки на сайте узнать о ней. Сервисы следят почти за всеми действиями пользователя чтобы сообщение об ошибке было максимально полное. Чаще всего если их отключить ничего не сломается.В отличие от сервисов метрики и аналитики этими сервисами пользуются разработчики, чтобы в случае ошибки на сайте узнать о ней. Сервисы следят почти за всеми действиями пользователя чтобы сообщение об ошибке было максимально полное. Чаще всего если их отключить ничего не сломается.В отличие от сервисов метрики и аналитики этими сервисами пользуются разработчики, чтобы в случае ошибки на сайте узнать о ней. Сервисы следят почти за всеми действиями пользователя чтобы сообщение об ошибке было максимально полное. Чаще всего если их отключить ничего не сломается.В отличие от сервисов метрики и аналитики этими сервисами пользуются разработчики, чтобы в случае ошибки на сайте узнать о ней. Сервисы следят почти за всеми действиями пользователя чтобы сообщение об ошибке было максимально полное. Чаще всего если их отключить ничего не сломается.'
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
                        0: getElement('img', {
                            class: ['top-banner_img','img__ads'], 
                            attr: {
                                src: 'https://picsum.photos/seed/picsum/500/300',
                                alt: 'реклама красивой горы',
                            }
                        })
                    },
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
                    class: ['banner','ads']
                }),
                creates: [
                    { 
                        0: getElement('img',{
                            class: ['img__banner','img__ads'], 
                            attr: {
                                src: 'https://i.picsum.photos/id/931/400/600.jpg?hmac=nSDJTfU1zLqNXLhIHb6HRX2n5eNZKeczNg0mC5vBdic',
                                alt: 'реклама красивой горы',
                            }
                        })
                    },
                ]
            })
        } 
    });

    Constructor({
        block: '.content-block__examination-content-ads.banner_detect',
        blockRoot: getElement('div', {
            class: ['banner_detect'],
            attr: {
                style: 'height: 100%; position: relative;',
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
                                src: 'https://i.picsum.photos/id/931/400/600.jpg?hmac=nSDJTfU1zLqNXLhIHb6HRX2n5eNZKeczNg0mC5vBdic',
                                alt: 'реклама красивой горы',
                            }
                        })
                    },
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
                        content : 'В отличие от сервисов метрики и аналитики этими сервисами пользуются разработчики, чтобы в случае ошибки на сайте узнать о ней. Сервисы следят почти за всеми действиями пользователя чтобы сообщение об ошибке было максимально полное. Чаще всего если их отключить ничего не сломается.В отличие от сервисов метрики и аналитики этими сервисами пользуются разработчики, чтобы в случае ошибки на сайте узнать о ней. Сервисы следят почти за всеми действиями пользователя чтобы сообщение об ошибке было максимально полное. Чаще всего если их отключить ничего не сломается.В отличие от сервисов метрики и аналитики этими сервисами пользуются разработчики, чтобы в случае ошибки на сайте узнать о ней. Сервисы следят почти за всеми действиями пользователя чтобы сообщение об ошибке было максимально полное. Чаще всего если их отключить ничего не сломается.В отличие от сервисов метрики и аналитики этими сервисами пользуются разработчики, чтобы в случае ошибки на сайте узнать о ней. Сервисы следят почти за всеми действиями пользователя чтобы сообщение об ошибке было максимально полное. Чаще всего если их отключить ничего не сломается.В отличие от сервисов метрики и аналитики этими сервисами пользуются разработчики, чтобы в случае ошибки на сайте узнать о ней. Сервисы следят почти за всеми действиями пользователя чтобы сообщение об ошибке было максимально полное. Чаще всего если их отключить ничего не сломается.В отличие от сервисов метрики и аналитики этими сервисами пользуются разработчики, чтобы в случае ошибки на сайте узнать о ней. Сервисы следят почти за всеми действиями пользователя чтобы сообщение об ошибке было максимально полное. Чаще всего если их отключить ничего не сломается.'
                    }
                ]
            });
        },
        styleCr: () => { 
            //создание элемента style в head и его наполнение
            createStyles( styleModuleObj ); 
        },
    });

    //добавление класса activ для сворачивания блока
    clickHidingCcontent({
        el: 'input[type="checkbox"]#AdLock:not(.check__activity)'
    });

    SERVER({
        domenNameCheck: [{ 
            domen:  /pagead2.googlesyndication.com/,
            funCheck: () => { 
                checkBlock({
                    el: ['div.google-Ads .adsbygoogle'], 
                    navEl: '.content_type .check__activity.google-Ads',
                    type: 'true'
                })
            }
        },
        { 
            domen: /.yandex.ru/,
            funCheck: () => { 
                checkBlock({
                    el: ['div.yandex-Ads [id^="yandex"]'], 
                    navEl: '.content_type .check__activity.yandex-Ads',
                    type: 'true'
                })
            }
        },
        { 
            domen: /www.google-analytics.com/, 
            funCheck: () => {
                checkBlock({
                    el: ['div.yandex-anal'], 
                    navEl: '.analyst_type .check__activity.google-anal',
                    type: 'true'
                })
            }
        },
        { 
            domen: /static.hotjar.com/, 
            funCheck: () => {
                checkBlock({
                    el: ['div.hotjar-anal'], 
                    navEl: '.analyst_type .check__activity.hotjar-anal',
                    type: 'true'
                })
            }
        },
        { 
            domen: /.cloudfront.net/, 
            funCheck: () => {
                checkBlock({
                    el: ['div.yandex-anal'], 
                    navEl: '.analyst_type .check__activity.yandex-anal',
                    type: 'true'
                })
            }
        }]
    });

    checkBlock({
        el: ['div.google-Ads .adsbygoogle'], 
        navEl: '.content_type .check__activity.google-Ads',
        check: 'anal'
    });

    checkBlock({
        el: ['div.yandex-Ads [id^="yandex"]'], 
        navEl: '.content_type .check__activity.yandex-Ads',
        check: 'anal'
    });
    //проверка на скрытие рекламного блока .banner_static
    checkBlock({
        el: ['div.banner_static div.banner'], 
        navEl: '.banner_type .check__activity.banner_static',
    });
    //проверка на скрытие рекламного блока .banner_dynamic
    checkBlock({
        el: ['div.banner_dynamic div.banner'], 
        navEl: '.banner_type .check__activity.banner_dynamic',
    });
    //проверка на скрытие рекламного блока .banner_disclosure
    checkBlock({
        el: ['div.banner_disclosure div.banner'], 
        navEl: '.banner_type .check__activity.banner_disclosure',
    });
    //проверка на скрытие рекламного блока .banner_detect
    checkBlock({
        el: ['div.banner_detect div.banner'], 
        navEl: '.banner_type .check__activity.banner_detect',
        detectCheck: '#openModal',
        visCheck: ['.banner_detect div[class^="content"],.banner_detect p[class^="content"]'],
    });

    //проверка на изменение в дом дереве и вызов функции проверки
    checkMutation('body', () => {

        checkBlock({
            el: ['div.banner_static div.banner'], 
            navEl: '.banner_type .check__activity.banner_static',
        }); 
        checkBlock({
            el: ['div.banner_dynamic div.banner'], 
            navEl: '.banner_type .check__activity.banner_dynamic',
        })
        checkBlock({
            el: ['div.banner_disclosure div.banner'], 
            navEl: '.banner_type .check__activity.banner_disclosure',
        });
        checkBlock({
            el: ['div.banner_detect div.banner'], 
            navEl: '.banner_type .check__activity.banner_detect',
            detectCheck: '#openModal',
            visCheck: ['.banner_detect div[class^="content"],.banner_detect p[class^="content"]'],
        });

        checkBlockGrade({
            check: 'label[for="AdLock__check"] > h3',
            change: '.check-block__grade-dynamic'
        });
    });  
};