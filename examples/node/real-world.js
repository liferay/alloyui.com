// Create an AUI instance and load the 'aui-node' module
AUI().use('aui-node', function(A) {

  var lastJobNumber = 1;
  var newJobNumber = 2;
  var job = '<div class="job added"></div>';
  var jobContent = '<h5>Previous job: </h5><label for="position2">Position: </label><input type="text" id="position2"><br><label for="employer2">Employer: </label><input type="text" id="employer2"><br><label for="dateRange">Dates of Employment: </label><input type="text" id="dateRange"><br>';

  A.one('#addJob').on('click', function() {
    // Create a new Job node and give it an appropriate ID
    var newJob = A.Node.create(job);
    newJob.attr('id', 'job' + newJobNumber);

    // Place the node in its spot in the DOM and populate it
    var lastJob = "#job" + lastJobNumber;
    A.one(lastJob).placeAfter(newJob);
    newJob.html(jobContent);

    // Increment the values in case another job is added
    lastJobNumber++;
    newJobNumber++;
  });

  A.one('#reset').on('click', function() {
    // Reset the original number of fields when "Reset" is pressed
    A.all('#jobForm .added').remove(true);
  })

});