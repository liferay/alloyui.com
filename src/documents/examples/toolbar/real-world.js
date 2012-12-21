AUI().ready('aui-toolbar', function(A) {
  var content = A.one('#toolbar');
  var logLabel = function(event) {
    content.append('<p>You clicked ' + this.get('label')+'</p>');
  }

  var toolbar = new A.Toolbar(
    {
      activeState: false,
      children: [
        {handler: logLabel, icon: 'plus', label: 'Add'},
        {handler: logLabel, icon: 'minus', label: 'Remove'},
        {handler: logLabel, icon: 'gear', label: 'Config'},
        {handler: logLabel, icon: 'calendar', label: 'Schedule'},
        {handler: logLabel, icon: 'search', label: 'Review'},
        {handler: logLabel, icon: 'heart', label: 'Donate'}
      ]
    }
  ).render(content);
});