function defineStructure() 
{
	addColumn("Categoria");
    addColumn("Prioridade");
    addColumn("Horas");
    
    addIndex(["Categoria"]);
}
function onSync(lastSyncDate) 
{

}
function createDataset(fields, constraints, sortFields) 
{
	var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("Categoria");
    dataset.addColumn("Prioridade");
    dataset.addColumn("Horas");
 
    dataset.addRow(new Array("Bug", "Baixa", "Negociável"));
    dataset.addRow(new Array("Melhoria", "Baixa", "Negociável"));
    
    dataset.addRow(new Array("Notificação PUSH", "Média", "8"));
    dataset.addRow(new Array("Suporte", "Média", "8"));
    dataset.addRow(new Array("Travamento/Lentidão de Plataforma", "Média", "8"));
    dataset.addRow(new Array("Suporte Cedro", "Média", "8"));
     
    dataset.addRow(new Array("Gráfico", "Alta", "4"));
    dataset.addRow(new Array("Alteração de Papéis do Toro Radar", "Alta", "4"));
    dataset.addRow(new Array("Vídeo/Chat", "Alta", "4"));
    dataset.addRow(new Array("Recebimento de Recomendações por E-mail", "Alta", "4"));
    dataset.addRow(new Array("Divergência de Saldo / Patrimônio (Cedro)", "Alta", "4"));
    dataset.addRow(new Array("Alteração de Papéis do HB (Cedro)", "Alta", "4"));
    
    dataset.addRow(new Array("Gráfico (Indisponibilidade)", "Urgente", "1"));
    dataset.addRow(new Array("Recebimento de Recomendações PopUp", "Urgente", "1"));
    dataset.addRow(new Array("Desconexão / Indisponibilidade Cedro", "Urgente", "1"));
    dataset.addRow(new Array("Risk Broker (Cedro)", "Urgente", "1"));
    dataset.addRow(new Array("Ajuste de Proventos", "Urgente", "1"));
    dataset.addRow(new Array("Alterar Recomendações no Toro Radar", "Urgente", "1"));
    
    return dataset;
    
}function onMobileSync(user) 
{

}