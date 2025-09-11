(function($){
 $.fn.slider_simple=function(o){ 
        
        var getObject = {
            prevBtn:$('#prevBtn'),
            nextBtn:$('#nextBtn'),
            //getObject.currRate
           }
        $.extend(getObject, o); 
        
		var _this = $(this),
			thumbHolder = $(">.slider_set", _this),
			thumbLength = $(">.slider_set>li", _this).length,
			thumbItems = $(">.slider_set>li", _this),
			thumbWidth = $(">.slider_set>li", _this).width(),
			thumbHeight = $(">.slider_set>li", _this).height(),
			thumbArr = [],
			animateState = false,
            _currItem = 0,
            _prevItem = 0;

   
        var MSIE = ($.browser.msie) && ($.browser.version <= 8);
         
/////////////////////////////INIT///////////////////////////////////
		init();
		function init(){
            $("> .slider_set", _this).css({'width':'100%', 'height':'100%', 'display':'inline-block', 'overflow': 'hidden', 'position':'relative'})
            $("> .slider_set > li", _this).css({'width':'100%', 'height':'100%', 'display':'inline-block', 'overflow': 'hidden', 'position':'absolute', 'z-index': '1'})

			$("> .slider_set > li", _this).each(function(_index){
			     $(this).css({top:thumbHeight})
			     thumbArr.push($(this));
			})
            $("> .slider_set > li", _this).eq(0).css({top:0});
            
           addButonsEventHandler();
		}//end init

//////////////////////////addButonsEventHandler/////////////////////////////////////
		function addButonsEventHandler(){
	       getObject.prevBtn.click(
                function(){
                    if(!animateState){
                        animateState = true;
                        if(_currItem>0){
                            _prevItem = _currItem;
                            _currItem--;
                        }else{
                            _prevItem = _currItem;
                            _currItem = thumbLength-1;  
                        }
                        currItemHandler();
                    }
                   //  return false;
                }
           )
           getObject.nextBtn.click(
                function(){
                    if(!animateState){
                        animateState = true;
                       if(_currItem<thumbLength-1){
                            _prevItem = _currItem;
                            _currItem++;
                        }else{
                            _prevItem = _currItem;
                            _currItem = 0;  
                        }
                        currItemHandler();  
                    }
                  //  return false;
                }
           )
           
           return false;
		}//end addEvent
////////////////////////////////////////////////////////////////////////////////////////////////      
		function currItemHandler(){
                
                $("> .slider_set > li", _this).eq(_currItem).stop().animate({top:0}, 800, 'easeInOutCubic');
                $("> .slider_set > li", _this).eq(_prevItem).stop().animate({top:-thumbHeight}, 800, 'easeInOutCubic', function(){
                    $("> .slider_set > li", _this).eq(_prevItem).css({top:thumbHeight});
                    animateState = false;
                } );
    	}   
////////////////////////////////////////////////////////////////////////////////////////////              
	}
})(jQuery)