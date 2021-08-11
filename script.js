//menu hamburginho

var menuLista = document.getElementById('menu')

var btnMenu = document.getElementById('hamburginho')

var btnFechar = document.getElementById('botaoFechar')


//Abrir Menu

function abrirMenu(){

	menuLista.style.transform = 'translateX(0%)'

	menuLista.style.transition = '1s'

	btnMenu.style.visibility = 'hidden'

	btnFechar.style.visibility = 'visible'
}


//Fechar Menu


function fecharMenu(){

	menuLista.style.transform = 'translateX(100%)'

	btnMenu.style.visibility = 'visible'

	btnFechar.style.visibility = 'hidden'


}

/*

function sumirMenu(){

	menuLista.style.transform = 'translateX(100%)'

	btnMenu.style.visibility = 'visible'

	btnFechar.style.visibility = 'hidden'

}*/

