LESSONS["22"].vars = [
  {
    title: "El vuelo perdido", partner: "Tío Rafa", place: "Comida familiar · Monterrey",
    goal: "At a family lunch, your friend's uncle asks about your trip to Cancún. Tell the story of how you almost missed your flight home, from start to finish.",
    board: {
      title: "Regreso de Cancún", sub: "La historia del aeropuerto",
      cols: [
        [{ h: "El fondo", items: [["Era domingo, muy temprano"], ["Llovía mucho"], ["Había mucho tráfico en la carretera"], ["Estabas muy nervioso/a"]] }],
        [{ h: "Lo que pasó", items: [["El taxi no llegó"], ["Pediste un Uber"], ["Llegaste 30 minutos antes del vuelo"], ["Corriste a la puerta"], ["El vuelo tenía retraso"]] }]
      ],
      note: "The ending is a surprise. Keep the suspense."
    },
    words: [
      ["el vuelo", "flight"], ["la puerta de embarque", "boarding gate"], ["la fila", "line"], ["la documentación", "check-in (Mexico)"],
      ["el retraso", "delay"], ["correr", "to run"], ["alcanzar", "to catch, make it"], ["perder el vuelo", "to miss the flight"],
      ["casi", "almost"], ["el susto", "scare"], ["sudar", "to sweat"], ["menos mal", "thank goodness"]
    ],
    phrases: [
      ["Era domingo y llovía muchísimo.", "It was Sunday and it was pouring."],
      ["El taxi nunca llegó, entonces pedí un Uber.", "The taxi never came, so I ordered an Uber."],
      ["Cuando llegué al aeropuerto, había una fila enorme.", "When I got to the airport, there was a huge line."],
      ["Corrí a la puerta, y ¿sabes qué?", "I ran to the gate, and you know what?"],
      ["¡El vuelo tenía dos horas de retraso! Menos mal.", "The flight was two hours late! Thank goodness."]
    ],
    prompt: {
      role: `You are Tío Rafa, 60, the uncle of my Mexican friend. We're at a long Sunday family lunch in Monterrey. You love stories and you exaggerate your own. Use "tú" with me.`,
      infoTitle: "YOU (TÍO RAFA)",
      info: `You've traveled a lot. You once missed a flight to Tijuana because you fell asleep at the gate. You think airports are a disaster. You don't know my story.`,
      lead: `Ask how my trip to Cancún was and how the trip back went. React with drama ("¡No me digas!", "¡Uy, qué nervios!"). Ask questions about the scene (weather, time, how I felt). Once, start telling your own story, and let me go back to mine ("Bueno, pero déjame terminar…").`,
      recast: `I say "Cuando llegaba al aeropuerto, hubo una fila" and you say "¿Cuando llegaste había una fila? ¡Típico!"`
    }
  },
  {
    title: "Mi primer viaje", partner: "Fer", place: "Fogata · Valle de Bravo",
    goal: "Sitting around a campfire, friends share stories about their first big trip. Tell yours: how old you were, where you went, what it was like, and one moment you'll never forget.",
    board: {
      title: "Historias en la fogata", sub: "Valle de Bravo, Edo. Méx. · de noche",
      cols: [
        [{ h: "Prepara (imperfecto)", items: [["Tenía … años"], ["Vivía en …"], ["Era la primera vez que …"], ["No hablaba …"]] }],
        [{ h: "Prepara (pretérito)", items: [["Un día fui a …"], ["Conocí a …"], ["Me pasó algo …"], ["Aprendí que …"]] }]
      ],
      note: "This is your real story. Fer will ask for details."
    },
    words: [
      ["la fogata", "campfire"], ["la primera vez", "the first time"], ["de niño, de niña", "as a child"], ["de joven", "when I was young"],
      ["conocer", "to meet; to visit (a place)"], ["perderse", "to get lost"], ["extrañar", "to miss (home)"], ["sentirse", "to feel"],
      ["emocionado, emocionada", "excited"], ["asustado, asustada", "scared"], ["aprender", "to learn"], ["cambiar la vida", "to change one's life"]
    ],
    phrases: [
      ["Tenía diecinueve años y nunca había salido de mi país.", "I was nineteen and I'd never left my country."],
      ["Era la primera vez que viajaba solo. / sola.", "It was the first time I traveled alone."],
      ["Un día me perdí en el centro.", "One day I got lost downtown."],
      ["Me sentía un poco asustado, pero emocionado.", "I felt a little scared, but excited."],
      ["Ese viaje me cambió la vida.", "That trip changed my life."]
    ],
    prompt: {
      role: `You are Fer (Fernanda), 27, a friend on a weekend camping trip in Valle de Bravo. We're sitting around a campfire at night sharing stories about our first big trips. Use "tú" with me.`,
      infoTitle: "YOUR STORY (FER)",
      info: `Your first big trip: at 18 you went to Canada as an au pair. You didn't speak English well, it was -20°C, and on the first day you got on the wrong train. A kind old woman helped you. You'll tell it after mine, briefly.`,
      lead: `Ask me about my first big trip. Ask about the background (how old I was, where I lived, what I was like) and then what happened. React warmly. Ask "¿Y qué aprendiste?" at the end. Then tell yours in 3–4 sentences.`,
      recast: `I say "Cuando fui joven, yo viajé a…" and you say "Ah, cuando eras joven viajaste a… ¡Qué valiente!"`
    }
  },
  {
    title: "El reporte del viaje", partner: "Lic. Aguilar", place: "Oficina · CDMX", reg: "usted",
    goal: "You just got back from a work trip to Mérida. Tell your boss how it went: what the conditions were like, what happened each day, the problem you had, and the results.",
    board: {
      title: "Viaje de trabajo a Mérida", sub: "Lunes a jueves · reporte",
      cols: [
        [{ h: "Cómo era", items: [["Hacía 38 grados"], ["El hotel estaba lejos de la oficina"], ["El cliente era muy amable"], ["Había mucho trabajo"]] }],
        [{ h: "Qué pasó", items: [["Lunes: llegaste y fuiste a la oficina"], ["Martes: la presentación"], ["Miércoles: se fue la luz en la reunión"], ["Jueves: el cliente firmó el contrato"]] }]
      ],
      note: "Your boss wants a clear report, not just a fun story."
    },
    words: [
      ["el viaje de trabajo", "business trip"], ["el cliente", "client"], ["la presentación", "presentation"], ["la reunión, la junta", "meeting"],
      ["firmar", "to sign"], ["el contrato", "contract"], ["irse la luz", "to have a power outage"], ["resolver", "to solve"],
      ["salir bien", "to go well"], ["los resultados", "results"], ["el seguimiento", "follow-up"], ["en resumen", "in summary"]
    ],
    phrases: [
      ["En general, el viaje salió muy bien.", "Overall, the trip went very well."],
      ["El martes hice la presentación.", "On Tuesday I gave the presentation."],
      ["Mientras hablábamos, se fue la luz.", "While we were talking, the power went out."],
      ["Entonces continuamos en el patio.", "So we continued in the courtyard."],
      ["Al final, el cliente firmó el contrato.", "In the end, the client signed the contract."]
    ],
    prompt: {
      role: `You are Licenciada Aguilar, 48, my boss at a company in Mexico City. I just got back from a 4-day business trip to Mérida to meet a client. Use "usted" with me.`,
      infoTitle: "WHAT YOU WANT",
      info: `You want a clear report: how the trip went overall, what happened each day, any problems and how I solved them, and the result. You're happy if the client signed. You're a bit worried about the hotel cost because it was far from the office and I took many taxis.`,
      lead: `Ask "¿Cómo le fue en Mérida?" Then ask about each day in order. Ask for details about the problem. Ask about the taxis and the hotel. At the end, ask "¿Y qué sigue?" (next steps).`,
      recast: `I say "Cuando presenté, se iba la luz" and you say "¿Mientras presentaba se fue la luz? ¿Y qué hizo?"`
    }
  }
];
