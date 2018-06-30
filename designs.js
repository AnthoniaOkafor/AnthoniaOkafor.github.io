// Select color input
// Select size input

var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
  event.preventDefault();
  //height
  height = $('#inputHeight').val();
  //width
  width = $('#inputWeight').val();
  makeGrid(height,width);
  //console.log('Height: '+height+' and width: '+ width);

})


function makeGrid(height, width) {
    //clear table
    $('tr').remove();

    // Your code goes here!
    //for loop for height and width
    for (var i = 1; i <= height; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j <= width; j++) {
            $('#table' + i).append('<td></td>');
        }
    }

    //add color to cell
    $('td').click(function addColor() {
       color = $('#colorPicker').val();
       if ($(this).attr('style')) {
          $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
