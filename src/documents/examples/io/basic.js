AUI().use('io', function (A) {

  // Make an HTTP request to this URI.
  var request = A.io("assets/content.html");

  // Subscribe to event "io:complete" and define an event handler "complete".
  A.on('io:complete', complete);

  // Define a function to handle the response data.
  function complete(id, out, args) {
      var data = out.responseText;
      alert(data);
  }

});