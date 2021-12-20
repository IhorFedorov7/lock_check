const scrolling = ( option ) => {
    const el = option.el;
    const speed = option.speed;
    const links = document.querySelectorAll(el);

    links.forEach(link => {

        link.addEventListener('click', function (e) {
            
            e.preventDefault();
            
            const heightTop = Math.round( document.body.scrollTop || document.documentElement.scrollTop );
            const hash = this.hash;
            const toBlock = ( document.querySelector(hash).getBoundingClientRect().top - 40 );
            let start = null;

            requestAnimationFrame(step);

            function step(time) {
                if ( start === null ) {
                    
                    start = time;
                }

                const progress = time - start;
                const calculate = (
                    toBlock < 0 ? 
                    Math.max(Math.round(heightTop - (progress / speed)), heightTop + toBlock ) : 
                    Math.min(Math.round(heightTop + (progress / speed)), heightTop + toBlock )    
                );

                if ( calculate != heightTop + toBlock ) {

                    requestAnimationFrame(step); 
                } else {

                    location.hash = hash;
                }

                document.documentElement.scrollTo(0, calculate);
            };
        });
    });
}

export default scrolling;