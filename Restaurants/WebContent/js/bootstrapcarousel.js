// thumbnails.carousel.js jQuery plugin
;(function(window, $, undefined) {

	var conf = {
		center: true,
		backgroundControl: false
	};

	function init(cache) {
		cache.$carouselContainer.find('ol.carousel-indicators').addClass('indicators-fix');
		cache.$thumbnailsLi.first().addClass('active-thumbnail');

		if(!conf.backgroundControl) {
			cache.$carouselContainer.find('.carousel-control').addClass('controls-background-reset');
		}
		else {
			cache.$controls.height(cache.$carouselContainer.find('.carousel-inner').height());
		}

		if(conf.center) {
			cache.$thumbnailsLi.wrapAll("<div class='center clearfix'></div>");
		}
	}

	function refreshOpacities(domEl, cache) {
		cache.$thumbnailsLi.removeClass('active-thumbnail');
		cache.$thumbnailsLi.eq($(domEl).index()).addClass('active-thumbnail');
	}	

	function bindUiActions(cache) {
		cache.$carouselContainer.on('slide.bs.carousel', function(e) {
  			refreshOpacities(e.relatedTarget, cache);
		});

		cache.$thumbnailsLi.click(function(){
			cache.$carouselContainer.carousel($(this).index());
		});
	}

	$.fn.thumbnailsCarousel = function(options) {
		conf = $.extend(conf, options);
				
		cache = {
				$carouselContainer: options.parent(),
				$thumbnailsLi: options.find('li'),
				$controls: options.parent().find('.carousel-control')
			};

		init(cache);
		bindUiActions(cache);

		return this;
	}

})(window, jQuery);