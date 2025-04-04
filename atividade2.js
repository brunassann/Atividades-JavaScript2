    let tempo = 30;
    
    let intervalo = setInterval(() => {
        document.write(tempo + "<br>");
        tempo--;
        
        if (tempo < 0) {
            clearInterval(intervalo);
            document.write("EXPLOSÃO");
        }
    }, 1000);
