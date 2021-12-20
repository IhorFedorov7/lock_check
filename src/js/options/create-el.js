const getElement = ( tagName, option ) => {
	
	const classNames =  option.class;
	const attributes =  option.attr;
	const element = document.createElement( tagName );
	
	if ( classNames ) {

		element.classList.add( ...classNames );
	};

	if ( attributes ) {
		
		for ( const attribute in attributes ) {
			
			if ( element[attribute] !== undefined ) {
				
				element[attribute] = attributes[attribute];
			}
			
		};

		if ( attributes.data ) {

			const data = attributes.data;

			for ( const key in data ) {

				const elemData = element.dataset;
				elemData[key] = data[key];
			}
		};
	};

	return element;
};

export default getElement;