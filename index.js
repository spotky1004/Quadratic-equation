$(function (){
  aBef = 0;
  bBef = 0;
  cBef = 0;

  $('input').keypress(function (event) {
    if (event.which && (event.which <= 47 || event.which >= 58) && event.which != 8) {
      event.preventDefault();
    }
  });
  setInterval( function (){
    a = Number($('input#const3').val());
    b = Number($('input#const2').val());
    c = Number($('input#const1').val());
    checkFrom = (b**2)-(4*a*c);
    if (a == 0 && b == 0 && c == 0) {
      root1 = 0;
      outputStr = 'x = ' + root1.toFixed(5);
    } else if (a == 0) {
      if (b != 0) {
        root1 = -1*(c/b);
        outputStr = 'x = ' + root1.toFixed(5);
      } else {
        root1 = 0;
        outputStr = 'x = ' + root1.toFixed(5);
      }
    } else if (checkFrom >= 0) {
      root1 = (-b+Math.sqrt(checkFrom))/(2*a);
      root2 = (-b-Math.sqrt(checkFrom))/(2*a);
      if (root1 != root2) {
        outputStr = 'x = ' + root1.toFixed(5) + ' or x = ' + root2.toFixed(5);
      } else {
        outputStr = 'x = ' + root1.toFixed(5) + '(multiple root)'
      }
    } else {
      rootc = (-b)/(2*a);
      rooti = Math.sqrt(Math.abs(checkFrom))/((2*a));
      outputStr = 'x = ' + rootc.toFixed(5) + '+' + rooti.toFixed(5) + 'i or x = ' + rootc.toFixed(5) + (-rooti).toFixed(5) + 'i';
    }
    $('#rootWarp').html(function (index,html) {
      return outputStr;
    });
    if (aBef != a || bBef != b || cBef != c) {
      $('#rootWarp').removeClass('pulse');
      setTimeout( function (){
        $('#rootWarp').addClass('pulse');
      }, 10);
    }
    aBef = a;
    bBef = b;
    cBef = c;
  }, 10);
});
