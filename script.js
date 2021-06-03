$(window).on('scroll', function (){

var elem = $('.topic');
var isAnimate = 'isAnimate';

elem.each(function () {

  var elemOffset = $(this).offset().top;
  var scrollPos = $(window).scrollTop();
  var wh = $(window).height();

  if(scrollPos > elemOffset - wh + (wh / 2) ){
    $(this).addClass(isAnimate);
  }else{
    $(this).removeClass(isAnimate);  
  }
});

});

var slideConts = document.querySelectorAll('.slideConts'); 
var slideContsRect = [];
var slideContsTop = []; 
var windowY = window.pageYOffset; 
var windowH = window.innerHeight; 
var remainder = 100; 


for (var i = 0; i < slideConts.length; i++) {
  slideContsRect.push(slideConts[i].getBoundingClientRect());
}
for (var i = 0; i < slideContsRect.length; i++) {
  slideContsTop.push(slideContsRect[i].top + windowY);
}

window.addEventListener('resize', function () {
  windowH = window.innerHeight;
});

window.addEventListener('scroll', function () {
  
  windowY = window.pageYOffset;
  
  for (var i = 0; i < slideConts.length; i++) {
    
    if(windowY > slideContsTop[i] - windowH + remainder) {
     
      slideConts[i].classList.add('show');
    } 
  }
});


$(window).scroll(function() {

  var element = $('header')
  var atBottom = ('atBottom')
  element.each(function(){
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $(this).addClass(atBottom)
    }else{
      $(this).removeClass(atBottom)
    }
  });
    
});

