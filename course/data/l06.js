window.LESSONS = window.LESSONS || {};
LESSONS["06"] = {
  id: "06", level: "A1", title: "Me gusta", minutes: 25,
  cando: "I can say what I like and don't like (food, activities).",
  scale: "Conversation",
  reg: "tú", partner: "Diego", place: "Carne asada · Monterrey",
  scene: "at a Saturday carne asada in Monterrey, I talked with Diego about what we like and don't like",
  setup: "You're at a Saturday carne asada at Diego's house in Monterrey. Diego offers you food, and you talk about what you like.",
  goal: "You're at a Saturday carne asada at Diego's house in Monterrey. ChatGPT plays Diego, your friend's cousin. Talk about food, sports, music, and free time, and politely say no to something.",
  boardStep: ["Mira la mesa", "Diego will offer you food and ask what you like."],
  board: {
    title: "Carne Asada", sub: "Casa de Diego · Monterrey, N.L. · sábado",
    cols: [
      [{ h: "En la mesa", items: [["Carne asada"], ["Frijoles charros"], ["Elotes"], ["Salsa de molcajete (pica mucho)"], ["Tripas"], ["Agua de limón"]] }],
      [{ h: "Temas", items: [["El fútbol: Rayados o Tigres"], ["La música: norteña, rock"], ["El cine"], ["Viajar, cocinar, leer"], ["Los fines de semana"]] }]
    ],
    note: "Diego will offer you something you may not like. Say no politely."
  },
  dialogue: [
    ["m", "¡Hola! ¿Te gusta la carne asada?", "Hi! Do you like carne asada?"],
    ["c", "¡Sí, me gusta mucho!", "Yes, I like it a lot!"],
    ["m", "¿Y te gusta el fútbol?", "And do you like soccer?"],
    ["c", "Más o menos. Me gusta más el básquetbol.", "So-so. I like basketball more."],
    ["m", "¿En serio? A mí me encanta el fútbol. Soy de Rayados.", "Really? I love soccer. I'm a Rayados fan."],
    ["c", "¿Qué música te gusta?", "What music do you like?"],
    ["m", "Me gusta la música norteña. ¿Y a ti?", "I like norteña music. And you?"],
    ["c", "No me gusta mucho. Me gusta el rock.", "I don't like it much. I like rock."],
    ["m", "¡A mí también! ¿Quieres un elote?", "Me too! Do you want some corn?"],
    ["c", "Sí, gracias. Me encantan los elotes.", "Yes, thanks. I love corn on the cob."],
    ["m", "¿Te gusta el picante?", "Do you like spicy food?"],
    ["c", "Un poco. No me gusta muy picante.", "A little. I don't like it very spicy."],
    ["m", "Entonces esta salsa no. ¡Pica mucho!", "Then not this salsa. It's really hot!"],
    ["c", "¿Qué te gusta hacer los fines de semana?", "What do you like to do on weekends?"],
    ["m", "Me gusta subir al cerro con mis amigos.", "I like hiking up the mountain with my friends."],
    ["c", "¡Qué padre!", "Cool!"]
  ],
  core: [
    ["Me gusta mucho.", "I like it a lot."],
    ["No me gusta mucho.", "I don't like it much."],
    ["Me encantan los elotes.", "I love corn on the cob."],
    ["¿Te gusta el fútbol?", "Do you like soccer?"],
    ["¿Qué música te gusta?", "What music do you like?"],
    ["¿Y a ti?", "And you?"],
    ["A mí también. / A mí no.", "Me too. / Not me."]
  ],
  hear: [
    ["¿Quieres más?", "Do you want more?"],
    ["A mí me encanta.", "I love it."],
    ["¿En serio?", "Really?"],
    ["¡Qué padre!", "Cool! (Mexico)"],
    ["A mí tampoco.", "Me neither."],
    ["¿Qué te gusta hacer?", "What do you like to do?"]
  ],
  extra: [
    ["Me gusta más el básquetbol.", "I like basketball more."],
    ["Prefiero el café.", "I prefer coffee."],
    ["No me gusta nada.", "I don't like it at all."],
    ["Me gusta cocinar.", "I like to cook."],
    ["Me gusta leer.", "I like to read."],
    ["Me gusta viajar.", "I like to travel."],
    ["No, gracias. Estoy lleno. / Estoy llena.", "No thanks, I'm full. (m / f)"],
    ["Está muy rico.", "It's delicious."],
    ["¿Cuál es tu comida favorita?", "What's your favorite food?"],
    ["Mi comida favorita es la pizza.", "My favorite food is pizza."]
  ],
  vocab: [
    ["Comida", [["la carne asada", "grilled beef"], ["el elote", "corn on the cob"], ["los frijoles", "beans"], ["la salsa", "salsa"], ["el picante", "spicy food"], ["las tripas", "tripe"], ["el postre", "dessert"]]],
    ["Actividades", [["el fútbol", "soccer"], ["el básquetbol", "basketball"], ["la música", "music"], ["el cine", "movies"], ["viajar", "to travel"], ["cocinar", "to cook"], ["leer", "to read"], ["caminar", "to walk"]]],
    ["Opiniones", [["me gusta", "I like"], ["me encanta", "I love"], ["no me gusta nada", "I don't like it at all"], ["prefiero", "I prefer"], ["favorito, favorita", "favorite"], ["padre", "cool (Mexico)"], ["aburrido, aburrida", "boring"]]]
  ],
  qd: [
    ["Say you like it a lot.", "Me gusta mucho."],
    ["Ask if he likes soccer.", "¿Te gusta el fútbol?"],
    ["Say you don't like it much.", "No me gusta mucho."],
    ["Say you love tacos.", "Me encantan los tacos."],
    ["Ask what music he likes.", "¿Qué música te gusta?"],
    ["He likes rock. Say you do too.", "A mí también."],
    ["Bounce the question back: \"And you?\"", "¿Y a ti?"]
  ],
  patterns: [
    ["Me gusta + [una cosa / verbo]", "Me gusta el café. · Me gusta leer."],
    ["Me gustan + [cosas]", "Plural things take <i>gustan</i>: <i>Me gustan los elotes.</i>"],
    ["A mí también · A mí tampoco", "Agree with <i>también</i> after a yes, <i>tampoco</i> after a no."],
    ["¿Te gusta…? · ¿Y a ti?", "Ask a friend with <i>te gusta</i>. Bounce it back with <i>¿Y a ti?</i>"]
  ],
  notes: [
    ["Carne asada", "In northern Mexico, the weekend <i>carne asada</i> with family and friends is a big tradition."],
    ["¡Qué padre!", "Mexican for \"how cool!\". You'll also hear <i>¡Qué chido!</i>"],
    ["Rayados vs. Tigres", "Monterrey has two rival soccer teams. <i>¿De qué equipo eres?</i> starts a long conversation."],
    ["Saying no politely", "Say <i>No, gracias, estoy lleno / llena</i> or <i>Está muy rico, pero…</i> instead of a flat no."]
  ],
  prompt: {
    role: `You are Diego, 32, a friendly guy from Monterrey. We're at a Saturday carne asada at your house. I'm a friend of your cousin and we just met. Use "tú" with me.`,
    infoTitle: "ABOUT YOU (DIEGO)",
    info: `Loves soccer (a Rayados fan), norteña music and rock, hiking up the Cerro de la Silla, and cooking carne asada. Doesn't like cats, cold weather, or reggaetón. Favorite food: cabrito.`,
    twist: `Offer me a very spicy salsa and some tripas, so I have to say no politely. Also say you don't like one thing I say I like, so I have to react ("¿En serio? ¿Por qué?").`,
    lead: `Offer me food and ask what I like: food, sports, music, weekend activities. Share your own likes after mine. React to my answers ("¡A mí también!", "¿En serio?") and ask the next question.`,
    recast: `I say "Me gusta los tacos" and you say "¿Te gustan los tacos? ¡A mí también!"`
  },
  twists: [
    ["Lo que no te gusta", "Harder", "Diego asks only about things you don't like.", `Otra vez, por favor. This time ask about things I don't like: foods, music, chores. I'll practice saying no politely and using "tampoco". Same rules.`],
    ["¿Y tu familia?", "Harder", "Talk about what your family members like (le gusta / les gusta).", `Otra vez, por favor. This time ask what my family members like, so I have to use "le gusta" and "les gusta". Same rules.`]
  ],
  sa: [
    "I can say what I like and love",
    "I can say what I don't like, politely",
    "I can ask what someone likes",
    "I can agree or disagree (también / tampoco)",
    "I can use gusta vs. gustan"
  ]
};
