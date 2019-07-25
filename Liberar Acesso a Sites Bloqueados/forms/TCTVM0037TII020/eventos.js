var activity;

$(document).ready(function() 
{
	activity = getWKNumState();

	// Solicitante
	if (activity == 0 || activity == 5) 
	{
		preencherSolicitante();
	}
});

 