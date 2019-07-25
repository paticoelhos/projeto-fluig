function startconditional4(){
	log.info('---------INÍCIO startconditional4---------');
	//Consulta Dataset 'TCTVM0023TII007'
	var dataAtual = new Date();
  var dateFormat = new java.text.SimpleDateFormat("MM/yyyy");
  var dataSolicitacao = dateFormat.format(dataAtual);
	log.info('---------Mês/ano corrente: '+dataSolicitacao);

	var c1 = DatasetFactory.createConstraint("dataAbertura", dataSolicitacao, dataSolicitacao, ConstraintType.MUST);
	var constraints = new Array(c1);
    var arrayCampos = new Array("dataAbertura");
    var dataset = DatasetFactory.getDataset("TCTVM0023TII007", arrayCampos, constraints, null);

    //Verifica quantas solicitações foram abertas no período. Caso menos que 2, a solicitação é aberta.
    if (dataset.rowsCount < 2){
    	log.info('---------Número de solicitações abertas neste mês/ano: '+dataset.rowsCount);
    	return true;
	}
    log.info('---------FIM startconditional4---------');
}
