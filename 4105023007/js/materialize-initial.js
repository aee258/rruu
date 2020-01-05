$(document).ready(function(){
 
  // Init Sidenav
  $('.sidenav').sidenav({
    edge: 'left',
    induration:300,
   preventScrolling: false
   
  });

    $('.carousel').carousel({
        // 設定寬度 100%
    fullWidth: true,
    // 顯示下方控制圓點
    indicators: true,
   
    });



 
  //material box
  
    $('.materialboxed').materialbox({
      onOpenEnd: function () {
        // 印出該元件
        console.log($(this)[0])
      }
    });
    
 






  })
  

     
    

  
        
