/**/
define(function () {
	return {
		key: 'lvl2',
		title: 'Basics: Object Manipulation',
		description: 'This exercise is about using objects and properties. For some brush up on Javascript objects, you can check <a href="http://www.w3schools.com/js/js_objects.asp" target="_blank">http://www.w3schools.com/js/js_objects.asp</a>',
		achievement: {
			key: 'lvl2',
			title: 'Commoner',
			image: '/badges/lvl2.png',
			description: 'Is that really an achievement you ask? Not really, but it\'s better than a grass hopper :-) Keep working on those exercises to climb the achievement ladder.'
		},
		rounds: [
			{
				key: 'basic1',
				instruction: 'This first function only takes one object as an argument. This object has a property named "val1" and one named "val2". The function returns val1 + val2. Click "All Done!" when ready.',
				input: [{val1: 3, val2: 3}],
				output: 6,
				init: 'var myFunction = function (obj) {\n    return obj.val1 + obj.val2;\n};',
				hint: 'There is nothing to do! Just click "All Done!"'
			},
			{
				key: 'basic2',
				instruction: 'Same here, but let\'s return val1 * val2',
				input: [{val1: 3, val2: 3}],
				output: 9,
				init: 'var myFunction = function (obj) {\n    \n};',
				hint: 'As a reminder, the val1 property of the obj object can be accessed with obj.val1 or obj[\'val1\'].'
			},
			{
				key: 'final',
				instruction: 'Object properties can be nested indefinitely. For instance, obj.val1 can be its own object with a val8 attribute that you can access with obj.val1.val8. Now you have an object named "car", that has an attribute named "seats", that has an attribute named "cover", that has an attribute named "type", make the function return the type of the cover of the seat of the car.',
				input: [{seats: {cover: {type: 'asdf'}}}],
				output: "asdf",
				init: 'var myFunction = function (car) {\n    \n};',
				hint: 'As a reminder, the val1 property of the obj object can be accessed with obj.val1 or obj[\'val1\'].'
			}
		]
	};
});

