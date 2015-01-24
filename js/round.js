/*globals require */
define(['jquery', 'codemirror/lib/codemirror', 'codemirror/mode/javascript/javascript'], function ($, CodeMirror) {
	
	return function (exercise, round, dom) {

		// init
		var self = this;
		this.exo = exercise;
		this.round = round;

		this.instructions = dom.find('#magikode-round');
		this.work = dom.find('#magikode-work .panel-body');

		this.defaultVal = 'var myFunction = function () {\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n}';

		this.init = function () {
			self.render();
		};

		this.display = function (success, display) {
			self.work.find('#magikode-result-message').remove();
			$('<div id="magikode-result-message" class="alert alert-' +
				(success ? 'success' : 'danger') + ' alert-dismissible" role="alert">' +
				'<button type="button" class="close" data-dismiss="alert">' +
				'<span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>' +
				(success ? 'Correct!' : 'Nope!') + '</strong>' + display + '</div>'
			).prependTo(self.work);	
		};

		this.testResult = function () {
			eval(self.cm.getValue());
			if (myFunction.apply(null, self.round.input) == self.round.output) {
				localStorage.setItem('magikode:' + self.exo.key + ':' + self.round.key, 'done');
				dom.trigger('round:completed');
				self.display(true, 'Congrats, this function works! Next!');
			} else {
				self.display(false, 'Not quite right yet, keep trying!');
			}
		};

		this.render = function () {
			self.instructions.text(self.round.instruction);
			self.work.find('#magikode-codarea-wrapper').remove();
			self.area = $(
				'<div id="magikode-codarea-wrapper"><textarea id="magikode-codarea" /></div>'
			).appendTo(self.work).find('textarea');
			
			self.area.val(self.round.init || self.defaultVal);
			self.cm = CodeMirror.fromTextArea(self.area[0], {
				lineNumbers: true,
				mode: "javascript",
				indentUnit: 4,
			});
			self.work.find('#magikode-done').remove();
			$(
				'<div id="magikode-done" class="btn btn-success">All done!</div>'
			).insertBefore(self.area).click(self.testResult);
		};
	};

});
