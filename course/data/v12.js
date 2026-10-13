LESSONS["12"].vars = [
  {
    title: "Compañeros de departamento", partner: "Iván", place: "Departamento compartido · CDMX", reg: "tú",
    goal: "You're moving into a shared apartment. Compare routines with your new roommate Iván and agree on bathroom, kitchen, and quiet times.",
    board: {
      title: "Depa en la Narvarte", sub: "Ciudad de México · un baño, dos personas",
      cols: [
        [{ h: "Iván", items: [["Trabaja en casa", "9–6"], ["Se baña", "en la mañana"], ["Cocina", "mucho"], ["Toca la guitarra", "en la noche"]] }],
        [{ h: "Hablen de", items: [["¿Quién se baña primero?"], ["¿Cuándo usamos la cocina?"], ["¿Hasta qué hora hay ruido?"], ["¿Quién limpia?"]] }]
      ],
      note: "Your routines clash in two places. Make a deal."
    },
    words: [
      ["el compañero de cuarto", "roommate"], ["compartir", "to share"], ["trabajar desde casa", "to work from home"], ["el ruido", "noise"],
      ["limpiar", "to clean"], ["lavar los trastes", "to wash the dishes (Mexico)"], ["sacar la basura", "to take out the trash"], ["el turno", "turn"],
      ["temprano", "early"], ["desvelarse", "to stay up late"], ["madrugar", "to get up very early"], ["ponernos de acuerdo", "to agree"]
    ],
    phrases: [
      ["Yo madrugo: me levanto a las seis.", "I'm an early riser: I get up at six."],
      ["¿A qué hora te bañas tú?", "What time do you shower?"],
      ["Entre semana me acuesto temprano.", "On weekdays I go to bed early."],
      ["¿Qué tal si yo lavo los trastes y tú sacas la basura?", "How about I wash the dishes and you take out the trash?"],
      ["Entonces quedamos así.", "So that's the deal."]
    ],
    prompt: {
      role: `You are Iván, 30, a graphic designer who works from home. I'm your new roommate in your apartment in Colonia Narvarte, Mexico City. Use "tú" with me.`,
      infoTitle: "YOUR ROUTINE (IVÁN)",
      info: `You wake up at 8, shower at 8:15 (long showers, 20 minutes), work at the dining table from 9 to 6, and cook a big lunch at 2. You go to the gym at 7 pm. You play the guitar from 10 to midnight. On weekends you sleep until 11.
There's one bathroom and a small kitchen. Nobody cleans right now; you think we should take turns.`,
      lead: `Ask me about my routine, then tell me yours. When we find a problem (bathroom, noise, kitchen), ask "¿Qué hacemos?" and let me suggest a solution. Finish by summarizing the deal.`,
      recast: `I say "Yo me baño a las siete cada días" and you say "¿Te bañas a las siete todos los días? Ok."`
    }
  },
  {
    title: "Una entrevista para una revista", partner: "Karla", place: "Revista universitaria · Guadalajara",
    goal: "A student journalist is writing about \"a day in the life\" of foreign professionals. Describe a typical workday in detail, and what's good and hard about it.",
    board: {
      title: "Un día en la vida de…", sub: "Revista Voces · Universidad de Guadalajara",
      cols: [
        [{ h: "Karla va a preguntar", items: [["¿A qué se dedica?"], ["¿Cómo empieza su día?"], ["¿Qué hace en la mañana / tarde?"], ["¿Qué es lo más difícil?"], ["¿Qué hace para descansar?"]] }],
        [{ h: "Sus frases", items: [["Mi día empieza a las…"], ["Lo primero que hago es…"], ["Lo que más me gusta es…"], ["Lo más difícil es…"], ["Para descansar, …"]] }]
      ],
      note: "Karla needs details and numbers for her article."
    },
    words: [
      ["la jornada", "workday"], ["el horario", "schedule"], ["revisar el correo", "to check email"], ["la junta", "meeting (Mexico)"],
      ["el descanso", "break"], ["la hora de la comida", "lunch break"], ["el tráfico", "traffic"], ["estresante", "stressful"],
      ["lo más difícil", "the hardest thing"], ["lo que más me gusta", "what I like most"], ["desconectarse", "to switch off"], ["agotado, agotada", "exhausted"]
    ],
    phrases: [
      ["Mi jornada empieza a las ocho.", "My workday starts at eight."],
      ["Lo primero que hago es revisar el correo.", "The first thing I do is check my email."],
      ["Tengo juntas casi todas las tardes.", "I have meetings almost every afternoon."],
      ["Lo más difícil es el tráfico.", "The hardest thing is the traffic."],
      ["Para desconectarme, salgo a caminar.", "To switch off, I go for a walk."]
    ],
    prompt: {
      role: `You are Karla, 21, a journalism student writing an article called "Un día en la vida de…" about foreigners and their jobs. You're interviewing me. Use "usted" with me.`,
      infoTitle: "YOUR ARTICLE",
      info: `You need: my job, the exact times of my day (start, lunch, end), three things I do every day, the best and hardest part of my day, and what I do to relax. You write down numbers and details, so if I'm vague ("temprano"), ask for the exact time.`,
      lead: `Ask one question at a time and follow my day in order. Ask for details ("¿A qué hora exactamente?", "¿Por ejemplo?"). At the end, read back two things you wrote and let me correct them.`,
      recast: `I say "Lo más difícil son el tráfico" and you say "Ah, lo más difícil es el tráfico. Lo anoto."`
    }
  },
  {
    title: "El horario del gimnasio", partner: "Coach Toño", place: "Gimnasio · Mérida", reg: "tú",
    goal: "You're signing up at a gym. The trainer asks about your daily routine to find the best class times. Explain your schedule and choose two classes.",
    board: {
      title: "Gimnasio Fuerza Maya", sub: "Mérida, Yuc. · clases grupales",
      cols: [
        [{ h: "Mañana", items: [["Spinning", "6:00 am"], ["Yoga", "7:00 am"], ["Funcional", "8:00 am"]] }],
        [{ h: "Tarde y noche", items: [["Zumba", "6:00 pm"], ["Box", "7:30 pm"], ["Yoga", "8:30 pm"]] },
         { h: "Inscripción", items: [["Mensualidad", "$650"], ["Fines de semana", "solo 9–2"]] }]
      ],
      note: "It's very hot in Mérida at midday. Toño has opinions about that."
    },
    words: [
      ["inscribirse", "to sign up"], ["la mensualidad", "monthly fee"], ["la clase grupal", "group class"], ["hacer ejercicio", "to exercise"],
      ["entrenar", "to train"], ["el calor", "heat"], ["sudar", "to sweat"], ["el cansancio", "tiredness"],
      ["saliendo del trabajo", "right after work"], ["antes de", "before"], ["me queda bien", "it suits me (time)"], ["me queda lejos", "it's far for me"]
    ],
    phrases: [
      ["Trabajo de nueve a cinco.", "I work from nine to five."],
      ["En la mañana no tengo tiempo.", "I don't have time in the morning."],
      ["Saliendo del trabajo puedo venir.", "I can come right after work."],
      ["La clase de las siete y media me queda bien.", "The seven thirty class works for me."],
      ["Los fines de semana duermo hasta tarde.", "On weekends I sleep late."]
    ],
    prompt: {
      role: `You are Coach Toño, 35, a very energetic trainer at Gimnasio Fuerza Maya in Mérida. I want to sign up. Use "tú" with me.`,
      infoTitle: "THE GYM",
      info: `Classes: morning spinning 6:00, yoga 7:00, functional training 8:00. Evening zumba 6:00, boxing 7:30, yoga 8:30. Weekends: open 9–2, no classes. Monthly fee $650. The gym is busiest from 6 to 8 pm. You think morning is best because of the heat, and you try to convince people to come at 6 am.`,
      lead: `Ask about my routine: when I get up, work hours, when I eat, when I'm tired. Recommend classes based on what I say. Push the 6 am class once. Help me choose two classes.`,
      recast: `I say "Yo salgo de trabajo a las cinco" and you say "Ah, sales del trabajo a las cinco. Perfecto."`
    }
  }
];
