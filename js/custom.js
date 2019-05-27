$(document).ready(function(){
    
    'use strict';



//    //    // adjust header height
//    
   
  
    
    var winH=$(window).height(),
        
        nav=$(".nav-bar").innerHeight();    //عشان يحسب الهوامش 
    
        
    
    $(".header .overlay,.header .intro").height(winH); 
    
   
    
    // end  header height
    
    
    
//    adjust  nav menu
    
    
    
    
    
    
    
    $(".menu ul li a").on("click",function(){
        
        
       $(".menu ul li a").removeClass("active");
        $(this).addClass("active");
        
        
        
        
        
    })
    
    
    
    //    end header  nav menu
    
    
    
    
    
//    timer
    
 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      
$(window).on('scroll', function(){
    
    var x=1;
    
    
    
    
    if($(this).scrollTop()>=2700 && x==1)
            {
                
                $('.timer').countTo();
                
                x=2;
                
                
                
                
            }
    
    
    
    

});

    
 
    
//    end timer
    
    
    
    
    
    
    
    
    
   
   
    
    
//  nav colo change
    
    
    
    
          
$(window).on('scroll', function(){
    
    
    
   
    
    
    if($(this).scrollTop()>=500)
            {
                
                    
                    $('.navbar').css("background-color","#c97922");
                
                    $(".navbar-toggler").css("color","#fff");
                    
                    
             
                
                
                
         
                
                
                
            }
    
    
    else {
        
        
        $('.navbar').css("background-color","rgba(0,0,0,0.2)");
        
        
           
         
        
        
        
        
        
        
        
    }
    
    
    
    

});

    
    
    
//    nav end
    
    
    
    

    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

});

























//start loading








$(window).on("load",function(){
    
    
// $("body").css("overflow","auto");    //      عشاان متعمليش مشكلة فى الاسكروول 
    
                                   // لكن اناا مش هستخدمهااا لانى مستخدم nice scroll 
    
    
  $(".loading .spinner").fadeOut(1000,function(){
      
      
       $(".loading").slideUp(1000,function(){ $(this).remove() })
      
      
      }) ;
      
      
      
      
      
      
     
      
      
   
    
    
});













   


    




//start loading








$(window).on("load",function(){
    
    
// $("body").css("overflow","auto");    //      عشاان متعمليش مشكلة فى الاسكروول 
    
                                   // لكن اناا مش هستخدمهااا لانى مستخدم nice scroll 
    
    
  $(".loading .sk-cube-grid").fadeOut(1000,function(){
      
      
       $(".loading").slideUp(1000,function(){ $(this).remove() })
      
      
      }) ;
      
      
      
      
      
      
     
      
      
   
    
    
});

















