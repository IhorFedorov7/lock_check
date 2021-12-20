import getElement from '../options/create-el';

export default (( console ) => {

        const getBlock = ( option ) => {
            let width = option.w;
            let height = option.h;

            return {
                string: '+',
                style: `font-size: 1px; padding: ${Math.floor(height/2)}px ${Math.floor(width/2)}px;`
            }
        };

        console.img = ( option ) => {
            let url = option.url;
            let scale = option.scale || 1;
            let img = getElement('img', {
                attr: {
                    src: url
                }
            });

            img.onload = function () {
                
                let el = getBlock({
                    w: this.width * scale, 
                    h: this.height * scale
                });

            console.log("%c" + el.string, el.style + "background: url(" + url + "); background-size: " + this.width * scale + "px" + this.height * scale + "px; color: transparent;");
            };
        };

    })( console );