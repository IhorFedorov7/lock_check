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

export default Constructor;