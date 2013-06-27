// Create an AUI instance and load the 'aui-node' module
YUI().use(
  'aui-node',
  function(Y) {
    var lastJobNumber = 1;
    var newJobNumber = 2;
    var job = '<div class="job added">' +
      '<h5>Previous job: </h5>' +
      '<label for="position2">Position: </label>' +
      '<input type="text" id="position2"><br>' +
      '<label for="employer2">Employer: </label>' +
      '<input type="text" id="employer2"><br>' +
      '<label for="dateRange">Dates of Employment: </label>' +
      '<input type="text" id="dateRange"><br>' +
    '</div>';

    Y.one('#addJob').on(
      'click',
      function() {
        // Create a new Job node and give it an appropriate ID
        var newJob = Y.Node.create(job);
        newJob.attr('id', 'job' + newJobNumber);

        // Place the node in its spot in the DOM and populate it
        var lastJob = '#job' + lastJobNumber;
        Y.one(lastJob).placeAfter(newJob);

        // Increment the values in case another job is added
        lastJobNumber++;
        newJobNumber++;
      }
    );

    Y.one('#reset').on(
      'click',
      function() {
        // Reset the original number of fields when "Reset" is pressed
        Y.all('#jobForm .added').remove(true);

        lastJobNumber = 1;
        newJobNumber = 2;
      }
    );
  }
);