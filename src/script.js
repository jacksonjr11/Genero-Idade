function verificar() {
    var data = new Date();
    var aano = data.getFullYear();
    var fano = Number(document.getElementById('txtano').value)
    var res = document.querySelector('div#res')

    if (fano == 0 || fano > aano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else {
        var fsex = document.getElementsByName('radsex');
        var idade = aano - fano;
        var genero = '0'
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.style.width = '300px' 
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src','../assets/crianca-m.jpg')
                
            }
            else if (idade<21){
                img.setAttribute('src','../assets/jovem-m.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src','../assets/adulto-m.jpg')
            }
            else {
                img.setAttribute('src','../assets/idoso-m.jpg')
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src','../assets/crianca-f.jpg')
            }
            else if (idade<21){
                img.setAttribute('src','../assets/jovem-f.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src','../assets/adulta-f.jpg')
            }
            else {
                img.setAttribute('src','../assets/idosa-f.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}