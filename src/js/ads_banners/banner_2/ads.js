const bannersAds_two = ( option ) => {
    const elem = option.el;

    const bannerIn = document.querySelector(elem);

    bannerIn.innerHTML += `
        <div class="modal__ads-block">
            <div class="modal__ads-dialog">
                <div class="modal__ads-content">
                    <div class="modal__ads-header">
                        <h3 class="modal__ads-title">Banner ads</h3>
                        <a href="#close" title="Close" class="close">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1847 14.9991L7.71436 9.52879L2.25761 14.9855L0.456741 13.1847L5.9135 7.72792L0.456741 2.27116L2.27115 0.456758L7.72791 5.91352L13.1847 0.456758L14.9855 2.25762L9.52877 7.71438L14.9991 13.1847L13.1847 14.9991Z" fill="#E5E5E5"/>
                            </svg>
                        </a>
                    </div>
                    <div class="modal__ads-body">    
                        <h2>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae</h2>
                    </div>
                    <div class="modal__ads-footer">
                        <buttom class="btn">BUY NOW</buttom>
                    </div>
                </div>
            </div>
        </div>
    `
};

export default bannersAds_two;