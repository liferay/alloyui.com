YUI().use('aui-io-request', 'node', function (Y) {
  // create a new asynchonous request to grab all states
  Y.io.request('http://alloyui.com/io/data/states.json', {
    dataType: 'json',
    on: {
      success: function () {
        // gets the result of this asynchronous request
        var data = this.get('responseData');

        states = data.states;

        // iterates on all states to create a new <option> on that <select>
        for (var i = 0; i < states.length; i++) {
          Y.one('#state').append('<option value="' + states[i].code + '">' + states[i].name + '</option>');
        }
      }
    }
  });

  Y.one('#state').on('change', function () {
    var cityCode = this.get('value');

    if (cityCode !== '') {
      // creates a new asynchronous request to grab the cities corresponding to that state
      Y.io.request('http://alloyui.com/io/data/' + cityCode + '.json', {
        dataType: 'json',
        on: {
          success: function () {
            // gets the result of this asynchronous request
            var data = this.get('responseData');

            var cities = data.cities;

            var options = '';

            // iterates on all states to create a new <option> on that <select>
            for (var i = 0; i < cities.length; i++) {
              options += '<option value="' + cities[i].name + '">' + cities[i].name + '</option>';
            }

            Y.one('#city').setHTML(options);
          }
        }
      });
    }
  });
});