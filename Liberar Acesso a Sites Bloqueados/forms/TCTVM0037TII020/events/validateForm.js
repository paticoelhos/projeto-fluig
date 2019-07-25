function validateForm(form) 
{		
	var atividade = getValue("WKNumState");
	var siteAcesso = form.getValue("siteAcesso");
	var justificativa = form.getValue("justificativa");
	var aprovacaoSolicitacao = form.getValue("aprovacaoSolicitacao");
	var observacaoAprovacao = form.getValue("observacaoAprovacao");
	var liberado = form.getValue("liberado");
	var observacaoLiberacao = form.getValue("observacaoLiberacao");
	
	if ((atividade == 0) || (atividade == 5))
	{
		if ((siteAcesso == "") || (siteAcesso == null) || (siteAcesso == undefined))
		{
			throw "Preencha o campo URL/Site a ser acessado.";
		}
		if ((justificativa == "") || (justificativa == null) || (justificativa == undefined))
		{
			throw "Preencha o campo Justificativa.";
		}
	}
	if ((atividade == 6) && (aprovacaoSolicitacao == 'Não') && ((observacaoAprovacao == "") || (observacaoAprovacao == null) || (observacaoAprovacao == undefined)))
	{
		throw "Preencha o campo Observação.";
	}
	if (atividade == 9) 
	{
		if ((liberado != 'Não') && (liberado != 'Sim'))
		{
			throw "Informe se o acesso foi liberado.";
		}
		if ((liberado == 'Não') && ((observacaoLiberacao == "") || (observacaoLiberacao == null) || (observacaoLiberacao == undefined)))
		{
			throw "Preencha o campo Observação.";
		}
	}

}