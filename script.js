// --- Lógica de Scroll y Animación ---
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function showHelp() {
  document.getElementById("modal-ayuda").style.display = "block";
}

function hideHelp() {
  document.getElementById("modal-ayuda").style.display = "none";
}

// --- Lógica de la Trivia ---
$(document).ready(function () {
  // CAMBIO 1: Array expandido a 30 preguntas

  const preguntas = [
    // Bloque 1: Conceptos Básicos y Contraseñas
    {
      pregunta:
        "Te llega un mensaje directo que dice: '¡Ganaste un sorteo! Haz clic aquí para reclamar tu premio'. ¿Qué es lo más probable que sea?",
      opciones: [
        "Tu día de suerte y un premio real.",
        "Una trampa para robar tu cuenta o tus datos (phishing).",
        "Una invitación a una fiesta exclusiva.",
        "Un error del sistema que te envió un mensaje a ti.",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta:
        "¿Cuál de estas contraseñas es más difícil de adivinar para un hacker?",
      opciones: [
        "12345678",
        "tuNombre2008",
        "sol-luna-rio-marte7",
        "contraseña",
      ],
      respuestaCorrecta: 2,
    },
    {
      pregunta:
        "Cuando ves un candado 🔒 y 'https' en la barra de direcciones de una web, significa que...",
      opciones: [
        "La página es súper popular.",
        "La página es de un diseño moderno.",
        "La conexión es más segura y tu información viaja protegida.",
        "La página cargará más rápido que otras.",
      ],
      respuestaCorrecta: 2,
    },
    {
      pregunta:
        "Si tu 'amigo' te pide por chat que le pases tu contraseña para 'ayudarte con algo', ¿qué haces?",
      opciones: [
        "Se la pasas, para eso están los amigos.",
        "Le preguntas para qué la necesita y luego se la das.",
        "Le dices que no, las contraseñas son personales y no se comparten con nadie.",
        "Le das una contraseña antigua que ya no usas.",
      ],
      respuestaCorrecta: 2,
    },
    {
      pregunta: "¿Qué es un 'programa malicioso' o virus?",
      opciones: [
        "Una app que funciona mal y se cierra sola.",
        "Un programa diseñado para espiar, dañar tu dispositivo o robar tu información.",
        "Un tipo de hardware que se instala en la computadora.",
        "Una actualización obligatoria del sistema operativo.",
      ],
      respuestaCorrecta: 1,
    },

    // Bloque 2: Redes Sociales y Privacidad
    {
      pregunta: "¿Por qué es una buena idea actualizar tus apps y tu celular?",
      opciones: [
        "Para tener los emojis más nuevos.",
        "Porque las actualizaciones corrigen fallos y te protegen de nuevas amenazas de seguridad.",
        "Realmente no importa, solo ocupan espacio.",
        "Para que el celular funcione más lento y te compres otro.",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta:
        "Estás en un café con Wi-Fi gratis. ¿Qué es lo más seguro para hacer?",
      opciones: [
        "Comprar online con la tarjeta de tus padres.",
        "Chatear y navegar, pero evitar meter contraseñas o datos importantes.",
        "Descargar archivos pesados para aprovechar la velocidad.",
        "Desactivar el antivirus para que la conexión sea mejor.",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta:
        "El '2FA' o 'verificación en dos pasos' es cuando para entrar a tu cuenta necesitas...",
      opciones: [
        "Dos contraseñas distintas.",
        "Tu contraseña y algo más, como un código que te llega al celular.",
        "Iniciar sesión dos veces seguidas.",
        "Que un amigo confirme que eres tú.",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta: "¿Qué es el ciberacoso (cyberbullying )?",
      opciones: [
        "Un debate intenso sobre un videojuego.",
        "Bromear con tus amigos en un chat grupal.",
        "Usar la tecnología para molestar, humillar o amenazar a alguien repetidamente.",
        "Enviar muchos memes seguidos.",
      ],
      respuestaCorrecta: 2,
    },
    {
      pregunta:
        "Subir una story a Instagram mostrando la fachada de tu casa y diciendo 'solo en casa'... ¿es buena idea?",
      opciones: [
        "Sí, para que tus amigos sepan que pueden visitarte.",
        "Es arriesgado, porque gente desconocida puede saber dónde vives y que estás solo/a.",
        "Da igual, las stories se borran en 24 horas.",
        "Sí, para conseguir más visualizaciones.",
      ],
      respuestaCorrecta: 1,
    },

    // Bloque 3: Ciudadanía Digital y Huella Digital
    {
      pregunta: "¿Qué significa ser un 'ciudadano digital'?",
      opciones: [
        "Tener el último modelo de celular.",
        "Saber cómo comportarse de forma respetuosa y segura en internet.",
        "Tener más de 1000 seguidores en TikTok.",
        "Pasar más de 8 horas al día conectado.",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta: "Tu 'huella digital' es...",
      opciones: [
        "La marca de tu dedo en la pantalla del celular.",
        "El rastro que dejas en internet con tus likes, comentarios, fotos y búsquedas.",
        "Una app para firmar documentos online.",
        "Tu récord de velocidad escribiendo en el teclado.",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta:
        "Si ves que alguien está siendo acosado en un grupo de WhatsApp, ¿qué deberías hacer como buen ciudadano digital?",
      opciones: [
        "Ignorarlo para no meterte en problemas.",
        "Unirte a las burlas para ser popular.",
        "Apoyar a la víctima (en público o privado) y reportar el acoso si es necesario.",
        "Salir del grupo sin decir nada.",
      ],
      respuestaCorrecta: 2,
    },
    {
      pregunta: "Compartir FAKE NEWS (noticias falsas) provoca que...",
      opciones: [
        "Te vuelvas más popular por tener la 'primicia'.",
        "La gente se informe mejor sobre un tema.",
        "Se genere desinformación y conflictos innecesarios.",
        "Los sitios de noticias ganen más dinero.",
      ],
      respuestaCorrecta: 2,
    },
    {
      pregunta: "Antes de instalar una nueva app, es una buena idea...",
      opciones: [
        "Aceptar todos los permisos sin leer para empezar a usarla rápido.",
        "Descargarla de un sitio web raro para no pagar.",
        "Revisar qué permisos pide (¿realmente necesita acceso a tus contactos y micrófono?) y leer algunas reseñas.",
        "Darle 5 estrellas antes de probarla para apoyar al creador.",
      ],
      respuestaCorrecta: 2,
    },
    {
      pregunta:
        "Un 'troyano' es un programa dañino que se disfraza de algo útil, como...",
      opciones: [
        "Una actualización oficial del sistema.",
        "Un juego gratuito, un programa para descargar música o una app de filtros.",
        "Un antivirus muy conocido.",
        "Un documento de texto que te envía tu profesor.",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta: "El 'modo incógnito' del navegador sirve para...",
      opciones: [
        "Hacerte invisible para los hackers y el gobierno.",
        "Que tu historial de búsqueda y las cookies no se guarden EN ESE DISPOSITIVO.",
        "Aumentar la velocidad de tu internet al doble.",
        "Evitar que los sitios web te muestren anuncios.",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta: "La 'ingeniería social' es cuando un estafador...",
      opciones: [
        "Usa un programa complejo para hackearte.",
        "Te manipula con engaños para que le des tu información personal (ej. haciéndose pasar por un amigo).",
        "Estudia cómo la gente usa las redes sociales para una tesis.",
        "Diseña una app para organizar eventos.",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta:
        "Te llega un SMS que dice: 'Paquete no entregado. Sigue este enlace para reprogramar'. Esto es un ejemplo de...",
      opciones: [
        "Un servicio de mensajería muy eficiente.",
        "'Smishing' (phishing por SMS) para intentar estafarte.",
        "Un recordatorio útil de una compra que hiciste.",
        "Un mensaje enviado al número equivocado.",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta:
        "¿Por qué no es bueno usar la misma contraseña para tu email, Instagram y tu juego online favorito?",
      opciones: [
        "Porque es muy aburrido usar siempre la misma.",
        "Porque si hackean una de esas cuentas, el ladrón puede entrar a todas las demás.",
        "Porque las apps te penalizan si lo haces.",
        "Porque es más difícil de recordar que tres contraseñas diferentes.",
      ],
      respuestaCorrecta: 1,
    },

    // Bloque 4: Amenazas y Situaciones Reales
    {
      pregunta: "Un 'botnet' es básicamente...",
      opciones: [
        "Una red social solo para robots.",
        "Un ejército de computadoras 'zombies' infectadas que un hacker usa para atacar.",
        "El departamento de robótica de una universidad.",
        "Un torneo de videojuegos en línea.",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta:
        "Al crear un nombre de usuario, ¿cuál de estas opciones es mejor evitar?",
      opciones: [
        "Un apodo creativo como 'GalaxiaMusical'.",
        "Tu nombre completo y año de nacimiento, como 'JuanPerez2008'.",
        "Una combinación de tus gustos, como 'FanDeMarvel77'.",
        "Tu personaje de videojuego favorito.",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta:
        "Estás jugando y aparece un botón que dice 'Descarga GRATIS'. Al hacer clic, se abre una ventana para instalar otra cosa. Esto podría ser...",
      opciones: [
        "Un truco para ganar el juego.",
        "Una técnica de engaño llamada 'clickjacking' para que instales algo que no querías.",
        "Un bonus secreto del juego.",
        "Un simple error de programación (bug).",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta:
        "Si un amigo te manda por chat un archivo con un nombre raro sin decirte nada, ¿qué haces?",
      opciones: [
        "Lo abres de inmediato, la curiosidad te puede.",
        "Le preguntas: '¿Qué es esto? ¿Lo mandaste tú?'. Y esperas su confirmación.",
        "Se lo reenvías a otros amigos para ver qué opinan.",
        "Lo borras sin avisarle.",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta: "La 'política de privacidad' de una app es...",
      opciones: [
        "Un texto largo y aburrido que nadie lee.",
        "Un documento que explica qué datos tuyos recoge la app y para qué los usa.",
        "Las reglas para que tu perfil sea privado.",
        "Un seguro que te protege si te roban la cuenta.",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta:
        "Te descargas un programa para 'hackear' un juego y obtener vidas infinitas. ¿Qué riesgo corres?",
      opciones: [
        "Ninguno, esos programas son siempre seguros.",
        "Que el programa sea en realidad un virus que infecte tu dispositivo.",
        "Que el juego se vuelva demasiado fácil y aburrido.",
        "Que tus amigos te admiren por ser tan hábil.",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta:
        "Un 'cortafuegos' (firewall) en tu computadora o router actúa como...",
      opciones: [
        "Un ventilador para que no se caliente.",
        "Un guardia de seguridad que decide qué conexiones entran y salen de la red.",
        "Un acelerador para que tus juegos vayan más rápido.",
        "Un programa para organizar tus archivos.",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta:
        "Te aparece un aviso gigante y rojo que dice: '¡Tu PC está infectado! ¡Llama ya a este número!'. ¿Qué deberías hacer?",
      opciones: [
        "Llamar inmediatamente para que te ayuden.",
        "Cerrar el navegador (si es necesario, desde el administrador de tareas) porque es una estafa para asustarte.",
        "Pagar lo que te pidan para eliminar el 'virus'.",
        "Reiniciar la computadora y esperar que se solucione solo.",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta: "Publicar fotos de tus amigos sin su permiso...",
      opciones: [
        "Está bien si salen bien en la foto.",
        "Es una falta de respeto a su privacidad y a su imagen.",
        "Es normal, todo el mundo lo hace.",
        "Solo está mal si la foto es vergonzosa.",
      ],
      respuestaCorrecta: 1,
    },
    {
      pregunta:
        "Alguien te contacta online, es súper amable y te pide una foto tuya. ¿Qué es lo más seguro?",
      opciones: [
        "Enviarle una foto, pero una donde no se te vea muy bien.",
        "Preguntarle para qué la quiere y luego decidir.",
        "No enviar fotos tuyas a desconocidos y desconfiar de sus intenciones.",
        "Pedirle una foto suya primero para que sea justo.",
      ],
      respuestaCorrecta: 2,
    },
  ];

  let preguntasDelJuego = []; // Almacenará las 5 preguntas aleatorias
  const NUMERO_DE_PREGUNTAS_A_JUGAR = 5; // Constante para la cantidad de preguntas
  let preguntaActual = 0;
  let puntaje = 0;
  let nombreJugador = "";

  // --- Eventos de los botones ---
  $("#btn-empezar-juego").on("click", function () {
    nombreJugador = $("#nombre-jugador").val().trim();
    if (nombreJugador === "") {
      alert("Por favor, ingresa tu nombre.");
      return;
    }

    $("#contenedor-nombre").animate({ opacity: 0 }, 400, function () {
      $(this).addClass("hidden");
      $("#contenedor-trivia")
        .removeClass("hidden")
        .css("opacity", 0)
        .animate({ opacity: 1 }, 400);
      iniciarJuego();
    });
  });

  // --- Funciones del Juego ---
  function iniciarJuego() {
    preguntaActual = 0;
    puntaje = 0;

    // CAMBIO 2: Implementar selección aleatoria de 5 preguntas
    const preguntasMezcladas = [...preguntas].sort(() => 0.5 - Math.random());
    preguntasDelJuego = preguntasMezcladas.slice(
      0,
      NUMERO_DE_PREGUNTAS_A_JUGAR
    );

    mostrarPregunta();
  }

  function mostrarPregunta() {
    // Ahora usamos el array 'preguntasDelJuego'
    const dataPregunta = preguntasDelJuego[preguntaActual];

    // CAMBIO 3: Actualizar referencias de longitud
    $("#progreso").text(
      `Pregunta ${preguntaActual + 1} de ${NUMERO_DE_PREGUNTAS_A_JUGAR}`
    );
    $("#pregunta").text(dataPregunta.pregunta);
    $("#opciones").empty();

    dataPregunta.opciones.forEach((opcion, index) => {
      const boton = $("<button></button>")
        .text(opcion)
        .addClass("btn-opcion")
        .on("click", () => seleccionarRespuesta(index));
      $("#opciones").append(boton);
    });
  }

  function seleccionarRespuesta(indexSeleccionado) {
    $(".btn-opcion").prop("disabled", true);
    const dataPregunta = preguntasDelJuego[preguntaActual];
    const botonSeleccionado = $(".btn-opcion").eq(indexSeleccionado);

    if (indexSeleccionado === dataPregunta.respuestaCorrecta) {
      puntaje++;
      botonSeleccionado.addClass("correcta");
    } else {
      botonSeleccionado.addClass("incorrecta");
      $(".btn-opcion").eq(dataPregunta.respuestaCorrecta).addClass("correcta");
    }

    setTimeout(() => {
      preguntaActual++;
      // CAMBIO 4: Modificar la lógica del juego para terminar a las 5 preguntas
      if (preguntaActual < NUMERO_DE_PREGUNTAS_A_JUGAR) {
        $("#contenedor-trivia").animate({ opacity: 0 }, 400, function () {
          mostrarPregunta();
          $(this).animate({ opacity: 1 }, 400);
        });
      } else {
        mostrarResultados();
        scrollToSection("section-resultados");
      }
    }, 1500);
  }

  function mostrarResultados() {
    $("#nombre-resultado").text(`¡Buen trabajo, ${nombreJugador}!`);
    // CAMBIO 3: Actualizar referencias de longitud en el puntaje
    $("#puntaje").text(`${puntaje}/${NUMERO_DE_PREGUNTAS_A_JUGAR}`);

    let mensaje = "";
    const porcentaje = puntaje / NUMERO_DE_PREGUNTAS_A_JUGAR;

    if (porcentaje >= 0.8) {
      // 4 o 5 correctas
      mensaje =
        "¡Excelente! Tu conocimiento sobre ciudadanía digital es sólido.";
    } else if (porcentaje >= 0.6) {
      // 3 correctas
      mensaje =
        "¡Buen trabajo! Conoces las bases, pero siempre hay espacio para aprender más.";
    } else {
      // 0, 1 o 2 correctas
      mensaje =
        "Te animamos a informarte más para protegerte en la red. ¡Cada día se aprende algo nuevo!";
    }
    $("#mensaje-final").text(mensaje);
  }

  $('button[onclick*="section-inicio"]').on("click", function () {
    setTimeout(() => {
      $("#contenedor-nombre").removeClass("hidden").css("opacity", 1);
      $("#contenedor-trivia").addClass("hidden").css("opacity", 0);
      $("#nombre-jugador").val("");
    }, 800);
  });
});
