AUI().use('aui-diagram-builder', function(A) {

  var availableFields = [
    {
      type: 'start',
      label: 'Start',
      iconClass: 'aui-diagram-node-start-icon'
    },
    {
      type: 'task',
      label: 'Task',
      iconClass: 'aui-diagram-node-task-icon'
    },
    {
      type: 'state',
      label: 'State',
      iconClass: 'aui-diagram-node-state-icon'
    },
    {
      type: 'join',
      label: 'Join',
      iconClass: 'aui-diagram-node-join-icon'
    },
    {
      type: 'fork',
      label: 'Fork',
      iconClass: 'aui-diagram-node-fork-icon'
    },
    {
      type: 'condition',
      label: 'Condition',
      iconClass: 'aui-diagram-node-condition-icon'
    },
    {
      type: 'end',
      label: 'End',
      iconClass: 'aui-diagram-node-end-icon'
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
        name: 'Condition',
        type: 'condition',
        xy: [260, 16]
      },
      {
        name: 'Fork',
        type: 'fork',
        xy: [183, 99]
      },
      {
        name: 'Task1',
        type: 'task',
        xy: [38, 158]
      },
      {
        name: 'Task2',
        type: 'task',
        xy: [262, 221]
      },
      {
        name: 'Join',
        type: 'join',
        xy: [99, 300]
      },
      {
        name: 'State',
        type: 'state',
        xy: [287, 377]
      },
      {
        name: 'Task3',
        type: 'task',
        xy: [100, 444]
      },
      {
        name: 'EndNode',
        type: 'end',
        xy: [326, 500]
      }
    ],
    render: true
  });

  diagramBuilder.connectAll([
    {
      connector: {
        name: 'TaskConnector1'
      },
      source: 'StartNode',
      target: 'Condition'
    },
    {
      connector: {
        name: 'TaskConnector2'
      },
      source: 'Condition',
      target: 'Fork'
    },
    {
      connector: {
        name: 'TaskConnector3'
      },
      source: 'Fork',
      target: 'Task1'
    },
    {
      connector: {
        name: 'TaskConnector4'
      },
      source: 'Fork',
      target: 'Task2'
    },
    {
      connector: {
        name: 'TaskConnector5'
      },
      source: 'Task1',
      target: 'Join'
    },
    {
      connector: {
        name: 'TaskConnector6'
      },
      source: 'Task2',
      target: 'Join'
    },
    {
      connector: {
        name: 'TaskConnector7'
      },
      source: 'Join',
      target: 'State'
    },
    {
      connector: {
        name: 'TaskConnector8'
      },
      source: 'State',
      target: 'Task3'
    },
    {
      connector: {
        name: 'TaskConnector9'
      },
      source: 'Task3',
      target: 'EndNode'
    }
  ]);

});