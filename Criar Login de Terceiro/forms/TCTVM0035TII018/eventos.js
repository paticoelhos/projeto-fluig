var activity;

$(document).ready(function() 
{
	activity = getWKNumState();

	// Solicitante
	if (activity == 0 || activity == 5) 
	{
		preencherSolicitante();
	}
	
	var dateTimeInicio = FLUIGC.calendar('#dataHoraInicio',
	{
	    pickDate: true,
	    minDate: new Date(),
	    pickTime: false
	});
	$(document).on('change', "#dataHoraInicio", function () { 
		var dateTimeTermino = FLUIGC.calendar('#dataHoraTermino', {
		    pickDate: true,
		    pickTime: false
		});
		dateTimeTermino.setMinDate(dateTimeInicio.getDate());
	});	
});

 