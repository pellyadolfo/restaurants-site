	// arts filter
	$(window).load(function(){'use strict';
		var $arts_selectors = $('.arts-filter >li>a');
		var $arts = $('.arts-items');
		$arts.isotope({
			itemSelector : '.arts-item',
			layoutMode : 'fitRows'
		});
		
		$arts_selectors.on('click', function(){
			$arts_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$arts.isotope({ filter: selector });
			return false;
		});
	});