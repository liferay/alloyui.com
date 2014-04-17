YUI().use(
  'aui-toolbar',
  function(Y) {
    new Y.Toolbar(
      {
        boundingBox: '#myToolbar',
        children: [
          [
            {
              icon: 'icon-camera'
            },
            {
              icon: 'icon-print'
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
              icon: 'icon-bold'
            },
            {
              icon: 'icon-italic'
            },
            {
              icon: 'icon-font'
            }
          ],
          [
            'radio',
            {
              icon: 'icon-align-left'
            },
            {
              icon: 'icon-align-center'
            },
            {
              icon: 'icon-align-right'
            },
            {
              icon: 'icon-align-justify'
            }
          ]
        ]
      }
    ).render();
  }
);