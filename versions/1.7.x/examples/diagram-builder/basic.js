AUI().ready(
  'aui-diagram-builder',
  function(A) {
    var availableFields = [
      {
        iconClass: 'aui-diagram-node-task-icon',
        label: 'Task',
        type: 'task'
      }
    ];

    var diagramBuilder = new A.DiagramBuilder (
      {
        availableFields: availableFields,
        boundingBox: '#diagram-builder-bb',
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
        render: true,
        srcNode: '#diagram-builder-sn'
      }
    );

    diagramBuilder.connectAll(
      [
        {
          connector: {
            name: 'TaskConnector'
          },
          source: 'StartNode',
          target: 'EndNode'
        }
      ]
    );
  }
);