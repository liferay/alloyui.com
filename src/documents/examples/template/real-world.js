AUI().use('aui-template', function(A) {
  var foods = [
    {
      food: 'Carrots',
      taste: 'Yuck',
      nutr: 'B+',
      weight: 'None',
      rating: 'Low'
    },
    {
      food: 'Steak',
      taste: 'Yummy',
      nutr: 'B-',
      weight: 'Large',
      rating: 'High'
    },
    {
      food: 'Creme Brule',
      taste: 'Incremebulous',
      nutr: 'C-',
      weight: 'Extreme',
      rating: '6/5'
    },
    {
      food: 'Beets',
      taste: 'Rooty',
      nutr: 'A++',
      weight: '-5',
      rating: 'Stay Away'
    }
  ];

  var tpl = new A.Template.from('#auiScriptTPL');

  A.one("#render").on('click', function(event) {
      tpl.render(foods, '#myTemplate');
  });
});