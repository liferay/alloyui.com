YUI().use(
  'aui-tree-view',
  function(Y) {
    new Y.TreeViewDD(
      {
        boundingBox: '#myTreeView',
        children: [
          {
            children: [
              {label: 'Watermelon', leaf: true, type: 'check'},
              {label: 'Apricot', leaf: true, type: 'check'},
              {label: 'Pineapple', leaf: true, type: 'check'},
              {label: 'Kiwi', leaf: true, type: 'check'},
              {label: 'Orange', leaf: true, type: 'check'},
              {label: 'Pomegranate', leaf: true, type: 'check'}
            ],
            expanded: true,
            label: 'Checkboxes'
          },
          {
            children: [
              {label: 'Watermelon', leaf: true, type: 'radio'},
              {label: 'Apricot', leaf: true, type: 'radio'},
              {label: 'Pineapple', leaf: true, type: 'radio'},
              {label: 'Kiwi', leaf: true, type: 'radio'},
              {label: 'Orange', leaf: true, type: 'radio'},
              {label: 'Pomegranate', leaf: true, type: 'radio'}
            ],
            expanded: true,
            label: 'Radio'
          },
          {
            children: [
              {label: 'Watermelon', leaf: true, type: 'task'},
              {label: 'Apricot', leaf: true, type: 'task'},
              {label: 'Pineapple', leaf: true,  type: 'task'},
              {label: 'Kiwi', leaf: true, type: 'task'},
              {label: 'Orange', leaf: true, type: 'task'},
              {label: 'Pomegranate', leaf: true,  type: 'task'}
            ],
            expanded: true,
            label: 'Task',
            type: 'task'
          }
        ]
      }
    ).render();
  }
);