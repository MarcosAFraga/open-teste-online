//OBTER TODOS OS H1 DA PAGINA
var all_h1 = document.querySelectorAll("h1");

//CHAMAR FUNÇÃO SEMPRE QUE RODAR A PÁGINA
window.addEventListener("scroll", h1Visible);

if(window.scrollY == 0) h1Visible();

function h1Visible(){
    all_h1.forEach(h1 => {
        //POSIÇÃO DO H1 NA TELA
        var posicao_top_h1 =    h1.getBoundingClientRect().top    - window.innerHeight;
        var posicao_bottom_h1 = h1.getBoundingClientRect().bottom - window.innerHeight;

        //ELEMENTO APARECEU NA TELA 
        if(posicao_top_h1 < 0 && Math.abs(posicao_bottom_h1) < window.innerHeight)
            h1.classList.add("visibleAnimation");
    })
}
