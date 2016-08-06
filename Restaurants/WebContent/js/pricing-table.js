$(function() {

	function setHeightToDataTop(){

		$(".pt-container").each(function() {

			var listItems = [];
			var listItemsHeight = [];
			$(this).find(".pt-inner:first > li:not(.pt-ribbon)").each(function() {
				listItems.push($(this).attr('class'));
				listItemsHeight.push($(this).outerHeight(true));
			});

			var topHeight = 0;
			for (var i=0; i<listItems.length; i++) {
				if(listItems[i] === 'pt-body'){
					break;
				}
				topHeight += listItemsHeight[i];
			}

			var topOffset = 0;
			topOffset = $(this).find('.pt-inner:first').outerHeight(true) - $(this).find('.pt-inner:first').innerHeight();
			if(topOffset >= 2){
				topOffset /= 2;
			}else{
				topOffset = -1;
			}

			$(this).find('.pt-data-inner').css('margin-top',topHeight+topOffset);

		});

	}

	$( window ).resize(function() {
		setHeightToDataTop();
	});

	setHeightToDataTop();

});