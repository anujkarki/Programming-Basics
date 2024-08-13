//conditional statements--if

function even(num) {
  if (num % 2 == 0) console.log('The given number ' + num + ' is even');
}

even(8);

//--if else
function greeting() {
  const hour = new Date.getHours();
  if (hour > 4 && hour < 12) {
    console.log('Good Morning');
  } else {
    consolr.log('good evening');
  }
}

//--if else if
function day() {
  const date = new Date();
  if (date.getDay == 6) {
    console.log('Happy holiday');
  } else if (date.getDay == 5) {
    console.log('Happy Half Holiday');
  } else {
    console.log('Just another day');
  }
}

day();

function today() {
  switch (new Date().getDay()) {
    case 0:
      console.log('Sunday');
      break;
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    default:
      console.log('Computer in a break');
  }
}
today();

function holiday() {
  switch (new Date().getDay()) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      console.log('Today is not holiday');
      break;
    case 5:
    case 6:
      console.log('Today is Holiday');
  }
}

holiday();
