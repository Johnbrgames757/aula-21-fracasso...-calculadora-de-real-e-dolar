const toggleBtn = document.getElementById('toggle');
const body = document.body;

toggleBtn.addEventListener('click', function(){
body.classList.toggle('dark-mode')
}
)

function converterMoeda(){
    const valor = document.getElementById("valor").value;
    const conversor = valor / 5;
    document.getElementById("convertido").textContent = conversor.toFixed (2);
}