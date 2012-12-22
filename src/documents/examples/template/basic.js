AUI().use('aui-template', function(A) {
  var objects = [
    { key: 'AUI', value: 'AlloyUI', auth: 'Designed by Liferay' },
    { key: 'JQ', value: 'jQuery', auth: 'Designed by Team jQuery' },
    { key: 'JS', value: 'Javascript', auth: 'Designed by Brendan Eich' },
    { key: 'YUI', value: 'YahooUI', auth: 'Designed by Yahoo!' }
  ]

  tpl = new A.Template.from('#myTemplate');

  A.one("#render").on('click', function(event) {
      tpl.render(objects, '#myTemplate');
  });
});