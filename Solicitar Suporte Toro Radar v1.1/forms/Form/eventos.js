function solicitante(){
	document.getElementById('proximoPasso').value = "solicitante";
	$('#solicitante').addClass('btn btn-primary');
	$('#desenvolvimento').removeClass('btn btn-primary').addClass('btn btn-default');
	$('#suporte').removeClass('btn btn-primary').addClass('btn btn-default');
	$('#finalizar').removeClass('btn btn-primary').addClass('btn btn-default');
}
function desenvolvimento(){
	document.getElementById('proximoPasso').value = "desenvolvimento";
	$('#desenvolvimento').addClass('btn btn-primary');
	$('#solicitante').removeClass('btn btn-primary').addClass('btn btn-default');
	$('#suporte').removeClass('btn btn-primary').addClass('btn btn-default');
	$('#finalizar').removeClass('btn btn-primary').addClass('btn btn-default');
}
function suporte(){
	document.getElementById('proximoPasso').value = "suporte";
	$('#suporte').addClass('btn btn-primary');
	$('#solicitante').removeClass('btn btn-primary').addClass('btn btn-default');
	$('#finalizar').removeClass('btn btn-primary').addClass('btn btn-default');
	$('#desenvolvimento').removeClass('btn btn-primary').addClass('btn btn-default');
}
function finalizar(){
	document.getElementById('proximoPasso').value = "finalizar";
	$('#finalizar').addClass('btn btn-primary');
	$('#solicitante').removeClass('btn btn-primary').addClass('btn btn-default');
	$('#suporte').removeClass('btn btn-primary').addClass('btn btn-default');
	$('#desenvolvimento').removeClass('btn btn-primary').addClass('btn btn-default');
}

$(document).ready(function(){
	var dateTime = FLUIGC.calendar('#dataPrevisao', {
		pickDate: true,
		pickTime: true,
		sideBySide: true,
	    useSeconds: true
	});
	var atividade = getWKNumState();
	if (atividade == 0 || atividade == 1){
		preencherSolicitante();
	}
	if (atividade == 63){
		var categoria = document.getElementById("categoria").value;
		var prioridade = document.getElementById("prioridade").value;
		if (categoria == "Bug" && prioridade == ""){
			var opcao = "";
			opcao += "<option selected disabled>Selecione uma categoria</option>";
			document.getElementById("categoria").innerHTML += opcao;
		}
		document.getElementById("categoria").onchange = function (){
			var categoria = document.getElementById("categoria").value;
			if (categoria == 'Bug' || categoria == 'Melhoria'){
				$("#dataPrevisao").prop("disabled", false);
			}
			else{
				$("#dataPrevisao").prop("disabled", true);
			}
		}
	}
	if (atividade == 68){
		FLUIGC.switcher.init('#switchSolucao');
		document.getElementById('proximoPasso').value = 'false';
		FLUIGC.switcher.onChange($('#switchSolucao'), function(event, state){
			document.getElementById('proximoPasso').value = FLUIGC.switcher.getState('#switchSolucao');
		});

		var ratings = $(".rating");
		if (ratings.length > 0) ratingStars(ratings);
		function ratingStars(stars){
			$.each(stars, function(i, obj)
			{
			    var field = $(this).closest(".form-group").find(".rating-value");
					var tgt = $(obj);
					tgt.html("");
					var rating = FLUIGC.stars(tgt,{
					value: field.val()
				});
		        rating.on("click", function(o){
		            field.val($(this).index() + 1);
		        });
			});
		}
	}
});
