AUI().ready('aui-io-request', 'node', function(A) {

  // create a new asynchonous request to grab all states
  var stateRequest = A.io.request('data/states.json', {

    dataType: 'json',
    on: {
      success: function() {

        // gets the result of this asynchonous request
        var data = this.get('responseData'),
            states = data.states;

        // interates on all states to create a new <option> on that <select>
        for (i = 0; i < states.length; i++) {
          A.one('#state').append('<option value="' + states[i].code + '">' + states[i].name + '</option>');
        }

      }
    }

  });

  A.one('#state').on('change', function() {

      var cityCode = this.val();

      if (cityCode !== '') {

        // create a new asynchonous request to grab the correspondent cities of that state
        cityRequest = A.io.request('data/' + cityCode + '.json', {

          dataType: 'json',
          on: {
            success: function() {

              // gets the result of this asynchonous request
              var data = this.get('responseData'),
                  cities = data.cities,
                  options = '';

              // interates on all states to create a new <option> on that <select>
              for (i = 0; i < cities.length; i++) {
                options += '<option value="' + cities[i].name + '">' + cities[i].name + '</option>';
              }

              A.one('#city').setHTML(options);

            }
          }

        });

      }

  });

});