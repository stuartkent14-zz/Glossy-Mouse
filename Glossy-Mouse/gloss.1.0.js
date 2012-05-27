
$.gloss = function (options){
    // Default settings.
    var settings = {
	/* Setting the class or ID of element(s) as a selector for jquery
	Use class when you have more than 1 element
	*/
	selector: '.gloss',
            image: 'images/gloss.png', /* PNG file location */
            speed: 0 /* animation in milliseconds */
    };
    // Exteding options
    settings = $.extend(settings, options);
    
    /**
     * IE 6 transparency PNG fix
     */
    function _ie6fix(){
        // fixing the PNG transparency
        if($.browser.msie && $.browser.version=="6.0"){
            $(".glosser").css({'background':'none','filter':'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\''+settings.image+'\',sizingMethod=\'scale\')'});
        }
    }
    /**
     * This function applies CSS for container and inside elements.
     */
    function _css(){
        // Preparing CSS for selector elements
        var width;
        var height;
        $(settings.selector).css({'position':'relative','overflow':'hidden'})
          /* creating DIV element to make the gloss animation */
          .append('<div class="glosser"></div>');
          width  = 500*truncate($(settings.selector).width()/500);
          height  = 500*truncate($(settings.selector).height()/500);
        // preparing CSS for gloss div
        $(".glosser").css({'position':'absolute','left':'-450px','top':0,'z-index':10,'height':height, 'width':width,'opacity':1,'background':'url('+settings.image+') 0 0 repeat'});
        _ie6fix();
    }
    
    function truncate(_value)    {
      if (_value<0) return Math.ceil(_value);
      else return Math.floor(_value);
    }
    /**
     * Add hover, onClick actions on the element to make it gloss.
     */
    function _addActions(){
	$(settings.selector).mousemove(
                /* */
		function (e){ glsr = $(this).find(".glosser");
			      glsr.stop().css({'left':(parseInt(e.pageX - this.offsetLeft -450*.46)) +"px", 'opacity':1, 'display':'block'}).fadeOut(1050);
            //TODO send hover event to things underneath
		});
	$(settings.selector).mouseleave(
                /* */
	)
	$(settings.selector).mousedown(
            //TODO send mousedownEvent to thing underneath
            
	)
	$(settings.selector).mouseup(
                /* */
	)

	$(settings.selector).mouseenter(
                /* */
	)	
    }
    
    /**
     * The initializer for this plugin.
     */
    function _init(){
        _css();
        _addActions();
    }
    
    return _init();
    
};
