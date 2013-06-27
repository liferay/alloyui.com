AUI().use(
  'aui-scheduler',
  function(A) {
    var events = [
      {
        content: 'AllDay',
        endDate: new Date(2013, 1, 5, 23, 59),
        startDate: new Date(2013, 1, 5, 0)
      },
      {
        color: '#8D8',
        content: 'Colorful',
        endDate: new Date(2013, 1, 6, 6),
        startDate: new Date(2013, 1, 6, 2)
      },
      {
        content: 'MultipleDays',
        endDate: new Date(2013, 1, 8),
        startDate: new Date(2013, 1, 4)
      },
      {
        content: 'Disabled',
        disabled: true,
        endDate: new Date(2013, 1, 8, 5),
        startDate: new Date(2013, 1, 8, 1)
      },
      {
        content: 'Meeting',
        endDate: new Date(2013, 1, 7, 7),
        meeting: true,
        startDate: new Date(2013, 1, 7, 3)
      },
      {
        color: '#88D',
        content: 'Overlap',
        endDate: new Date(2013, 1, 5, 4),
        startDate: new Date(2013, 1, 5, 1)
      },
      {
        content: 'Reminder',
        endDate: new Date(2013, 1, 4, 4),
        reminder: true,
        startDate: new Date(2013, 1, 4, 0)
      }
    ];

    var dayView = new A.SchedulerDayView();
    var eventRecorder = new A.SchedulerEventRecorder();
    var monthView = new A.SchedulerMonthView();
    var weekView = new A.SchedulerWeekView();

    new A.Scheduler(
      {
        activeView: weekView,
        boundingBox: '#myScheduler',
        currentDate: new Date(2013, 1, 4),
        eventRecorder: eventRecorder,
        events: events,
        render: true,
        views: [dayView, weekView, monthView]
      }
    );
  }
);