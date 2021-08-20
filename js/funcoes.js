function GerarUmaPiada(){
    const piadaAPI = "https://mipsum.herokuapp.com/frases/random";
    let piadaAtual = "";

    
$.ajax({
    url: piadaAPI,
    async : false,
    error: function(erro){
    console.log("Erro: ");
    console.log(erro);
    },
    success: function(dados){
        piadaAtual = dados.frase;
    }
});
document.querySelector(".piada-texto").innerText = piadaAtual;
}
const botaoGerarPiada = document.querySelector("#btCriarPiada");
botaoGerarPiada.onclick = function(){
    GerarUmaPiada();
}