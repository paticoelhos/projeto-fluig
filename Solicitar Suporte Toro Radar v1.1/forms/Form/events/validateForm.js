function validateForm(form){
	log.info("INÍCIO validateFields");
	var atividade = getValue('WKNumState');
	var categoria = form.getValue('categoria');
	var dataPrevisao = form.getValue('dataPrevisao');
	var passo = form.getValue('proximoPasso');
	var comentario = form.getValue('comentario');
	var ratingstar = form.getValue('campoAvalia');
	var descricaoSolicitacao = form.getValue('descricaoSolicitacao');

	if (((atividade == 0) || (atividade == 1)) && ((descricaoSolicitacao == "") || (descricaoSolicitacao == null) || (descricaoSolicitacao == undefined)))
		throw "Descreva o problema no campo indicado.";
	if (atividade == 63){
		if ((categoria == "") || (categoria == null) || (categoria == undefined))
			throw "Preencha o campo Categoria.";
		if ((dataPrevisao == "Bug") || (dataPrevisao == "Melhoria"))
			throw "Preencha o campo Previsão para atendimento da solicitação.";
	}
	if ((atividade == 63 || atividade == 65 || atividade == 66) && ((passo == null) || (passo ==  "") || (passo == undefined)) && ((dataPrevisao == "Bug") || (dataPrevisao == "Melhoria")))
		throw "Escolha abaixo o próximo passo para esta solicitação.";
	if ((atividade == 68) && (ratingstar <= 3) && ((comentario == "") || (comentario == null) || (comentario == undefined)) && (passo = "true"))
		throw "Insira um comentário no campo ao lado.";
}
