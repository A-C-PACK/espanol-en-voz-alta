window.LESSONS = window.LESSONS || {};
LESSONS["05"] = {
  id: "05", level: "A1", title: "¿A qué hora?", minutes: 25,
  cando: "I can ask and tell the time, the day, and the date.",
  scale: "Information exchange",
  reg: "usted", partner: "Rodrigo", place: "Escuela de español · Guanajuato",
  scene: "on my first day at a Spanish school in Guanajuato, I asked the receptionist Rodrigo about times, days, and dates",
  goal: "It's your first day at a Spanish school in Guanajuato. ChatGPT plays Rodrigo, the receptionist. Find out when classes and activities happen, and find the one thing on the schedule that has changed.",
  boardStep: ["Mira el horario", "This is your printed schedule. One thing on it has changed."],
  board: {
    title: "Escuela de Español", sub: "Guanajuato, Gto. · Marzo",
    cols: [
      [{ h: "Clases", items: [["Lunes a jueves", "9:00–13:00"], ["Viernes", "9:00–12:00"]] },
       { h: "Actividades", items: [["Clase de salsa", "mar 19:00"], ["Tour de callejones", "mié 17:00"], ["Cine en español", "vie 18:30"]] }],
      [{ h: "Fechas", items: [["Inicio del curso", "lun 3/3"], ["Excursión a Dolores Hidalgo", "sáb 8/3"], ["Fin del curso", "vie 28/3"]] }]
    ],
    note: "One thing on this schedule has changed. Ask questions to find it."
  },
  dialogue: [
    ["m", "¡Buenos días! ¿En qué le puedo ayudar?", "Good morning! How can I help you?"],
    ["c", "Buenos días. ¿A qué hora empiezan las clases?", "Good morning. What time do classes start?"],
    ["m", "Empiezan a las nueve.", "They start at nine."],
    ["c", "¿Y a qué hora terminan?", "And what time do they end?"],
    ["m", "A la una de la tarde. Los viernes, a las doce.", "At one in the afternoon. On Fridays, at twelve."],
    ["c", "¿Qué día es la clase de salsa?", "What day is the salsa class?"],
    ["m", "Es el martes, a las siete de la noche.", "It's on Tuesday, at seven in the evening."],
    ["c", "¿Qué hora es ahora?", "What time is it now?"],
    ["m", "Son las nueve menos diez. ¡Su clase empieza pronto!", "It's ten to nine. Your class starts soon!"],
    ["c", "¿Cuándo es la excursión?", "When is the trip?"],
    ["m", "Es el sábado ocho de marzo.", "It's on Saturday, March 8."],
    ["c", "¿Y cuándo termina el curso?", "And when does the course end?"],
    ["m", "El viernes veintiocho de marzo.", "Friday, March 28."],
    ["c", "Muchas gracias.", "Thank you very much."],
    ["m", "De nada. ¡Que le vaya bien!", "You're welcome. Have a good day!"]
  ],
  core: [
    ["¿Qué hora es?", "What time is it?"],
    ["¿A qué hora empieza la clase?", "What time does the class start?"],
    ["¿A qué hora termina?", "What time does it end?"],
    ["¿Qué día es la clase de salsa?", "What day is the salsa class?"],
    ["¿Cuándo es la excursión?", "When is the trip?"],
    ["Es el sábado ocho de marzo.", "It's on Saturday, March 8."],
    ["A las siete de la noche.", "At seven in the evening."]
  ],
  hear: [
    ["Son las nueve menos diez.", "It's ten to nine."],
    ["Es la una.", "It's one o'clock."],
    ["A las nueve y media.", "At nine-thirty."],
    ["De lunes a jueves.", "Monday to Thursday."],
    ["El primero de marzo.", "March first."],
    ["Mañana en la mañana.", "Tomorrow morning."]
  ],
  extra: [
    ["¿Qué día es hoy?", "What day is today?"],
    ["Hoy es lunes.", "Today is Monday."],
    ["¿Qué fecha es hoy?", "What's the date today?"],
    ["Hoy es tres de marzo.", "Today is March 3."],
    ["¿Está abierto el domingo?", "Is it open on Sunday?"],
    ["¿Hasta qué hora?", "Until what time?"],
    ["Son las tres y cuarto.", "It's 3:15."],
    ["¿A qué hora sale el autobús?", "What time does the bus leave?"],
    ["¿A qué hora llega usted normalmente?", "(you'll hear) What time do you usually arrive?"],
    ["Cambió de día.", "(you'll hear) It changed days."]
  ],
  vocab: [
    ["Los días", [["lunes", "Monday"], ["martes", "Tuesday"], ["miércoles", "Wednesday"], ["jueves", "Thursday"], ["viernes", "Friday"], ["sábado", "Saturday"], ["domingo", "Sunday"], ["el fin de semana", "weekend"]]],
    ["La hora", [["la una", "one o'clock"], ["las dos", "two o'clock"], ["y cuarto", "quarter past"], ["y media", "half past"], ["menos cuarto", "quarter to"], ["de la mañana", "a.m."], ["de la tarde", "in the afternoon"], ["de la noche", "in the evening, at night"]]],
    ["Las fechas", [["hoy", "today"], ["mañana", "tomorrow"], ["pasado mañana", "the day after tomorrow"], ["la semana", "week"], ["el mes", "month"], ["marzo", "March"], ["el primero", "the first (of the month)"]]]
  ],
  qd: [
    ["Ask what time it is.", "¿Qué hora es?"],
    ["Ask what time the class starts.", "¿A qué hora empieza la clase?"],
    ["Ask what time it ends.", "¿A qué hora termina?"],
    ["Ask what day the salsa class is.", "¿Qué día es la clase de salsa?"],
    ["Ask when the trip is.", "¿Cuándo es la excursión?"],
    ["Say \"at seven in the evening\".", "A las siete de la noche."],
    ["Say \"It's on Saturday, March 8\".", "Es el sábado ocho de marzo."]
  ],
  patterns: [
    ["Son las + [hora] · Es la una", "Plural for every hour except one: <i>Son las tres</i>, <i>Es la una</i>."],
    ["a las + [hora]", "At a time: <i>La clase empieza a las nueve.</i>"],
    ["el + [día] + [número] + de + [mes]", "<i>El sábado ocho de marzo.</i> Days and months are lowercase."],
    ["¿A qué hora + [verbo]?", "¿A qué hora empieza? · ¿A qué hora termina? · ¿A qué hora abre?"]
  ],
  notes: [
    ["24-hour time", "Schedules often use 24-hour time (19:00), but people say <i>a las siete de la noche</i>."],
    ["Date order", "Mexico writes day/month: 8/3 is March 8, not August 3."],
    ["Ahorita", "<i>Ahorita</i> can mean right now, soon, or much later. Ask <i>¿A qué hora exactamente?</i>"],
    ["Mañana", "<i>Mañana</i> = tomorrow. <i>La mañana</i> = the morning. <i>Mañana en la mañana</i> = tomorrow morning."]
  ],
  prompt: {
    role: `You are Rodrigo, the receptionist at a Spanish language school in Guanajuato. It's my first day: Monday, March 3, at 8:50 in the morning. I'm a new student asking about the schedule. Use "usted" with me.`,
    infoTitle: "THE SCHEDULE",
    info: `Classes: Monday to Thursday 9:00–13:00, Friday 9:00–12:00. Salsa class: Tuesday 19:00. Tour of the callejones: Wednesday 17:00. Movie night: Friday 18:30. Course starts Monday, March 3. Trip to Dolores Hidalgo: Saturday, March 8; the bus leaves at 8:00 and returns at 18:00. Course ends Friday, March 28.`,
    twist: `This week the salsa class moved to Thursday at 20:00 (my printed schedule says Tuesday). Tell me only when I ask about salsa. Also ask me one question: "¿A qué hora llega usted normalmente?"`,
    lead: `Answer my questions about times, days, and dates. Say times the way people speak ("a las siete de la noche"), not as 24-hour numbers. Sometimes ask me a short question back, like what time it is now.`,
    recast: `I say "¿La clase empieza en las nueve?" and you say "Sí, empieza a las nueve."`
  },
  twists: [
    ["La excursión", "Harder", "Ask everything about the Saturday trip: leaving, returning, signing up.", `Otra vez, por favor. This time I'll ask only about the Saturday trip: what time it leaves, when it returns, and the last day to sign up. Add one detail I have to ask about. Same rules.`],
    ["Por teléfono", "Harder", "Call the school. Don't look at the schedule.", `Otra vez, por favor. This time it's a phone call. Start with "Escuela de Español, buenas tardes." I won't look at the schedule. Same rules.`]
  ],
  sa: [
    "I can ask and tell the time",
    "I can ask when something starts and ends",
    "I can ask and say what day something is",
    "I can understand and say dates",
    "I can use de la mañana / tarde / noche correctly"
  ]
};
