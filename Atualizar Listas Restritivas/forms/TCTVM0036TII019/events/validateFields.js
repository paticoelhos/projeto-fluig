function validateForm(form) 
{	
	var atividade = getValue("WKNumState");
	var atualidado = form.getValue("atualidado");
	var observacaoAtualizacao = form.getValue("observacaoAtualizacao");
	
	if ((atividade == 2) && (atualidado == "Não")&& ((observacaoAtualizacao == null) || (observacaoAtualizacao ==  "") || (observacaoAtualizacao ==  undefined)))
	{
		throw "Preencha o campo Observação.";
	}
}