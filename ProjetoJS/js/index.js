const faqs = document.querySelectorAll(".faq"); //Aqui, document.querySelectorAll(".faq") está selecionando todos os elementos que possuem a classe "faq" no documento HTML. 
faqs.forEach(faq => { //inicia um loop forEach que itera sobre cada item da lista de perguntas frequentes. O parâmetro faq representa cada item individualmente durante a iteração.
    faq.addEventListener("click", () => { // adiciona um ouvinte de evento de clique a cada item. Isso significa que quando o item for clicado, a função callback definida será executada.
        faq.classList.toggle("active")
     }) // alterna a presença da classe "active" no elemento faq. Se a classe "active" estiver presente, ela é removida; caso contrário, ela é adicionada. Isso permite alternar o estilo ou comportamento do elemento quando ele é clicado.
})