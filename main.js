/**/
require(['jquery', 'exercises/loader', 'codemirror/lib/codemirror', 'codemirror/mode/javascript/javascript', 'bootstrap'], function ($, Exercises, CodeMirror) {

	var workspace = $('#magikode-workspace');
	if (!workspace.length) {
		console.error('No workspace found, please have a div with the "magikode-workspace" id on your page');
		return;
	}

	var header = $(
		'<div id="magikode-header" class="jumbotron"><div class="magikode-welcome">Welcome to <span class="magikode-logo">Magikode</span></div></div>'
	).appendTo(workspace);
	var instructions = $(
		'<div class="panel panel-default" id="magikode-instructions">' +
		'<div class="panel-heading">Instructions</div><div class="panel-body">' +
		'</div></div>'
	).appendTo(workspace).find('.panel-body');
	var work = $(
		'<div class="panel panel-default" id="magikode-work"><div class="panel-heading">' +
		'You\'re Up</div><div class="panel-body"></div></div>'
	).appendTo(workspace).find('.panel-body');
	$('<span>Code your function in the box below.<br /> Remember to name it "myFunction" and click the "All done!" button when ready.</span>').prependTo(work);
	
	
	var defaultVal = 'var myFunction = function () {\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n}';
	var cm;
	
	var display = function (success, display) {
		$('#magikode-result-message').remove();
		$('<div id="magikode-result-message" class="alert alert-' + (success ? 'success' : 'danger') + ' alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>' + (success ? 'Correct!' : 'Nope!') + '</strong>' + display + '</div>').prependTo(work);
	};

	var roundLoad = function (round, exo) {
		instructions.find($('#magikode-round')).text(round.instruction);
		$('#magikode-codarea-wrapper').remove();
		var area = $(
			'<div id="magikode-codarea-wrapper"><textarea id="magikode-codarea" /></div>'
		).appendTo(work).find('textarea');
		area.val(round.init || defaultVal);
		cm = CodeMirror.fromTextArea(area[0], {
			lineNumbers: true,
			mode: "javascript",
			indentUnit: 4,
		});
		$('#magikode-done').remove();
		$('<div id="magikode-done" class="btn btn-success">All done!</div>').insertBefore(area).click(function () {
			eval(cm.getValue());
			if (myFunction.apply(null, round.input) == round.output) {
				localStorage.setItem(exo.key + ':' + round.key, 'done');
				makeSelection();
				display(true, 'Congrats, this function works! Next!');
				if (exo.rounds.indexOf(round) === exo.rounds.length - 1) {
					if (Exercises.indexOf(exo) === Exercises.length - 1) {
						exoLoad(Exercises[0]);
					} else {
						exoLoad(Exercises[Exercises.indexOf(exo) + 1]);
					} 
				} else {
					exoLoad(exo);
				}
			} else {
				display(false, 'Not quite right yet, keep trying!');
			}
		});
	};

	var exoLoad = function (exo, justChecking) {
		if (!exo.rounds || !exo.rounds.length) {
			console.error('This exercise has no rounds in it.');
			return;
		}
		instructions.html('');
		var round;
		var fround = firstRemainingRound(exo);
		var nfround = fround || 0;
		round = exo.rounds[nfround];
		$('<h3>' + exo.title + ' [' + (nfround + 1) + ']</h3>').appendTo(instructions);
		$('<h5>' + exo.description + '</h5>').appendTo(instructions);
		$('<div id="magikode-round" />').appendTo(instructions);
		if (!justChecking) {
			roundLoad(round, exo);
			return;
		}
		if (fround === null) {
			return 'done';
		} else {
			if (fround === 0) {
				return 'new';
			} else {
				return 'partial';
			}
		}
	};

	var firstRemainingRound = function (exo) {
		for (var i = 0; i < exo.rounds.length; i ++) {
			if (!localStorage.getItem(exo.key + ':' + exo.rounds[i].key)) {
				return i;
			}
		}
		return null;
	};

	var makeSelection = function () {
		$('#magikode-selection').remove();
		var exoselection = $('<div id="magikode-selection" class="btn-group"><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Exercise Selection <span class="caret"></span></button><ul class="dropdown-menu" role="menu"></ul></div>').prependTo(header);

		$.each(Exercises, function (index, exo) {
			var stat = exoLoad(exo, true);
			var exostat = '';
			if (stat !== 'new') {
				exostat = '<span class="glyphicon ' + ((stat === 'done') ? 'glyphicon-ok-circle' : 'glyphicon-pencil') + '"></span>';
			}
			$('<li><a href="javascript:false;">' + exo.title + exostat + '</a></li>').appendTo(exoselection.find('ul')).click(function () {
				exoLoad(exo);
			});
		});
	};
	makeSelection();
	$.each(Exercises, function (index, exo) {
		if (exoLoad(exo, true) !== 'done') {
			exoLoad(exo);
			return false;
		}
	});



});
