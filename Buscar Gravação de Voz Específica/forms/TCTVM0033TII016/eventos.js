var activity;

$(document).ready(function() 
{
	activity = getWKNumState();

	// Solicitante
	if (activity == 0 || activity == 5) 
	{
		preencherSolicitante();
	}
	var onlyDate = FLUIGC.calendar('#dataExecucao', 
	{
		pickDate: true,
	    pickTime: false
	});
	var dateTimeInicio = FLUIGC.calendar('#dataHoraInicio', {
	    pickDate: true,
	    pickTime: true,
	    sideBySide: true
	});		    
	$(document).on('change', "#dataHoraInicio", function () { 
		var dateTimeTermino = FLUIGC.calendar('#dataHoraTermino', {
		    pickDate: true,
		    pickTime: true,
		    sideBySide: true
		});
		dateTimeTermino.setMinDate(dateTimeInicio.getDate());
	});			
});
