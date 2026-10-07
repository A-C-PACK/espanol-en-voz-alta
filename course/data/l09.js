window.LESSONS = window.LESSONS || {};
LESSONS["09"] = {
  id: "09", level: "A2", title: "En la taquería", minutes: 28,
  cando: "I can order food at a restaurant or taquería and ask about the menu.",
  scale: "Transactions to obtain goods and services",
  reg: "usted", partner: "Don Beto", place: "Taquería El Güero · Guadalajara",
  scene: "I ordered food at a taquería in Guadalajara from a server named Don Beto",
  goal: "You're a customer at Taquería El Güero, and ChatGPT plays Don Beto, the server. Order a full meal, ask at least two questions about the menu, and pay.",
  boardStep: ["Mira el menú", "Don Beto uses this exact menu in the role play."],
  board: {
    title: "Taquería El Güero", sub: "Guadalajara, Jal. · Precios en pesos",
    cols: [
      [{ h: "Tacos (maíz)", items: [["Al pastor", "$22"], ["De asada", "$25"], ["De suadero", "$22"], ["De carnitas", "$24"], ["Campechano", "$26"]] },
       { h: "Especialidades", items: [["Gringa al pastor", "$55"], ["Quesadilla de queso", "$40"]] }],
      [{ h: "Extras", items: [["Guacamole", "$35"], ["Frijoles charros", "$35"]] },
       { h: "Para tomar", items: [["Agua de horchata", "$30"], ["Agua de jamaica", "$30"], ["Refresco", "$28"]] },
       { h: "Salsas", items: [["Verde · pica poco"], ["Roja · pica mucho"]] }]
    ],
    note: "Something unexpected might happen when you order. Be ready to adapt."
  },
  dialogue: [
    ["m", "¡Buenas noches! ¿Para aquí o para llevar?", "Good evening! For here or to go?"],
    ["c", "Para aquí, por favor.", "For here, please."],
    ["m", "Muy bien. ¿Qué le sirvo?", "Very good. What can I get you?"],
    ["c", "¿Qué me recomienda?", "What do you recommend?"],
    ["m", "Los de pastor están muy buenos hoy.", "The al pastor ones are really good today."],
    ["c", "Entonces me da tres tacos al pastor, por favor.", "Then I'll have three al pastor tacos, please."],
    ["m", "¿Con todo?", "With everything?"],
    ["c", "Con cilantro, pero sin cebolla.", "With cilantro, but no onion."],
    ["m", "Claro. ¿Algo de tomar?", "Sure. Anything to drink?"],
    ["c", "Una de jamaica, por favor. ¿La salsa roja pica mucho?", "A jamaica, please. Is the red salsa very spicy?"],
    ["m", "Sí, pica bastante. La verde pica menos.", "Yes, it's pretty hot. The green one is milder."],
    ["c", "Entonces la verde. Es todo, gracias.", "The green one, then. That's all, thanks."],
    ["m", "Ahorita se los traigo. ¡Provecho!", "I'll bring them right away. Enjoy!"],
    ["c", "Gracias. ¿Cuánto le debo?", "Thanks. How much do I owe you?"],
    ["m", "Son noventa y seis pesos.", "That's 96 pesos."],
    ["c", "Aquí tiene. Quédese con el cambio.", "Here you go. Keep the change."],
    ["m", "¡Muchas gracias! Que le vaya bien.", "Thank you! Take care."]
  ],
  core: [
    ["Para aquí, por favor.", "To eat here, please."],
    ["¿Qué me recomienda?", "What do you recommend?"],
    ["¿Qué lleva el campechano?", "What's in the campechano?"],
    ["Me da dos de asada, por favor.", "Can I have two asada tacos, please?"],
    ["Sin cebolla, por favor.", "No onion, please."],
    ["Es todo, gracias.", "That's all, thanks."],
    ["¿Cuánto le debo?", "How much do I owe you?"]
  ],
  hear: [
    ["¿Para aquí o para llevar?", "For here or to go?"],
    ["¿Qué le sirvo?", "What can I get you?"],
    ["¿Con todo?", "With everything (onion and cilantro)?"],
    ["¿Algo de tomar?", "Anything to drink?"],
    ["¿Va a querer algo más?", "Will you want anything else?"],
    ["Ya no hay. Se nos acabó.", "There's none left. We ran out."]
  ],
  extra: [
    ["Buenas noches.", "Good evening."],
    ["Para llevar, por favor.", "To go, please."],
    ["¿La salsa roja pica mucho?", "Is the red salsa very spicy?"],
    ["¿Cuánto cuesta la gringa?", "How much is the gringa?"],
    ["¿Tienen algo sin carne?", "Do you have anything without meat?"],
    ["Quisiera una gringa al pastor.", "I'd like a gringa al pastor."],
    ["Para mí, dos de asada y uno de carnitas.", "For me, two asada and one carnitas."],
    ["Con todo, por favor.", "With everything, please."],
    ["Y de tomar, un agua de horchata.", "And to drink, a horchata."],
    ["¿Me trae la cuenta, por favor?", "Could you bring me the bill, please?"],
    ["¿Aceptan tarjeta?", "Do you take cards?"],
    ["Quédese con el cambio.", "Keep the change."],
    ["¿Qué significa “suadero”?", "What does “suadero” mean?"],
    ["Ahorita se los traigo.", "(you'll hear) I'll bring them right away."],
    ["¡Provecho!", "(you'll hear) Enjoy your meal!"],
    ["¿Va a pagar con tarjeta o en efectivo?", "(you'll hear) Card or cash?"]
  ],
  vocab: [
    ["Los rellenos", [["al pastor", "spit-roasted marinated pork"], ["de asada", "grilled beef"], ["de suadero", "slow-cooked beef"], ["de carnitas", "braised pork"], ["campechano", "a mix of two meats"]]],
    ["En el plato", [["la tortilla de maíz", "corn tortilla"], ["la gringa", "flour tortilla, cheese and al pastor"], ["la quesadilla", "tortilla folded with cheese"], ["la salsa", "salsa"], ["la cebolla", "onion"], ["el cilantro", "cilantro"], ["la piña", "pineapple"], ["el limón", "lime"], ["los frijoles charros", "bean stew with pork and chile"]]],
    ["Para tomar", [["el agua de horchata", "sweet rice and cinnamon drink"], ["el agua de jamaica", "hibiscus drink"], ["el refresco", "soda"]]],
    ["Pedir y pagar", [["el mesero, la mesera", "server"], ["para aquí", "to eat here"], ["para llevar", "to go"], ["pica", "it's spicy"], ["la cuenta", "the bill"], ["en efectivo", "in cash"], ["con tarjeta", "by card"], ["el cambio", "change (money)"], ["la propina", "tip"]]]
  ],
  qd: [
    ["You want to eat at the taquería, not take it home.", "Para aquí, por favor."],
    ["Ask the server what's good.", "¿Qué me recomienda?"],
    ["Ask what's in the campechano.", "¿Qué lleva el campechano?"],
    ["Order two asada tacos.", "Me da dos de asada, por favor."],
    ["You don't want onion.", "Sin cebolla, por favor."],
    ["You're done ordering.", "Es todo, gracias."],
    ["Ask how much you owe.", "¿Cuánto le debo?"]
  ],
  patterns: [
    ["Me da / Quisiera + [número] + de + [relleno]", "Me da <b>tres de pastor</b>, por favor. In Mexico, \"tacos\" is often dropped: <i>dos de asada</i>."],
    ["con / sin + [ingrediente]", "Sin cebolla, por favor. · <b>Con todo</b> = with onion and cilantro."],
    ["¿Qué lleva + [el plato]?", "¿Qué lleva el campechano? = What's in the campechano?"],
    ["¿Me [trae / puede / da] …?", "Use <i>usted</i> with the server: ¿Me trae la cuenta? ¿Me lo puede repetir?"]
  ],
  notes: [
    ["\"Me da…\" is polite", "In Mexico, <i>me da</i> is the normal way to order. <i>Me pone</i> sounds Spanish from Spain."],
    ["Getting attention", "Say <i>¡Joven!</i> or <i>¡Señorita!</i> to a server, or <i>Disculpe</i>, which works for anyone."],
    ["¡Provecho!", "Servers and other diners say it when food arrives. Answer <i>¡Gracias!</i>"],
    ["Limón = lime", "The green wedges on the table are <i>limones</i>."],
    ["Paying at taco stands", "At street stands you often pay after eating. Ask <i>¿Cuánto le debo?</i> and say what you ate."],
    ["Propina", "In sit-down taquerías, leave 10–15%. <i>Quédese con el cambio</i> means \"keep the change\"."]
  ],
  prompt: {
    role: `You are Don Beto, the friendly server at Taquería El Güero in Guadalajara. It's a busy Friday night. I'm a customer. Address me with "usted".`,
    infoTitle: "MENU (pesos)",
    info: `Tacos de maíz: al pastor $22, de asada $25, de suadero $22, de carnitas $24, campechano $26
Especialidades: gringa al pastor $55, quesadilla de queso $40
Extras: guacamole $35, frijoles charros $35
Para tomar: agua de horchata $30, agua de jamaica $30, refresco $28
Salsas: verde (pica poco), roja (pica mucho)`,
    twist: `Today you are out of suadero. Only say so if I order it, then suggest something similar. If I don't order it, offer me today's special before I finish: 2 gringas for $90.`,
    lead: `Lead the scene like a real server: greet me, ask "¿para aquí o para llevar?", take my order, ask "¿con todo?", ask about drinks, ask if I want anything else, and give me the total when I ask for the bill.`,
    recast: `I say "dos taco de asada" and you say "Dos tacos de asada, perfecto."`
  },
  twists: [
    ["Para tres", "Harder", "Order to go for you and two friends. One doesn't eat meat, one doesn't like spicy food.", `Otra vez, por favor. New situation: I'm ordering para llevar for me and two friends. One friend doesn't eat meat and one doesn't like spicy food. Same rules.`],
    ["Algo salió mal", "Challenge", "Part of your order arrives wrong, and the card machine isn't working.", `Otra vez, por favor. This time, bring me one wrong item, and when I pay, the card terminal isn't working. Make me solve both problems. Same rules.`]
  ],
  sa: [
    "I can greet the server and say \"para aquí\" or \"para llevar\"",
    "I can order items with quantities and fillings",
    "I can ask what a dish has in it and what they recommend",
    "I can say what I want con / sin",
    "I can handle a surprise (sold out, a special)",
    "I can ask for the bill and pay"
  ]
};
