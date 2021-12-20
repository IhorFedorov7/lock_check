const addingBlock = (obj) => {
    const arr = Object.entries(obj);

    arr.forEach( key => {
        let name = key[1].name;
        let id = key[1].id;
        let info = key[1].info;
        let className = key[1].class;
        let obj = key[1].block;

        document.querySelector('.app').innerHTML += `
            <section class="content-block__background">
                <div class="content-block__container width">
                    <div class="accordion__block">
                        <div id="${id}" class="content-block__switch">
                            <h2>${name}</h2>
                            <div class="content-block__dynamic ${className}">
                            </div>
                        </div>
                        <div class="content-block__description">
                            <p class="indent">
                                ${info}
                            </p>
                        </div>
                    </div>
                    <div class="content-block__type ${className}">
                    </div>
                </div>
            </section>
        `;

        document.querySelector('.block-content__app').innerHTML += `
            <div class="block-content__navigation-text">
                <a href="#${id}">
                    <h2 class="block-content__navigation-name">
                        ${name}
                    </h2>
                </a>
                <div class="content-block__nav-info ${className}">
    
                </div>        
            </div>
        `;
        
        obj.forEach( i => {
            let tyle = i.type;
            let act = i.act;
            let classType = i.class;
            let templateRight = '';
            let templateLeft = '';

            const create = () => {

                act.forEach(acts => {

                    templateRight += `
                        <div class="content-block__examination-info">
                            <div class="checkbox">
                                <div class="adLock__check check__activity ${ classType == undefined ? '' : classType }">
                                </div>
                                <div class="label-check__activity">
                                    <h3 id="${name}">${acts}</h3>
                                </div>
                            </div>
                        </div>
                    `;

                    templateLeft += `
                        <div class="content-block__checkbox">
                            <div class="adLock__check check-nav__activity ${ classType == undefined ? '' : classType }">
                            </div>
                        </div>
                    `;
                });
            };

            create();
            
            document.querySelector(`.content-block__type.${className}`).innerHTML += `
                <div class="content-block__examination ${className}">
                    <div class="content-block__examination-switch">
                        <h3 id="${classType}">${tyle}</h3>
                    </div>
                    <div class="content-block__examination-content-ads ${ classType == undefined ? '' : classType }">
                    </div>
                    <div class="content-block__verstecken">
                        ${ templateRight }
                    </div>
                </div>
            `
            document.querySelector(`.content-block__nav-info.${className}`).innerHTML +=  
            `
            <div class="content-block__nav-check">
                <div class="content-block__nav-activity">
                    <a href="#${classType}">
                        <h3>${tyle}</h3>
                    </a>
                </div>
                <div class="content-block__activity-info ${className}">
                    ${templateLeft}
                </div>
            </div>
            ` 
        });
    });
};

export default addingBlock;