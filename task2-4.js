let options = {
	width:  400,
	height: 500,
};

// let с;
// if (options.с !== undefined) {
// 	с = options.color;
// } else {
// 	с = 'black';
// }

// let w = options.width;
// let h = options.height;

let {color: c="blue", width, height} = options;

console.log(c);
console.log(width);
console.log(height);