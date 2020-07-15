$(function() {

	$(".wyswyg").each(function() {

		var $editor = $(this).find(".editor");
		$editor.trumbowyg({
			svgPath: '/assets/icons/trumbowyg.svg',
		    btns: [
		        ['viewHTML'],
		        ['undo', 'redo'], // Only supported in Blink browsers
		        ['formatting'],
		        ['strong', 'em', 'del'],
		        ['superscript', 'subscript'],
		        ['link'],
		        ['insertImage'],
		        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
		        ['unorderedList', 'orderedList'],
		        ['horizontalRule'],
		        ['removeformat'],
		        ['fullscreen']
		    ]
		});

	});

});
