/**/
define(function () {
	return {
		key: 'lvl2',
		title: 'Basics: Object and Array (list) Manipulation',
		description: 'This exercise is about using objects and properties, and arrays and their methods. You can check w3schools for some brush up on Javascript <a href="http://www.w3schools.com/js/js_objects.asp" target="_blank">objects</a> or <a href="http://www.w3schools.com/js/js_arrays.asp" target="_blank">arrays</a>.',
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
				key: 'medium1',
				instruction: 'Object properties can be nested indefinitely. For instance, obj.val1 can be its own object with a val8 attribute that you can access with obj.val1.val8. Now you have an object named "car", that has an attribute named "seats", that has an attribute named "cover", that has an attribute named "type", make the function return the type of the cover of the seat of the car.',
				input: [{seats: {cover: {type: 'asdf'}}}],
				output: "asdf",
				init: 'var myFunction = function (car) {\n    \n};',
				hint: 'As a reminder, the val1 property of the obj object can be accessed with obj.val1 or obj[\'val1\'].'
			},
			{
				key: 'medium2',
				instruction: 'Now your function takes an array as an argument and returns its length, using the length property of the array.',
				input: [[1,2,3,4,5,6,7]],
				output: 7,
				init: 'var myFunction = function (myList) {\n    \n};',
				hint: 'As a reminder, the length property of the array object can be accessed with myList.length.'
			},
			{
				key: 'medium3',
				instruction: 'Excellent! For the final question of this exercise, let\'s have the function return the distance of an element "elem" of the "myList" array to the end of the array. For instance if elem is 3 and mylist is [2, 3, 4, 5] then the function should return 2, but if myList is [1, 2, 3] then it should return 0. If the element is in the list several times, we will only care about its first occurence, and we don\'t care about the element not being is the list. You can use the indexOf method of a list as follow: [\'a\', \'b\'].indexOf(\'b\') returns 1.',
				input: [[1,2,3,4,5,6,7], 4],
				output: 3,
				init: 'var myFunction = function (myList, elem) {\n    \n};',
				hint: 'Use indexOf to find the first occurence of the element and compare to the length of the array.'
			},
		]
	};
});

