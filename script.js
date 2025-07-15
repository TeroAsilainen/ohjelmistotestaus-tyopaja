//summa
document.getElementById('summa').addEventListener('click', () => {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    if (isNaN(a) || isNaN(b)){
        document.getElementById('tulos').innerHTML = 'Virhe!';
    } else{
        const summa = parseFloat(a) + parseFloat(b);
    document.getElementById('tulos').innerHTML = summa;
    }
    
}
)

//erotus
document.getElementById('erotus').addEventListener('click', () => {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    if (isNaN(a) || isNaN(b)){
        document.getElementById('tulos').innerHTML = 'Virhe!';
    } else{
        const erotus = parseFloat(a) - parseFloat(b);
    document.getElementById('tulos').innerHTML = erotus;
    }
    
}
)

//tulo
document.getElementById('tulo').addEventListener('click', () => {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    if (isNaN(a) || isNaN(b)){
        document.getElementById('tulos').innerHTML = 'Virhe!';
    } else{
        const tulo = parseFloat(a) * parseFloat(b);
    document.getElementById('tulos').innerHTML = tulo;
    }
    
}
)

//osamäärä
document.getElementById('osamaara').addEventListener('click', () => {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    if (isNaN(a) || isNaN(b)){
        document.getElementById('tulos').innerHTML = 'Virhe!';
    } else{
        const osamaara = parseFloat(a) / parseFloat(b);
    document.getElementById('tulos').innerHTML = osamaara;
    }
    
}
)