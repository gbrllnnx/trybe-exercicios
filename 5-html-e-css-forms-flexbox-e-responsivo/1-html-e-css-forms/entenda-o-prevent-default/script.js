// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

// Exercício 1
// Adicione um evento click no elemento a que possui o id href. Na função do evento, implemente o método preventDefault para prevenir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.
hrefLink.addEventListener('click', (Event) => {
    Event.preventDefault();
});
    
// Exercício 2
// Adicione um evento click no elemento checkbox que possui o id input-checkbox. Na função do evento, implemente o método preventDefault para prevenir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.
inputCheckbox.addEventListener('click', (Event) => {
    Event.preventDefault();
});

// Exercício 3
// Adicione um evento keypress no elemento input type="text" que possui o id input-text. Na função do evento, implemente o método preventDefault de forma que somente o caractere a (letra “a” minúscula) possa ser digitado na caixinha.
inputText.addEventListener('keypress', (Event) => {
    if (Event.key !== 'a') {
        Event.preventDefault();
    }
});
