	var shuffle = function ( array ) {

		for ( var i = array.length - 1 ; i > 0 ; i-- ) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
    	}

    	return array;
	}

	var map = function ( array , callback ){

		for ( var i = 0 ; i < array.length ; i++ ){

			array[i] = callback(array[i])
		}

		return array;

	}

	var filter = function ( array , callback ) {
		tempArr = []

		for ( var i = 0 ; i < array.length ; i++ ){
			if ( callback(array[i]) ) {
				tempArr.push(array[i])
			}
		}

		return tempArr;

	}

	//test condition function
	var tester = function ( element ) {
		if (element > 5) {
			return true;
		}else{
			return false;
		}
	}

	var Fullslack = {
		VERSION: "1.0",
		shuffle: shuffle,
		filter: filter,
		map: map
	};

	var list = [1,2,3,4,5];
	console.log(Fullslack.shuffle(list));
	console.log(Fullslack.VERSION);
	console.log(Fullslack.filter(list,tester));
	console.log(Fullslack.map(list,Math.sqrt))
