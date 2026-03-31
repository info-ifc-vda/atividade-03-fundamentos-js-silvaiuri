function boas(nome, hora){
if (hora > 0 && hora <=12){
    console.log ("bom dia," + nome)

}else if (hora > 12 && hora <=10){
    console.log ("boa tarde," + nome);



} else{ console.log("boa noite, "+ nome);

}
}
const nome= "iuri";
const hora= 10;

 boas (nome, hora);