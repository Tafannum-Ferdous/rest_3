$(document).ready( function () {
  var contentArray=[];
  var index="";
  var clickedIndex="";  
  var minimumLength=$('.read-more-less').attr('data-id');
  var initialContentLength=[];
  var initialContent=[];  
  var readMore="<span class='read-more'><button>Read More</button></span>";
 
  var readLess="<span class='read-less'><button>Read Less</button></span>";  
    $('.read-toggle').each(function(){
    index = $(this).attr('data-id');  
    contentArray[index] = $(this).html();
    initialContentLength[index] = $(this).html().length;
    if(initialContentLength[index]>minimumLength) {
      initialContent[index]=$(this).html().substr(0,minimumLength);
    }else {
      initialContent[index]=$(this).html();
    } 
      $(this).html(initialContent[index]+readMore);
    //console.log(initialContent[0]);  
      
    
  });
    $(document).on('click','.read-more',function(){
      $(this).fadeOut(1000, function(){
      clickedIndex = $(this).parents('.read-toggle').attr('data-id');
      $(this).parents('.read-toggle').html(contentArray[clickedIndex]+readLess);  
      });
    });
   $(document).on('click','.read-less',function(){
      $(this).fadeOut(1000, function(){
      clickedIndex = $(this).parents('.read-toggle').attr('data-id');
      $(this).parents('.read-toggle').html(initialContent[clickedIndex]+readMore);  
      });
    }); 
  });
  