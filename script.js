function contar() {
    let ini = document.getElementByInd('txti')
    let fim = document.getElementByInd('txtf')
    let passo = document.getElementByInd('txtp')
    let res = document.getElementById(res)

    if (ini.valeu.length == 0 || fim.valeu.length == 0 || passo.valeu.length == 0) {
        res.innerHTML = 'Impossivel contar!'
       // window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.valeu)
        let f = Number(fim.valeu)
        let p = Number(passo.valeu)
        if (p <= 0) { 
            window.alert('Passo invalido!')
            p = 1
        }    
        if (i < f) {
            // Contagem crescente
          for(let c = i; c <= f; c += p) {
            res.innerHTML += ' ${c} \u{1F449}'
          }
        } else {
            // Contagem regressiva
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ' ${c} \u{1F449}'
        }
    }
    res.innerHTML += ' ${c} \u{1F3C1}'
        
    }
}