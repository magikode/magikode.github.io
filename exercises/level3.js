/**/
define(function () {
	return {
		title: 'Basics: Strings',
		description: 'This section is about basic string manipulation and methods. You can refer to <a href="http://www.w3schools.com/js/js_string_methods.asp" target="_blank">w3schools</a> for string methods or simple <a href="http://www.w3schools.com/js/js_strings.asp" target="_blank">string brushup</a>.',
		achievement: {
			key: 'lvl3',
			title: 'Apprentice',
			image: '/badges/lvl3.png',
			description: 'You\'re starting to learn some magic. Nothing too impressive yet, but some magic nonetheless... You are a magician apprentice!'
		},
		rounds: [
			{
				key: 'basic1',
				instruction: 'Let\'s start simple, this function takes two strings as an argument and concatenates them using the + operator.',
				input: ['abc', 'qwe'],
				output: 'abcqwe',
				init: 'var myFunction = function (s1, s2) {\n\n};',
				hint: 'Concatenating strings is like adding one after the other.'
			},
			{
				key: 'basic2',
				instruction: 'Something more useful now: your function takes an object representing a user, and must generate a greeting string as follow: the "prefix", the "firstName", and then the "lastName", separated by a space.',
				input: [{prefix: 'a', firstName: 'b', lastName: 'c'}],
				output: 'a b c',
				init: 'var exampleObj = {\n    prefix: "Mrs",\n    firstName: "Mary",\n    lastName: "Smith"\n};\n\nvar myFunction = function (obj) {\n\n};',
				hint: '"a" + " " + "b" = "a b"'
			},
			{
				key: 'basic3',
				instruction: 'You\'re getting good at this. Now let\'s make a function that takes a string and returns the number of characters in the string using the length attribute of the string.',
				input: ['abcqwertgfds'],
				output: 12,
				init: 'var myFunction = function (s) {\n\n};',
				hint: 'Don\'t overthing this, it\'s just about returning the length attr. of the string.'
			}
		]
	};
});

