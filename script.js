document.addEventListener("DOMContentLoaded", () => {
    
    // LOGGER DE LA TERMINAL DE CONTROL
    const terminalLog = document.getElementById("terminal-log");
    function appendLog(mensaje) {
        if (terminalLog) {
            const marcaDeTiempo = new Date().toLocaleTimeString();
            const parrafo = document.createElement("p");
            parrafo.innerHTML = `<span style="color: #64748b">[${marcaDeTiempo}]</span> ${mensaje}`;
            terminalLog.appendChild(parrafo);
            terminalLog.scrollTop = terminalLog.scrollHeight; // Auto-scroll
        }
    }

    // 1. MANEJO E INTERACTIVIDAD DE PESTAÑAS (TABS)
    const botonesNav = document.querySelectorAll(".nav-btn");
    const secciones = document.querySelectorAll(".content-section");

    botonesNav.forEach(boton => {
        boton.addEventListener("click", () => {
            botonesNav.forEach(btn => btn.classList.remove("active"));
            boton.classList.add("active");

            secciones.forEach(sec => sec.classList.remove("active-section"));

            const targetId = boton.getAttribute("data-target");
            const seccionDestino = document.getElementById(targetId);
            if (seccionDestino) {
                seccionDestino.classList.add("active-section");
                appendLog(`Navegado a la sección: ${targetId.toUpperCase()}`);
            }
        });
    });

    // 2. MONITOREO EN TIEMPO REAL (SIMULACIÓN DE HARDWARE)
    const tempElement = document.getElementById('live-temp');
    const powerElement = document.getElementById('live-power');

    function simularDatosHardware() {
        if (tempElement && powerElement) {
            const tempSimulada = (20.5 + Math.random() * 4).toFixed(1);
            const potenciaSimulada = (1.1 + Math.random() * 0.9).toFixed(2);

            tempElement.innerText = `${tempSimulada} °C`;
            powerElement.innerText = `${potenciaSimulada} kWh`;
        }
    }
    setInterval(simularDatosHardware, 3000);
    simularDatosHardware();

    // 3. ACTUADOR INTERACTIVO (MÁQUINA DE ESTADO DE CERRADURA)
    const btnLock = document.getElementById('btn-lock');
    const statusLock = document.getElementById('lock-status');

    if (btnLock && statusLock) {
        btnLock.addEventListener('click', () => {
            if (statusLock.classList.contains('locked')) {
                statusLock.classList.remove('locked');
                statusLock.classList.add('unlocked');
                statusLock.innerText = 'DESBLOQUEADO';
                appendLog("<span style='color: #39ff14'>CMD_SUCCESS: Cerradura abierta en la nube.</span>");
            } else {
                statusLock.classList.remove('unlocked');
                statusLock.classList.add('locked');
                statusLock.innerText = 'CERRADO';
                appendLog("<span style='color: #ff3131'>CMD_SUCCESS: Cerradura asegurada con éxito.</span>");
            }
        });
    }
});
