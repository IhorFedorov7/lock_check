const styleModuleObjAdsTwe = {
    '.modal__ads-block' : [
        'background: var(--input-rbg);',
        'z-index: 100;',
        'opacity: 1;',
        '-webkit-transition: opacity 200ms ease-in;',
        '-moz-transition: opacity 200ms ease-in;',
        'transition: opacity 200ms ease-in;',
        'pointer-events: auto;',
    ],
    '.modal__ads-dialog' : [
        'width: 50%;',
        'margin: auto;',
        'padding: var(--px-16);',
    ],
    '.modal__ads-content' : [
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
        'border-radius: calc(var(--input-border-rad) / 2);',
        'outline: 0;',
        'margin: auto;',
        'box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);'
    ],
    '.modal__ads-header' : [
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
        'padding: 16px 24px;',
    ],
    '.modal__ads-title' : [
        'margin-top: 0;',
        'margin-bottom: 0;',
        'line-height: 1.5;',
        'font-size: 26px;',
        'font-weight: calc(var(--font-w) * 7);',
        'color: var(--color-black)!important;'
    ],
    '.modal__ads-footer' : [
        'display: flex;',
        'align-items: center;',
        'justify-content: center;',
        'margin-bottom: 16px;',
    ],
    '.modal__ads-footer buttom' : [
        'display: flex;',
        'align-items: center;',
        'justify-content: center;',
        'background: #0386FF;',
        'height: var(--width-percent);',
        'width: 80%;',
        'padding: 10px;',
        'border-radius: calc(var(--input-border-rad) / 2);',
    ],    
    '.btn' : [
        'color: var(--color-white);',
        'font-size: 24px;',
        'font-weight: calc(var(--font-w) * 7);',
    ],
    '.close' : [
        'float: right;',
        'font-family: sans-serif;',
        'font-size: 24px;',
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
    '.modal__ads-body' : [
        '-webkit-box-flex: 1;',
        '-webkit-flex: 1 1 auto;',
        ' -ms-flex: 1 1 auto;',
        'flex: 1 1 auto;',
        'padding: 10px 24px;',
        'padding-top: 0;',
        'overflow: auto;',
        'color: var(--color-black)!important;',
        'font-size: 24px;'
    ],
    '.modal__ads-body > h2' : [
        'font-weight: calc(var(--font-w) * 4);',
        'font-size: 16px;',
        'margin: 0;'
    ],
    'min-width: 768px' : {
        '.modal__ads-content' : [
            '-webkit-box-shadow: var(--input-shadow);',
            'box-shadow: var(--input-shadow);',
            'height: var( --width-percent);'
        ]
    },
    'max-width: 820px' : {
        '.modal__ads-dialog' : [
            'width: 70%;',
            'margin: 4% auto;',
            'top: 30%;'
        ]
    },
    'max-width: 660px' : {
        '.modal__ads-dialog' : [
            'width: 80%;',
            'margin: auto;',
            'top: calc(var( --width-percent) - 60%);'
        ]
    }
};

export  { styleModuleObjAdsTwe };