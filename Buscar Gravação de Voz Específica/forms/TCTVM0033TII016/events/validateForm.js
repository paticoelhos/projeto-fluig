function validateForm(form) 
{		
	var atividade = getValue("WKNumState");
	var funcionario = form.getValue("funcionario");
	var ramal = form.getValue("ramal");
	var dataHoraInicio = form.getValue("dataHoraInicio");
	var dataHoraTermino = form.getValue("dataHoraTermino");
	var aprovacaoSolicitacao = form.getValue("aprovacaoSolicitacao");
	var observacaoAprovacao = form.getValue("observacaoAprovacao");
	var liberado = form.getValue("liberado");
	var observacaoLiberacao = form.getValue("observacaoLiberacao");
	
	if ((atividade == 0) || (atividade == 5))
	{
		if ((funcionario == "") || (funcionario == null) || (funcionario == undefined))
		{
			throw "Preencha o campo Funcionário.";
		}
		if ((ramal == "") || (ramal == null) || (ramal == undefined))
		{
			throw "Preencha o campo Ramal.";
		}
		if ((dataHoraInicio == "") || (dataHoraInicio == null) || (dataHoraInicio == undefined))
		{
			throw "Preencha o campo Data/Hora Início.";
		}
		if ((dataHoraTermino == "") || (dataHoraTermino == null) || (dataHoraTermino == undefined))
		{
			throw "Preencha o campo Data/Hora Término.";
		}
	}
	if ((atividade == 15) && (aprovacaoSolicitacao == 'Não') && ((observacaoAprovacao == "") || (observacaoAprovacao == null) || (observacaoAprovacao == undefined)))
	{
		throw "Preencha o campo Observação.";
	}
	if (atividade == 16)
	{
		if ((liberado == 'Não') && ((observacaoLiberacao == "") || (observacaoLiberacao == null) || (observacaoLiberacao == undefined)))
		{
			throw "Preencha o campo Observação.";
		}
		if ((liberado != 'Não') && (liberado != 'Sim'))
		{
			throw "Informe se o acesso foi liberado.";
		}
	}

}