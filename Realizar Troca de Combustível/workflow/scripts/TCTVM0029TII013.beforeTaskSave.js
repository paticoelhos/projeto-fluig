function beforeTaskSave(colleagueId, nextSequenceId, userList) 
{
    var atividade= getValue("WKNumState");
    if (atividade == 19) 
    {
    	var anexos = hAPI.listAttachments();
        if (anexos.size() == 0) 
        {
            throw "É necessário anexar evidências para finalizar a solicitação.";
        }
    }
}