LESSONS["01"].vars = [
  {
    title: "En el hostal", partner: "Tomás", place: "Hostal Casa Ollin · Oaxaca",
    goal: "You meet another traveler on the hostel terrace. Introduce yourself, say why you're in Oaxaca and for how long, and find out three things about him.",
    board: {
      title: "Hostal Casa Ollin", sub: "Oaxaca de Juárez · la terraza · 9 pm",
      cols: [
        [{ h: "Tu ficha", items: [["Me llamo…"], ["Soy de…"], ["Estoy de vacaciones / Estoy aquí por…"], ["Me quedo… días."]] }],
        [{ h: "Pregúntale", items: [["¿De dónde eres?"], ["¿Viajas solo?"], ["¿Cuánto tiempo vas a estar aquí?"], ["¿Adónde vas después?"]] }]
      ],
      note: "Tomás is Mexican too, but not from Oaxaca."
    },
    words: [
      ["el hostal", "hostel"], ["el viaje", "trip"], ["viajar", "to travel"], ["solo, sola", "alone"],
      ["de vacaciones", "on vacation"], ["la semana", "week"], ["el día", "day"], ["después", "after, next"],
      ["el estudiante, la estudiante", "student"], ["la carrera", "university degree"]
    ],
    phrases: [
      ["Estoy de vacaciones.", "I'm on vacation."],
      ["Me quedo una semana.", "I'm staying a week."],
      ["¿Viajas solo?", "Are you traveling alone?"],
      ["¿Cuánto tiempo vas a estar aquí?", "How long are you going to be here?"],
      ["¿Qué estudias?", "What are you studying?"]
    ],
    prompt: {
      role: `You are Tomás, 24, a traveler staying at Hostal Casa Ollin in Oaxaca. We just met on the hostel's terrace at night. Use "tú" with me.`,
      infoTitle: "ABOUT YOU (TOMÁS)",
      info: `From Monterrey. Studies biology at university (la carrera de biología). Traveling alone for two weeks: one week in Oaxaca, then Chiapas. Doesn't speak English. Likes hiking and trying new food. Has a dog named Firulais at home.`,
      lead: `Lead like a friendly traveler: say hi, ask my name, where I'm from, why I'm in Oaxaca, and how long I'm staying, one at a time. Answer my questions about you. React briefly ("¡Qué padre!") and ask the next question.`,
      recast: `I say "Yo estoy aquí por una semana" and you say "Ah, te quedas una semana. ¡Qué padre!"`
    }
  },
  {
    title: "En un congreso", partner: "Dra. Patricia Ruiz", place: "Congreso de maestros · Guadalajara", reg: "usted",
    goal: "A coffee break at a teachers' conference. Introduce yourself formally, say what you teach and where, and find out about her work.",
    board: {
      title: "Congreso de Maestros", sub: "Guadalajara, Jal. · el café de las 11",
      cols: [
        [{ h: "Tu ficha", items: [["Me llamo…"], ["Soy de… / Vivo en…"], ["Doy clases de… en…"], ["Trabajo con adultos / con niños."]] }],
        [{ h: "Pregúntele", items: [["¿Cómo se llama?"], ["¿De dónde es?"], ["¿Dónde trabaja?"], ["¿Qué enseña?"], ["¿Va a presentar hoy?"]] }]
      ],
      note: "This is a formal setting. Use usted with Dra. Ruiz."
    },
    words: [
      ["el congreso", "conference"], ["la ponencia", "talk, presentation"], ["el maestro, la maestra", "teacher"],
      ["enseñar", "to teach"], ["dar clases de…", "to teach (a subject)"], ["la universidad", "university"],
      ["los alumnos", "students"], ["el colega, la colega", "colleague"], ["el gafete", "name badge"], ["encantado, encantada", "pleased to meet you"]
    ],
    phrases: [
      ["Encantado. / Encantada.", "Pleased to meet you."],
      ["Doy clases de inglés.", "I teach English."],
      ["¿Usted dónde trabaja?", "Where do you work?"],
      ["¿Usted también da clases?", "Do you teach too?"],
      ["¿Va a presentar hoy?", "Are you presenting today?"]
    ],
    prompt: {
      role: `You are Dra. Patricia Ruiz, 52, a university professor. We just met during the coffee break at a teachers' conference in Guadalajara. This is a professional setting, so use "usted" with me.`,
      infoTitle: "ABOUT YOU (PATRICIA)",
      info: `From Guadalajara, lives in Zapopan. Has taught English at the Universidad de Guadalajara for 20 years. Teaches future English teachers. Is presenting a talk (una ponencia) today at 4 pm about reading. Speaks English well but prefers to speak Spanish today.`,
      lead: `Lead like a polite colleague: introduce yourself, ask my name, where I'm from, and what I teach and where, one at a time. Answer my questions about you. React briefly ("¡Qué interesante!") and ask the next question.`,
      recast: `I say "Yo enseño de inglés" and you say "Ah, usted enseña inglés. ¡Qué interesante!"`
    }
  },
  {
    title: "En el avión", partner: "Don Ernesto", place: "Vuelo a Cancún", reg: "usted",
    goal: "Your seatmate on a flight starts a conversation. Introduce yourself, say why you're traveling, and find out about him and his trip.",
    board: {
      title: "Vuelo 214", sub: "Ciudad de México → Cancún · asiento 18B",
      cols: [
        [{ h: "Tu ficha", items: [["Me llamo…"], ["Soy de…"], ["Voy a Cancún de vacaciones / por trabajo."], ["Viajo solo / sola / con…"]] }],
        [{ h: "Pregúntele", items: [["¿Usted es de Cancún?"], ["¿Viaja de vacaciones?"], ["¿A qué se dedica?"], ["¿Tiene familia en Cancún?"]] }]
      ],
      note: "Don Ernesto is older and friendly. Use usted with him."
    },
    words: [
      ["el vuelo", "flight"], ["el avión", "plane"], ["el asiento", "seat"], ["la ventanilla", "window seat"],
      ["el pasillo", "aisle"], ["jubilado, jubilada", "retired"], ["visitar", "to visit"], ["la nieta, el nieto", "granddaughter, grandson"],
      ["por trabajo", "for work"], ["primera vez", "first time"]
    ],
    phrases: [
      ["Voy a Cancún de vacaciones.", "I'm going to Cancún on vacation."],
      ["Es mi primera vez en Cancún.", "It's my first time in Cancún."],
      ["¿Usted vive en Cancún?", "Do you live in Cancún?"],
      ["¿Y usted a qué se dedica?", "And what do you do?"],
      ["¡Qué bonito!", "How nice!"]
    ],
    prompt: {
      role: `You are Don Ernesto, 68, a friendly retired man sitting next to me on a flight from Mexico City to Cancún. You start the conversation. Use "usted" with me.`,
      infoTitle: "ABOUT YOU (DON ERNESTO)",
      info: `From Mérida, lives in Mérida. Retired (jubilado); he was a mechanic for 40 years. Going to Cancún to visit his daughter and his granddaughter Sofi, who turns 5 on Saturday. Has three children. Likes baseball and fishing.`,
      lead: `Start with "¿Va a Cancún de vacaciones?" Ask my name, where I'm from, why I'm traveling, and what I do, one at a time. Answer my questions about you. React briefly ("¡Qué bonito!") and ask the next question.`,
      recast: `I say "Yo voy en Cancún por vacaciones" and you say "Ah, va a Cancún de vacaciones. ¡Qué bonito!"`
    }
  }
];
