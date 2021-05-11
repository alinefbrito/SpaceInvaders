# SpaceInvaders
Projeto Space Invaders adaptado da séria iniciada em  https://www.codeproject.com/Articles/642499/Learn-JavaScript-Part-1-Create-a-Starfield

Projeto alterado para adequação em OOP

Estrutura do projeto:
1. index.html
2. js
	3. 	main.js
	4. 	star.js
	5. 	starfield.js
6. css
	7. 	style.css

## Index.html

Estrutura Inicial do projeto. página de acesso contendo os elementos fundamentais.
- meta tags
- div com os elementos de tela
- elemento Canvas 
-referências (CSS e JS)

## Main.js

Arquivo que efetua a insciação dos principais elementos
recupera o contexto do Canvas e efetua instancia as classes necessárias

## Star

Classe compacta que estrutura um elemnto que representa um elemento utilizado como estrela

## Starfield

Constrói o efeito de campo estelar da tela através dos métodos implementados, conforme descritos a seguir
### constructor(ctx)
recebe como parametro o contexto do Canvas
Define os valores iniciais e define o tamanho do elemento canvas para corresponder a janela.

### inicializa()
Define o Event listener que reescalona o canvas quando a janela é redimensionada.
É necessário criar um cópia do contexto :
    var self = this;
para poder efetuar as alterações, uma vez que o mesmo é redefinido quando há modificações na tela

### start()

Define o conjunto inicial de estrelas que compõem o campo estelar, instanciado a classe Star.

Declara uma função de atualização através do set Interval, que irá atualizar as estrelas exibidas na tela

### desenha()

desenha as estrelas definidas no método start na tela

###   update()
Atualiza as estrelas presentes na tela criando a sensação de movimento



