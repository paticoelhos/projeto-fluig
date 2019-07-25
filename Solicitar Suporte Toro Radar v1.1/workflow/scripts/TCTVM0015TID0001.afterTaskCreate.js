function afterTaskCreate(colleagueId)
{
	var atividade = getValue("WKCurrentState");
	var nrProxAtividade = getValue("WKNextState");
	var categoria = hAPI.getCardValue("categoria"); 
	var numeroSolicitacao = getValue("WKNumProces");
	var threadSolicitacao = 0;
	var responsavelPelaTarefa = getValue("WKUser");
	var dataAtual = new Date();
	var hora = dataAtual.getHours();
	var minuto = dataAtual.getMinutes();
	var segundo = dataAtual.getSeconds();
	var horaEmSegundos = (hora*3600) + (minuto*60) + segundo;
	var tempoHora = 3600; //1 hora em segundos
	var horaPrazo = 0;

	log.info('---------INICIO afterTaskCreate---------');
	/*
	* Tarefa 63 = triagem do chamado pelo Suporte
	* Após verificar dados e inserir categoria, usuário avança para a tarefa 64, assumindo o chamado.
	* Ao entrar na tarefa:
	*/

	if ((atividade == 63) && (categoria != "" || categoria != null || categoria != undefined))
	{
		//Consulta Dataset 'ds_ans_dev' contendo o ANS
       	var cANS = DatasetFactory.createConstraint("Categoria", categoria, categoria, ConstraintType.MUST);
   		var constraintsANS = new Array(cANS);

        var arrayCamposANS = new Array("Categoria","Prioridade","Horas");
        var datasetANS = DatasetFactory.getDataset("ds_ans_dev", arrayCamposANS, constraintsANS, null);
    	log.info('---------dataset: '+datasetANS);
        for(var i = 0; i < datasetANS.rowsCount; i++){
    		var prioridadeDataset = datasetANS.getValue(0, "Prioridade");
    		var horasDataset = datasetANS.getValue(0, "Horas");
    		log.info('---------linhas: '+datasetANS.rowsCount);
    		log.info('---------prioridadeDataset: '+prioridadeDataset);
    		log.info('---------horasDataset: '+horasDataset);
    	}

        //Insere prazo/ANS na tarefa de acordo com dados do Dataset
    	if (prioridadeDataset != "Baixa"){
    		log.info('---------IF Prioridade ñ Baixa---------');
			var tempoPeriodicidadeEmSegundos = tempoHora * horasDataset;
			horaPrazo = horaEmSegundos + tempoPeriodicidadeEmSegundos;
			var prazoMin = Number(horasDataset)*60;
			log.info("---------horaPrazo "+horaPrazo);
			log.info("---------prazoMin "+prazoMin);

			var novaData = hAPI.calculateDeadLineTime(dataAtual, horaEmSegundos, prazoMin, "Default");
			dataAtual = novaData[0];
			horaPrazo = novaData[1];

			log.info("---------dataAtual "+dataAtual);
			log.info("---------horaPrazo "+horaPrazo);

	        hAPI.setDueDate(numeroSolicitacao, threadSolicitacao, responsavelPelaTarefa, dataAtual, horaPrazo);

		    var dateFormat = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		    var dataPrevisao = dateFormat.format(dataAtual);

		    hAPI.setCardValue("dataPrevisao", dataPrevisao);
			hAPI.setCardValue("prioridade", prioridadeDataset);
		}

    	/*
    	 * Insere prazo/ANS na tarefa de acordo com valor informado no campo 'Previsão do chamado'.
    	 * O prazo é calculado de acordo com o expediente padrão (Default) do Fluig
    	 */
		if (prioridadeDataset == "Baixa"){
			log.info('---------IF Prioridade Baixa---------');
			var calcPrazo = hAPI.getCardValue("dataPrevisao");
			if ((calcPrazo != null) || (calcPrazo != "") || (calcPrazo != undefined)){
				var dataHora = calcPrazo.split(" ");

				var arrayDataPrazo = dataHora[0].split("/");
		        var dia = arrayDataPrazo[0];
		        var mes = arrayDataPrazo[1] - 1;
		        var ano = arrayDataPrazo[2];

		        dataAtual.setDate(dia);
		        dataAtual.setMonth(mes);
		        dataAtual.setFullYear(ano);

				var arrayhoraPrazo = dataHora[1].split(":");
		        var hora = arrayhoraPrazo[0]*60*60;
		        var minuto = arrayhoraPrazo[1]*60;
		        var segundo = arrayhoraPrazo[2]*1;
		        horaPrazo = hora + minuto + segundo;

		        hAPI.setCardValue("prioridade", prioridadeDataset);
			}
			hAPI.setDueDate(numeroSolicitacao, threadSolicitacao, responsavelPelaTarefa, dataAtual, horaPrazo);
		}
	}

	//Insere prazo nas outras tarefas do Suporte e Desenvolvimento
	if (((atividade == 65) || (atividade == 66)) && ((categoria != "") || (categoria != null) || (categoria != undefined))){
		var c1 = DatasetFactory.createConstraint("processTaskPK.processInstanceId", numeroSolicitacao, numeroSolicitacao, ConstraintType.MUST);
		var c2 = DatasetFactory.createConstraint("choosedSequence", "19", "19", ConstraintType.MUST);
		var c3 = DatasetFactory.createConstraint("processTaskPK.colleagueId", responsavelPelaTarefa, responsavelPelaTarefa, ConstraintType.MUST);
		var constraintsInterno = new Array(c1, c2, c3);

	    var arrayCampos = new Array("deadline", "deadlineHour");
	    var datasetInterno = DatasetFactory.getDataset("processTask", arrayCampos, constraintsInterno, null);

		var dataDeadline = datasetInterno.getValue(0, "deadline");
		var horaPrazo = datasetInterno.getValue(0, "deadlineHour");

	    if (dataDeadline != undefined){
		    var dateFormat = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
				var dataPrevisao = dateFormat.format(dataDeadline);
				var dataHora = dataPrevisao.split(" ");

				var arrayDataPrazo = dataHora[0].split("/");
        var dia = arrayDataPrazo[0];
        var mes = arrayDataPrazo[1] - 1;
        var ano = arrayDataPrazo[2];

        dataAtual.setDate(dia);
        dataAtual.setMonth(mes);
        dataAtual.setFullYear(ano);

        hAPI.setCardValue("dataPrevisao", dataPrevisao);

        hAPI.setDueDate(numeroSolicitacao, threadSolicitacao, responsavelPelaTarefa, dataAtual, horaPrazo);
		}
	}
}
