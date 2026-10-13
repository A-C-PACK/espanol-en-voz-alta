LESSONS["31"].vars = [
  {
    title: "Refugio de animales", partner: "Daniela", place: "Refugio · Puerto Vallarta", reg: "tú",
    goal: "You want to volunteer at an animal shelter for a month. In a casual interview, talk about your experience with animals, why you want to help, what tasks you're willing to do, and your schedule.",
    board: {
      title: "Refugio Patitas", sub: "Puerto Vallarta, Jal. · voluntariado",
      cols: [
        [{ h: "Tareas", items: [["Pasear a los perros", "7–9 am"], ["Limpiar las jaulas"], ["Bañar a los perros"], ["Redes sociales y fotos"], ["Eventos de adopción", "sábados"]] }],
        [{ h: "Requisitos", items: [["Mínimo 4 semanas"], ["3 mañanas por semana"], ["Vacuna contra el tétanos"]] },
         { h: "Ojo", items: [["Eres alérgico/a a los gatos"]] }]
      ],
      note: "Mention your cat allergy. How will you handle it?"
    },
    words: [
      ["el refugio", "shelter"], ["el voluntario", "volunteer"], ["la jaula", "cage"], ["pasear", "to walk (a dog)"],
      ["bañar", "to bathe"], ["la adopción", "adoption"], ["las redes sociales", "social media"], ["la vacuna", "vaccine"],
      ["alérgico, alérgica", "allergic"], ["el cachorro", "puppy"], ["rescatar", "to rescue"], ["no me molesta", "I don't mind"]
    ],
    phrases: [
      ["Siempre he tenido perros. Ahorita tengo uno rescatado.", "I've always had dogs. Right now I have a rescued one."],
      ["No me molesta limpiar las jaulas.", "I don't mind cleaning the cages."],
      ["Lo que más me gustaría es ayudar con las adopciones.", "What I'd like most is to help with adoptions."],
      ["Tengo que decirte algo: soy alérgico a los gatos.", "I have to tell you something: I'm allergic to cats."],
      ["Podría encargarme de las fotos para redes sociales.", "I could take charge of photos for social media."]
    ],
    prompt: {
      role: `You are Daniela, 31, coordinator of a small animal shelter in Puerto Vallarta. You're interviewing me to volunteer for a month. You're informal and use "tú".`,
      infoTitle: "THE SHELTER",
      info: `60 dogs and 20 cats. Tasks: dog walks (7–9 am, it gets too hot later), cleaning cages, bathing dogs, social media photos, Saturday adoption events at the Malecón. Requirements: at least 4 weeks, 3 mornings per week, tetanus vaccine. You really need someone good at photos for social media. Cats and dogs are in separate areas, so a cat allergy is OK if I stay with the dogs.`,
      lead: `Keep it casual but ask real questions: experience, motivation, which tasks I'd do (and which I'd rather not), availability, and one situation ("¿Qué harías si un perro se pone agresivo en el paseo?"). Let me ask questions at the end.`,
      recast: `I say "Yo tengo perros toda mi vida" and you say "¿Has tenido perros toda tu vida? ¡Qué bien!"`
    }
  },
  {
    title: "Guía en un museo", partner: "Mtro. Ibarra", place: "Museo · Guanajuato", reg: "usted",
    goal: "A museum needs a bilingual guide for English-speaking groups on weekends. In the interview, talk about your knowledge of Mexican history and art, your experience speaking in public, and do a mini \"tour\" of one object.",
    board: {
      title: "Museo Casa de Hidalgo", sub: "Guanajuato, Gto. · guía bilingüe · fines de semana",
      cols: [
        [{ h: "Le van a preguntar", items: [["¿Qué sabe de la Independencia de México?"], ["¿Ha hablado en público?"], ["¿Cómo manejaría a un turista difícil?"], ["Descríbame este objeto como a un grupo."]] }],
        [{ h: "El objeto", items: [["Una campana antigua"], ["Copia de la campana de Dolores"], ["Hidalgo la tocó en 1810"], ["Inicio de la Independencia"]] }]
      ],
      note: "The mini-tour is the most important part. Practice it."
    },
    words: [
      ["el guía, la guía", "guide"], ["bilingüe", "bilingual"], ["el recorrido", "tour"], ["la campana", "bell"],
      ["la Independencia", "Independence"], ["el cura", "priest"], ["tocar la campana", "to ring the bell"], ["el grito", "the cry (of independence)"],
      ["hablar en público", "to speak in public"], ["el grupo", "group"], ["manejar", "to handle"], ["la exposición", "exhibition"]
    ],
    phrases: [
      ["Tengo mucha experiencia hablando frente a grupos.", "I have a lot of experience speaking in front of groups."],
      ["Esta campana es una copia de la campana de Dolores.", "This bell is a copy of the bell of Dolores."],
      ["En 1810, el cura Miguel Hidalgo la tocó para llamar al pueblo.", "In 1810, the priest Miguel Hidalgo rang it to call the people."],
      ["Si un turista interrumpe mucho, le diría amablemente que…", "If a tourist interrupts a lot, I'd kindly tell them that…"],
      ["Me encantaría compartir la historia de México con visitantes.", "I'd love to share Mexico's history with visitors."]
    ],
    prompt: {
      role: `You are Maestro Ibarra, 60, director of a small history museum in Guanajuato. You're interviewing me for a weekend job as a bilingual guide. Use "usted" with me.`,
      infoTitle: "THE JOB",
      info: `Weekend tours for English-speaking groups: Saturdays and Sundays, 10 am–3 pm, 4 tours of 45 minutes each, $600 pesos per day. Guides need basic knowledge of Mexican Independence (1810, Miguel Hidalgo, the Grito de Dolores, the Alhóndiga de Granaditas in Guanajuato). You'll ask me to do a short mini-tour in Spanish of a copy of the Dolores bell, as if you were a group of tourists. Correct one historical fact gently if I get it wrong.`,
      lead: `Ask about my background, experience speaking to groups, and knowledge of history. Then say "Imagine que soy un grupo de turistas" and let me do the mini-tour. Ask one tourist-style question during it. End with practical details and my questions.`,
      recast: `I say "En 1810 Hidalgo tocaba la campana" and you say "Sí, en 1810 Hidalgo tocó la campana. ¿Y qué pasó después?"`
    }
  },
  {
    title: "Entrevista para un trabajo remoto", partner: "Lic. Gómez", place: "Videollamada · Startup en Guadalajara", reg: "usted",
    goal: "A Mexican tech startup is hiring a part-time English content editor who will work remotely. In a video interview, talk about your experience, your work habits, how you'd collaborate in Spanish, and a time you solved a problem.",
    board: {
      title: "Editor/a de contenido en inglés", sub: "Startup · Guadalajara · medio tiempo, remoto",
      cols: [
        [{ h: "Le van a preguntar", items: [["¿Por qué este puesto?"], ["Cuénteme de un problema que resolvió."], ["¿Cómo organiza su tiempo?"], ["¿Cómo se comunicaría con el equipo?"]] }],
        [{ h: "El puesto", items: [["20 horas por semana"], ["Juntas en español, 2 por semana"], ["Revisar textos de marketing"], ["Fechas de entrega estrictas"]] }]
      ],
      note: "Use a real example for the problem you solved: situation, action, result."
    },
    words: [
      ["el trabajo remoto", "remote work"], ["medio tiempo", "part-time"], ["la fecha de entrega", "deadline"], ["revisar", "to review, edit"],
      ["el equipo", "team"], ["colaborar", "to collaborate"], ["la herramienta", "tool"], ["la zona horaria", "time zone"],
      ["organizar", "to organize"], ["priorizar", "to prioritize"], ["el resultado", "result"], ["la retroalimentación", "feedback"]
    ],
    phrases: [
      ["Una vez tuvimos un problema con una fecha de entrega.", "Once we had a problem with a deadline."],
      ["Lo que hice fue hablar con el equipo y dividir el trabajo.", "What I did was talk to the team and divide up the work."],
      ["Como resultado, entregamos a tiempo.", "As a result, we delivered on time."],
      ["Organizo mi tiempo con listas y prioridades.", "I organize my time with lists and priorities."],
      ["Mi español me permite participar en las juntas sin problema.", "My Spanish lets me participate in meetings without trouble."]
    ],
    prompt: {
      role: `You are Licenciado Andrés Gómez, 34, head of marketing at a tech startup in Guadalajara. You're interviewing me by video call for a part-time remote job editing English content. Use "usted" at first; switch to "tú" halfway if it feels natural, and say so.`,
      infoTitle: "THE POSITION",
      info: `20 hours a week, remote. Tasks: edit English marketing texts written by Mexican colleagues, give them feedback, and write short posts. Two team meetings a week in Spanish (Tuesday and Thursday, 10 am Guadalajara time). Tight deadlines. Pay: in pesos, monthly. You care about: reliability, clear communication, and being kind when correcting others' English.`,
      lead: `Ask about motivation, experience, a problem I solved (ask for situation, action, result), how I organize my time, how I'd give feedback to colleagues, and time zones. Ask follow-up questions. End with my questions.`,
      recast: `I say "Lo que hice fue que hablé con el equipo" and you say "Lo que hizo fue hablar con el equipo. Muy bien. ¿Y el resultado?"`
    }
  }
];
