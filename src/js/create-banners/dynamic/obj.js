const styleObj = {
    '.block_dynamic>.top-banner' : [
        'position: absolute;',
        'width: var(--width-percent);',
        'top: calc(var(--width-percent) - 90%);',
        'z-index: 100;',
        'display: block;',
        
    ],
    '.top-banner_content' : [
        'width: var(--width-percent);',
        'height: var(--width-percent);',
        'margin: auto;'
    ],
    '.top-banner_img' : [
        'width: var(--width-percent);',
        'height: var(--width-percent);'
    ],
    'max-width: 820px' : {
        '.top-banner' : [
            'top: var(--width-percent) - 70%;'
        ],
        '.top-banner_content' : [
            'width: var(--width-percent);'
        ]
    },
}

export  { styleObj };