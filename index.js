$(function (){
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
      outputStr = 'x = ' + root1.toFixed(3);
    } else if (a == 0) {
      root1 = -1*(c/b);
      outputStr = 'x = ' + root1.toFixed(3);
    } else if (checkFrom >= 0) {
      root1 = (-b+Math.sqrt(checkFrom))/(2*a);
      root2 = (-b+Math.sqrt(checkFrom))/(2*a);
      if (root1 != root2) {
        outputStr = 'x = ' + root1.toFixed(3) + ' or x = ' + root2.toFixed(3);
      } else {
        outputStr = 'x = ' + root1.toFixed(3) + '(multiple root)'
      }
    } else {
      outputStr = 'Has no root!';
    }
    $('#rootWarp').html(function (index,html) {
      return outputStr;
    });
  }, 10);
});
