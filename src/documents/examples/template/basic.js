AUI().use('aui-template', function(A) {
  var projects = [
    {
      abbreviation: 'AUI',
      name: 'AlloyUI',
      designer: 'Liferay'
    },
    {
      abbreviation: 'JQ',
      name: 'jQuery',
      designer: 'Team jQuery'
    },
    {
      abbreviation: 'JS',
      name: 'Javascript',
      designer: 'Brendan Eich'
    },
    {
      abbreviation: 'YUI',
      name: 'YahooUI',
      designer: 'Yahoo!'
    }
  ];

  var tpl = new A.Template.from('#myTemplate');

  A.one("#render").on('click', function(event) {
      tpl.render(projects, '#myTemplate');
  });
});