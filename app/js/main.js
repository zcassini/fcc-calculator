import $ from 'jquery'

var current = 0
var result = 0
var operator = ''
var lastVal = 0

$(function () {
    /*
     * this swallows backspace keys on any non-input element.
     * stops backspace -> back
     */
  var rx = /INPUT|SELECT|TEXTAREA/i

  $(document).bind('keydown keypress', function (e) {
    if (e.which === 8) { // 8 == backspace
      if (!rx.test(e.target.tagName) || e.target.disabled || e.target.readOnly) {
        e.preventDefault()
      }
    }
  })
})

$('#display').keypress(e => e.preventDefault())

// $(document).keypress(function (e) {
//   switch (e.which) {
//     case 13:
//       console.log('enter')
//       enter()
//       break
//     case 42:
//       console.log('multiply')
//       multiply()
//       break
//     case 43:
//       console.log('add')
//       add()
//       break
//     case 45:
//       console.log('subtract')
//       subtract()
//       break
//     case 47:
//       console.log('divide')
//       divide()
//       break
//     default:
//     // console.log(e.which)
//       if (/\d+|\./.test(String.fromCharCode(e.which)) === true) {
//         $('#display').val($('#display').val() + String.fromCharCode(e.keyCode))
//         $(`#${e.keyCode}`).click()
//         console.log('hi')
//         $('#plus').click(e)
//       }
//   }
// })

$(document).keydown(function (e) {
  document.getElementById('sndKeyDown').play()
  console.log(String.fromCharCode(e.which))
  switch (e.keyCode) {
  case 13:
    console.log('enter')
    $('#enter').toggleClass('press')
    break
  case 42:
    console.log('multiply')
    $('#multiply').toggleClass('press')
    break
  case 43:
    console.log('add')
    $('#plus').toggleClass('press')
    break
  case 45:
    console.log('subtract')
    $('#subtract').toggleClass('press')
    subtract()
    break
  case 47:
    $('#divide').toggleClass('press')
    console.log('divide')
    divide()
    break
  default:
    // console.log(e.which)
    if (/\d+|\./.test(String.fromCharCode(e.which)) === true) {
      $('#display').val($('#display').val() + String.fromCharCode(e.keyCode))
      $(`#${e.keyCode}`).click()
      console.log('hi')
      $('#plus').click(e)
     
    }
  }
})

$(document).keyup(function (e) {
  document.getElementById('sndKeyUp').play()
  switch (e.keyCode) {
    case 13:
      console.log('enter')
    $('#enter').toggleClass('press')
      enter()
      break
    case 42:
    $('#multiply').toggleClass('press')
      console.log('multiply')
      multiply()
      break
    case 43:
      console.log('add')
      add()
      break
    case 45:
      console.log('subtract')
      subtract()
      break
    case 47:
      console.log('divide')
      divide()
      break
    default:
     console.log(e.which)
      if (/\d+|\./.test(String.fromCharCode(e.which)) === true) {
        $('#display').val($('#display').val() + String.fromCharCode(e.keyCode))
        $(`#${e.keyCode}`).click()
        // console.log('hi')
        // $('#plus').click(e)
      }
  }
})

var numberKeys = [1,2,3,4,5,6,7,8,9,0]

for (let key of numberKeys) {
  $(`#${key}`).click(function (e) {
    $('#display').val($('#display').val() + key)
  })}

var actionKeys = ['plus', 'minus', 'divide', 'multiply', 'enter', 'clear']

for (let key of actionKeys) {
  $(`#${key}`).click(function (e) {
    $('#display').val($('#display').val() + key)
  })}

// function rtl(element)
// {
//   if(element.setSelectionRange){
//     element.setSelectionRange(0,0);
//   }
// }

function multiply () {
  operator = '*'
  process()
}

function divide () {
  operator = '/'
  process()
}

function add () {
  operator = '+'
  process()
}

function subtract () {
  operator = '-'
  process()
}

function process () {
  lastVal = $('#display').val()
  cleardisplay()
}

function cleardisplay () {
  $('#display').val('')
}

function enter () {
  var currentVal = $('#display').val()
  result = eval(`${currentVal} ${operator} ${lastVal}`)
  console.log ( result )
  $('#display').val(result)
}

function playSound () {
  document.getElementById('audio').play()
}
