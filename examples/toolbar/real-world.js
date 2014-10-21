YUI().use(
  'aui-toolbar',
  function(Y) {
    new Y.Toolbar(
      {
        boundingBox: '#myToolbar',
        children: [
          [
            {
              icon: 'glyphicon glyphicon-camera'
            },
            {
              icon: 'glyphicon glyphicon-print'
            }
          ],
          [
            'radio',
            {
              label: '1'
            },
            {
              label: '2'
            },
            {
              label: '3'
            }
          ],
          [
            'checkbox',
            {
              icon: 'glyphicon glyphicon-bold'
            },
            {
              icon: 'glyphicon glyphicon-italic'
            },
            {
              icon: 'glyphicon glyphicon-font'
            }
          ],
          [
            'radio',
            {
              icon: 'glyphicon glyphicon-align-left'
            },
            {
              icon: 'glyphicon glyphicon-align-center'
            },
            {
              icon: 'glyphicon glyphicon-align-right'
            },
            {
              icon: 'glyphicon glyphicon-align-justify'
            }
          ]
        ]
      }
    ).render();
  }
);