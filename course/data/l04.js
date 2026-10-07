window.LESSONS = window.LESSONS || {};
LESSONS["04"] = {
  id: "04", level: "A1", title: "Un café, por favor", minutes: 25,
  cando: "I can order a simple meal or drink.",
  scale: "Transactions to obtain goods and services",
  reg: "usted", partner: "Lucía", place: "Café El Jardín · San Miguel de Allende",
  scene: "I ordered breakfast from Lucía, a server at a café in San Miguel de Allende",
  goal: "It's Sunday morning at Café El Jardín in San Miguel de Allende. ChatGPT plays Lucía, your server. Order a drink and breakfast, ask one question about the menu, and ask for the check.",
  boardStep: ["Mira el menú", "Lucía uses this exact menu in the role play."],
  board: {
    title: "Café El Jardín", sub: "San Miguel de Allende, Gto. · Desayunos",
    cols: [
      [{ h: "Bebidas calientes", items: [["Café americano", "$35"], ["Café de olla", "$40"], ["Capuchino", "$50"], ["Chocolate caliente", "$45"], ["Té", "$30"]] },
       { h: "Bebidas frías", items: [["Jugo de naranja", "$40"], ["Licuado de plátano", "$50"], ["Agua", "$20"]] }],
      [{ h: "Para comer", items: [["Chilaquiles verdes o rojos", "$95"], ["Huevos rancheros", "$90"], ["Molletes", "$70"], ["Concha (pan dulce)", "$18"]] }]
    ],
    note: "Something on the menu might not be available today."
  },
  dialogue: [
    ["m", "Buenos días. ¿Qué le traigo?", "Good morning. What can I bring you?"],
    ["c", "Buenos días. Un café de olla, por favor.", "Good morning. A café de olla, please."],
    ["m", "Claro. ¿Algo de comer?", "Sure. Anything to eat?"],
    ["c", "Sí. ¿Qué son los molletes?", "Yes. What are molletes?"],
    ["m", "Son pan con frijoles y queso.", "They're bread with beans and cheese."],
    ["c", "Mmm. Quiero unos chilaquiles, por favor.", "Mmm. I'd like chilaquiles, please."],
    ["m", "¿Verdes o rojos?", "Green or red?"],
    ["c", "Verdes, por favor.", "Green, please."],
    ["m", "¿Con huevo o con pollo?", "With egg or chicken?"],
    ["c", "Con huevo.", "With egg."],
    ["m", "Muy bien. ¿Algo más?", "Very good. Anything else?"],
    ["c", "Una concha también. Es todo, gracias.", "A concha too. That's all, thanks."],
    ["m", "Ahorita se lo traigo.", "I'll bring it right away."],
    ["c", "La cuenta, por favor.", "The check, please."],
    ["m", "Son ciento cincuenta y tres pesos.", "That's 153 pesos."],
    ["c", "Aquí tiene. Gracias.", "Here you go. Thanks."]
  ],
  core: [
    ["Buenos días.", "Good morning."],
    ["Un café de olla, por favor.", "A café de olla, please."],
    ["Quiero unos chilaquiles, por favor.", "I'd like chilaquiles, please."],
    ["¿Qué son los molletes?", "What are molletes?"],
    ["Verdes, por favor.", "Green, please."],
    ["Es todo, gracias.", "That's all, thanks."],
    ["La cuenta, por favor.", "The check, please."]
  ],
  hear: [
    ["¿Qué le traigo?", "What can I bring you?"],
    ["¿Algo de comer?", "Anything to eat?"],
    ["¿Verdes o rojos?", "Green or red?"],
    ["¿Con huevo o con pollo?", "With egg or chicken?"],
    ["¿Algo más?", "Anything else?"],
    ["Ahorita se lo traigo.", "I'll bring it right away."]
  ],
  extra: [
    ["Para mí, un jugo de naranja.", "For me, an orange juice."],
    ["¿Tiene leche de almendra?", "Do you have almond milk?"],
    ["Sin azúcar, por favor.", "No sugar, please."],
    ["Un vaso de agua, por favor.", "A glass of water, please."],
    ["¿Qué me recomienda?", "What do you recommend?"],
    ["¿Pica?", "Is it spicy?"],
    ["Más café, por favor.", "More coffee, please."],
    ["¿Aceptan tarjeta?", "Do you take cards?"],
    ["Está muy rico.", "It's delicious."],
    ["Hoy no tenemos café de olla.", "(you'll hear) We don't have café de olla today."]
  ],
  vocab: [
    ["Bebidas", [["el café americano", "black coffee"], ["el café de olla", "coffee with cinnamon and cane sugar"], ["el chocolate caliente", "hot chocolate"], ["el té", "tea"], ["el jugo de naranja", "orange juice"], ["el licuado", "smoothie with milk"], ["la leche", "milk"], ["el azúcar", "sugar"]]],
    ["Comida", [["los chilaquiles", "tortilla chips in salsa"], ["los huevos rancheros", "fried eggs on tortillas with salsa"], ["los molletes", "bread with beans and cheese"], ["el pan dulce", "sweet bread"], ["la concha", "shell-topped sweet bun"], ["el huevo", "egg"], ["el pollo", "chicken"], ["el queso", "cheese"]]],
    ["En la mesa", [["el mesero, la mesera", "server"], ["la cuenta", "the check"], ["el vaso", "glass"], ["la taza", "cup"], ["la servilleta", "napkin"]]]
  ],
  qd: [
    ["Greet the server in the morning.", "Buenos días."],
    ["Order a café de olla.", "Un café de olla, por favor."],
    ["Ask what molletes are.", "¿Qué son los molletes?"],
    ["Order chilaquiles.", "Quiero unos chilaquiles, por favor."],
    ["The server asks \"¿Verdes o rojos?\" Choose green.", "Verdes, por favor."],
    ["Say that's all.", "Es todo, gracias."],
    ["Ask for the check.", "La cuenta, por favor."]
  ],
  patterns: [
    ["Un / una + [bebida] + por favor", "Un café americano, por favor. · Una concha, por favor."],
    ["Quiero + [comida]", "Quiero los chilaquiles. <i>Quisiera</i> sounds softer."],
    ["¿Qué es / Qué son + [plato]?", "¿Qué son los molletes? · ¿Qué es el café de olla?"],
    ["[A] o [B]?", "Answer a choice with just the choice: <i>¿Verdes o rojos?</i> — <i>Verdes.</i>"]
  ],
  notes: [
    ["Chilaquiles", "A classic Mexican breakfast: fried tortilla pieces in green or red salsa, often with egg or chicken."],
    ["Café de olla", "Coffee brewed in a clay pot with cinnamon and piloncillo (raw cane sugar)."],
    ["Asking for the check", "Servers won't bring the check until you ask. Say <i>La cuenta, por favor</i>, or mime writing in the air."],
    ["Pan dulce", "Bakeries sell sweet bread by the piece. The <i>concha</i> is named for its shell-shaped top."]
  ],
  prompt: {
    role: `You are Lucía, a friendly server at Café El Jardín in San Miguel de Allende. It's Sunday morning. I'm a customer. Use "usted" with me.`,
    infoTitle: "MENU (pesos)",
    info: `Hot drinks: café americano $35, café de olla $40, capuchino $50, chocolate caliente $45, té $30
Cold drinks: jugo de naranja $40, licuado de plátano $50, agua $20
Food: chilaquiles verdes o rojos $95 (con huevo o con pollo), huevos rancheros $90, molletes $70, concha $18`,
    twist: `You are out of café de olla today. Only say so if I order it, then offer café americano. If I order chilaquiles, ask "¿verdes o rojos?" and "¿con huevo o con pollo?".`,
    lead: `Greet me, take my drink order, ask if I want to eat, explain dishes in very simple words if I ask, ask "¿algo más?", and give the total when I ask for the check.`,
    recast: `I say "Yo quiero un café de la olla" and you say "Un café de olla, muy bien."`
  },
  twists: [
    ["Para dos", "Harder", "Order for you and a friend who doesn't drink coffee and is vegetarian.", `Otra vez, por favor. This time I'm ordering for me and a friend. My friend doesn't drink coffee and is vegetarian. Same rules.`],
    ["Un error", "Harder", "Lucía brings the wrong drink. Fix it politely.", `Otra vez, por favor. This time, bring me the wrong drink and let me fix it politely. Same rules.`]
  ],
  sa: [
    "I can order a drink",
    "I can order food",
    "I can ask what a dish is",
    "I can answer choice questions (¿verdes o rojos?)",
    "I can ask for the check and pay"
  ]
};
