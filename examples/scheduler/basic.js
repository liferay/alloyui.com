AUI().use('aui-scheduler', function(A) {

  var events1 = [
    {
      content: 'Large Event 1',
      endDate: new Date(2010, 9, 13, 12),
      startDate: new Date(2010, 9, 13, 9)
    }
  ];

  var dayView = new A.SchedulerDayView();
  var monthView = new A.SchedulerMonthView();
  var weekView = new A.SchedulerWeekView();

  var eventRecorder = new A.SchedulerEventRecorder({
    duration: 30
  });

  var scheduler = new A.Scheduler({
    boundingBox: '#scheduler',
    date: new Date(2010, 9, 12),
    eventRecorder: eventRecorder,
    items: events1,
    firstDayOfWeek: 1,
    render: true,
    views: [weekView, dayView, monthView]
  });

});