$(document).on('ready',function(){

    $('.toggle__button').click(function(){
        
        if( String($('body').css('background-color'))=='rgb(255, 255, 255)'){
            localStorage.setItem('dark-mode','true');
        }else{
            localStorage.setItem('dark-mode','false');
        }
        darkmode();
      
          
    })

   function darkmode(){
    if(localStorage.getItem('dark-mode')=='true'){
        $('.toggle__button').css('background-color', '#065171');
        $('.toggle__circle').css('left','25px');
        $('body').css('background-color', 'black');
    }else if(localStorage.getItem('dark-mode')=='false'){
        $('.toggle__button').css('background-color', 'orange');
        $('.toggle__circle').css('left','0px');
        $('body').css('background-color', 'white');
    }
   }

   darkmode();
    

})
