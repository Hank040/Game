window.addEventListener("keydown", function(e) {
    // Impede a ação padrão das teclas de seta
    if ([37, 38, 39, 40].includes(e.keyCode)) {
        e.preventDefault();
    }
}, false);