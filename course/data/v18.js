LESSONS["18"].vars = [
  {
    title: "Llegué tarde a la clase", partner: "Maestra Rocío", place: "Escuela de baile · Veracruz", reg: "usted",
    goal: "You arrived 40 minutes late to your danzón class, and you missed last week too. Apologize to the teacher, explain, and accept her invitation to a public dance in the plaza.",
    board: {
      title: "Clase de danzón", sub: "Veracruz, Ver. · martes, 7 pm",
      cols: [
        [{ h: "Lo que pasó", items: [["Hoy: llegaste 40 minutos tarde"], ["Razón: se descompuso el camión"], ["La semana pasada: faltaste"]] }],
        [{ h: "Su invitación", items: [["Danzón en el Zócalo"], ["Viernes · 7 pm"], ["Todos los alumnos van"]] },
         { h: "Tu problema", items: [["El viernes trabajas hasta las 7:30"]] }]
      ],
      note: "Accept, but explain you'll arrive late. Again."
    },
    words: [
      ["el danzón", "danzón (traditional dance)"], ["la pareja", "dance partner"], ["faltar", "to miss (class)"], ["descomponerse", "to break down"],
      ["el camión", "bus (Mexico)"], ["ponerse al corriente", "to catch up"], ["el paso", "dance step"], ["ensayar", "to rehearse"],
      ["el Zócalo", "main square"], ["en público", "in public"], ["avergonzado, avergonzada", "embarrassed"], ["con permiso", "excuse me (passing)"]
    ],
    phrases: [
      ["Disculpe, maestra. Se descompuso el camión.", "Sorry, teacher. The bus broke down."],
      ["Y perdone por faltar la semana pasada.", "And sorry for missing last week."],
      ["¿Cómo me pongo al corriente?", "How can I catch up?"],
      ["Me encantaría ir, pero voy a llegar un poco tarde.", "I'd love to go, but I'll arrive a little late."],
      ["Muchas gracias por su paciencia.", "Thank you very much for your patience."]
    ],
    prompt: {
      role: `You are Maestra Rocío, 60, a danzón teacher at a dance school in Veracruz. I just arrived 40 minutes late to class, and I missed last week's class too. You use "tú" with students; I use "usted" with you.`,
      infoTitle: "YOUR CLASS",
      info: `Last week you taught a new step called "el paseo". Today the others practiced it with partners. On Friday at 7 pm, the whole class will dance in the Zócalo with the city's danzón orchestra. You want everyone there; it's important. You're strict about punctuality, but kind.`,
      lead: `Start a bit serious ("¿Y ahora qué pasó?"). Let me apologize and explain both absences. Then invite me to Friday. When I say I'll be late, be a bit disappointed but find a solution.`,
      recast: `I say "Perdón por llegar tardísimo, el camión se descompuesto" and you say "¿Se descompuso el camión? Ay, qué mala suerte."`
    }
  },
  {
    title: "Una posada", partner: "Vecina Gaby", place: "En el edificio · CDMX",
    goal: "Your neighbor invites you to the building's posada (Christmas party). Accept, ask what to bring and what happens at a posada, and apologize for the noise from your apartment last night.",
    board: {
      title: "Posada del edificio", sub: "Colonia Del Valle, CDMX · 18 de diciembre",
      cols: [
        [{ h: "La posada", items: [["Sábado 18 · 8 pm"], ["En el patio del edificio"], ["Cada quien lleva algo"], ["Piñata y ponche"]] }],
        [{ h: "Anoche", items: [["Tuviste visitas"], ["Música hasta la 1 am"], ["Gaby tiene un bebé"]] }]
      ],
      note: "Apologize first. Then accept the invitation."
    },
    words: [
      ["la posada", "Christmas party (Dec. 16–24)"], ["el ponche", "hot fruit punch"], ["la piñata", "piñata"], ["los villancicos", "carols"],
      ["pedir posada", "to sing asking for lodging"], ["el aguinaldo", "bag of candy; year-end bonus"], ["el vecino, la vecina", "neighbor"], ["el ruido", "noise"],
      ["las visitas", "guests"], ["despertar", "to wake up (someone)"], ["el bebé", "baby"], ["cada quien", "each person"]
    ],
    phrases: [
      ["Oye, perdón por el ruido de anoche.", "Hey, sorry about the noise last night."],
      ["No sabía que tu bebé estaba dormido.", "I didn't know your baby was asleep."],
      ["No volverá a pasar, te lo prometo.", "It won't happen again, I promise."],
      ["¡Qué padre! ¿Qué llevo?", "How cool! What should I bring?"],
      ["¿Qué se hace en una posada?", "What do you do at a posada?"]
    ],
    prompt: {
      role: `You are Gaby, 32, my neighbor in an apartment building in Colonia Del Valle, Mexico City. You have a 6-month-old baby. We meet in the hallway. Use "tú" with me.`,
      infoTitle: "WHAT YOU KNOW",
      info: `Last night there was loud music from my apartment until 1 am and it woke up your baby. You're tired, but you're nice about it if I apologize sincerely.
The building posada: Saturday the 18th at 8 pm in the courtyard. Each person brings something: food (tamales, buñuelos), drinks, or candy for the piñata. There's ponche, singing to "ask for posada" (pedir posada), a piñata, and small bags of candy (aguinaldos) for the kids. Your husband is making ponche.`,
      lead: `Start by mentioning the noise, gently ("Oye, anoche…"). Let me apologize. Then invite me to the posada. Answer my questions and explain the traditions simply.`,
      recast: `I say "Perdona por el ruido en la anoche" and you say "¿Por el ruido de anoche? Bueno, ya pasó."`
    }
  },
  {
    title: "Te invito yo", partner: "Paco", place: "Mensaje de voz · Oaxaca",
    goal: "You want to thank your friend Paco for showing you around Oaxaca. Invite him to dinner, agree on a place, and handle it when he insists on paying.",
    board: {
      title: "Para agradecerle a Paco", sub: "Oaxaca, Oax. · esta semana",
      cols: [
        [{ h: "Restaurantes", items: [["Comedor de mole · tradicional", "$"], ["Restaurante en una terraza", "$$$"], ["Mercado 20 de Noviembre", "$"]] }],
        [{ h: "Tu semana", items: [["Miércoles", "libre"], ["Jueves", "clase hasta las 8"], ["Viernes", "te vas"]] },
         { h: "Paco", items: [["Es vegetariano"], ["Siempre quiere pagar"]] }]
      ],
      note: "You want to pay. Paco won't make it easy."
    },
    words: [
      ["agradecer", "to thank"], ["invitar", "to treat, to invite"], ["la cuenta", "the bill"], ["insistir", "to insist"],
      ["pagar a medias", "to split the bill"], ["ni modo", "oh well, no choice"], ["la terraza", "rooftop terrace"], ["el comedor", "small eatery"],
      ["vegetariano", "vegetarian"], ["deberle a alguien", "to owe someone"], ["el favor", "favor"], ["de ninguna manera", "no way"]
    ],
    phrases: [
      ["Quiero agradecerte por todo. Te invito a cenar.", "I want to thank you for everything. Dinner's on me."],
      ["¿Qué tal el miércoles?", "How about Wednesday?"],
      ["No, no, esta vez pago yo.", "No, no, this time I'm paying."],
      ["De ninguna manera. Tú ya hiciste mucho.", "No way. You've already done a lot."],
      ["Bueno, tú invitas el postre, ¿va?", "OK, you get dessert, deal?"]
    ],
    prompt: {
      role: `You are Paco, 38, a friendly guy from Oaxaca who has been showing me around the city this week. You're vegetarian. Use "tú" with me.`,
      infoTitle: "YOUR SIDE",
      info: `You're free Wednesday and Thursday after 8. You don't like fancy places; you prefer the market or a small comedor. Mexican hospitality: you always want to pay for guests. Refuse to let me pay twice ("No, cómo crees, aquí tú eres mi invitado"), but accept on the third try if I insist nicely. Then offer to pay for dessert or mezcal.`,
      lead: `Respond to my invitation warmly but say it's not necessary. Help choose the day and place. When I say I'm paying, insist that you pay. Let me find a compromise.`,
      recast: `I say "Yo quiero invitarte para cenar" and you say "¿Me quieres invitar a cenar? ¡Ay, no hace falta!"`
    }
  }
];
