/**/
define(function () {
	return {
		key: 'lvl1',
		title: 'Function Basics',
		description: 'In this first exercise, we will focus on the basic understanding of a javascript function. At any time during this exercise, feel free to read and use the w3schools\' page about functions at <a href="http://www.w3schools.com/js/js_functions.asp" target="_blank">http://www.w3schools.com/js/js_functions.asp</a>.',
		rounds: [
			{
				key: 'basic1',
				instruction: 'In this first round, there is nothing to do :) Please look at the code on the right. It consists of a simple function called myFunction that always returns the value 5. Click the "All Done!" button when you\'re ready for the next round.',
				input: [],
				output: 5,
				init: 'var myFunction = function () {\n    return 5;\n};',
				hint: 'There is nothing to do! Just click "All Done!"'
			},
			{
				key: 'basic2',
				instruction: 'Still nothing to do :) Please look at the code on the right. The function now takes an argument. Arguments can be called whatever you want, and will be available as named variables inside the function. So here we accept an argument called "foobar" and totally ignore it to just return 5 again.',
				input: [],
				output: 5,
				init: 'var myFunction = function (foobar) {\n    return 5;\n};',
				hint: 'There is nothing to do! Just click "All Done!"'
			},
			{
				key: 'easy1',
				instruction: 'This function now takes a number as an argument and adds 1 to it. Change it to double the number instead of adding 1.',
				input: [5],
				output: 10,
				init: 'var myFunction = function (n) {\n    return n + 1;\n};',
				hint: 'Doubling is like multiplying by 2. Multiply in javascript is *'
			},
			{
				key: 'easy2',
				instruction: 'So far so good, now this last function takes two arguments. Complete it so it returns the sum of those two args.',
				input: [5, 2],
				output: 7,
				init: 'var myFunction = function (a, b) {\n    \n};',
				hint: 'Really? Your arguments are a and b, and you need to return a + b...'
			},
			{
				key: 'easy3',
				instruction: 'You\'re doing great! Now let\'s make the function return its second argument, ignoring the first.',
				input: [5, 2],
				output: 2,
				init: 'var myFunction = function (a, b) {\n    \n};',
				hint: 'Just because a is provided as an argument doesn\'t mean you have to use it. You use and/or return b only.'
			},
			{
				key: 'medium1',
				instruction: 'Upping the difficulty a bit. Now there are three arguments and you need to return the sum of the first two, multiplied by the third. You can\'t just do a + b * c because the * operator has precedence over the +. But you can use parentheses to change precendence. Operators inside parenthesis have precendence over operators outside.',
				input: [5, 2, 4],
				output: 28,
				init: 'var myFunction = function (a, b, c) {\n    \n};',
				hint: 'a + (b * c) makes sure the * happens before the + but not only is this already the case anyway, it\'s also not what you need to do ;)'
			}
		]
	};
});
