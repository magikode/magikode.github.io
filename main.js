/**/
require(['jquery', 'exercises/loader', 'js/exercise', 'js/round', 'js/achievement', 'text!templates/main.html', 'bootstrap'], function ($, Exercises, Exercise, Round, Achievement, Template) {

	var workspace = $('#magikode-workspace');
	if (!workspace.length) {
		console.error('No workspace found, please have a div with the "magikode-workspace" id on your page');
		return;
	}
	workspace.html(Template);

	var makeSelection = function () {
		var self = this;
		$('#magikode-selection').remove();
		var exoselection = $('<div id="magikode-selection" class="btn-group"><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Exercise Selection <span class="caret"></span></button><ul class="dropdown-menu" role="menu"></ul></div>').prependTo('#magikode-header');
		var needOne = true;
		$.each(Exercises, function (index, exo) {
			var ex = new Exercise(exo, workspace);
			var acv = new Achievement(ex, workspace);
			if (acv.qualify()) {
				acv.reward();
			}
			var next = ex.firstRemainingRound();
			var stat = next === null ? 'done' : (next && 'partial' || 'new');
			var exostat = '';
			if (stat !== 'done' && needOne) {
				needOne = false;
				ex.init();
			}
			if (stat !== 'new') {
				exostat = '<span class="glyphicon ' + ((stat === 'done') ? 'glyphicon-ok-circle' : 'glyphicon-pencil') + '"></span>';
			}
			$('<li><a href="javascript:false;">' + exo.title + exostat + '</a></li>').appendTo(exoselection.find('ul')).click(function () {
				ex.init();
			});
		});
	};

	makeSelection();
	workspace.on('round:completed', makeSelection);

});
