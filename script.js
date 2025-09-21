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
    // CAMBIO 1: Array expandido a 30 preguntas
    const preguntas = [
        // 10 originales
        { pregunta: "¿Qué es el 'phishing'?", opciones: ["Un tipo de software antivirus.", "Un intento de obtener información sensible (como contraseñas y datos de tarjetas) haciéndose pasar por una entidad confiable.", "Una técnica para mejorar la velocidad de internet.", "Un pez robot que limpia los océanos."], respuestaCorrecta: 1 },
        { pregunta: "¿Cuál de las siguientes es la contraseña más segura?", opciones: ["12345678", "password", "MiPerroFirulais1999", "Tr!v1@S3gur4#2025"], respuestaCorrecta: 3 },
        { pregunta: "¿Qué significa la 'S' en HTTPS?", opciones: ["Súper", "Simple", "Seguro", "Sistema"], respuestaCorrecta: 2 },
        { pregunta: "Si recibes un correo de tu banco pidiéndote hacer clic en un enlace para verificar tu cuenta, ¿qué deberías hacer?", opciones: ["Hacer clic en el enlace inmediatamente.", "Ignorar el correo y no hacer nada.", "Ir directamente al sitio web oficial del banco escribiendo la dirección en el navegador y verificar desde allí.", "Responder al correo con tus datos."], respuestaCorrecta: 2 },
        { pregunta: "¿Qué es el malware?", opciones: ["Un tipo de hardware para computadoras.", "Software diseñado para dañar o infiltrarse en un sistema informático sin el consentimiento del propietario.", "Una red social para programadores.", "Un componente de la memoria RAM."], respuestaCorrecta: 1 },
        { pregunta: "¿Por qué es importante mantener actualizado tu software?", opciones: ["Para tener las últimas funciones de diseño y emojis.", "Porque las actualizaciones a menudo incluyen parches de seguridad que protegen contra nuevas amenazas.", "No es importante, las actualizaciones solo ocupan espacio.", "Para que la computadora funcione más lento."], respuestaCorrecta: 1 },
        { pregunta: "Al usar una red Wi-Fi pública, ¿qué es lo más seguro?", opciones: ["Realizar transacciones bancarias, ya que son redes rápidas.", "Evitar ingresar información sensible y, si es necesario, usar una VPN.", "Compartir archivos personales con otros usuarios de la red.", "Desactivar el antivirus para mejorar la conexión."], respuestaCorrecta: 1 },
        { pregunta: "¿Qué es la autenticación de dos factores (2FA)?", opciones: ["Usar dos contraseñas diferentes para la misma cuenta.", "Un método de seguridad que requiere dos formas de verificación para acceder a una cuenta (ej. contraseña y un código en tu teléfono).", "Una forma de iniciar sesión el doble de rápido.", "Un antivirus que revisa los archivos dos veces."], respuestaCorrecta: 1 },
        { pregunta: "¿Qué es el ciberacoso o 'cyberbullying'?", opciones: ["Un juego en línea popular.", "Enviar correos de publicidad masiva.", "El uso de medios digitales para acosar, intimidar o molestar a una persona o grupo.", "Un virus que roba fotos."], respuestaCorrecta: 2 },
        { pregunta: "Compartir tu ubicación exacta en redes sociales en tiempo real es:", opciones: ["Una buena práctica para que tus amigos sepan dónde estás.", "Completamente seguro, ya que solo tus amigos pueden verlo.", "Un riesgo potencial para tu seguridad personal.", "Obligatorio para poder publicar fotos."], respuestaCorrecta: 2 },
        // 20 preguntas adicionales
        { pregunta: "¿Qué es un 'firewall' o cortafuegos?", opciones: ["Un programa para calentar tu CPU.", "Una barrera de seguridad que controla el tráfico de red entrante y saliente.", "Un tipo de pantalla de alta resolución.", "Un accesorio para evitar que la laptop se sobrecaliente."], respuestaCorrecta: 1 },
        { pregunta: "¿Qué es el 'ransomware'?", opciones: ["Un software que te paga por usarlo.", "Un tipo de malware que bloquea tus archivos y exige un rescate para liberarlos.", "Una herramienta para gestionar finanzas personales.", "Un sistema operativo de código abierto."], respuestaCorrecta: 1 },
        { pregunta: "Las 'cookies' en un navegador web son:", opciones: ["Pequeños archivos de texto que los sitios web guardan en tu dispositivo para recordar información sobre ti.", "Virus que se comen tus datos.", "Recetas de galletas que se descargan automáticamente.", "Anuncios emergentes."], respuestaCorrecta: 0 },
        { pregunta: "¿Cuál de estas acciones ayuda a proteger tu privacidad en línea?", opciones: ["Usar la misma contraseña para todas tus cuentas.", "Aceptar todos los permisos que solicitan las apps sin leerlos.", "Revisar y ajustar la configuración de privacidad en tus redes sociales.", "Publicar tu número de teléfono para que tus amigos te encuentren."], respuestaCorrecta: 2 },
        { pregunta: "¿Qué es una VPN (Red Privada Virtual)?", opciones: ["Una red social exclusiva para gamers.", "Un tipo de conexión a internet de alta velocidad.", "Una herramienta que crea una conexión segura y cifrada a través de una red pública.", "Un antivirus para dispositivos móviles."], respuestaCorrecta: 2 },
        { pregunta: "Si encuentras una oferta en línea que parece 'demasiado buena para ser verdad', probablemente es:", opciones: ["Una oportunidad única que debes aprovechar.", "Una estafa o 'scam'.", "Un error de precio que la tienda debe respetar.", "Una promoción de lanzamiento."], respuestaCorrecta: 1 },
        { pregunta: "¿Qué significa 'cifrado de extremo a extremo'?", opciones: ["Que solo el emisor y el receptor pueden leer los mensajes.", "Que el mensaje se envía en línea recta.", "Que el mensaje se autodestruye después de leerse.", "Que el mensaje está escrito en un idioma antiguo."], respuestaCorrecta: 0 },
        { pregunta: "El 'doxing' es la práctica de:", opciones: ["Crear documentos en línea de forma colaborativa.", "Investigar y publicar información privada de un individuo sin su consentimiento.", "Programar un robot para realizar tareas repetitivas.", "Diagnosticar problemas de hardware en una computadora."], respuestaCorrecta: 1 },
        { pregunta: "¿Cuál es un buen hábito al descargar una nueva aplicación móvil?", opciones: ["Descargarla de sitios no oficiales para obtenerla gratis.", "Ignorar los permisos que solicita.", "Leer las reseñas y verificar los permisos que solicita antes de instalar.", "Darle acceso a todos tus contactos y fotos."], respuestaCorrecta: 2 },
        { pregunta: "¿Qué es un 'troyano' en informática?", opciones: ["Un programa de ejercicios para la mente.", "Un tipo de malware que se disfraza de software legítimo.", "Un sistema de seguridad de la antigua Grecia.", "Un protector de pantalla animado."], respuestaCorrecta: 1 },
        { pregunta: "¿Para qué sirve el modo incógnito de un navegador?", opciones: ["Para ser completamente anónimo en internet.", "Para evitar que tu proveedor de internet vea lo que haces.", "Para que el navegador no guarde tu historial de búsqueda, cookies y datos de sitios.", "Para aumentar la velocidad de descarga."], respuestaCorrecta: 2 },
        { pregunta: "La 'ingeniería social' se refiere a:", opciones: ["Planificar eventos sociales a través de apps.", "La manipulación psicológica de personas para que realicen acciones o divulguen información confidencial.", "Estudiar cómo interactúan las personas en las redes sociales.", "Diseñar software fácil de usar."], respuestaCorrecta: 1 },
        { pregunta: "¿Qué es el 'smishing'?", opciones: ["Una nueva red social de videos cortos.", "Un tipo de phishing que se realiza a través de mensajes de texto (SMS).", "Un juego de realidad aumentada.", "Una técnica para comprimir archivos de video."], respuestaCorrecta: 1 },
        { pregunta: "Una 'huella digital' es:", opciones: ["La marca que dejas en la pantalla de tu dispositivo.", "El rastro de datos que dejas al usar internet.", "Un método de desbloqueo biométrico.", "Un tipo de firma electrónica."], respuestaCorrecta: 1 },
        { pregunta: "¿Por qué no deberías usar la misma contraseña en múltiples sitios?", opciones: ["Porque es difícil de recordar.", "Porque si un sitio sufre una brecha de seguridad, todas tus otras cuentas quedan vulnerables.", "Porque los sitios web te penalizan por ello.", "Porque ralentiza el inicio de sesión."], respuestaCorrecta: 1 },
        { pregunta: "¿Qué es un 'botnet'?", opciones: ["Una red social para robots.", "Una red de computadoras infectadas controladas por un atacante.", "El departamento de robótica de una empresa.", "Un tipo de conexión a internet inalámbrica."], respuestaCorrecta: 1 },
        { pregunta: "Al crear una cuenta en línea, ¿qué dato personal deberías evitar usar como nombre de usuario?", opciones: ["Un apodo creativo.", "Tu dirección de correo electrónico completa.", "Una combinación de letras y números.", "Tu personaje de videojuego favorito."], respuestaCorrecta: 1 },
        { pregunta: "¿Qué es el 'clickjacking'?", opciones: ["Un juego donde haces clic lo más rápido posible.", "Una técnica maliciosa para engañar a un usuario y hacer que haga clic en algo diferente a lo que percibe.", "Un accesorio para el ratón del ordenador.", "Una forma de medir la popularidad de un enlace."], respuestaCorrecta: 1 },
        { pregunta: "Si un amigo te envía un archivo extraño por chat sin contexto, ¿qué deberías hacer?", opciones: ["Abrirlo inmediatamente para ver qué es.", "Preguntarle qué es antes de abrirlo, para confirmar que realmente lo envió él.", "Reenviarlo a todos tus contactos.", "Borrar el mensaje sin decir nada."], respuestaCorrecta: 1 },
        { pregunta: "¿Qué es una política de privacidad?", opciones: ["Una ley que te obliga a mantener tus secretos.", "Un documento que explica cómo una organización maneja los datos personales que recopila.", "Una función para hacer tu perfil de red social privado.", "Un tipo de seguro contra el robo de identidad."], respuestaCorrecta: 1 }
    ];

    let preguntasDelJuego = []; // Almacenará las 5 preguntas aleatorias
    const NUMERO_DE_PREGUNTAS_A_JUGAR = 5; // Constante para la cantidad de preguntas
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
        
        // CAMBIO 2: Implementar selección aleatoria de 5 preguntas
        const preguntasMezcladas = [...preguntas].sort(() => 0.5 - Math.random());
        preguntasDelJuego = preguntasMezcladas.slice(0, NUMERO_DE_PREGUNTAS_A_JUGAR);
        
        mostrarPregunta();
    }

    function mostrarPregunta() {
        // Ahora usamos el array 'preguntasDelJuego'
        const dataPregunta = preguntasDelJuego[preguntaActual];
        
        // CAMBIO 3: Actualizar referencias de longitud
        $('#progreso').text(`Pregunta ${preguntaActual + 1} de ${NUMERO_DE_PREGUNTAS_A_JUGAR}`);
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
        $('.btn-opcion').prop('disabled', true);
        const dataPregunta = preguntasDelJuego[preguntaActual];
        const botonSeleccionado = $('.btn-opcion').eq(indexSeleccionado);

        if (indexSeleccionado === dataPregunta.respuestaCorrecta) {
            puntaje++;
            botonSeleccionado.addClass('correcta');
        } else {
            botonSeleccionado.addClass('incorrecta');
            $('.btn-opcion').eq(dataPregunta.respuestaCorrecta).addClass('correcta');
        }

        setTimeout(() => {
            preguntaActual++;
            // CAMBIO 4: Modificar la lógica del juego para terminar a las 5 preguntas
            if (preguntaActual < NUMERO_DE_PREGUNTAS_A_JUGAR) {
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
        // CAMBIO 3: Actualizar referencias de longitud en el puntaje
        $('#puntaje').text(`${puntaje}/${NUMERO_DE_PREGUNTAS_A_JUGAR}`);

        let mensaje = "";
        const porcentaje = puntaje / NUMERO_DE_PREGUNTAS_A_JUGAR;
        
        if (porcentaje >= 0.8) { // 4 o 5 correctas
            mensaje = "¡Excelente! Tu conocimiento sobre ciudadanía digital es sólido.";
        } else if (porcentaje >= 0.6) { // 3 correctas
            mensaje = "¡Buen trabajo! Conoces las bases, pero siempre hay espacio para aprender más.";
        } else { // 0, 1 o 2 correctas
            mensaje = "Te animamos a informarte más para protegerte en la red. ¡Cada día se aprende algo nuevo!";
        }
        $('#mensaje-final').text(mensaje);
    }
    
    $('button[onclick*="section-inicio"]').on('click', function() {
        setTimeout(() => {
            $('#contenedor-nombre').removeClass('hidden').css('opacity', 1);
            $('#contenedor-trivia').addClass('hidden').css('opacity', 0);
            $('#nombre-jugador').val('');
        }, 800);
    });
});
