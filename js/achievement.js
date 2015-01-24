define(['jquery', 'text!templates/achievement.html'], function ($, Template) {

	return function (exercise, dom) {
		
		// init
		var self = this;
		this.exercise = exercise;
		this.exo = exercise.exo;
		this.dom = dom;

		this.qualify = function () {
			if (self.exercise.firstRemainingRound() === null) {
				if (self.exo.achievement) {
					if (!localStorage.getItem('magikode:achievement:' + self.exo.achievement.key)) {
						return true;
					}
				}
			}
			return false;
		};

		this.reward = function () {
			var acv = self.exo.achievement;
			var badge = $(Template).appendTo(self.dom);
			badge.find('.modal-title').html(acv.title);
			badge.find('.modal-body').html(
				'<img class="magikode-modal-image" src="' + acv.image + '" />' +
				'<div class="magikode-modal-description">' + acv.description + '</div>');
			badge.find('.magikode-share').click(function () {
				badge.find('.modal-body').html('No sharing implemented at that point');
			});
			badge.modal();
			localStorage.setItem('magikode:achievement:' + acv.key, 'given');
		};
	};

});
