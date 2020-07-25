snail = function(array) {
    //need case for empty array, find center for even nxn arrays
    var snailarr = [];
    if (array.length === 0 || array.length === 1) {
      return snailarr;
    }
    var centerx, centery;
    if (array.length % 2 !== 0) {
      centerx = (array.length - 1) / 2;
      centery = (array.length - 1) / 2;
    } else {
      centerx = array.length / 2;
      centery = (array.length / 2) - 1;
    }
    var start = 0;
    var col = 0;
    var horiz = array.length;
    var vert = array[0].length;
    
    //travelling right
    while (start !== centerx && col !== centery) {
      for (var i = col; i < horiz; i++) {
        snailarr.push([start][i]);
      }
      horiz--;
      start++;
      
      //travelling down
      for (var j = start; j < vert; j++) {
        snailarr.push([j][vert - 1]);
      }
        
      //travelling left     
      for (var k = horiz; k >= 0; k--) {
        snailarr.push([vert - 1][k]);
      }
      vert--;
      
      //travelling up
      for (var l = vert; l >= start; l--) {
        snailarr.push([l][col]);
      }
      col++;
    }
    return snailarr;
  }