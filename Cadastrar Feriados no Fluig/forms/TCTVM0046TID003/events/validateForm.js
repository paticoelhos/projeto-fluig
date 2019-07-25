function validateForm(form) 
{	
	var atividade = getValue("WKNumState");
	var confirmaCadastro = form.getValue("confirmaCadastro");
	var comentario = form.getValue("comentario");
	
	if (atividade == 10)
	{
		if ((confirmaCadastro != "Não") && (confirmaCadastro != "Sim"))
		{
			throw "Confirme informação sobre o cadastro dos feridos no campo indicado.";
		}
		if ((confirmaCadastro == "Não") && ((comentario == null) || (comentario ==  "") || (comentario ==  undefined)))
		{
			throw "Preencha o campo Comentário.";
		}
	}

}