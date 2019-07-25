function beforeStateEntry(sequenceId){
	log.info('---------INICIO beforeStateEntry---------');
	var atividade = getValue("WKCurrentState");
	var prxAtividade = getValue("WKNextState");
	var tipo = hAPI.getCardValue("tipo");
	var aprovacaoSolicitacao = hAPI.getCardValue("aprovacaoSolicitacao");

	if (((atividade == 14) && (tipo == "altera")) || ((atividade == 15) && (tipo == "altera") && (aprovacaoSolicitacao != 'Sim'))){
		var componentes = hAPI.getCardValue("componentes");
		var compArray = componentes.split(",");
		var dataset = new Object();
		var constraints = new Array();
		var arrayCampos = new Array("colleagueName","mail","groupId");
		log.info('---------atividade: '+atividade);
		log.info('---------tipo: '+tipo);
		log.info('---------aprovacaoSolicitacao: '+aprovacaoSolicitacao);
		log.info('---------compArray: '+compArray);
		log.info('---------compArray.length: '+compArray.length);

		for (var i = 0; i < compArray.length; i++){
			var c1 = DatasetFactory.createConstraint("colleagueName", compArray[i], compArray[i], ConstraintType.MUST);
			var constraint = new Array(c1);
	    var dataset = DatasetFactory.getDataset("colleague", arrayCampos, constraint, null);
	    log.info('---------dataset: '+dataset);

	    var nome = dataset.getValue(0, "colleagueName");
			var email = dataset.getValue(0, "mail");
			var setor = dataset.getValue(0, "groupId");
			var childData = new java.util.HashMap();
      childData.put("tdNome", nome);
      childData.put("tdEmail", email);
      childData.put("tdSetor", setor);
      hAPI.addCardChild("tbGrupoAltera", childData);

      log.info('---------nome: '+nome);
      log.info('---------email: '+email);
      log.info('---------setor: '+setor);
      log.info('---------childData: '+childData);
		}
		log.info('---------FIM beforeStateEntry---------');
	}
}
