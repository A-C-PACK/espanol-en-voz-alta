LESSONS["07"].vars = [
  {
    title: "Buscando departamento", partner: "Sr. Méndez", place: "Colonia Roma · CDMX", reg: "usted",
    goal: "You're viewing an apartment for rent. Ask about the apartment, and describe where you live now and what you need.",
    board: {
      title: "Se renta departamento", sub: "Colonia Roma, CDMX · visita con el dueño",
      cols: [
        [{ h: "Pregúntele", items: [["¿En qué piso está?"], ["¿Hay elevador?"], ["¿Está amueblado?"], ["¿Cuánto es la renta?"], ["¿Qué hay cerca?"]] }],
        [{ h: "Él va a preguntar", items: [["¿Dónde vive ahora?"], ["¿Cómo es su casa ahora?"], ["¿Por qué busca departamento?"]] }]
      ],
      note: "The apartment has one big problem. Ask questions to find it."
    },
    words: [
      ["el departamento", "apartment"], ["el piso", "floor"], ["el elevador", "elevator"], ["la sala", "living room"],
      ["el comedor", "dining room"], ["el balcón", "balcony"], ["la renta", "rent"], ["amueblado", "furnished"],
      ["ruidoso", "noisy"], ["luminoso", "bright, full of light"], ["el dueño, la dueña", "owner"], ["la estación de metro", "metro station"]
    ],
    phrases: [
      ["¿En qué piso está?", "What floor is it on?"],
      ["¿Está amueblado?", "Is it furnished?"],
      ["Ahora vivo en una casa con…", "Right now I live in a house with…"],
      ["Mi departamento es pequeño, pero luminoso.", "My apartment is small but bright."],
      ["Busco algo más tranquilo.", "I'm looking for something quieter."]
    ],
    prompt: {
      role: `You are Señor Méndez, 60, the owner of an apartment for rent in Colonia Roma, Mexico City. I'm visiting the apartment to see if I want to rent it. Use "usted" with me.`,
      infoTitle: "THE APARTMENT",
      info: `Fourth floor, no elevator (the big problem; only say so if I ask about floors or stairs). Two bedrooms, one bathroom, a small kitchen, a living-dining room, and a balcony over the street. Very bright. Not furnished, but has a stove and a refrigerator. Rent: $14,000 a month. Near the Insurgentes metro station, a market, and many cafés. The street is noisy on weekends.`,
      lead: `Show me the apartment one room at a time. Ask me where I live now, what my home is like, and why I'm looking. Encourage longer answers ("¿Y qué más?", "Cuénteme más"). Answer my questions about the apartment in 1–2 short sentences.`,
      recast: `I say "Mi casa ahora es en el centro" and you say "Ah, su casa está en el centro. Muy bien."`
    }
  },
  {
    title: "Una amiga de visita", partner: "Mónica", place: "Llamada con Monterrey",
    goal: "A friend from Monterrey wants to visit you. Describe your home, where she'll sleep, and your neighborhood, so she can plan her trip.",
    board: {
      title: "¡Mónica viene de visita!", sub: "Llamada · Monterrey → tu ciudad",
      cols: [
        [{ h: "Mónica va a preguntar", items: [["¿Dónde voy a dormir?"], ["¿Cómo es tu colonia?"], ["¿Hay supermercado cerca?"], ["¿Cómo llego del aeropuerto?"]] }],
        [{ h: "Tus frases", items: [["Puedes dormir en…"], ["Mi colonia es…"], ["Hay un… a cinco minutos."], ["Está a… minutos a pie."]] }]
      ],
      note: "Goal: describe your neighborhood for 30 seconds without stopping."
    },
    words: [
      ["el cuarto de visitas", "guest room"], ["el sofá cama", "sofa bed"], ["el jardín", "garden, yard"], ["el garaje", "garage"],
      ["la colonia", "neighborhood (Mexico)"], ["la parada de autobús", "bus stop"], ["el supermercado", "supermarket"],
      ["a pie", "on foot"], ["en coche", "by car"], ["seguro, segura", "safe"], ["las tiendas", "shops"], ["los vecinos", "neighbors"]
    ],
    phrases: [
      ["Puedes dormir en el sofá cama.", "You can sleep on the sofa bed."],
      ["Mi colonia es tranquila y segura.", "My neighborhood is quiet and safe."],
      ["Hay un supermercado a cinco minutos.", "There's a supermarket five minutes away."],
      ["Está a diez minutos a pie.", "It's ten minutes on foot."],
      ["Del aeropuerto, es mejor tomar un taxi.", "From the airport, it's better to take a taxi."]
    ],
    prompt: {
      role: `You are Mónica, 38, my friend from Monterrey. You're planning to visit me next month and stay at my home for four days. We're on the phone. Use "tú" with me.`,
      infoTitle: "ABOUT YOU (MÓNICA)",
      info: `You live in a house in San Pedro, Monterrey, with a garden and two dogs. You've never been to my city. You like walking, coffee shops, and markets. You're worried about the cold, about where you'll sleep, and about getting from the airport.`,
      lead: `Ask me open questions about my home and neighborhood: where you'll sleep, what's nearby, how to get around, what the weather is like. After a short answer, say "¿Y qué más?" or "Cuéntame más." Later I'll ask about your home; answer in 2 short sentences.`,
      recast: `I say "Mi colonia es muy segura y es cerca del parque" and you say "Ah, tu colonia está cerca del parque. ¡Qué padre!"`
    }
  },
  {
    title: "En el taxi", partner: "Don Toño", place: "Un taxi · Ciudad de México", reg: "usted",
    goal: "A chatty taxi driver asks about where you live. Describe your city, your neighborhood, the weather, and your home.",
    board: {
      title: "Taxi", sub: "Ciudad de México · del aeropuerto al centro",
      cols: [
        [{ h: "Don Toño va a preguntar", items: [["¿De dónde es usted?"], ["¿Cómo es su ciudad?"], ["¿Vive en casa o en departamento?"], ["¿Hace frío allá?"]] }],
        [{ h: "Tus frases", items: [["Mi ciudad es…"], ["Vivo cerca de… / lejos de…"], ["En invierno hace…"], ["Mi barrio es…"]] }]
      ],
      note: "Ask Don Toño about his neighborhood too."
    },
    words: [
      ["la ciudad", "city"], ["el barrio", "neighborhood"], ["el centro", "downtown"], ["las afueras", "outskirts"],
      ["el tráfico", "traffic"], ["el clima", "weather, climate"], ["hace frío", "it's cold"], ["hace calor", "it's hot"],
      ["la nieve", "snow"], ["lejos de", "far from"], ["cerca de", "close to"], ["grande, pequeña", "big, small"]
    ],
    phrases: [
      ["Mi ciudad es grande, pero tranquila.", "My city is big but quiet."],
      ["Vivo un poco lejos del centro.", "I live a little far from downtown."],
      ["En invierno hace mucho frío.", "In winter it's very cold."],
      ["No hay mucho tráfico.", "There isn't much traffic."],
      ["¿Y usted dónde vive?", "And where do you live?"]
    ],
    prompt: {
      role: `You are Don Toño, 58, a friendly, talkative taxi driver in Mexico City. I'm your passenger, going from the airport to the city center. Use "usted" with me.`,
      infoTitle: "ABOUT YOU (DON TOÑO)",
      info: `You live in Iztapalapa in a two-story house with your wife, your daughter, and two grandchildren. Your neighborhood is busy and has a great market. There is a lot of traffic. You've never been to the United States, and you're curious about the weather and houses there.`,
      lead: `Ask me where I'm from, and then open questions about my city, neighborhood, home, and weather. After a short answer, say "¿Ah, sí? ¿Y qué más?" or "Cuénteme." When I ask about your neighborhood, answer in 2 short sentences.`,
      recast: `I say "En mi ciudad hay mucho frío en invierno" and you say "Ah, hace mucho frío en invierno. ¡Qué frío!"`
    }
  }
];
