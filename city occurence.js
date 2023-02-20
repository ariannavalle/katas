cities= ['San Fernando','Puyehue','Cisnes','San Fernando','Roboré']

function cityCount (citiesArray) {
	return citiesArray.reduce(function(obj, elem) {
		if (elem in obj)
			obj[elem]++;
		else
			obj[elem] = 1;
		return obj;
	}, {});
}

console.log(cityCount(cities));
