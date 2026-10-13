LESSONS["28"].vars = [
  {
    title: "Una beca", partner: "Comité de becas", place: "Entrevista en línea · Universidad de Guanajuato", reg: "usted",
    goal: "You're applying for a scholarship to study a summer program in Mexico. A committee member asks about your goals: what you want to study, why, how it fits your future, and what you'd do afterward.",
    board: {
      title: "Beca de verano", sub: "Programa de español y cultura · 8 semanas",
      cols: [
        [{ h: "Te van a preguntar", items: [["¿Por qué quiere participar?"], ["¿Cuáles son sus metas profesionales?"], ["¿Cómo va a usar lo que aprenda?"], ["¿Qué aportaría usted al programa?"]] }],
        [{ h: "Frases útiles", items: [["Mi meta a largo plazo es…"], ["Este programa me ayudaría a…"], ["Cuando regrese, pienso…"], ["Espero poder…"]] }]
      ],
      note: "The committee wants specific, realistic plans, not just big dreams."
    },
    words: [
      ["la beca", "scholarship"], ["el comité", "committee"], ["la solicitud", "application"], ["a largo plazo", "long-term"],
      ["a corto plazo", "short-term"], ["la meta profesional", "career goal"], ["aportar", "to contribute"], ["el desarrollo", "development"],
      ["aplicar lo aprendido", "to apply what you learn"], ["la comunidad", "community"], ["comprometerse", "to commit"], ["la oportunidad", "opportunity"]
    ],
    phrases: [
      ["Mi meta a largo plazo es…", "My long-term goal is…"],
      ["Este programa me ayudaría a mejorar mi español profesional.", "This program would help me improve my professional Spanish."],
      ["Cuando regrese, pienso usar lo que aprenda en mi trabajo.", "When I get back, I plan to use what I learn in my work."],
      ["Creo que puedo aportar mi experiencia como…", "I think I can contribute my experience as…"],
      ["Para mí sería una oportunidad única.", "For me it would be a unique opportunity."]
    ],
    prompt: {
      role: `You are Doctor Arturo Salas, 55, a member of a scholarship committee at a university in Guanajuato. You're interviewing me online for a summer program in Spanish and Mexican culture. Use "usted" with me. You're friendly but you ask for specifics.`,
      infoTitle: "THE PROGRAM",
      info: `8 weeks in Guanajuato: Spanish classes, cultural workshops, and a community project (teaching, art, or environment). The scholarship covers tuition and housing, not flights. You look for candidates who have clear goals and will share what they learn back home. Ask about: motivation, goals (short and long term), how the program fits, what they'd contribute, and how they'd handle challenges.`,
      lead: `Greet me formally. Ask one question at a time. If my answer is vague ("quiero mejorar"), ask for specifics ("¿Concretamente, cómo?"). End by asking if I have questions for you.`,
      recast: `I say "Cuando regreso, voy a usar lo que aprendo" and you say "Cuando regrese, va a usar lo que aprenda. ¿Cómo, por ejemplo?"`
    }
  },
  {
    title: "Jubilación soñada", partner: "Don Héctor", place: "Banca del jardín · San Miguel de Allende",
    goal: "On a park bench, you meet a retired man who moved to San Miguel to fulfill his dream. Ask about his dream, then talk about the life you'd like to have when you retire, and why.",
    board: {
      title: "En el jardín", sub: "San Miguel de Allende, Gto. · una tarde",
      cols: [
        [{ h: "Don Héctor", items: [["Jubilado, de Monterrey"], ["Siempre quiso pintar"], ["Llegó hace 3 años"]] }],
        [{ h: "Tu jubilación ideal", items: [["¿Dónde te gustaría vivir?"], ["¿Qué te gustaría hacer todos los días?"], ["¿Con quién?"], ["¿Qué te da miedo?"]] }]
      ],
      note: "Don Héctor will tell you something he regrets. Respond to it."
    },
    words: [
      ["jubilarse", "to retire"], ["la jubilación", "retirement"], ["jubilado, jubilada", "retired"], ["la pensión", "pension"],
      ["pintar", "to paint"], ["el taller", "studio, workshop"], ["arrepentirse", "to regret"], ["dedicarse a", "to devote oneself to"],
      ["la salud", "health"], ["los nietos", "grandchildren"], ["disfrutar", "to enjoy"], ["nunca es tarde", "it's never too late"]
    ],
    phrases: [
      ["Cuando me jubile, me gustaría vivir cerca del mar.", "When I retire, I'd like to live near the sea."],
      ["Me encantaría dedicarme a la jardinería.", "I'd love to devote myself to gardening."],
      ["Lo que más quiero es tener tiempo para…", "What I want most is to have time for…"],
      ["Me da miedo no tener suficiente dinero.", "I'm afraid of not having enough money."],
      ["Tiene razón, nunca es tarde.", "You're right, it's never too late."]
    ],
    prompt: {
      role: `You are Don Héctor, 70, a retired engineer from Monterrey who moved to San Miguel de Allende three years ago. You're sitting on a bench in the main square. You use "usted" with strangers at first, then switch to "tú" if I agree.`,
      infoTitle: "YOUR STORY",
      info: `You worked 40 years as an engineer. Your dream since childhood was to paint, but your father said it wasn't a real job. At 67 you moved to San Miguel, took painting classes, and now sell small paintings at a gallery. Your regret: you wish you had started much earlier and spent more time with your kids when they were young. Your wife died 5 years ago; she would have loved San Miguel.`,
      lead: `Start with small talk (the weather, the church). Share your story briefly when I ask. Then ask about my dream retirement: where, what, with whom, and why. Share your regret, and give me one piece of life advice.`,
      recast: `I say "Cuando me jubilo, quiero vivir en la playa" and you say "Ah, cuando se jubile, quiere vivir en la playa. ¡Muy buena idea!"`
    }
  },
  {
    title: "Mi proyecto", partner: "Gabriela", place: "Cafetería · Mérida",
    goal: "A friend who works at a small business incubator wants to hear about a project you dream of starting. Explain the idea, why you care about it, the first steps, and what help you'd need.",
    board: {
      title: "Café con Gabriela", sub: "Mérida, Yuc. · incubadora de proyectos",
      cols: [
        [{ h: "Ejemplos de proyecto", items: [["Un club de conversación para migrantes"], ["Una pequeña escuela de idiomas en línea"], ["Un blog de recetas familiares"], ["O tu propia idea"]] }],
        [{ h: "Gabriela quiere saber", items: [["¿Qué problema resuelve?"], ["¿Para quién es?"], ["¿Cuál sería el primer paso?"], ["¿Qué necesitas?"]] }]
      ],
      note: "Gabriela is enthusiastic, but she'll ask a hard question about money."
    },
    words: [
      ["el proyecto", "project"], ["la idea", "idea"], ["emprender", "to start a venture"], ["el emprendedor", "entrepreneur"],
      ["el público", "audience"], ["resolver", "to solve"], ["el primer paso", "the first step"], ["financiar", "to fund"],
      ["el apoyo", "support"], ["la red", "network"], ["arrancar", "to get started"], ["sostenible", "sustainable"]
    ],
    phrases: [
      ["Mi idea es crear un espacio para…", "My idea is to create a space for…"],
      ["Me importa mucho porque yo mismo / yo misma viví…", "It matters a lot to me because I lived…myself."],
      ["Sería para personas que…", "It would be for people who…"],
      ["El primer paso sería…", "The first step would be…"],
      ["Lo que más necesitaría es…", "What I'd need most is…"]
    ],
    prompt: {
      role: `You are Gabriela, 38, my friend who works at a small-business incubator in Mérida. We're having coffee and I tell you about a project I dream of starting. Use "tú" with me.`,
      infoTitle: "WHAT YOU DO",
      info: `You help people turn ideas into projects. You ask: what problem it solves, who it's for, why I care, the first small step, what I need (time, money, people, skills), and how it could make money or be sustainable. The incubator offers free workshops and small grants of up to $50,000 pesos.`,
      lead: `Ask me about the idea and show enthusiasm. Ask your questions one at a time. Ask one hard question about money ("¿Y de qué va a vivir el proyecto?"). At the end, suggest one concrete next step and the incubator workshops.`,
      recast: `I say "Mi idea es de crear un club" and you say "Tu idea es crear un club. ¡Me encanta! ¿Para quién?"`
    }
  }
];
