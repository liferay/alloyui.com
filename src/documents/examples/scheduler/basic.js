YUI().use(
  'aui-scheduler',
  function(Y) {
    var events = [
      {
        content: 'Event1',
        endDate: new Date(2013, 1, 4, 5),
        startDate: new Date(2013, 1, 4, 1)
      }
    ];

    var eventRecorder = new Y.SchedulerEventRecorder();
    var weekView = new Y.SchedulerWeekView();

    new Y.Scheduler(
      {
        boundingBox: '#myScheduler',
        date: new Date(2013, 1, 4),
        eventRecorder: eventRecorder,
        items: events,
        render: true,
        views: [weekView]
      }
    );
  }
);