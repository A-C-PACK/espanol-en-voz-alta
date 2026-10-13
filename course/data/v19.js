LESSONS["19"].vars = [
  {
    title: "El celular nuevo", partner: "Brenda", place: "Tienda de celulares · Guadalajara", reg: "tú",
    goal: "You bought a new SIM card and phone plan two days ago. The internet doesn't work and you were charged twice. Explain both problems and get them fixed.",
    board: {
      title: "Tienda de celulares", sub: "Plaza del Sol, Guadalajara · plan prepago",
      cols: [
        [{ h: "Lo que compraste", items: [["Chip + recarga de 30 días", "$300"], ["Internet", "10 GB"], ["Fecha", "anteayer"]] }],
        [{ h: "Problemas", items: [["Llamadas sí, internet no"], ["Te cobraron dos veces: $600"]] },
         { h: "Necesitas", items: [["Internet hoy"], ["Tu dinero de regreso"]] }]
      ],
      note: "Brenda can fix the internet now. The money takes longer."
    },
    words: [
      ["el chip", "SIM card (Mexico)"], ["la recarga", "top-up"], ["el plan", "plan"], ["los datos", "mobile data"],
      ["la señal", "signal"], ["cobrar", "to charge"], ["el cargo doble", "double charge"], ["el estado de cuenta", "bank statement"],
      ["configurar", "to set up"], ["reiniciar", "to restart"], ["la aclaración", "dispute, claim (bank)"], ["el folio", "reference number"]
    ],
    phrases: [
      ["Puedo hacer llamadas, pero no tengo internet.", "I can make calls, but I don't have internet."],
      ["Ya reinicié el celular dos veces.", "I already restarted the phone twice."],
      ["Además, me cobraron dos veces.", "Also, I was charged twice."],
      ["¿Me lo puedes configurar, por favor?", "Can you set it up for me, please?"],
      ["¿Me das un número de folio?", "Can you give me a reference number?"]
    ],
    prompt: {
      role: `You are Brenda, 22, working at a phone company store in Plaza del Sol, Guadalajara. I'm a customer. Use "tú" with me.`,
      infoTitle: "THE PROBLEM",
      info: `Internet: the data settings (APN) on my phone aren't configured. You can fix it in 2 minutes if I give you the phone. The double charge: you can't refund it in the store. You'll open a claim and give me a reference number (folio 77319); the money comes back in 5–10 business days. I can also call my bank.`,
      lead: `Ask what the problem is. Ask questions to diagnose ("¿Ya reiniciaste el celular?", "¿Tienes señal?"). Fix the internet first. Only after that, react to the double charge. Make me ask for the folio.`,
      recast: `I say "Mi internet no está trabajando" and you say "¿No te funciona el internet? A ver, préstame el celular."`
    }
  },
  {
    title: "El pedido equivocado", partner: "Mesero Iván", place: "Restaurante · Mérida", reg: "usted",
    goal: "Your food arrives, but it's wrong: you ordered without pork, it's cold, and one dish is missing. Explain each problem politely to the waiter and get it fixed.",
    board: {
      title: "Cocina Doña Mari", sub: "Mérida, Yuc. · tu pedido",
      cols: [
        [{ h: "Lo que pediste", items: [["Panuchos de pollo (sin cochinita)"], ["Sopa de lima"], ["Agua de chaya"]] }],
        [{ h: "Lo que llegó", items: [["Panuchos de cochinita"], ["Sopa de lima · fría"], ["No llegó el agua"]] },
         { h: "Tu problema", items: [["No comes puerco"]] }]
      ],
      note: "Your friend has to leave in 20 minutes. Time matters."
    },
    words: [
      ["el pedido", "order"], ["pedir", "to order"], ["traer", "to bring"], ["equivocarse", "to make a mistake"],
      ["frío, fría", "cold"], ["caliente", "hot"], ["calentar", "to heat up"], ["la cochinita pibil", "Yucatecan slow-roasted pork"],
      ["el puerco", "pork (Mexico)"], ["faltar", "to be missing"], ["tardar", "to take (time)"], ["tener prisa", "to be in a hurry"]
    ],
    phrases: [
      ["Disculpe, creo que hay un error.", "Excuse me, I think there's a mistake."],
      ["Pedí los panuchos de pollo, no de cochinita.", "I ordered the chicken panuchos, not pork."],
      ["La sopa está fría. ¿Me la puede calentar?", "The soup is cold. Can you heat it up?"],
      ["Y todavía no llega el agua de chaya.", "And the chaya drink still hasn't come."],
      ["¿Cuánto va a tardar? Tenemos un poco de prisa.", "How long will it take? We're in a bit of a hurry."]
    ],
    prompt: {
      role: `You are Iván, a young waiter at Cocina Doña Mari in Mérida. It's very busy today. I'm a customer and my order arrived wrong. Use "usted" with me.`,
      infoTitle: "THE ORDER",
      info: `I ordered: chicken panuchos (no pork), sopa de lima, and an agua de chaya. You brought: cochinita (pork) panuchos, a cold sopa de lima, and forgot the drink. The kitchen needs 15 minutes to make new panuchos. You can heat the soup in 3 minutes and bring the drink now. As an apology, you can offer a free dessert (marquesita).`,
      lead: `Come to the table ("¿Todo bien por aquí?"). Let me explain each problem. Apologize and offer a solution for each, one at a time. Ask me what I prefer when there's a choice.`,
      recast: `I say "Yo pedí los panuchos con pollo, no con puerco" and you say "¿De pollo? ¡Ay, perdón! Me equivoqué."`
    }
  },
  {
    title: "El departamento rentado", partner: "Don Ernesto", place: "Llamada · Querétaro", reg: "usted",
    goal: "You're renting an apartment for a month. The boiler, a window, and the wifi have problems. Call the owner, explain each problem, and agree on when they'll be fixed.",
    board: {
      title: "Depa en renta", sub: "Querétaro, Qro. · un mes",
      cols: [
        [{ h: "Problemas", items: [["El boiler: no hay agua caliente"], ["La ventana de la recámara no cierra"], ["El wifi se va cada hora"]] }],
        [{ h: "Tu horario", items: [["Mañana", "clases 9–2"], ["Pasado mañana", "todo el día libre"]] },
         { h: "Prioridad", items: [["El agua caliente"]] }]
      ],
      note: "Don Ernesto can't send someone for all three today. Decide what's most urgent."
    },
    words: [
      ["el boiler, el calentador", "water heater (Mexico)"], ["el piloto", "pilot light"], ["la ventana", "window"], ["cerrar", "to close"],
      ["el plomero", "plumber"], ["el técnico", "technician"], ["urgente", "urgent"], ["se va (el wifi)", "it cuts out"],
      ["el módem", "router"], ["desconectar", "to unplug"], ["mandar a alguien", "to send someone"], ["estar en casa", "to be home"]
    ],
    phrases: [
      ["Le hablo porque hay unos problemas en el departamento.", "I'm calling because there are some problems in the apartment."],
      ["No hay agua caliente desde ayer.", "There's been no hot water since yesterday."],
      ["La ventana de la recámara no cierra bien.", "The bedroom window doesn't close properly."],
      ["Lo más urgente es el agua caliente.", "The most urgent thing is the hot water."],
      ["Pasado mañana estoy en casa todo el día.", "The day after tomorrow I'm home all day."]
    ],
    prompt: {
      role: `You are Don Ernesto, 68, the owner of the apartment I'm renting for a month in Querétaro. I call you about problems. Use "usted" with me.`,
      infoTitle: "WHAT YOU KNOW",
      info: `Boiler: the pilot light sometimes goes out. You can explain how to relight it by phone (open the small door, press the red button, light it with a lighter, hold for 30 seconds), or send the plumber tomorrow at 3 pm. Window: the technician can come the day after tomorrow. Wifi: tell me to unplug the router for 1 minute; if it keeps failing, you'll call the internet company.`,
      lead: `Answer with "¿Bueno?". Let me explain each problem. Ask questions to understand. Offer solutions and ask when I'm home. At the end, summarize the plan.`,
      recast: `I say "No hay agua caliente desde ayer en la mañana" and you say "¿Desde ayer en la mañana? Ah, seguro es el piloto."`
    }
  }
];
