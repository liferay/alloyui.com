AUI().ready('aui-io-request', function(A) {

    var demoNode = A.one('#demo');
    var cache = A.one('#cache');
    var dataType = A.one('#dataType');
    var method = A.one('#method');

    var log = function(msg) {
      demoNode.append(msg + '<br/>');
    };

    YUI.AUI.namespace('defaults.io').uriFormatter = function(v) {
      // set a default formatter for the URI parameter
      return v;
    };

    var io = A.io.request('data/content.json', {

        autoLoad: false,
        // arguments: {
        //  customData: 1234
        // },
        // dataType: 'text',
        // dataType: 'html',
        // dataType: 'json',
        // dataType: 'xml',
        cache: false,
        // sync: true,
        // method: 'post',
        // form: {
        //  id: 'form'
        // },
        // headers: {
        //  newRequestHeader: 123
        // },
        // selector: '.text-item',
        on: {
          start: function(event, id) {
            log('-');
            log(this.get('uri'));
            log('start');
            // console.log('start', arguments);
            // event.halt();
          },
          success: function(event, id, xhr) {
            // console.log( this.get('transaction') );
            // console.log( this.get('responseData') );
            // event.halt();
            var data = this.get('responseData');
            var out = (dataType.val() == 'json') ? A.JSON.stringify(data) : data;
            alert(data);

            log('success: ' + out);
          },
          complete: function(event, id, xhr) {
            log('complete');
          },
          failure: function(event, id, xhr) {
            log('failure');
          },
          end: function(event, id) {
            log('end');
          }
        },
        after: {
          start: function() {
            log('after start');
          }
        }
      }
    );

    // io.set('uri', 'data/content.json');
    // io.start();

    // Extras

    var startConnection = A.one('#startConnection');
    var stopConnection = A.one('#stopConnection');

    startConnection.on('click',
      function(event) {
        io.set('cache', cache.get('checked'));
        io.set('method', method.val());
        io.set('dataType', dataType.val());
        io.set('uri', 'data/content.' + dataType.val());

        io.start();
      }
    );

    stopConnection.on('click',
      function(event) {
        io.stop();
      }
    );
  }
);