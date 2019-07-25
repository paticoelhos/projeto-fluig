function beforeTaskSave(colleagueId, nextSequenceId, userList){
	log.info('---------INICIO beforeTaskSave---------');
    var atividade= getValue("WKNumState");
    if ((atividade == 0) || (atividade == 1)){
    	var ambiente = hAPI.getCardValue("ambiente");
    	var anexos = hAPI.listAttachments();
    	if ((ambiente == "Produção") && (anexos.size() == 0))
            throw "É necessário anexar evidências para registrar esta solicitação. Clique na aba Anexos e inclua o(s) arquivo(s).";
    	log.info('---------atividade:'+atividade);
    	log.info('---------ambiente:'+ambiente);
    	log.info('---------anexos:'+anexos);
    }
	log.info('---------FIM beforeTaskSave---------');
}
