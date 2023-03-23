// When the element with id="addItemButton" is clicked,
var i = 2;
/*$('#addItemButton').click(function() {

    // Append the stuff in brackets to the element with id="myList"
     $('#myList').append('<li>' + $('#myText').val() + '</li>');

    // ^ The stuff in brackets is an li code with the value of the HTML
    // element with id="myText", your input field above.
    // Now to post it to a server, we'll need to use AJAX.
    // Luckily, jQuery has an AJAX function. It looks like this:

    $.ajax('http://example.com/mysaver.php', {

        // We're POSTing stuff to the server.
        method: 'post',

        // This is the data to send to the server.
        // It is a JSON object. 
        // If using PHP, you'll get $_POST['item'] = whatever is in id="myText"
        data: {
            item: $('#myText').val()
        },

        // If the AJAX request was successful,
        success: function(data) {
            // The argument 'data' contains whatever the server returned. 
        },

        // If not,
        error: function(jqXHR) {
            // Handle your error here.
        }
    });

});
*/
function addCode() {
    document.getElementById("add_after_me").insertAdjacentHTML("afterend", "<h3>This is the text which has been inserted by JS</h3>");
}