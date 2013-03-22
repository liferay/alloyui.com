YUI().use('aui-toolbar', function (Y) {
  new Y.Toolbar({
    boundingBox: '#myToolbar',
    children: [[{
      icon: 'aui-icon-camera'
    }, {
      icon: 'aui-icon-print'
    }], [
      'radio', {
      label: '1'
    }, {
      label: '2'
    }, {
      label: '3'
    }], [
      'checkbox', {
      icon: 'aui-icon-bold'
    }, {
      icon: 'aui-icon-italic'
    }, {
      icon: 'aui-icon-font'
    }], [
      'radio', {
      icon: 'aui-icon-align-left'
    }, {
      icon: 'aui-icon-align-center'
    }, {
      icon: 'aui-icon-align-right'
    }, {
      icon: 'aui-icon-align-justify'
    }]]
  }).render();
});