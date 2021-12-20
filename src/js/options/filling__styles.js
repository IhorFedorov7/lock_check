import getElement from './create-el';

const createStyles = ( obj ) => {
    const style = getElement( 'style', { class: ['styles'], } );
    const arrStyle = Object.entries( obj );
    //style.textContent = '@import "../../style/root.css" all;';

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
}

export default createStyles;