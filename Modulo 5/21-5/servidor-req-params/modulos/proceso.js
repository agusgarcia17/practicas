exports.signo = function(m,d){

	let day = parseInt(d);

	if(isNan(day)){
		return "Ingrese un dia valido";
	}

	switch(m){

		case '1': 
			if( day >= 20){

				return "Acuario";
			
			}else{

				return "Capricornio";
			}

		break;

		case '2': 
			if( day > 21){

				return "";
			
			}else{

				return "";
			}

		break;

	}

}