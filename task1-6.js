function func() {
	return (new Date).getDate();
}

function funcMonth() {
	return (new Date).getMonth();
}

function funcYear() {
	return (new Date).getFullYear();
}

let arr = [,,,];
let [year = funcYear(), month = funcMonth(), day = func()] = arr;

console.log(year, month, day);  
