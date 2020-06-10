$(function(){
    var $mainMenuItems = $("#main-menu ul").children("li"), 
        totaleMainMenuItems = $mainMenuItems.length,
        openedIndex = 2,

        init = function(){
            bindEvents();

            if(validIndex(openedIndex))
                animateItem($mainMenuItems.eq(openedIndex), true, 250);
            
           
        };
            bindEvents =function(){
                $mainMenuItems.children(".images").click(function(){

                    var newIndex = $(this).parent().index();   // this : l'instance particulière sur laquelle je serais le moment où cett fnct executera 
                    checkinBox(newIndex);
                        
                });
                $(".button").hover(                      
                function(){
                    $(this).addClass("hovered");   //mouseenter
                },
                function(){
                    $(this).removeClass("hovered") //mouseleave
                }    
                );
                $(".button").click(function(){
                    var newIndex =$(this).index();
                    checkinBox(newIndex);
                })
            };

            validIndex = function(indexToCheck){
                return (indexToCheck >= 0) && (indexToCheck <totaleMainMenuItems);
        
            };
            animateItem = function($item, toOpen, speed){
                var $colorImage = $item.find(".color");
                var itemParam = toOpen ? {width : "420px"}: {width : "140px"}
                var colorImagesParam = toOpen ? {left: "0px"}: {left: "140px"}
                // Expression ? Valeur 1 : valeur 2
                $colorImage.animate(colorImagesParam, speed); 
                $item.animate(itemParam, speed);    

            };
            checkinBox = function(indexToCheck){
                if(openedIndex === indexToCheck)
                {
                    animateItem($mainMenuItems.eq(indexToCheck), false, 250);
                    openedIndex = -1;
                }
                else 
                {
                    if(validIndex(indexToCheck))
                    {
                        animateItem($mainMenuItems.eq(openedIndex), false, 250)
                        openedIndex =indexToCheck;
                        animateItem($mainMenuItems.eq(openedIndex), true, 250);
                    }
                }
            }
        
        init();

});