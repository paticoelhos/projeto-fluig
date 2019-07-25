function servicetask6(attempt, message) 
{
	 try 
	 {
		 log.info('---------INÍCIO servicetask6---------');
		 var nomeGrupo = hAPI.getCardValue('nomeGrupo');
		 var componentes = hAPI.getCardValue('componentes');
		 var responsavelGrupo = hAPI.getCardValue('responsavelGrupo');
		 var mailResp = hAPI.getCardValue('mailResp');
		 var setorResp = hAPI.getCardValue('setorResp');
		 
		 if ((nomeGrupo != "") && (responsavelGrupo != "") && (mailResp != "") && (setorResp != "") && (componentes != ""))
		 {		       
			hAPI.setCardValue("resultado","Ok");
			log.info('---------RESULTADO: '+ hAPI.getCardValue("resultado"));
		 }
	 } 
	 catch(error) 
	 { 
		hAPI.setCardValue("resultado", "Erro: "+error);
		throw error;
	 }
} 