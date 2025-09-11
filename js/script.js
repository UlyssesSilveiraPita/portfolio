//////////////////////// Global Vars ///////////////////////////////// 
var website_spinner,
    page_spinner;
var isSplash = true;
//////////////////////////////////////////////////////////////////////
$(document).ready(function(){
    var MSIE8 = ($.browser.msie) && ($.browser.version == 8);
	$.fn.ajaxJSSwitch({
		topMargin:330,//mandatory property for decktop
		bottomMargin:120,//mandatory property for decktop
		topMarginMobileDevices:330,//mandatory property for mobile devices
		bottomMarginMobileDevices:120,//mandatory property for mobile devices
		bodyMinHeight:900,
        delaySubMenuHide:500,
        fullHeight:false,
///////////////////// menu  ///////////////////////////		
        menuInit:function (classMenu, classSubMenu){
            classMenu.find(">li").each(function(){
                var conText = $("> a", this).find('.base_text').text();
                $("> a", this).append("<div class='_area'></div><div class='_over'></div><div class='over_text'>"+conText+"</div>"); 
                //$("> a", this).append("<div class='_area'></div><div class='_over'></div>"); 
			})
		},
		buttonOver:function (item){
                $(".base_text", item).stop(true).animate({top:'90px'}, 600, 'easeOutCubic');
                $(".over_text", item).stop(true).animate({top:'0px'}, 600, 'easeOutBack');
                $("._over", item).stop(true).animate({top:'0px'}, 600, 'easeOutCubic');
        },
		buttonOut:function (item){
                $(".base_text", item).stop(true).animate({top:'0px'}, 600, 'easeOutBack');
                $(".over_text", item).stop(true).animate({top:'-90px'}, 600, 'easeOutCubic');
                $("._over", item).stop(true).animate({top:'-90px'}, 600, 'easeOutCubic');
        },
		subMenuButtonOver:function (item){ 
		      //item.stop().animate({"color":"#00d4e6"}, 300, "easeOutCubic");
        },
		subMenuButtonOut:function (item){
		      //item.stop().animate({"color":"#374043"}, 300, "easeOutCubic");
        },
		subMenuShow:function(subMenu){
            if(MSIE8){
      				subMenu.css({"display":"block"});
      			}else{
      				subMenu.stop(true).css({"display":"block"}).animate({"opacity":"1"}, 400, "easeOutCubic");
      			}
        },
		subMenuHide:function(subMenu){
            if(MSIE8){
      				subMenu.css({"display":"none"});
      			}else{
      				subMenu.stop(true).delay(300).animate({"opacity":"0"}, 400, "easeOutCubic", function(){
      					$(this).css({"display":"none"})
      				});
      			}
        },
///////////////////// PAGE  ///////////////////////////
    pageInit:function (pages){

    },
		currPageAnimate:function (page){
		      page.css({"left":$(window).width()}).stop(true).delay(400).animate({"left":0}, 1000, "easeOutCubic");
          isSplash = false;  
          
          $('._slider').stop(true).animate({"left":-2000}, 700, "easeOutCubic");

        //  $(window).trigger('resize');         
        },
		prevPageAnimate:function (page){
		      page.stop(true).animate({"display":"block", "left":-$(window).outerWidth()*2}, 1000, "easeInCubic");
        },
		backToSplash:function (){
		      isSplash = true;  

          $('._slider').stop(true).delay(500).animate({"left":0}, 700, "easeInOutCubic");
         // $(window).trigger('resize');  
        },
		pageLoadComplete:function (){
		      //$('.pic').fancybox({'titlePosition': 'inside', 'overlayColor':'#000'}); 
          setTimeout(
            function(){
              $('.scroll1').uScroll({mousewheel:true, step:100})      
              $('.scroll2').uScroll({mousewheel:true, step:100})
            },500
          )  
		}
	});
//////////////////////  END ajaxJSSwitch  //////////////////////////////
loadersInit();
function loadersInit(){
        var opts = {
              lines: 9,
              length: 0, 
              width: 15, 
              radius: 20, 
              rotate: 0, 
              color: '#fff', 
              speed: 1.3, 
              trail: 60, 
              shadow: false,
              hwaccel: false, 
              className: 'spinner', 
              zIndex: 2e9, 
              top: 'auto', 
              left: 'auto' 
        };
        var target = $("#webSiteLoader > span");
        website_spinner = new Spinner(opts).spin();
        target.append(website_spinner.el)   
///////////////////////////////////////////////////////////////////
        var opts2 = {
              lines: 9,
              length: 0, 
              width: 14, 
              radius: 20, 
              rotate: 0, 
              color: '#fff', 
              speed: 1.3, 
              trail: 60, 
              shadow: false,
              hwaccel: false, 
              className: 'spinner', 
              zIndex: 2e9, 
              top: 'auto', 
              left: 'auto' 
        };
        var target2 = $("#pageLoader > span");
        page_spinner = new Spinner(opts2).spin();
        target2.append(page_spinner.el) 
        ///////////////////////////////////////////////////////////////////
        var opts3 = {
              lines: 9,
              length: 0, 
              width: 14, 
              radius: 20, 
              rotate: 0, 
              color: '#fff', 
              speed: 1.3, 
              trail: 60, 
              shadow: false,
              hwaccel: false, 
              className: 'spinner', 
              zIndex: 2e9, 
              top: 'auto', 
              left: 'auto' 
        };
        var target3 = $("#imgSpinner > span");
        bg_spinner = new Spinner(opts3).spin();
        target3.append(bg_spinner.el) 
}
 ////////////////////////////////////////////////////////////   
})

$(window).load(function(){	
    $("#webSiteLoader").delay(500).animate({opacity:0}, 600, "easeInCubic", function(){
        website_spinner.stop();
        $("#webSiteLoader").remove();
    });    


    $("#slider_simple1").slider_simple({
      prevBtn: $('#prevButton'),
      nextBtn: $('#nextButton')
    });
    //$('.social_list a').hoverSprite({onLoadWebSite:true})
        

    $("#bgHolder").gallerySplash({
        autoPlayState:'false',
        controlDisplay:'true',
        autoPlayTime: 12,
        alignIMG: 'top_left'
    });

    
//////////////////// Window resize ////////////////////////////
	$(window).resize(
        function(){
            resize_function();
        }
    ).trigger('resize');
    
    function resize_function(){
	   var wh = $(window).height();
        if(isSplash){

        }else{

        }          
    }
     
});