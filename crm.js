/* LÓGICA MESAN Ω */
function ejecutarDiagnostico() {
    const rfc = document.getElementById('rfcInput').value;
    const btn = document.querySelector('.btn-primary');
    if(!rfc) return alert("Ingresa un RFC");

    btn.innerText = "ESCANEO ACTIVO...";
    setTimeout(() => {
        btn.innerText = "INICIAR DIAGNÓSTICO";
        document.getElementById('resultadoAlerta').style.display = 'block';
        document.getElementById('rfcAlertaText').innerText = "RFC: " + rfc.toUpperCase();
        
        const chat = document.getElementById('chatDisplay');
        chat.innerHTML += `<div style='color: #FF3B3B; margin-top:10px;'>[SENTINEL]: Riesgo detectado en ${rfc}.</div>`;
        chat.scrollTop = chat.scrollHeight;
    }, 2000);
}

function validarREPSE() {
    alert("Sincronizando con base de datos STPS...");
}

function consultarIA() {
    const q = document.getElementById('aiQuery').value;
    const chat = document.getElementById('chatDisplay');
    if(!q) return;
    chat.innerHTML += `<div style='color: #00D1FF; margin-top:5px;'>Tú: ${q}</div>`;
    setTimeout(() => {
        chat.innerHTML += `<div style='color: #fff; margin-top:5px;'>IA: Analizando impacto. Recomiendo activar fase de CONTENCIÓN.</div>`;
        chat.scrollTop = chat.scrollHeight;
    }, 1000);
    document.getElementById('aiQuery').value = "";
}
