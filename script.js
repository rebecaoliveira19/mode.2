function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'img')
        if (fsex[0].checked){
            genero = 'homen'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img-criança-menino.jpg')

            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagem-jovem--masculino.jpg')

            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img-adulto-homen.jpg')

            }else {
                //idoso
                img.setAttribute('src', 'img-idoso-homen.jpg')
            }    

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img-criança-femenina.jpg')

            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img-jovem-femenina.jpg')
                
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-jovem.jpg')

            }else {
                //idosa
                img.setAttribute('src', 'idosa-mulher.jpg')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}