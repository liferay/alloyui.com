AUI().use('aui-scheduler', function(A) {

  var events = [
    {
      content: 'Soccer Game',
      startDate: new Date(2012, 9, 10, 2),
      endDate: new Date(2012, 9, 10, 6)
    }
  ],

  dayView = new A.SchedulerDayView(),
  monthView = new A.SchedulerMonthView(),
  weekView = new A.SchedulerWeekView(),

  eventRecorder = new A.SchedulerEventRecorder();

  new A.Scheduler({
    boundingBox: '#myScheduler',
    date: new Date(2012, 9, 12),
    eventRecorder: eventRecorder,
    items: events,
    render: true,
    views: [weekView, dayView, monthView]
  });

});