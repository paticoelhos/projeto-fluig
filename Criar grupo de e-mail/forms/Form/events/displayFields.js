function displayFields(form,customHTML)
{
	var atividade = getValue('WKNumState');
	if (atividade != 12){
		customHTML.append('<script>$("#tbGrupo tr td input").prop("disabled", true);</script>');
	}
}
