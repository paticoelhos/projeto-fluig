function beforeSendData(customField, customFact){
	customField[0] = hAPI.getCardValue("categoria");
	customField[1] = hAPI.getCardValue("prioridade");
	customField[2] = hAPI.getCardValue("dataPrevisao");
}
