let options = {
	width:  400,
	height: 500,
};

// let color;
// if (options.color !== undefined) {
// 	color = options.color;
// } else {
// 	color = 'black';
// }

// let width  = options.width;
// let height = options.height;


let {color= "black", width: w, height:h } = options;

console.log(color);
console.log(w);
console.log(h);