function beforeTaskSave(colleagueId, nextSequenceId, userList){
	log.info('---------INICIO beforeTaskSave---------');
    var atividade= getValue("WKNumState");
    if (atividade == 0 || atividade == 4){
    	log.info('---------Atividade: '+atividade);
    	var dataAtual = new Date();
        var dateFormat = new java.text.SimpleDateFormat("MM/yyyy");
        var dataSolicitacao = dateFormat.format(dataAtual);
        hAPI.setCardValue('dataAbertura', dataSolicitacao);
    	log.info('---------Mês/ano atual: '+dataSolicitacao);
    }
    if (atividade == 5){
    	log.info('---------Atividade: '+atividade);
    	log.info('---------Quantidade de anexos: '+anexos.size());
    	var anexos = hAPI.listAttachments();
        if (anexos.size() == 0)
            throw "É necessário anexar evidências para finalizar a solicitação.";
    }
    log.info('---------FIM beforeTaskSave---------');
}
