const obj = {
    0: {
        name: 'Context ads',
        id: 'context_ads',
        info: `Contextual advertising is advertising that is relevant to the content of the website you visit. Traditionally, context ads are displayed by automated systems related to the content of the website based on keyword targeting.`,
        class: 'content_type',
        block: [ 
            {
                type: 'Google ads',
                act: ['Rule applied ', 'Element hides '],
                class: 'google-Ads'
            },
            {
                type: 'Yandex ads',
                act: ['Rule applied ', 'Element hides '],
                class: 'yandex-Ads'
            } 
        ]
    },
    1: {
        name: 'Banner ads',
        id: 'banners_ads',
        info: `A banner is a rectangular graphic advert, stretching across the top, bottom, or sides of a webpage. Its purpose is to promote a brand and make web surfers visit the advertiser's website. Oftentimes, banners overcover the content and are extra annoying.`,
        class: 'banner_type',
        block: [ 
            {
                type: 'Static image',
                act: ['Element hides '],
                class: 'banner_static'
            },
            {
                type: 'Dynamic image',
                act: ['Element hides '],
                class: 'banner_dynamic'
            },
            {
                type: 'Banner toggle',
                act: ['Element hides '],
                class: 'banner_disclosure'
            },
            {
                type: 'Detecting',
                act: ['Element hides ', 'Detect adblocker ', 'Content available '],
                class: 'banner_detect'
            }
        ]
    },
    2: {
        name: 'Analytics',
        id: 'analytics',
        info: `Analytics services (Google, Yandex, Hotjar, etc.) collect user data from each website visitor and send it to servers, where they can make reports and visualize the number of users, bounce rates, session durations, page views, goal completions, etc.`,
        class: 'analyst_type',
        block: [ 
            {
                type: 'Google',
                act: ['Rule applied '],
                class: 'google-analyst'
            },
            {
                type: 'Hotjar',
                act: ['Rule applied '],
                class: 'hotjar-analyst'
            },
            {
                type: 'Yandex',
                act: ['Rule applied '],
                class: 'yandex-analyst'
            }
        ]
    },
}

export { obj };