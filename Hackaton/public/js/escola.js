$("#posicaoRanking").hide();
$("#extratoBem").hide();
$("#classificaoAlunos").hide();
$("#msgMetal").hide();
$("#msgPlastico").hide();
$("#msgVidro").hide();
$("#msgTnt").hide();

$(document).ready(function () {

    // $("#AtivaPosicaoRanking").click(function(){
    //     $("#posicaoRanking").toggle();
    // })
    // $("#AtivaextratoBem").click(function(){
    //     $("#extratoBem").toggle();
    // })
    // $("#AtivaclassificaoAlunos").click(function(){
    //     $("#classificaoAlunos").toggle();
    // })
    $("#saco_vidro").click(function(){
        $("#msgVidro").show();
    })
    $("#saco_metal").click(function(){
        $("#msgMetal").show();
    })
    $("#saco_plastico").click(function(){
        $("#msgPlastico").show();
    })
    $("#saco_tnt").click(function(){
        $("#msgTnt").show();
    })
})
