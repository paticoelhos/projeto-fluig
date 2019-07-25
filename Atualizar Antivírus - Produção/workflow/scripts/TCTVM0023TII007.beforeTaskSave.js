function beforeTaskSave(colleagueId, nextSequenceId, userList) 
{
	log.info('---------INICIO beforeTaskSave---------');	
    var atividade= getValue("WKNumState");
    log.info('---------atividade: '+atividade);
    if (atividade == 9) 
    {
    	var anexos = hAPI.listAttachments();
    	log.info('---------anexos: '+anexos);
        if (anexos.size() == 0) 
            throw "É necessário anexar evidências para finalizar a solicitação.";
    }
    log.info('---------FIM beforeTaskSave---------');	
}