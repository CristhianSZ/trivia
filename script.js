// --- Lógica de Scroll y Animación ---
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showHelp() {
    document.getElementById('modal-ayuda').style.display = 'block';
}

function hideHelp() {
    document.getElementById('modal-ayuda').style.display = 'none';
}

// --- Lógica de la Trivia ---
$(document).ready(function() {
    const preguntas = [
        { pregunta: "¿Qué es el 'phishing'?", opciones: ["Un tipo de software antivirus.", "Un intento de obtener información sensible (como contraseñas y datos de tarjetas) haciéndose pasar por una entidad confiable.", "Una técnica para mejorar la velocidad de internet.", "Un pez robot que limpia los océanos."], respuestaCorrecta: 1 },
        { pregunta: "¿Cuál de las siguientes es la contraseña más segura?", opciones: ["12345678", "password", "MiPerroFirulais1999", "Tr!v1@S3gur4#2025"], respuestaCorrecta: 3 },
        { pregunta: "¿Qué significa la 'S' en HTTPS?", opciones: ["Súper", "Simple", "Seguro", "Sistema"], respuestaCorrecta: 2 },
        { pregunta: "Si recibes un correo de tu banco pidiéndote hacer clic en un enlace para verificar tu cuenta, ¿qué deberías hacer?", opciones: ["Hacer clic en el enlace inmediatamente.", "Ignorar el correo y no hacer nada.", "Ir directamente al sitio web oficial del banco escribiendo la dirección en el navegador y verificar desde allí.", "Responder al correo con tus datos."], respuestaCorrecta: 2 },
        { pregunta: "¿Qué es el malware?", opciones: ["Un tipo de hardware para computadoras.", "Software diseñado para dañar o infiltrarse en un sistema informático sin el consentimiento del propietario.", "Una red social para programadores.", "Un componente de la memoria RAM."], respuestaCorrecta: 1 },
        { pregunta: "¿Por qué es importante mantener actualizado tu software?", opciones: ["Para tener las últimas funciones de diseño y emojis.", "Porque las actualizaciones a menudo incluyen parches de seguridad que protegen contra nuevas amenazas.", "No es importante, las actualizaciones solo ocupan espacio.", "Para que la computadora funcione más lento."], respuestaCorrecta: 1 },
        { pregunta: "Al usar una red Wi-Fi pública, ¿qué es lo más seguro?", opciones: ["Realizar transacciones bancarias, ya que son redes rápidas.", "Evitar ingresar información sensible y, si es necesario, usar una VPN.", "Compartir archivos personales con otros usuarios de la red.", "Desactivar el antivirus para mejorar la conexión."], respuestaCorrecta: 1 },
        { pregunta: "¿Qué es la autenticación de dos factores (2FA)?", opciones: ["Usar dos contraseñas diferentes para la misma cuenta.", "Un método de seguridad que requiere dos formas de verificación para acceder a una cuenta (ej. contraseña y un código en tu teléfono).", "Una forma de iniciar sesión el doble de rápido.", "Un antivirus que revisa los archivos dos veces."], respuestaCorrecta: 1 },
        { pregunta: "¿Qué es el ciberacoso o 'cyberbullying'?", opciones: ["Un juego en línea popular.", "Enviar correos de publicidad masiva.", "El uso de medios digitales para acosar, intimidar o molestar a una persona o grupo.", "Un virus que roba fotos."], respuestaCorrecta: 2 },
        { pregunta: "Compartir tu ubicación exacta en redes sociales en tiempo real es:", opciones: ["Una buena práctica para que tus amigos sepan dónde estás.", "Completamente seguro, ya que solo tus amigos pueden verlo.", "Un riesgo potencial para tu seguridad personal.", "Obligatorio para poder publicar fotos."], respuestaCorrecta: 2 }
    ];

    let preguntaActual = 0;
    let puntaje = 0;
    let nombreJugador = "";

    // --- Eventos de los botones ---
    $('#btn-empezar-juego').on('click', function() {
        nombreJugador = $('#nombre-jugador').val().trim();
        if (nombreJugador === "") {
            alert("Por favor, ingresa tu nombre.");
            return;
        }
        
        // Animación de transición entre nombre y trivia
        $('#contenedor-nombre').animate({ opacity: 0 }, 400, function() {
            $(this).addClass('hidden');
            $('#contenedor-trivia').removeClass('hidden').css('opacity', 0).animate({ opacity: 1 }, 400);
            iniciarJuego();
        });
    });

    // --- Funciones del Juego ---
    function iniciarJuego() {
        preguntaActual = 0;
        puntaje = 0;
        mostrarPregunta();
    }

    function mostrarPregunta() {
        const dataPregunta = preguntas[preguntaActual];
        $('#progreso').text(`Pregunta ${preguntaActual + 1} de ${preguntas.length}`);
        $('#pregunta').text(dataPregunta.pregunta);
        $('#opciones').empty();

        dataPregunta.opciones.forEach((opcion, index) => {
            const boton = $('<button></button>')
                .text(opcion)
                .addClass('btn-opcion')
                .on('click', () => seleccionarRespuesta(index));
            $('#opciones').append(boton);
        });
    }

    function seleccionarRespuesta(indexSeleccionado) {
        $('.btn-opcion').prop('disabled', true); // Deshabilitar todos los botones
        const dataPregunta = preguntas[preguntaActual];
        const botonSeleccionado = $('.btn-opcion').eq(indexSeleccionado);

        if (indexSeleccionado === dataPregunta.respuestaCorrecta) {
            puntaje++;
            botonSeleccionado.addClass('correcta');
        } else {
            botonSeleccionado.addClass('incorrecta');
            $('.btn-opcion').eq(dataPregunta.respuestaCorrecta).addClass('correcta');
        }

        // Transición a la siguiente pregunta o a los resultados
        setTimeout(() => {
            preguntaActual++;
            if (preguntaActual < preguntas.length) {
                // Animación para cambiar de pregunta
                $('#contenedor-trivia').animate({ opacity: 0 }, 400, function() {
                    mostrarPregunta();
                    $(this).animate({ opacity: 1 }, 400);
                });
            } else {
                mostrarResultados();
                scrollToSection('section-resultados');
            }
        }, 1500);
    }

    function mostrarResultados() {
        $('#nombre-resultado').text(`¡Buen trabajo, ${nombreJugador}!`);
        $('#puntaje').text(`${puntaje}/${preguntas.length}`);

        let mensaje = "";
        if (puntaje >= 8) {
            mensaje = "¡Excelente! Tu conocimiento sobre ciudadanía digital es sólido.";
        } else if (puntaje >= 5) {
            mensaje = "¡Buen trabajo! Conoces las bases, pero siempre hay espacio para aprender más.";
        } else {
            mensaje = "Te animamos a informarte más para protegerte en la red. ¡Cada día se aprende algo nuevo!";
        }
        $('#mensaje-final').text(mensaje);
    }
    
    // Reiniciar el estado del juego cuando se vuelve a la pantalla de inicio
    $('button[onclick*="section-inicio"]').on('click', function() {
        setTimeout(() => {
            $('#contenedor-nombre').removeClass('hidden').css('opacity', 1);
            $('#contenedor-trivia').addClass('hidden').css('opacity', 0);
            $('#nombre-jugador').val('');
        }, 800); // Esperar a que el scroll termine
    });
});
