var main = function() {
    $('.icon-menu').click(function(){
        $('.menu').animate({ 
            left: '0px'
        }, 200);
        
        $('.icon-menu').animate({
              left: "285px"
            }, 200);
          });
    
    $('.icon-closed').click(function(){
        $('.menu').animate({
            left: '-285px'
        }, 200);
        
        $('.icon-menu').animate({
              left: "0px"
            }, 200);
          });
        };

$(document).ready(main);