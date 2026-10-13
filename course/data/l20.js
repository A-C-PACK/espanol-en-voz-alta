window.LESSONS = window.LESSONS || {};
LESSONS["20"] = {
  id: "20", level: "A2+", title: "¿Cuál prefieres?", minutes: 30,
  cando: "I can compare two things or places and say which I prefer and why.",
  scale: "Conversation",
  reg: "tú", partner: "Lalo", place: "Café · Ciudad de México",
  scene: "over coffee in Mexico City, my friend Lalo helped me choose between two apartments for a three-month stay, and I compared them and explained which I prefer",
  setup: "You're having coffee with your friend Lalo in Mexico City. You've seen two apartments, and he helps you compare them and choose.",
  goal: "You're moving to Mexico City for three months and you've seen two apartments. Your friend Lalo asks about them. Compare them point by point, listen to his opinion, and decide which one you'll take and why.",
  boardStep: ["Compara los departamentos", "Lalo knows both neighborhoods. He has a strong opinion."],
  board: {
    title: "Dos departamentos", sub: "Ciudad de México · 3 meses",
    cols: [
      [{ h: "Colonia Roma", items: [["Renta", "$16,000"], ["Tamaño", "45 m²"], ["Piso", "5.° con elevador"], ["Ruido", "mucho"], ["A tu trabajo", "15 min a pie"], ["Cafés, bares, vida"]] }],
      [{ h: "Coyoacán", items: [["Renta", "$13,500"], ["Tamaño", "70 m² + jardín"], ["Piso", "planta baja"], ["Ruido", "poco"], ["A tu trabajo", "45 min en metro"], ["Tranquilo, mercados"]] }]
    ],
    note: "Decide what matters most to you. Lalo will disagree with you."
  },
  dialogue: [
    ["m", "¿Y qué tal los departamentos? ¿Cuál te gustó más?", "So how were the apartments? Which one did you like better?"],
    ["c", "Los dos están bien, pero son muy diferentes.", "They're both fine, but they're very different."],
    ["m", "A ver, cuéntame.", "Let's see, tell me."],
    ["c", "El de la Roma es más caro y más pequeño que el de Coyoacán.", "The one in Roma is more expensive and smaller than the one in Coyoacán."],
    ["m", "¿Y está bonito?", "And is it nice?"],
    ["c", "Sí, es más moderno y tiene elevador. Pero hay mucho más ruido.", "Yes, it's more modern and has an elevator. But there's a lot more noise."],
    ["m", "¿Y el de Coyoacán?", "And the one in Coyoacán?"],
    ["c", "Es más grande, tiene jardín, y es tan bonito como el otro.", "It's bigger, it has a garden, and it's as nice as the other one."],
    ["m", "Entonces el de Coyoacán es mejor, ¿no?", "So the one in Coyoacán is better, right?"],
    ["c", "Sí y no. Está mucho más lejos de mi trabajo. Son cuarenta y cinco minutos en metro.", "Yes and no. It's much farther from my work. It's forty-five minutes by metro."],
    ["m", "Uy, el metro en la mañana está lleno. Yo prefiero la Roma.", "Oh, the metro in the morning is packed. I prefer Roma."],
    ["c", "Yo no estoy de acuerdo. Para mí, lo más importante es dormir bien.", "I don't agree. For me, the most important thing is sleeping well."],
    ["m", "Bueno, tiene sentido. ¿Entonces cuál vas a escoger?", "Well, that makes sense. So which one are you going to pick?"],
    ["c", "Prefiero el de Coyoacán porque es más tranquilo y más barato.", "I prefer the one in Coyoacán because it's quieter and cheaper."],
    ["m", "Me parece bien. Y los fines de semana vienes a la Roma conmigo.", "Sounds good. And on weekends you come to Roma with me."]
  ],
  core: [
    ["El de la Roma es más caro que el de Coyoacán.", "The one in Roma is more expensive than the one in Coyoacán."],
    ["El de Coyoacán es más grande y más tranquilo.", "The one in Coyoacán is bigger and quieter."],
    ["Es tan bonito como el otro.", "It's as nice as the other one."],
    ["Está mucho más lejos de mi trabajo.", "It's much farther from my work."],
    ["Para mí, lo más importante es dormir bien.", "For me, the most important thing is sleeping well."],
    ["Yo no estoy de acuerdo.", "I don't agree."],
    ["Prefiero el de Coyoacán porque es más barato.", "I prefer the one in Coyoacán because it's cheaper."]
  ],
  hear: [
    ["¿Cuál te gustó más?", "Which one did you like more?"],
    ["¿Qué tiene de bueno?", "What's good about it?"],
    ["¿Y qué tiene de malo?", "And what's bad about it?"],
    ["Yo que tú…", "If I were you…"],
    ["Tiene sentido.", "That makes sense."],
    ["¿Entonces cuál vas a escoger?", "So which one are you going to pick?"]
  ],
  extra: [
    ["Es menos caro que el otro.", "It's less expensive than the other one."],
    ["Es el mejor de los dos.", "It's the better of the two."],
    ["El problema es que…", "The problem is that…"],
    ["Lo bueno es que… / Lo malo es que…", "The good thing is that… / The bad thing is that…"],
    ["Los dos tienen ventajas.", "Both have advantages."],
    ["Depende.", "It depends."],
    ["Tienes razón, pero…", "You're right, but…"],
    ["No me importa mucho el ruido.", "The noise doesn't matter much to me."],
    ["Al final, voy a escoger…", "In the end, I'm going to pick…"],
    ["¿Y por qué no buscas otro?", "(you'll hear) And why don't you look for another one?"]
  ],
  vocab: [
    ["Comparar", [["más… que", "more… than"], ["menos… que", "less… than"], ["tan… como", "as… as"], ["mejor", "better"], ["peor", "worse"], ["mayor / menor", "older, bigger / younger, smaller"], ["el más…", "the most…"]]],
    ["Adjetivos", [["caro / barato", "expensive / cheap"], ["grande / pequeño", "big / small"], ["moderno / antiguo", "modern / old"], ["ruidoso / tranquilo", "noisy / quiet"], ["cerca / lejos", "near / far"], ["cómodo", "comfortable"], ["seguro", "safe"]]],
    ["Opinar", [["preferir", "to prefer"], ["escoger", "to choose (Mexico)"], ["la ventaja", "advantage"], ["la desventaja", "disadvantage"], ["estar de acuerdo", "to agree"], ["para mí", "for me"], ["depende", "it depends"]]]
  ],
  qd: [
    ["Say the Roma one is more expensive than the Coyoacán one.", "El de la Roma es más caro que el de Coyoacán."],
    ["Say the Coyoacán one is bigger and quieter.", "El de Coyoacán es más grande y más tranquilo."],
    ["Say it's as nice as the other one.", "Es tan bonito como el otro."],
    ["Say it's much farther from your work.", "Está mucho más lejos de mi trabajo."],
    ["Say that for you, the most important thing is sleeping well.", "Para mí, lo más importante es dormir bien."],
    ["Disagree politely.", "Tienes razón, pero yo no estoy de acuerdo."],
    ["Say which one you prefer and why.", "Prefiero el de Coyoacán porque es más barato."]
  ],
  patterns: [
    ["[más / menos] + [adjetivo] + que", "<i>Es más caro que el otro. Es menos ruidoso que la Roma.</i>"],
    ["tan + [adjetivo] + como", "Equal: <i>Es tan bonito como el otro.</i>"],
    ["mejor / peor (not más bueno)", "<i>Este es mejor. La ubicación es peor.</i>"],
    ["el de + [lugar]", "\"The one in…\": <i>el de la Roma, el de Coyoacán.</i> Saves repeating <i>departamento</i>."]
  ],
  notes: [
    ["Roma y Coyoacán", "Roma is trendy, central and lively. Coyoacán is greener, quieter and more traditional, but farther south."],
    ["Escoger", "Mexicans say <i>escoger</i> for \"to choose\" more than <i>elegir</i>."],
    ["Metros cuadrados", "Apartments are measured in m². 45 m² is about 480 sq ft."],
    ["Yo que tú", "<i>Yo que tú</i> means \"if I were you\". It's how Mexicans give friendly advice."]
  ],
  prompt: {
    role: `You are Lalo, 31, my friend who lives in Colonia Roma, Mexico City. We're having coffee. I'm moving to the city for three months and I've seen two apartments. Use "tú" with me.`,
    infoTitle: "THE TWO APARTMENTS",
    info: `Roma: $16,000/month, 45 m², 5th floor with elevator, modern, very noisy (bars on the street), 15 minutes' walk to my work.
Coyoacán: $13,500/month, 70 m² with a small garden, ground floor, older but pretty, quiet, near markets, 45 minutes to my work by metro (packed in the morning).
You strongly prefer Roma because you live there and love the nightlife.`,
    twist: `Disagree with my choice at least once and give a reason, so I have to defend my opinion. Also ask: "¿Y cuál es más seguro?" (I don't know, so I have to say so and ask what you think).`,
    lead: `Ask me what I thought of each apartment. Make me compare them point by point (price, size, noise, location). Ask what's most important for me. Push me to decide at the end.`,
    recast: `I say "El de Coyoacán es más bueno" and you say "¿Es mejor el de Coyoacán? ¿Por qué?"`
  },
  twists: [
    ["Dos ciudades", "Harder", "Compare two cities you know well.", `Otra vez, por favor. This time ask me to compare my city with another city I know well (weather, food, people, cost of living, transportation). Ask which one I prefer to live in and why. Disagree once. Same rules.`],
    ["Tú aconsejas", "Challenge", "Lalo has to choose between two jobs. You give advice.", `Otra vez, por favor. This time you have to choose between two jobs: one pays more but is far away with long hours; the other pays less but is close and relaxed. I ask questions and help you compare. Make me give advice ("Yo que tú…"). Same rules.`]
  ],
  sa: [
    "I can compare with más/menos… que",
    "I can say two things are equal (tan… como)",
    "I can use mejor and peor",
    "I can say what's most important for me",
    "I can say which I prefer and give a reason"
  ]
};
