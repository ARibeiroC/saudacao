function initial(){
    var foto = document.querySelector('#foto')
    var texto = document.querySelector('#text')
    var back = document.querySelector('#bgColor')
    var rodape = document.querySelector('#rodape')
    if (manha.checked) {
        foto.src = 'imagem/paisagem/amanhecer300x300.jpg'
        texto.innerHTML = 'Bom dia!'
        back.style.background = '#ffcd91'
        rodape.style.color = 'black'

    }else if (tarde.checked){
        foto.src = 'imagem/paisagem/paisagem-tarde300x300.JPG'
        texto.innerHTML = 'Boa Tarde!'
        back.style.background = 'cornflowerblue'
        rodape.style.color = 'black'
    }else {
        foto.src = 'imagem/cidade/cidade-noite300x300.jpg'
        texto.innerHTML = 'Boa Noite!'
        back.style.background = '#001a5f'
        rodape.style.color = 'white'
    }
}

function mouseEnter(){
    var mEnter = document.querySelector('#btn')
    mEnter.style.background = '#bee4e4'
}

function mouseOut(){
    var mEnter = document.querySelector('#btn')
    mEnter.style.background = 'cornflowerblue'
}