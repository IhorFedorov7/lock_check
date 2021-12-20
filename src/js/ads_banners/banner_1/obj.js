const styleModuleObjAdsOne = {
    '.info-ads__modal' : [
        'z-index: 100;',
        'opacity: 1;',
        'margin: auto;',
        'padding: 0;',
        'display: flex;',
        'align-items: center;',
        'justify-content: center;',
        'max-width: 424px;',
        'height: 100%;',
    ],  
    '.info-ads__banner-left' : [
        'width: 100%;',
        'background: #ED1C5B;', 
        'display: flex;',
        'align-items: center;',
        'justify-content: space-between;',
    ],
    '.info-ads__banner-text' : [
        'width: 100%;',
    ],
    '.info-ads__banner-text > h2, .info-ads__banner-text > p' : [
        'width: 80%;',
        'margin: 0 auto;',
        'color: #fff;',
    ],
    '.info-ads__banner-text > h2' : [
        'font-weight: var(--font-w-800);',
        'font-size: 24px;',
    ],
    '.info-ads__banner-block' : [
        'content: "";',
        'display: block;',
        'border-bottom: 64px solid #fff;', 
        'border-left: 32px solid transparent;',
        'right: 0;',
        'top: 0;',
        'bottom: 0;',
        'background: #ED1C5B;',
    ],
    '.info-ads__banner-right' : [
        'display: flex;',
        'align-items: center;',
        'width: 65%;',
        'height: 100%;',
        'background: #fff;',
        'padding: 8px;'
    ],
    '.info-ads__banner-right buttom' : [
        'display: flex;',
        'align-items: center;',
        'justify-content: center;',
        'background: #0386FF;',
        'height: 50%;',
        'padding: 8px 24px;',
        'border-radius: calc(var(--input-border-rad) / 3);',
    ],
    '.btn' : [
        'color: var(--color-white);',
        'font-size: 24px;',
        'font-weight: calc(var(--font-w) * 7);',
        'filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));',
    ],
    'max-width: 762px' : {
        '.info-ads__modal' : [
            'flex-direction: column;',
            'height: 100%;',
            'min-width: 232px;', 
            'max-width: 232px;',
        ],
        '.info-ads__banner-left' : [ 
            'flex-direction: column;',
            'justify-content: center;',
            'width: 100%;',
        ],
        '.info-ads__banner-text > h2, .info-ads__banner-text > p' : [ 
            'width: 80%;',
            'margin: 20px auto;',
            'color: #fff;',
        ],
        '.info-ads__banner-block' : [
            'border-right: 232px solid #fff;',
            'border-top: 20px solid transparent;' ,
            'border-bottom: 0;',
            'border-left: 0;',
        ],
        '.info-ads__banner-right' : [ 
            'width: 100%;',
            'padding: 0',
        ],
        '.btn' : [
            'margin: 8px auto;',
        ]
      }
};

export  { styleModuleObjAdsOne };