import $ from 'jquery'
// $('html').keyup(function(e){if(e.keyCode == 8)alert('backspace trapped')})  
// Bind keydown event to this function.  Replace document with jQuery selector
// to only bind to that element.
// $(document).keydown(function(e){

//     // Use jquery's constants rather than an unintuitive magic number.
//     // $.ui.keyCode.DELETE is also available. <- See how constants are better than '46'?
//     if (e.keyCode == $.ui.keyCode.BACKSPACE) {

//         // Filters out events coming from any of the following tags so Backspace
//         // will work when typing text, but not take the page back otherwise.
//         var rx = /INPUT|SELECT|TEXTAREA/i;
//         if(!rx.test(e.target.tagName) || e.target.disabled || e.target.readOnly ){
//             e.preventDefault();
//         }

//        // Add your code here.
//      }
// });
$(function(){
    /*
     * this swallows backspace keys on any non-input element.
     * stops backspace -> back
     */
    var rx = /INPUT|SELECT|TEXTAREA/i;

    $(document).bind("keydown keypress", function(e){
        if( e.which == 8 ){ // 8 == backspace
            if(!rx.test(e.target.tagName) || e.target.disabled || e.target.readOnly ){
                e.preventDefault();
            }
        }
    });
});
$(document).keypress(function (e) {
  // e.preventDefault()
  // if (e.which == 13) {
  //   console.log('gggg')
  // }
  if (e.keyCode == 8) {
    console.log('bs') 
    e.preventDefault()
  }
  console.log(e.keyCode)
  //49-57 0-9
  // 43-47 +-*/
  // enter 13
  //c
})

$(window).on("navigate", function (event, data) {
  var direction = data.state.direction;
  if ( !! direction) {
    // alert(direction)
    console.log('dsjka,kdfkjsdahfkjasd')
  }
})
//$('#1').on('click ')

