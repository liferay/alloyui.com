AUI().ready('aui-diagram-builder', function(A) {

  var availableFields = [
    {
      type: 'task',
      label: 'Task',
      iconClass: 'aui-diagram-node-task-icon'
    }
  ];

  var diagramBuilder = new A.DiagramBuilder ({

    availableFields: availableFields,
    boundingBox: '#diagram-builder-bb',
    srcNode: '#diagram-builder-sn',
    fields: [
      {
        name: 'StartNode',
        type: 'start',
        xy: [10, 10]
      },
      {
        name: 'EndNode',
        type: 'end',
        xy: [300, 400]
      }
    ],
    render: true
    });

  diagramBuilder.connectAll([
    {
    connector: {
        name: 'TaskConnector'
      },
      source: 'StartNode',
      target: 'EndNode'
    }
  ]);

});