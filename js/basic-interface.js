var Thing = require('./../js/basic.js').thingModule;

$(document).ready(function() {
  $('#a-form').submit(function(event) {
    event.preventDefault();
    var input = $('#input').val();
    var simpleThing = new Thing("get started");
    var output = simpleThing.action(input);
    $('#solution').append("<li>" + output + "</li>");
    $('#solution').append("<li>" + simpleThing.aProperty + "</li>");
  });
});