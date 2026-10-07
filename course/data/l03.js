window.LESSONS = window.LESSONS || {};
LESSONS["03"] = {
  id: "03", level: "A1", title: "En el mercado", minutes: 25,
  cando: "I can buy things at a market or shop, using numbers, prices and quantities.",
  scale: "Transactions to obtain goods and services",
  reg: "usted", partner: "Doña Carmen", place: "Mercado de Coyoacán, CDMX",
  scene: "I bought fruit and vegetables from Doña Carmen at the Mercado de Coyoacán",
  setup: "It's Saturday morning at the Mercado de Coyoacán in Mexico City. You buy fruit and vegetables from Doña Carmen at her stand.",
  goal: "It's Saturday morning at the Mercado de Coyoacán. ChatGPT plays Doña Carmen, a fruit and vegetable vendor. Buy everything on your list, and check your change.",
  boardStep: ["Mira los precios", "These are Doña Carmen's prices. Your shopping list is on the right."],
  board: {
    title: "Frutas y Verduras Carmen", sub: "Mercado de Coyoacán · precios de hoy",
    cols: [
      [{ h: "Frutas", items: [["Mango (kilo)", "$45"], ["Plátano (kilo)", "$25"], ["Papaya (pieza)", "$40"], ["Aguacate (pieza)", "$15"], ["Limón (kilo)", "$35"]] },
       { h: "Verduras", items: [["Jitomate (kilo)", "$28"], ["Cebolla (kilo)", "$30"], ["Chile serrano (kilo)", "$40"], ["Cilantro (manojo)", "$10"]] }],
      [{ h: "Tu lista", items: [["1 kilo de jitomate"], ["Medio kilo de limones"], ["3 aguacates"], ["Un manojo de cilantro"], ["Fruta para el desayuno"]] }]
    ],
    note: "You have one $200 note. Count your change."
  },
  dialogue: [
    ["m", "¡Pásele, pásele! ¿Qué va a llevar?", "Come on in! What will you take?"],
    ["c", "Buenos días. ¿A cómo está el jitomate?", "Good morning. How much are the tomatoes today?"],
    ["m", "A veintiocho el kilo.", "Twenty-eight a kilo."],
    ["c", "Me da un kilo, por favor.", "A kilo, please."],
    ["m", "Aquí tiene. ¿Qué más?", "Here you go. What else?"],
    ["c", "¿Tiene aguacates?", "Do you have avocados?"],
    ["m", "Sí, a quince la pieza. ¿Para hoy o para mañana?", "Yes, fifteen each. For today or tomorrow?"],
    ["c", "Para hoy. Me da tres, por favor.", "For today. Three, please."],
    ["m", "Muy bien. ¿Algo más?", "Very good. Anything else?"],
    ["c", "Medio kilo de limones y un manojo de cilantro.", "Half a kilo of limes and a bunch of cilantro."],
    ["m", "Listo. ¿Es todo?", "Done. Is that all?"],
    ["c", "Sí, es todo. ¿Cuánto es?", "Yes, that's all. How much is it?"],
    ["m", "Son cien pesos con cincuenta.", "That's 100.50 pesos."],
    ["c", "Aquí tiene. Gracias.", "Here you go. Thanks."],
    ["m", "Gracias a usted. ¡Que le vaya bien!", "Thank you. Have a good day!"]
  ],
  core: [
    ["Buenos días.", "Good morning."],
    ["¿A cómo está el jitomate?", "How much are the tomatoes (today)?"],
    ["Me da un kilo, por favor.", "A kilo, please."],
    ["Medio kilo de limones.", "Half a kilo of limes."],
    ["¿Tiene aguacates?", "Do you have avocados?"],
    ["Es todo, gracias.", "That's all, thanks."],
    ["¿Cuánto es?", "How much is it?"]
  ],
  hear: [
    ["¡Pásele, pásele!", "Come on in! (vendors calling shoppers)"],
    ["¿Qué va a llevar?", "What are you going to take?"],
    ["¿Qué más?", "What else?"],
    ["A veintiocho el kilo.", "Twenty-eight a kilo."],
    ["¿Para hoy o para mañana?", "For today or tomorrow? (how ripe)"],
    ["Son cien pesos con cincuenta.", "That's 100.50 pesos."]
  ],
  extra: [
    ["¿Cuánto cuesta el kilo?", "How much is a kilo?"],
    ["Me da tres, por favor.", "Three, please."],
    ["Un cuarto de kilo.", "A quarter kilo."],
    ["Un manojo de cilantro.", "A bunch of cilantro."],
    ["¿Me da una bolsa?", "Can I have a bag?"],
    ["¿Tiene cambio de doscientos?", "Do you have change for 200?"],
    ["¿Me da a probar?", "Can I try some?"],
    ["¿Están maduros?", "Are they ripe?"],
    ["Me falta cambio.", "I'm missing some change."],
    ["Ya no hay papaya.", "(you'll hear) There's no papaya left."]
  ],
  vocab: [
    ["Frutas y verduras", [["el mango", "mango"], ["el plátano", "banana"], ["la papaya", "papaya"], ["el aguacate", "avocado"], ["el limón", "lime"], ["el jitomate", "tomato (Mexico)"], ["la cebolla", "onion"], ["el chile serrano", "serrano pepper"], ["el cilantro", "cilantro"]]],
    ["Cantidades", [["el kilo", "kilo"], ["medio kilo", "half a kilo"], ["un cuarto", "a quarter (kilo)"], ["la pieza", "piece, each"], ["el manojo", "bunch"], ["la bolsa", "bag"]]],
    ["Dinero", [["el peso", "peso"], ["el cambio", "change"], ["cien", "100"], ["doscientos", "200"], ["con cincuenta", "and 50 centavos"]]]
  ],
  qd: [
    ["Greet the vendor in the morning.", "Buenos días."],
    ["Ask today's price of tomatoes.", "¿A cómo está el jitomate?"],
    ["Ask for one kilo.", "Me da un kilo, por favor."],
    ["Ask for half a kilo of limes.", "Medio kilo de limones, por favor."],
    ["Ask if she has avocados.", "¿Tiene aguacates?"],
    ["Say that's everything.", "Es todo, gracias."],
    ["Ask how much it all is.", "¿Cuánto es?"]
  ],
  patterns: [
    ["¿A cómo está + [producto]?", "Market phrase for today's price: <i>¿A cómo están los mangos?</i>"],
    ["Me da + [cantidad] + de + [producto]", "Me da medio kilo de limones."],
    ["a + [precio] + el kilo / la pieza", "<i>A quince la pieza</i> = fifteen each."],
    ["¿Tiene + [producto]?", "Use <i>usted</i> with vendors: ¿Tiene fresas?"]
  ],
  notes: [
    ["Jitomate, not tomate", "In central Mexico red tomatoes are <i>jitomates</i>. <i>Tomate</i> often means the green tomatillo."],
    ["¡Pásele!", "Vendors call <i>¡Pásele!</i> or <i>¿Qué le damos?</i> to invite you in. Answer with a smile and <i>Buenos días</i>."],
    ["Para hoy o para mañana", "Vendors choose avocados for when you'll eat them: ripe today, or tomorrow."],
    ["Small bills", "Bring coins and small bills. A $500 note can be hard to change at a market stand."]
  ],
  prompt: {
    role: `You are Doña Carmen, a friendly fruit and vegetable vendor at the Mercado de Coyoacán in Mexico City. It's Saturday morning. I'm a customer. Use "usted" with me.`,
    infoTitle: "YOUR PRICES (pesos)",
    info: `Mango $45 per kilo, plátano $25 per kilo, papaya $40 each, aguacate $15 each, limón $35 per kilo, jitomate $28 per kilo, cebolla $30 per kilo, chile serrano $40 per kilo, cilantro $10 per bunch (manojo).`,
    twist: `You have no papayas today. When I pay with a $200 note, give me $10 too little in change, so I have to notice and say something.`,
    lead: `Call me over ("¡Pásele!"), ask what I want, give prices when I ask, ask "¿qué más?" after each item, ask "¿para hoy o para mañana?" for avocados, and give the total when I'm done. Say prices clearly.`,
    recast: `I say "Quiero un kilo jitomate" and you say "Un kilo de jitomate, claro."`
  },
  twists: [
    ["Regatear", "Harder", "Prices are higher today. Ask politely for a better price.", `Otra vez, por favor. This time your prices are a little higher than before, and I'll try to ask for a better price. Accept a small discount if I ask nicely. Same rules.`],
    ["Guacamole", "Harder", "Buy everything for guacamole for six people, without a list.", `Otra vez, por favor. New situation: I need everything for guacamole for six people, and I have no list. Help me only if I ask. Same rules.`]
  ],
  sa: [
    "I can greet a vendor and ask for a product",
    "I can ask prices and understand the answer",
    "I can ask for quantities (kilo, medio kilo, pieza)",
    "I can say what else I want and when I'm done",
    "I can check the total and my change"
  ]
};
