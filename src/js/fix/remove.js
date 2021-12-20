const removeEl = (elem) => {
    const el = document.querySelectorAll(elem);
    
    el.forEach( i => {
        
        i.style.setProperty("display","none",'important');
    })
};

export default removeEl;