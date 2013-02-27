YUI().use(
  'aui-tree-view',
  function(Y) {
    new Y.TreeViewDD(
      {
        boundingBox: '#myTreeView',
        children: [
          {
            children: [
              {label: 'Watermelon', type: 'check', leaf: true},
              {label: 'Apricot', type: 'check', leaf: true},
              {label: 'Pineapple', type: 'check', leaf: true},
              {label: 'Kiwi', type: 'check', leaf: true},
              {label: 'Orange', type: 'check', leaf: true},
              {label: 'Pomegranate', type: 'check', leaf: true}
            ],
            expanded: true,
            label: 'Checkboxes'
          },
          {
            children: [
              {label: 'Watermelon', type: 'radio', leaf: true},
              {label: 'Apricot', type: 'radio', leaf: true},
              {label: 'Pineapple', type: 'radio', leaf: true},
              {label: 'Kiwi', type: 'radio', leaf: true},
              {label: 'Orange', type: 'radio', leaf: true},
              {label: 'Pomegranate', type: 'radio', leaf: true}
            ],
            expanded: true,
            label: 'Radio'
          },
          {
            children: [
              {label: 'Watermelon', type: 'task', leaf: true},
              {label: 'Apricot', type: 'task', leaf: true},
              {label: 'Pineapple', type: 'task', leaf: true},
              {label: 'Kiwi', type: 'task', leaf: true},
              {label: 'Orange', type: 'task', leaf: true},
              {label: 'Pomegranate', type: 'task', leaf: true}
            ]
            expanded: true,
            label: 'Task',
            type: 'task'
          }
        ]
      }
    ).render();
  }
);