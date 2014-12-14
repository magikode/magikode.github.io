/**/
define(function () {
	return {
		key: 'lvl2',
		title: 'Object manipulation',
		description: 'This exercise is about using objects and properties. For some brush up on Javascript objects, you can check <a href="http://www.w3schools.com/js/js_objects.asp" target="_blank">http://www.w3schools.com/js/js_objects.asp</a>',
		rounds: [
			{
				key: 'basic1',
				instruction: 'This first function only takes one object as an argument. This object has a property named "val1" and one named "val2". The function returns val1 + val2. Change it to return val1 * val2.',
				input: [{val1: 3, val2: 3}],
				output: 9,
				init: 'var myFunction = function (obj) {\n    return obj.val1 + obj.val2;\n};',
				hint: 'There is nothing to do! Just click "All Done!"'
			},
		]
	};
});

