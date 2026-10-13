LESSONS["05"].vars = [
  {
    title: "En el museo", partner: "Karla", place: "Museo Regional · Querétaro",
    goal: "You're at a museum information desk. Find out the opening hours, when the guided tours are, and when a special event happens.",
    board: {
      title: "Museo Regional", sub: "Querétaro, Qro. · hoy: jueves 13, 3:40 pm",
      cols: [
        [{ h: "Horario", items: [["Martes a domingo", "?"], ["Lunes", "?"]] },
         { h: "Visitas guiadas", items: [["En español", "?"], ["Sábado", "?"]] }],
        [{ h: "Eventos", items: [["Concierto de guitarra", "?"], ["Taller para niños", "?"]] },
         { h: "Entrada", items: [["General", "$95"], ["Domingo", "?"]] }]
      ],
      note: "Ask questions to fill in every \"?\"."
    },
    words: [
      ["abierto", "open"], ["cerrado", "closed"], ["abrir", "to open"], ["cerrar", "to close"],
      ["la visita guiada", "guided tour"], ["el taller", "workshop"], ["el concierto", "concert"], ["la entrada", "admission, ticket"],
      ["gratis", "free"], ["hoy", "today"], ["mañana", "tomorrow"], ["de la tarde", "in the afternoon"]
    ],
    phrases: [
      ["¿A qué hora abren?", "What time do you open?"],
      ["¿A qué hora cierran?", "What time do you close?"],
      ["¿Abren los lunes?", "Are you open on Mondays?"],
      ["¿Hay visita guiada hoy?", "Is there a guided tour today?"],
      ["¿Qué día es el concierto?", "What day is the concert?"]
    ],
    prompt: {
      role: `You are Karla, who works at the information desk of the Museo Regional in Querétaro. It's Thursday the 13th, at 3:40 pm. I'm a visitor. Use "usted" with me.`,
      infoTitle: "THE SCHEDULE",
      info: `Open Tuesday to Sunday, 9:00–18:00. Closed on Monday. Guided tours in Spanish: every day at 11:00 and 16:00; on Saturday also at 13:00. Guitar concert: Friday the 14th at 19:30, free. Children's workshop: Saturday at 10:00. Admission $95; free on Sunday. The 16:00 tour today leaves in 20 minutes.`,
      lead: `Answer my questions about days, times, and dates. Say times the way people speak ("a las cuatro de la tarde"), not as 24-hour numbers. Sometimes ask me a short question back, like "¿Quiere ir a la visita de hoy?"`,
      recast: `I say "¿El museo abre en lunes?" and you say "¿Los lunes? No, los lunes está cerrado."`
    }
  },
  {
    title: "En el gimnasio", partner: "Iván", place: "Gimnasio Fuerza · Mérida", reg: "tú",
    goal: "You want to join a gym. Find out the opening hours, which days and times the classes are, and the monthly price.",
    board: {
      title: "Gimnasio Fuerza", sub: "Mérida, Yuc. · hoy: lunes, 6:15 pm",
      cols: [
        [{ h: "Horario", items: [["Lunes a viernes", "?"], ["Sábado", "?"], ["Domingo", "?"]] }],
        [{ h: "Clases", items: [["Yoga", "?"], ["Spinning", "?"], ["Zumba", "?"]] },
         { h: "Precio", items: [["Al mes", "?"], ["La promoción termina", "?"]] }]
      ],
      note: "Gyms in Mexico are usually informal, so Iván uses tú."
    },
    words: [
      ["el gimnasio", "gym"], ["la clase de yoga", "yoga class"], ["la membresía", "membership"], ["al mes", "per month"],
      ["la promoción", "special offer"], ["temprano", "early"], ["tarde", "late"], ["de la mañana", "in the morning"],
      ["de la noche", "at night"], ["todos los días", "every day"], ["entre semana", "on weekdays"], ["el fin de semana", "weekend"]
    ],
    phrases: [
      ["¿A qué hora abren?", "What time do you open?"],
      ["¿Hay clase de yoga hoy?", "Is there a yoga class today?"],
      ["¿Qué días es la clase de spinning?", "Which days is the spin class?"],
      ["¿Cuánto cuesta al mes?", "How much is it per month?"],
      ["¿Hasta cuándo es la promoción?", "Until when is the offer?"]
    ],
    prompt: {
      role: `You are Iván, 25, who works at the front desk of Gimnasio Fuerza in Mérida. It's Monday at 6:15 pm. I'm thinking about joining. Use "tú" with me.`,
      infoTitle: "THE SCHEDULE",
      info: `Open Monday to Friday 6:00–22:00, Saturday 7:00–14:00, closed Sunday. Yoga: Monday and Wednesday at 7:00 and 19:00. Spinning: Tuesday and Thursday at 6:30 and 20:00. Zumba: Saturday at 9:00. Membership: $650 a month; promotion $500 a month if I sign up before Friday the 31st. Today's yoga class starts in 45 minutes.`,
      lead: `Answer my questions about days, times, and prices. Say times the way people speak ("a las siete de la noche"), not as 24-hour numbers. Ask what exercise I like and suggest a class.`,
      recast: `I say "¿El yoga es en los lunes?" and you say "Sí, el yoga es los lunes y los miércoles."`
    }
  },
  {
    title: "Una cita con la doctora", partner: "Paty", place: "Consultorio Dra. Gómez · Monterrey",
    goal: "Call a doctor's office to make an appointment. Find out which days and times are free, choose one, and confirm the day, date, and time.",
    board: {
      title: "Consultorio Dra. Gómez", sub: "Monterrey, N.L. · hoy: martes 14, 9:30 am",
      cols: [
        [{ h: "Horario de la doctora", items: [["Lunes a viernes", "?"], ["Sábado", "?"]] }],
        [{ h: "Tus horas libres", items: [["Miércoles", "toda la tarde"], ["Jueves", "después de las 4"], ["Viernes", "antes de las 12"]] },
         { h: "Tu cita", items: [["Día y hora", "?"]] }]
      ],
      note: "Repeat the day and time back to confirm your appointment."
    },
    words: [
      ["la cita", "appointment"], ["el consultorio", "doctor's office"], ["la doctora", "doctor (woman)"], ["libre", "free, available"],
      ["disponible", "available"], ["y cuarto", "quarter past"], ["y media", "half past"], ["menos cuarto", "quarter to"],
      ["antes de", "before"], ["después de", "after"], ["llegar", "to arrive"], ["confirmar", "to confirm"]
    ],
    phrases: [
      ["Quisiera hacer una cita, por favor.", "I'd like to make an appointment, please."],
      ["¿Tiene algo el jueves?", "Do you have anything on Thursday?"],
      ["¿A qué hora?", "At what time?"],
      ["Sí, el jueves a las cinco está bien.", "Yes, Thursday at five is fine."],
      ["Entonces, el jueves dieciséis a las cinco.", "So, Thursday the 16th at five."]
    ],
    prompt: {
      role: `You are Paty, the receptionist at Dra. Gómez's medical office in Monterrey. It's Tuesday the 14th, 9:30 am. I'm calling to make an appointment. Use "usted" with me.`,
      infoTitle: "THE DOCTOR'S SCHEDULE",
      info: `The doctor sees patients Monday to Friday 10:00–14:00 and 16:00–19:00. No Saturday hours. Free appointments this week: Wednesday 15 at 11:30, Thursday 16 at 17:00, Friday 17 at 10:00. Next week, Monday 20 at 12:15. Patients should arrive 15 minutes early. Ask for my name.`,
      lead: `Answer the phone ("Consultorio de la doctora Gómez, buenos días"). Offer the free times one at a time and let me choose. Say times the way people speak ("a las cinco de la tarde", "a las doce y cuarto"). Confirm the day, date, and time at the end and remind me to arrive 15 minutes early.`,
      recast: `I say "¿Tiene cita en jueves?" and you say "¿El jueves? Sí, el jueves tengo a las cinco de la tarde."`
    }
  }
];
