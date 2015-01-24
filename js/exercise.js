/*globals require */
define(['jquery', 'js/round'], function ($, Round) {

	return function (exercise, dom) {

		// init
		var self = this;
		this.exo = exercise;
		if (!this.exo.rounds || !this.exo.rounds.length) {
			console.error('This exercise has no rounds in it.');
			return;
		}

		this.init = function () {
			self.instructions = dom.find('#magikode-instructions .panel-body');
			self.render();
			self.loadNext();
		};

		this.render = function () {
			self.instructions.html('');
			$('<h3>' + self.exo.title + ' [<span class="magikode-round-number"></span>]</h3>').appendTo(
				self.instructions
			);
			$('<h5>' + self.exo.description + '</h5>').appendTo(self.instructions);
			$('<div id="magikode-round" />').appendTo(self.instructions);
		};

		this.firstRemainingRound = function () {
			for (var i = 0; i < self.exo.rounds.length; i ++) {
				if (!localStorage.getItem('magikode:' + self.exo.key + ':' + self.exo.rounds[i].key)) {
					return i;
				}
			}
			return null;
		};

		this.loadNext = function () {
			var round = self.firstRemainingRound();
			round = round || 0;
			self.instructions.find('.magikode-round-number').text(round + 1);
			round = self.exo.rounds[round];
			self.myRound = new Round(self.exo, round, dom);
			self.myRound.init();

		};

	};

});
