var activity;

$(document).ready(function() 
{
	activity = getWKNumState();

	// Solicitante
	if (activity == 0 || activity == 1) 
	{
		preencherSolicitante();
	}
	
	var dateTimeInicio = FLUIGC.calendar('#inicioValidade',
	{
		pickDate: true,
	    minDate: new Date(),
	    pickTime: false
	});
	$(document).on('change', "#inicioValidade", function () { 
		var dateTimeTermino = FLUIGC.calendar('#terminoValidade', {
		    pickDate: true,
		    pickTime: false
		});
		dateTimeTermino.setMinDate(dateTimeInicio.getDate());
	});			    	 
});