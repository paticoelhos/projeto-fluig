function intermediateconditional12() 
{
	var dataAtual = new Date();
    var dateFormat = new java.text.SimpleDateFormat("dd/MM/yyyy");
    var dataValidade = dateFormat.format(dataAtual);
    
	var dataAbertura = hAPI.getCardValue("terminoValidade");
	
	if (dataValidade == dataAbertura)
	{
		return true;
	}
}