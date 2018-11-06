$(function (){
    $('.menu .menu_nav >  ul >  li').mouseenter(function (){
        $('.sub_menu:visible').hide();
        $(this).find('>.sub_menu').show(); 
    });
    
    isMenuHidden = true;
    $('.categorie_btn').click(function (){
        if(isMenuHidden){
           $('.menu').show();
           isMenuHidden = false;
       } 
        else{
            $('.menu').hide();
            isMenuHidden = true;
        }
    });
});