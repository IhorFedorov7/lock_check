const checkBlockGrade = ( option ) => {

    const elCheck = option.check;
    const elDynamic = option.change;
    const elText = option.text;
    const elCheckDom = document.querySelectorAll(elCheck);
    const elDynamicColor = document.querySelector(elDynamic);
    const elDynamicText = document.querySelector(elText);
    let lengthNotAcriv = 0;
    let count = 0;
    let grade = 0;

    elCheckDom.forEach( key => {
            
        lengthNotAcriv++;
        if ( key.classList.contains('activ') ) {
            count ++;
        }
    });
    
    grade = Math.round(( 100 / lengthNotAcriv ) * count );

    elDynamicColor.textContent = grade;
    
    if ( grade <= 20 ) {

        if ( elDynamicColor.classList[1] ) {
            
            elDynamicColor.style.background = 'var(--color-dark-red)';
        } else {

            if (elDynamicText.textContent === 'Your ad blocker is insufficient') {

                return;
                
            } else {
                elDynamicColor.style.color = 'var(--color-dark-red)';
                elDynamicText.innerHTML = 'Your ad blocker is insufficient';
            }
        }
    };

    if ( grade > 20 && grade < 90 ) {

        if ( elDynamicColor.classList[1] ) {
            
            elDynamicColor.style.background = 'var(--color-orango)';
        } else {
        
            if (elDynamicText.textContent === 'It definitely can be better') {

                return;
            } else {

                elDynamicColor.style.color = 'var(--color-orango)';
                elDynamicText.innerHTML = 'It definitely can be better';
            }
        }
    };

    if ( grade >= 90 ) {

        if ( elDynamicColor.classList[1] ) {
            
            elDynamicColor.style.background = 'var(--color-dark-green)';
        } else {

            if (elDynamicText.textContent === 'The score is above average, good results') {

                return;

            } else {
                elDynamicColor.style.color = 'var(--color-dark-green)';
                elDynamicText.innerHTML = 'The score is above average, good results';
            }
        }
    };    
}

export default checkBlockGrade;

