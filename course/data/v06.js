LESSONS["06"].vars = [
  {
    title: "La posada", partner: "Fer", place: "Posada de la oficina · CDMX",
    goal: "A December office party (posada). Chat with a coworker about food, music, and holidays, say what you like more, and politely say no to something.",
    board: {
      title: "La Posada", sub: "Ciudad de México · viernes de diciembre",
      cols: [
        [{ h: "En la mesa", items: [["Ponche de frutas"], ["Tamales"], ["Buñuelos"], ["Pozole"], ["Ponche con piquete (con alcohol)"]] }],
        [{ h: "Temas", items: [["La música: cumbia, salsa"], ["Bailar"], ["La Navidad"], ["Las vacaciones"], ["La comida favorita"]] }]
      ],
      note: "Fer will ask you to dance. Say yes or no politely."
    },
    words: [
      ["la posada", "December Christmas party"], ["el ponche", "warm fruit punch"], ["los buñuelos", "crispy fried dough with syrup"],
      ["el pozole", "hominy soup"], ["la piñata", "piñata"], ["bailar", "to dance"], ["la cumbia", "cumbia (music)"],
      ["la Navidad", "Christmas"], ["las vacaciones", "vacation"], ["preferir", "to prefer"], ["más", "more"], ["nada", "(not) at all"]
    ],
    phrases: [
      ["¿Te gusta bailar?", "Do you like to dance?"],
      ["Me gusta más la salsa.", "I like salsa more."],
      ["Prefiero el pozole.", "I prefer the pozole."],
      ["No me gusta nada.", "I don't like it at all."],
      ["Gracias, pero no bailo.", "Thanks, but I don't dance."]
    ],
    prompt: {
      role: `You are Fer (Fernanda), 29, my coworker in Mexico City. We're at the office posada on a Friday night in December. We don't know each other well yet. Use "tú" with me.`,
      infoTitle: "ABOUT YOU (FER)",
      info: `Loves salsa dancing and cumbia, Pumas soccer, tacos al pastor, and reading novels. Favorite food: pozole. Doesn't like running, cold weather, or beer (prefers mezcal). For the holidays, she's going to Veracruz to see her family. At some point, invite me to dance.`,
      lead: `Offer me food and drinks from the table and ask what I like: food, music, dancing, holidays. Share your own likes after mine. React to my answers ("¡A mí también!", "¿En serio?") and ask the next question.`,
      recast: `I say "Me gusta mucho los tamales" and you say "¿Te gustan mucho los tamales? ¡A mí también!"`
    }
  },
  {
    title: "Un partido de béisbol", partner: "Kike", place: "Estadio · Hermosillo",
    goal: "At a baseball game, chat with the fan sitting next to you. Talk about sports, food, and music, and find two things you both like.",
    board: {
      title: "¡Vamos Naranjeros!", sub: "Hermosillo, Son. · estadio · domingo",
      cols: [
        [{ h: "En el estadio", items: [["Cerveza"], ["Cacahuates"], ["Hot dogs sonorenses"], ["Elotes"], ["Refrescos"]] }],
        [{ h: "Temas", items: [["El béisbol o el fútbol"], ["Tu equipo favorito"], ["La música: banda, rock"], ["El calor"], ["La comida de Sonora"]] }]
      ],
      note: "Kike will offer you some food. Accept or say no politely."
    },
    words: [
      ["el béisbol", "baseball"], ["el partido", "game, match"], ["el equipo", "team"], ["el estadio", "stadium"],
      ["ganar", "to win"], ["perder", "to lose"], ["el aficionado, la aficionada", "fan"], ["los cacahuates", "peanuts"],
      ["la banda", "Mexican brass band music"], ["el calor", "heat"], ["favorito, favorita", "favorite"], ["ver", "to watch"]
    ],
    phrases: [
      ["¿Cuál es tu equipo favorito?", "What's your favorite team?"],
      ["Me gusta más el béisbol que el fútbol.", "I like baseball more than soccer."],
      ["No me gusta el calor.", "I don't like the heat."],
      ["¿Te gusta la banda?", "Do you like banda music?"],
      ["No, gracias. Estoy bien.", "No thanks. I'm fine."]
    ],
    prompt: {
      role: `You are Kike (Enrique), 40, a big Naranjeros fan from Hermosillo, Sonora. We're sitting next to each other at a baseball game on a hot Sunday. Use "tú" with me.`,
      infoTitle: "ABOUT YOU (KIKE)",
      info: `Loves baseball (Naranjeros), cold beer, carne asada, hot dogs sonorenses, and banda music. Has season tickets. Doesn't like soccer much, or spicy food (strange for a Mexican, he jokes). Thinks the heat is normal. At some point, offer me some cacahuates.`,
      lead: `Start by asking if I like baseball. Ask about sports, food, music, and the weather, one at a time. Share your own likes after mine. React to my answers ("¡No manches!", "¡Eso!") and ask the next question.`,
      recast: `I say "Me gusta el béisbol más de fútbol" and you say "Te gusta más el béisbol que el fútbol. ¡Eso!"`
    }
  },
  {
    title: "Un compañero de cuarto", partner: "Sofía", place: "Departamento compartido · Guadalajara",
    goal: "You're meeting someone who might rent a room in your apartment. Find out her likes and habits, tell her yours, and decide if you would get along.",
    board: {
      title: "Se renta cuarto", sub: "Guadalajara, Jal. · entrevista",
      cols: [
        [{ h: "Pregúntale", items: [["¿Te gustan los animales?"], ["¿Te gusta cocinar?"], ["¿Te gustan las fiestas?"], ["¿Te gusta levantarte temprano?"]] }],
        [{ h: "Tus frases", items: [["Me gusta… / Me encanta…"], ["No me gusta…"], ["Prefiero…"], ["A mí también. / A mí no."]] }]
      ],
      note: "Sofía has one thing you might not like. Find out what."
    },
    words: [
      ["el compañero de cuarto", "roommate"], ["el gato", "cat"], ["el perro", "dog"], ["cocinar", "to cook"],
      ["limpiar", "to clean"], ["el ruido", "noise"], ["la fiesta", "party"], ["tranquilo, tranquila", "calm, quiet"],
      ["ordenado, ordenada", "tidy"], ["levantarse", "to get up"], ["temprano", "early"], ["la música alta", "loud music"]
    ],
    phrases: [
      ["¿Te gustan los animales?", "Do you like animals?"],
      ["Me encanta cocinar.", "I love to cook."],
      ["No me gustan las fiestas en casa.", "I don't like parties at home."],
      ["Me gusta levantarme temprano.", "I like to get up early."],
      ["Prefiero un lugar tranquilo.", "I prefer a quiet place."]
    ],
    prompt: {
      role: `You are Sofía, 26, a graphic designer looking to rent a room in my apartment in Guadalajara. This is our first meeting, in my living room. Use "tú" with me.`,
      infoTitle: "ABOUT YOU (SOFÍA)",
      info: `Loves cooking (especially Italian food), yoga, plants, and quiet evenings. Gets up at 6 am. Doesn't like loud music, parties at home, or mess. Has a cat named Chispa and wants to bring her (only mention it if I ask about animals, or near the end). Works from home three days a week.`,
      lead: `Ask what I like and what my habits are: cooking, cleaning, music, parties, mornings. Share your own likes after mine. React to my answers ("¡Qué bien!", "Mmm, ¿en serio?") and ask the next question. At the end, ask "¿Entonces, qué piensas?"`,
      recast: `I say "Me gusta los gatos" and you say "¿Te gustan los gatos? ¡Qué bien!"`
    }
  }
];
