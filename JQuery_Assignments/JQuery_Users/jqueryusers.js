$(document).ready(function(){
  $('form').submit(function(){
    var $table = "<tr><td>" + $('input[name="first_name"]').val() + "</td>" +
    "<td>" + $('input[name="last_name"]').val() + "</td>" +
    "<td>" + $('input[name="email"]').val() + "</td>" +
    "<td>" + $('input[name="phone"]').val() + "</td>" + "</tr>";

    $('tbody').append($table);
    return false;
  });
});
