function beforeStateEntry(sequenceId){
	var atividade = getValue("WKCurrentState");
	log.info('---------INICIO beforeStateEntry---------');
	if (atividade == 6){
		var componentes = hAPI.getCardValue("componentes");
		var compArray = componentes.split(",");
		var dataset = new Object();
		var constraints = new Array();
		var arrayCampos = new Array("colleagueName","mail","groupId");

		for (var i = 0; i < compArray.length; i++){
			var c1 = DatasetFactory.createConstraint("colleagueName", compArray[i], compArray[i], ConstraintType.MUST);
			var constraint = new Array(c1);
			var dataset = DatasetFactory.getDataset("colleague", arrayCampos, constraint, null);
			log.info('---------dataset: '+dataset);

	    var nome = dataset.getValue(0, "colleagueName");
			var email = dataset.getValue(0, "mail");
			var setor = dataset.getValue(0, "groupId");
			var childData = new java.util.HashMap();
      childData.put("tdNome", compArray[i]);
      childData.put("tdEmail", email);
      childData.put("tdSetor", setor);
      hAPI.addCardChild("tbGrupo", childData);

      log.info('---------nome: '+nome);
      log.info('---------email: '+email);
      log.info('---------setor: '+setor);
		}

        log.info('---------FIM beforeStateEntry---------');
    }
}
