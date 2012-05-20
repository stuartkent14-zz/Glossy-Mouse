
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
        $(settings.selector).css({'position':'relative','overflow':'hidden'})
            /* creating DIV element to make the gloss animation */
            .append('<div class="glosser"></div>').find("img").css({'position':'absolute','top':0,'left':0, 'z-index':5});
        // preparing CSS for gloss div
        $(".glosser").css({'position':'absolute','left':'-450px','top':0,'z-index':10,'opacity':1,'width':'450px','height':'500px','background':'url('+settings.image+') 0 0 repeat'});
        _ie6fix();
    }
    
    /**
     * Add hover, onClick actions on the element to make it gloss.
     */
    function _addActions(){
	$(settings.selector).mousemove(
                /* */
		function (e){ glsr = $(this).find(".glosser");
			      glsr.stop().css({'left':(parseInt(e.pageX - this.offsetLeft -450*.46)) +"px", 'opacity':1, 'display':'block'}).fadeOut(1050);
		});
	$(settings.selector).mouseleave(
                /* */
	)
	$(settings.selector).mousedown(
                /* */
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
