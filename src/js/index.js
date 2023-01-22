const botaotrailer1 = document.querySelector(".botao-trailer1");
const botaotrailer2 = document.querySelector(".botao-trailer2");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2"); 
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const linkdovideo1 = video1.src;
const linkdovideo2 = video2.src;
const botaofecharmodal1 = document.querySelector(".fechar-modal1");
const botaofecharmodal2 = document.querySelector(".fechar-modal2");

function alternarmodal1(){
    modal1.classList.toggle("aberto");
}

function alternarmodal2(){
    modal2.classList.toggle("aberto");
}

botaotrailer1.addEventListener("click", () => {
    alternarmodal1 ();
    video1.setAttribute("src", linkdovideo1);
})

botaofecharmodal1.addEventListener("click", () => {
    alternarmodal1 ();
    video1.setAttribute("src","")
})

botaotrailer2.addEventListener("click", () => {
    alternarmodal2 ();
    video2.setAttribute("src", linkdovideo2);
})

botaofecharmodal2.addEventListener("click", () => {
    alternarmodal2 ();
    video2.setAttribute("src","")
})