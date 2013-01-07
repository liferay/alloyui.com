AUI().use('aui-scheduler', function(A) {

  var schedulerEvent1 = new A.SchedulerEvent({
    content: 'Testing event 1 - overlap',
    endDate: new Date(2010, 9, 8, 12),
    startDate: new Date(2010, 9, 2, 7)
  });

  var schedulerEvent2 = new A.SchedulerEvent({
    content: 'Testing event 2 - overlap',
    endDate: new Date(2010, 9, 8, 12),
    startDate: new Date(2010, 9, 2, 7)
  });

  var schedulerEvent3 = new A.SchedulerEvent({
    content: 'Testing event 3',
    startDate: new Date()
  });

  calendar1 = new A.SchedulerCalendar({
    color: 'green',
    items: [ schedulerEvent1, schedulerEvent2, schedulerEvent3 ]
  });

  var calendar2 = new A.SchedulerCalendar({
    events: [
      {
        content: 'eduardo 1',
        startDate: new Date(2010, 9, 16)
      },
      {
        content: 'eduardo 2',
        startDate: new Date(2010, 9, 16, 12)
      }
    ]
  });

  calendar2.add([
    {
      content: 'eduardo added via addEvents',
      startDate: new Date(2010, 9, 17, 12)
    }
  ]);

  var calendar3 = new A.SchedulerCalendar({
    events: [
      {
        content: 'john 1',
        endDate: new Date(2010, 9, 15, 15),
        startDate: new Date(2010, 9, 15, 9)
      }
    ]
  });

  var events1 = [
    calendar1,
    calendar2,
    calendar3,
    {
      content: 'Large Event 1',
      endDate: new Date(2010, 9, 13, 12),
      startDate: new Date(2010, 9, 13, 9)
    },
    {
      content: 'Very Large Event',
      disabled: true,
      endDate: new Date(2010, 9, 15, 23),
      meeting: true,
      reminder: true,
      startDate: new Date(2010, 9, 1, 9)
    },
    {
      content: 'Simple JSON event',
      endDate: new Date(2010, 9, 12, 7),
      startDate: new Date(2010, 9, 12, 6)
    },
    {
      content: 'Day boundary event',
      endDate: new Date(2010, 9, 13, 0),
      startDate: new Date(2010, 9, 12, 20)
    },
    {
      content: 'Overlap event',
      endDate: new Date(2010, 9, 13, 15),
      startDate: new Date(2010, 9, 12, 21)
    },
    {
      content: 'Simple JSON event',
      endDate: new Date(2010, 9, 12, 9),
      startDate: new Date(2010, 9, 12, 7)
    },
    {
      content: 'Bigger than 24hrs event',
      endDate: new Date(2010, 9, 6, 1),
      startDate: new Date(2010, 9, 5, 0)
    }
  ];

  var dayView = new A.SchedulerDayView({
    headerView: true
  });

  var monthView = new A.SchedulerMonthView();

  var weekView = new A.SchedulerWeekView({
    isoTime: false,
    headerView: true
  });

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

  scheduler.on({
    '*:change': function(event) {

      console.log(event.type, event);

    },
    '*:add': function(event) {

      console.log(event.type, event);

    },
    '*:remove': function(event) {

      console.log(event.type, event);

    },
    'scheduler-event:startDateChange': function(event) {

      console.log(event.type, event);

    },
    'scheduler-event:endDateChange': function(event) {

      console.log(event.type, event);

    },
    'scheduler-event-recorder:save': function(event) {

      console.log(event.type, event);

    },
    'scheduler-event-recorder:delete': function(event) {

      console.log(event.type, event);

    },
    'scheduler-event-recorder:edit': function(event) {

      console.log(event.type, event);
      
    }
  });
});