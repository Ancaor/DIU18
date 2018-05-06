var index = {
	onReady : function(){
		var thisMonth = moment().format('YYYY-MM');
		var events = [
        {
            title: 'Multi-Day Event',
            endDate: thisMonth + '-14',
            startDate: thisMonth + '-10'
        }, {
            endDate: thisMonth + '-23',
            startDate: thisMonth + '-21',
            title: 'Another Multi-Day Event'
        }, {
            date: thisMonth + '-27',
            title: 'Single Day Event'
        }
    ];
		$("#calendario").clndr({
    template: $('#full-clndr-template').html(),
    events: events,
    forceSixRows: true
  });
	}
};

$(document).ready(index.onReady);
