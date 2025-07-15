



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