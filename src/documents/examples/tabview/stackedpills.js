YUI().use(
  'aui-tabview',
  function(Y) {
    new Y.TabView(
      {
        children: [
          {
              label: 'Tab #1',
              content: '<br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta aspernatur beatae fuga neque cupiditate laudantium itaque pariatur deleniti tenetur modi voluptatem animi sunt eligendi nisi corporis expedita quaerat facilis.</p>'
          },
          {
              label: 'Tab #2',
              content: '<br><p>Doloremque beatae rem voluptate nulla perspiciatis atque laudantium nihil impedit molestiae fuga veritatis quibusdam nam maiores aliquid. Deserunt dolorum quas temporibus enim ex nihil nemo perspiciatis. Nisi deserunt rem id pariatur in nostrum?</p>'
          },
          {
              label: 'Tab #3',
              content: '<br><p>Aliquid ipsum asperiores alias temporibus autem impedit soluta ut id iure explicabo veritatis consectetur debitis eaque recusandae odit quas nobis maxime saepe. Incidunt amet obcaecati. Ducimus soluta unde repellat laboriosam fuga modi rem itaque!</p>'
          }
       ],
       srcNode: '#myTab',
       stacked: true,
       type: 'pills'
      }
    ).render();
  }
);