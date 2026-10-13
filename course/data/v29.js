LESSONS["29"].vars = [
  {
    title: "En la fila del concierto", partner: "Mariana", place: "Fila del Auditorio · Monterrey",
    goal: "You're waiting in a long line for a concert. Start chatting with the person behind you and keep it going for a while: music, the city, travel. Find out something surprising about her.",
    board: {
      title: "Fila para el concierto", sub: "Monterrey, N.L. · faltan 45 minutos",
      cols: [
        [{ h: "Para empezar", items: [["¿También vienes por…?"], ["¿Ya los habías visto en vivo?"], ["¡Qué fila tan larga!, ¿no?"]] }],
        [{ h: "Temas", items: [["La banda, canciones favoritas"], ["Otros conciertos"], ["Monterrey y tu ciudad"], ["Planes para después"]] }]
      ],
      note: "Mariana has a surprising connection to the band. Find it."
    },
    words: [
      ["la fila", "line, queue"], ["el concierto", "concert"], ["en vivo", "live"], ["la banda, el grupo", "band"],
      ["la canción", "song"], ["el disco", "album"], ["la gira", "tour"], ["el boleto", "ticket"],
      ["fan", "fan"], ["la primera fila", "front row"], ["conocer en persona", "to meet in person"], ["llevar (tiempo)", "to have been (time)"]
    ],
    phrases: [
      ["¡Qué fila tan larga! ¿Llevas mucho aquí?", "What a long line! Have you been here long?"],
      ["¿Ya los habías visto en vivo?", "Had you seen them live before?"],
      ["¿Cuál es tu canción favorita?", "What's your favorite song?"],
      ["¿Neta? ¡No me digas!", "Really? No way!"],
      ["Hablando de conciertos, ¿has ido a…?", "Speaking of concerts, have you been to…?"]
    ],
    prompt: {
      role: `You are Mariana, 27, a dental student, waiting in line for a rock concert at the Auditorio in Monterrey. I'm in line in front of you and we've never met. Use "tú" with me.`,
      infoTitle: "YOU (MARIANA)",
      info: `The band is "Los Viajeros", a popular Mexican rock band (invent details about them if needed). You've seen them 6 times. Surprising fact: your uncle was their first drummer, before they were famous; you only reveal it if I ask good follow-up questions. You're from Saltillo, came with your sister (she's buying drinks). After the concert you're going for tacos de trompo.`,
      lead: `Let me start. Give friendly but medium-length answers. Ask me things back after a few turns. React with enthusiasm. Keep the conversation light.`,
      recast: `I say "¿Cuánto tiempo estás en la fila?" and you say "¿Cuánto llevo en la fila? Como una hora, ¡ya me duelen los pies!"`
    }
  },
  {
    title: "El primer día en el gimnasio", partner: "Beto", place: "Gimnasio · Cancún",
    goal: "You just joined a gym. Between exercises, make small talk with a regular. Ask about the gym, share about yourself, and see if you have something in common to plan a workout together.",
    board: {
      title: "Gimnasio Caribe Fit", sub: "Cancún, Q. Roo · 7 am",
      cols: [
        [{ h: "Para empezar", items: [["¿Vienes seguido?"], ["¿Esta máquina está ocupada?"], ["¿A qué hora hay menos gente?"]] }],
        [{ h: "Temas", items: [["El calor de Cancún"], ["Rutinas, deportes"], ["Trabajo, de dónde eres"], ["Lugares para correr o nadar"]] }]
      ],
      note: "Beto will invite you to something. Decide if you'll go."
    },
    words: [
      ["el gimnasio, el gym", "gym"], ["la máquina", "machine"], ["las pesas", "weights"], ["la rutina", "routine"],
      ["la serie", "set"], ["descansar", "to rest"], ["seguido", "often"], ["correr", "to run"],
      ["nadar", "to swim"], ["el entrenador", "trainer"], ["estar ocupado", "to be in use"], ["animarse", "to be up for it"]
    ],
    phrases: [
      ["Perdón, ¿estás usando esta máquina?", "Sorry, are you using this machine?"],
      ["¿Vienes seguido?", "Do you come here often?"],
      ["Yo apenas empecé esta semana.", "I just started this week."],
      ["¿Y desde cuándo entrenas?", "And how long have you been training?"],
      ["¡Órale, me animo!", "Wow, OK, I'm in!"]
    ],
    prompt: {
      role: `You are Beto, 35, a tour guide in Cancún who goes to the gym every morning at 7. I'm new at the gym. Use "tú" with me.`,
      infoTitle: "YOU (BETO)",
      info: `You've trained for 10 years and you run on the beach on Sundays at 6 am with a group. You know the gym well: less crowded at 2 pm, the AC doesn't work in the back room, the trainer Paco is great. You work as a tour guide to Chichén Itzá. You're friendly and a bit of a talker once you get going. You'll invite me to the Sunday beach run.`,
      lead: `Let me start (I'll ask about a machine). Answer and ask me something back. Keep the conversation going between "sets" (say "Espérame, hago una serie" sometimes). Invite me to the Sunday run near the end.`,
      recast: `I say "¿Desde cuándo tú entrenas aquí?" and you say "¿Que desde cuándo entreno? Uy, ¡desde hace diez años!"`
    }
  },
  {
    title: "La fiesta de la oficina", partner: "Lic. Navarro", place: "Fiesta de fin de año · CDMX", reg: "usted",
    goal: "At your company's end-of-year party, you end up next to a senior director you've never spoken to. Make polite small talk: work, the holidays, Mexico City. Keep it professional but friendly.",
    board: {
      title: "Posada de la empresa", sub: "Ciudad de México · salón del hotel",
      cols: [
        [{ h: "Para empezar", items: [["Qué bonita fiesta, ¿verdad?"], ["Creo que no nos conocemos. Soy…"], ["¿En qué área trabaja usted?"]] }],
        [{ h: "Temas seguros", items: [["El año, los proyectos"], ["Las vacaciones de diciembre"], ["Restaurantes, la ciudad"]] },
         { h: "Cuidado", items: [["No se queje del trabajo"]] }]
      ],
      note: "The director will ask about your area. Have something positive ready."
    },
    words: [
      ["el director, la directora", "director"], ["el área", "department"], ["la empresa", "company"], ["el proyecto", "project"],
      ["el año", "year"], ["las fiestas", "the holidays"], ["el brindis", "toast"], ["el intercambio de regalos", "gift exchange"],
      ["las vacaciones decembrinas", "December holidays"], ["el reto", "challenge"], ["lograr", "to achieve"], ["con permiso", "excuse me (leaving)"]
    ],
    phrases: [
      ["Creo que no nos conocemos. Trabajo en el área de capacitación.", "I don't think we've met. I work in the training department."],
      ["Fue un año con muchos retos, pero logramos mucho.", "It was a year with many challenges, but we achieved a lot."],
      ["¿Y usted qué planes tiene para las vacaciones?", "And what plans do you have for the holidays?"],
      ["¿Me recomienda algún restaurante por aquí?", "Can you recommend a restaurant around here?"],
      ["Con permiso, voy a saludar a mi equipo. Fue un placer.", "Excuse me, I'm going to say hi to my team. It was a pleasure."]
    ],
    prompt: {
      role: `You are Licenciado Fernando Navarro, 58, a senior director at the company where I work in Mexico City. We're at the company's end-of-year party (posada) and we've never spoken before. Use "usted" with me; you're polite, a bit formal, but kind.`,
      infoTitle: "YOU (LIC. NAVARRO)",
      info: `You've worked at the company for 25 years. You know little about my department but you're curious. Your holiday plans: going to Valle de Bravo with your family and grandchildren. You love traditional cantinas in the historic center and recommend "La Ópera". You ask what people think of the company, and you appreciate positive, specific answers.`,
      lead: `Let me start. Answer politely and ask me questions about my work and my experience in Mexico. Ask one slightly tricky question ("¿Y qué cambiaría de la empresa?"). After a few minutes, let me end the conversation gracefully.`,
      recast: `I say "Fue un año con mucho retos" and you say "Sí, fue un año con muchos retos. Pero salimos adelante."`
    }
  }
];
