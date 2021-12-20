const bannersAds_one = ( option ) => {
    const elem = option.el;

    const bannerIn = document.querySelector(elem);

    bannerIn.innerHTML += `
        <div class="info-ads__modal">
            <div class="info-ads__banner-left">
                <div class="info-ads__banner-text">
                    <h2>Buy our thing!</h2>
                    <p>We know you need it!</p>
                </div>
                <div class="info-ads__banner-block"></div>
            </div>
            <div class="info-ads__banner-right">
                <buttom class="btn">BUY NOW</buttom>
            </div>
        </div>
    `
};

export default bannersAds_one;