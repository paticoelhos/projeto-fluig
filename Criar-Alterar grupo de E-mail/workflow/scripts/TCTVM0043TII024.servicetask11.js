function servicetask11(attempt, message){
	log.info('-------- INÍCIO servicetask11 --------');
	var liberado = hAPI.getCardValue('liberado');
	var numeroSolicitacao = new java.lang.Integer (getValue("WKNumProces"));
	var usuario = getValue('WKUser');
	var tipo = hAPI.getCardValue('tipo');

	if (liberado == 'Sim'){
		var nomeGrupo = hAPI.getCardValue('nomeGrupo');
		var resultado = hAPI.getCardValue('resultado');

		if (tipo == 'altera')	{
			try{
			    log.info('-------- INICIANDO ECMCardService');
			    var servico = ServiceManager.getServiceInstance("ECMCardService");
			    log.info('-------- servico: ' + servico);

			    var locator = servico.instantiate("com.totvs.technology.ecm.dm.ws.ECMCardServiceService");
			    log.info('-------- locator: ' + locator);

			    var portServico = locator.getCardServicePort();
			    log.info('-------- portServico: ' + portServico);

			    var cardDocArray = servico.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDtoArray");
			    log.info('-------- cardDocArray: ' + cardDocArray);

			    //-------------Dados do Formulários-----------------//
			    //Usuário de altenticação
			    var user = hAPI.getAdvancedProperty("loginUserWS");			    	

			    //Usuário de altenticação
			    var password = hAPI.getAdvancedProperty("passwdUserWS");

			    //Número do documento a ser editado, tipo int
			    var documentId = parseInt(resultado);
			    log.info('-------- documentId: ' + documentId);

			    //Código da empresa, tipo int
			    var empresa = parseInt(getValue("WKCompany"));
			    log.info('-------- empresa: ' + empresa + ' TypeOf: ' + typeof empresa);

			  //-------------------Montar Array de Objetos-----------------//
			    //Nome do grupo que será alterado
		        var valor_1 = hAPI.getCardValue("grupoInfo");
		        //Objeto do campo do formulário que será alterado.
		        var objCampo_1 = servico.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto");
		        objCampo_1.setField("nomeGrupo");//Nome do campo que será alterado
		        objCampo_1.setValue(valor_1);//Valor que será inserido no campo
		        cardDocArray.getItem().add(objCampo_1);//Adiciona os dados
		        log.info('-------- valor_1: ' + valor_1 + ' objCampo_1: ' + objCampo_1);

		        var valor_2 = hAPI.getCardValue('responsavelGrupo');
		        var objCampo_2 = servico.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto");
		        objCampo_2.setField("responsavelGrupo");
		        objCampo_2.setValue(valor_2);
		        cardDocArray.getItem().add(objCampo_2);
		        log.info('-------- valor_2: ' + valor_2 + ' objCampo_2: ' + objCampo_2);

		        var valor_3 = hAPI.getCardValue('mailInfo');
		        var objCampo_3 = servico.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto");
		        objCampo_3.setField("mailResp");
		        objCampo_3.setValue(valor_3);
		        cardDocArray.getItem().add(objCampo_3);
		        log.info('-------- valor_3: ' + valor_3 + ' objCampo_3: ' + objCampo_3);

		        var valor_4 = hAPI.getCardValue('respSetorGrupo');
		        var objCampo_4 = servico.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto");
		        objCampo_4.setField("setorResp");
		        objCampo_4.setValue(valor_4);
		        cardDocArray.getItem().add(objCampo_4);
		        log.info('-------- valor_4: ' + valor_4 + ' objCampo_4: ' + objCampo_4);

		        var valor_5 = hAPI.getCardValue('componentes');
		        var objCampo_5 = servico.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto");
		        objCampo_5.setField("componentes");
		        objCampo_5.setValue(valor_5);
		        cardDocArray.getItem().add(objCampo_5);
		        log.info('-------- valor_5: ' + valor_5 + ' objCampo_5: ' + objCampo_5);

				log.info('-------- cardDocArray: ' + cardDocArray);
			    //--------------------Executando WS-----------------------//
				 var WSretorno = portServico.updateCardData(empresa, user, password, documentId, cardDocArray);
			     var retorno = getRetorno(WSretorno);
			    log.info('-------- retorno updateCardData ' + retorno);

			    log.info('-------- FIM ECMCardService --------');
			} catch (e)
			{
				var mensagem = "Erro ao atualizar documento " + e;
			}
			var mensagem = retorno;
			hAPI.setTaskComments(usuario, numeroSolicitacao, 0, mensagem);
		}
	}
}
function getRetorno(WebServiceMessage)
{
    var empresa = WebServiceMessage.getItem().get(0).getCompanyId();
    log.info('-------- empresa: ' + empresa);
    var documentDescription = WebServiceMessage.getItem().get(0).getDocumentDescription();
    log.info('-------- documentDescription: ' + documentDescription);
    var documentId = WebServiceMessage.getItem().get(0).getDocumentId();
    log.info('-------- documentId: ' + documentId);
    var version = WebServiceMessage.getItem().get(0).getVersion();
    log.info('-------- version: ' + version);
    var message = WebServiceMessage.getItem().get(0).getWebServiceMessage();
    log.info('-------- message: ' + message);

    if (documentDescription == null || documentDescription == "")
    {
        throw "Erro ao atualizar ficha (WS): " + message;
    }
    return "Formulário atualizado: " + " Nº Documento: " + documentId + " - " + " Versão: " + version;
}
