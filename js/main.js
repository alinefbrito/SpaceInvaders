//recupera o elemento canvas
const canvas = document.getElementById('field');
//obtem o contexto 2d
const ctx = canvas.getContext('2d');



//inicializa a classe Starfield

let field = new Starfield(ctx);
field.inicializa();
field.start();