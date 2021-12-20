const checkMutation = (el, callback) => {
    const elem = document.querySelector(el);
    const observer = new MutationObserver((mutations) => {
        
        setTimeout(() => {
            
            if( Boolean(mutations) ) {
          
                return callback(mutations);
            }
        }, 500);
    });
      
    observer.observe(elem, {
        attributes: true,
        childList: true,
        subtree: true,
    });
}

export default checkMutation;