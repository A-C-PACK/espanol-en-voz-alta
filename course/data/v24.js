LESSONS["24"].vars = [
  {
    title: "La maleta perdida", partner: "Srta. Mendoza", place: "Aeropuerto · Cancún",
    goal: "Your suitcase didn't arrive in Cancún. At the airline's baggage office, explain what happened, describe the suitcase and what's inside, and find out what the airline will do for you tonight.",
    board: {
      title: "Equipaje · Llegadas", sub: "Aeropuerto de Cancún · Terminal 3",
      cols: [
        [{ h: "Tu vuelo", items: [["Conexión en CDMX"], ["Tu primer vuelo llegó tarde"], ["Corriste a la conexión"], ["Tu maleta no salió"]] },
         { h: "Tu maleta", items: [["Grande, azul marino, con ruedas"], ["Listón rojo en la manija"], ["Adentro: ropa, medicina, regalos"]] }],
        [{ h: "Necesitas", items: [["Tu medicina, hoy"], ["Ropa para mañana"], ["Que te la lleven al hotel"]] },
         { h: "Tu hotel", items: [["Playa del Carmen · 1 hora"]] }]
      ],
      note: "The airline offers little at first. Ask for more."
    },
    words: [
      ["el equipaje", "luggage"], ["la conexión", "connecting flight"], ["el reporte", "report"], ["el número de folio", "reference number"],
      ["la etiqueta", "luggage tag"], ["las ruedas", "wheels"], ["la manija", "handle"], ["el listón", "ribbon"],
      ["entregar", "to deliver"], ["los gastos", "expenses"], ["reembolsar", "to reimburse"], ["el comprobante", "receipt"]
    ],
    phrases: [
      ["Mi maleta no llegó. Hice conexión en la Ciudad de México.", "My suitcase didn't arrive. I connected in Mexico City."],
      ["Es una maleta grande, azul marino, con un listón rojo.", "It's a big navy-blue suitcase with a red ribbon."],
      ["Lo más urgente es mi medicina.", "The most urgent thing is my medicine."],
      ["¿Me la pueden llevar al hotel cuando llegue?", "Can you deliver it to my hotel when it arrives?"],
      ["Mientras tanto, ¿me reembolsan si compro ropa?", "In the meantime, will you reimburse me if I buy clothes?"]
    ],
    prompt: {
      role: `You are Señorita Mendoza, 30, at the airline's baggage claim office in Cancún airport. I'm a passenger whose suitcase didn't arrive. Use "usted" with me. You're professional and a bit tired; it's been a long day.`,
      infoTitle: "THE SITUATION",
      info: `My first flight arrived late in Mexico City and the suitcase didn't make the connection. It's probably in Mexico City and will arrive on tomorrow's 2 pm flight. You need: my name, flight number, tag number (on my boarding pass), a description, and my hotel address. You give a reference number (folio CUN-4471). Delivery to Playa del Carmen is free, tomorrow evening.
At first you offer only a small kit (toothbrush, T-shirt). If I insist politely, you say the airline reimburses up to $1,500 pesos in essential purchases with receipts. For medicine: there's a pharmacy in the airport, and it's covered.`,
      twist: `When I ask when it will arrive, say "no le puedo asegurar" at first. Ask me what exactly is inside, including value, in case the suitcase is lost permanently.`,
      lead: `Let me explain what happened. Ask your questions one at a time to fill out the report. Make me negotiate for help with expenses.`,
      recast: `I say "Si mi maleta llega, me la pueden llevar?" and you say "Cuando llegue, se la llevamos al hotel, sí."`
    }
  },
  {
    title: "Se me perdió el pasaporte", partner: "Oficial Torres", place: "Ministerio Público · Guadalajara",
    goal: "You think your passport was stolen at a busy market. File a report at the police office: explain where you were, what you were doing, what happened, and what you need the report for.",
    board: {
      title: "Ministerio Público", sub: "Guadalajara, Jal. · constancia de extravío",
      cols: [
        [{ h: "Lo que pasó", items: [["Ayer, 1 pm, Mercado San Juan de Dios"], ["Había muchísima gente"], ["Tu mochila estaba abierta"], ["El pasaporte ya no estaba"]] }],
        [{ h: "Necesitas", items: [["Una constancia (reporte)"], ["Para tu embajada / consulado"], ["Tu vuelo es en 4 días"]] },
         { h: "Llevas", items: [["Copia del pasaporte en el celular"], ["Tu licencia de manejar"]] }]
      ],
      note: "The officer will ask if it was lost or stolen. It matters for the report."
    },
    words: [
      ["el Ministerio Público", "public prosecutor's office"], ["la denuncia", "police report (crime)"], ["la constancia de extravío", "lost-item report"], ["extraviar", "to lose (formal)"],
      ["robar", "to steal"], ["el carterista", "pickpocket"], ["la embajada", "embassy"], ["el consulado", "consulate"],
      ["la copia", "copy"], ["el trámite", "procedure, paperwork"], ["declarar", "to state, declare"], ["firmar", "to sign"]
    ],
    phrases: [
      ["Vengo a reportar que se me perdió el pasaporte.", "I'm here to report that I lost my passport."],
      ["Estaba en el mercado y había muchísima gente.", "I was at the market and there were tons of people."],
      ["No estoy seguro si me lo robaron o si se me cayó.", "I'm not sure if it was stolen or if I dropped it."],
      ["Necesito la constancia para el consulado.", "I need the report for the consulate."],
      ["¿Cuánto tarda el trámite?", "How long does the paperwork take?"]
    ],
    prompt: {
      role: `You are Oficial Torres, 45, an officer taking reports at the public prosecutor's office (Ministerio Público) in Guadalajara. I came to report my lost passport. Use "usted" with me. You're bureaucratic but fair.`,
      infoTitle: "THE PROCEDURE",
      info: `There are two kinds of reports: "constancia de extravío" (lost item; quick, 30 minutes, free) and "denuncia" (robbery; longer, 2–3 hours, you need to describe the thief). The consulate accepts either. You need: full name, nationality, ID (any), date, time and place, and a description of what happened. You'll read back the statement and ask me to sign it. Most consulates issue emergency passports in 1–3 days.`,
      lead: `Ask what happened, then ask the questions one at a time. Ask me directly: "¿Se le perdió o se lo robaron?" Explain the two options and let me choose. Read back my statement with one small mistake to check.`,
      recast: `I say "Yo estuve en el mercado cuando alguien me robó" and you say "Estaba en el mercado cuando alguien le robó el pasaporte. ¿Vio a la persona?"`
    }
  },
  {
    title: "Carretera cerrada", partner: "Don Lupe", place: "Gasolinera · Carretera a Zacatecas",
    goal: "You're driving a rental car and the highway ahead is blocked by a protest. At a gas station, ask a local what's going on, get directions for another route, and decide what to do.",
    board: {
      title: "Gasolinera km 82", sub: "Carretera Aguascalientes – Zacatecas · 4:30 pm",
      cols: [
        [{ h: "Situación", items: [["Bloqueo 10 km adelante"], ["Nadie sabe cuánto va a durar"], ["Tienes medio tanque"], ["Se hace de noche a las 7"]] }],
        [{ h: "Opciones", items: [["Esperar el bloqueo"], ["Ruta libre por los pueblos · +2 horas"], ["Quedarte en un hotel cercano"]] },
         { h: "Tu reservación", items: [["Hotel en Zacatecas esta noche"]] }]
      ],
      note: "Driving at night on rural roads isn't recommended. Factor that in."
    },
    words: [
      ["el bloqueo", "road block (protest)"], ["la manifestación", "protest"], ["la caseta", "toll booth"], ["la cuota / la libre", "toll road / free road"],
      ["la desviación", "detour"], ["el tanque", "gas tank"], ["llenar el tanque", "to fill up"], ["el tope", "speed bump (Mexico)"],
      ["de noche", "at night"], ["arriesgarse", "to take a risk"], ["cancelar la reservación", "to cancel the booking"], ["más vale", "it's better to"]
    ],
    phrases: [
      ["¿Sabe qué está pasando en la carretera?", "Do you know what's happening on the highway?"],
      ["¿Hay otra ruta para llegar a Zacatecas?", "Is there another route to Zacatecas?"],
      ["¿Es segura la carretera libre de noche?", "Is the free road safe at night?"],
      ["¿Hay algún hotel por aquí cerca?", "Is there a hotel nearby?"],
      ["Creo que más vale quedarme aquí esta noche.", "I think it's better if I stay here tonight."]
    ],
    prompt: {
      role: `You are Don Lupe, 60, who works at a gas station on the highway from Aguascalientes to Zacatecas. It's 4:30 pm. I'm a traveler driving a rental car. Use "usted" with me. You're friendly and practical.`,
      infoTitle: "WHAT YOU KNOW",
      info: `Farmers are blocking the highway 10 km ahead to protest water prices. Last time it lasted 6 hours. Alternative: the free road through the towns of Luis Moya and Ojocaliente, 2 extra hours, lots of speed bumps, no lights; you don't recommend driving it after dark. There's a clean, simple motel 3 km back, Motel Las Palmas, $650 a night. Fill the tank here either way.`,
      lead: `Answer my questions. Explain the options honestly, one at a time. Give your opinion if I ask ("Yo que usted…"). Let me decide and explain my reasons.`,
      recast: `I say "¿Cuánto tiempo va a durar el bloqueo?" and you say "Quién sabe. La última vez duró seis horas."`
    }
  }
];
