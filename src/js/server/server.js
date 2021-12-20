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



    // function req( name ) {
    //     const request = new XMLHttpRequest();
    //     request.open('GET', name);
    //     request.setRequestHeader('strict-origin-when-cross-origin', 'text/javascript; charset=UTF-8');
    //     request.send();
    //     request.addEventListener('readystatechange', () => {
    //         if ( request.readyState === 4  && request.status == 200 ) {
    //             console.log(request.status);
    //         } else {
    //             // console.error(request.status);
    //         }
            
    //     })
    // }
    
    
}

export default SERVER; 


