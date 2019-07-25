function validateForm(form)
{
	var atividade = getValue('WKNumState');
	var inicioValidade = form.getValue('inicioValidade');
	var terminoValidade = form.getValue('terminoValidade');
	var aprovacaoSolicitacao = form.getValue('aprovacaoSolicitacao');
	var observacaoAprovacao = form.getValue('observacaoAprovacao');
	var liberado = form.getValue('liberado');
	var observacaoLiberacao = form.getValue('observacaoLiberacao');
	
	if ((atividade == 0 || atividade == 1) && ((inicioValidade == "" || inicioValidade == null || inicioValidade == undefined) || (terminoValidade == "" || terminoValidade == null || terminoValidade == undefined)))
	{
		throw "Favor preencher as datas de início e término de validade da licença";
	}
	if ((atividade == 41) && (aprovacaoSolicitacao == 'Não') && ((observacaoAprovacao == "") || (observacaoAprovacao == null) || (observacaoAprovacao == undefined)))
	{
		throw "Preencha o campo Observação.";
	}
	if ((atividade == 42) && (liberado == 'Não') && ((observacaoLiberacao == "") || (observacaoLiberacao == null) || (observacaoLiberacao == undefined)))
	{
		throw "Preencha o campo Observação.";
	}
}	