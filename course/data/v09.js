LESSONS["09"].vars = [
  {
    title: "Restaurante de mariscos", partner: "Julio", place: "Mariscos El Faro · Mazatlán",
    goal: "A sit-down seafood restaurant by the beach. Ask for a table, order a starter, a main dish, and a drink, ask how one dish is prepared, and ask for the check.",
    board: {
      title: "Mariscos El Faro", sub: "Mazatlán, Sin. · Precios en pesos",
      cols: [
        [{ h: "Entradas", items: [["Coctel de camarón", "$160"], ["Aguachile", "$180"], ["Tostada de ceviche", "$65"]] },
         { h: "Platos fuertes", items: [["Pescado zarandeado (kilo)", "$420"], ["Filete al mojo de ajo", "$210"], ["Camarones a la diabla", "$230"], ["Camarones empanizados", "$220"]] }],
        [{ h: "Para tomar", items: [["Limonada", "$45"], ["Agua mineral", "$40"], ["Cerveza", "$50"]] },
         { h: "Postre", items: [["Flan napolitano", "$60"]] },
         { h: "Todos los platos incluyen", items: [["Arroz y ensalada"]] }]
      ],
      note: "At a sit-down restaurant, the server brings the check only when you ask."
    },
    words: [
      ["los mariscos", "seafood"], ["el camarón", "shrimp"], ["el pescado", "fish (as food)"], ["el filete", "fillet"],
      ["al mojo de ajo", "in garlic butter"], ["a la diabla", "in a spicy red chile sauce"], ["empanizado", "breaded"],
      ["el aguachile", "raw shrimp in lime and chile"], ["la entrada", "starter"], ["el plato fuerte", "main course"],
      ["la carta", "menu"], ["el postre", "dessert"]
    ],
    phrases: [
      ["Una mesa para dos, por favor.", "A table for two, please."],
      ["¿Me trae la carta, por favor?", "Could you bring me the menu?"],
      ["De entrada, un coctel de camarón.", "As a starter, a shrimp cocktail."],
      ["¿Cómo preparan el pescado?", "How do you prepare the fish?"],
      ["¿Pica mucho?", "Is it very spicy?"]
    ],
    prompt: {
      role: `You are Julio, a server at Mariscos El Faro, a sit-down seafood restaurant on the beach in Mazatlán. It's Sunday afternoon. I'm a customer arriving at the door. Use "usted" with me.`,
      infoTitle: "MENU (pesos)",
      info: `Entradas: coctel de camarón $160, aguachile $180 (pica mucho), tostada de ceviche $65
Platos fuertes (include rice and salad): pescado zarandeado $420 per kilo (grilled whole fish with a mild chile marinade, for 2–3 people, takes 40 minutes), filete al mojo de ajo $210, camarones a la diabla $230 (pica mucho), camarones empanizados $220
Para tomar: limonada $45, agua mineral $40, cerveza $50
Postre: flan napolitano $60`,
      lead: `Lead like a real server: ask how many people, seat me, bring the menu, ask for drinks first, then the starter and main course. After the meal, ask if I want dessert or coffee. Bring the check only when I ask, and ask "¿Va a pagar con tarjeta o en efectivo?"`,
      recast: `I say "Yo quiero el camarones a diabla" and you say "Los camarones a la diabla, muy bien."`
    }
  },
  {
    title: "Comida corrida", partner: "Doña Mary", place: "Fonda Doña Mary · Ciudad de México",
    goal: "A small family restaurant with a set lunch. Find out what's included, choose each course, and ask about the agua del día.",
    board: {
      title: "Fonda Doña Mary", sub: "Colonia Roma, CDMX · Comida corrida $95",
      cols: [
        [{ h: "Primer tiempo", items: [["Sopa de fideo"], ["Consomé de pollo"]] },
         { h: "Segundo tiempo", items: [["Arroz rojo"], ["Espagueti"]] },
         { h: "Plato fuerte", items: [["Pollo en mole"], ["Bistec a la mexicana"], ["Enchiladas verdes"], ["Chile relleno", "+$15"]] }],
        [{ h: "Postre", items: [["Gelatina"], ["Arroz con leche"]] },
         { h: "Incluye", items: [["Tortillas o bolillo"], ["Agua del día"]] },
         { h: "Agua del día", items: [["¿? Pregunte"]] }]
      ],
      note: "One plato fuerte may be sold out today."
    },
    words: [
      ["la comida corrida", "set lunch menu"], ["la fonda", "small family restaurant"], ["el primer tiempo", "first course"],
      ["la sopa de fideo", "thin noodle soup"], ["el consomé", "clear broth"], ["el guisado", "stew, main dish"],
      ["el mole", "rich chile and chocolate sauce"], ["a la mexicana", "with tomato, onion, and chile"], ["el chile relleno", "stuffed poblano pepper"],
      ["la gelatina", "jello"], ["el arroz con leche", "rice pudding"], ["el agua del día", "today's fruit drink"]
    ],
    phrases: [
      ["¿Qué incluye la comida corrida?", "What comes with the set lunch?"],
      ["De primero, la sopa de fideo.", "For the first course, the noodle soup."],
      ["De plato fuerte, el pollo en mole.", "For the main course, the chicken in mole."],
      ["¿De qué es el agua del día?", "What flavor is today's drink?"],
      ["¿Me trae más tortillas, por favor?", "Could you bring me more tortillas?"]
    ],
    prompt: {
      role: `You are Doña Mary, the owner and server of Fonda Doña Mary, a small family restaurant in Colonia Roma, Mexico City. It's 2:30 pm on a weekday and it's busy. I'm a customer. Use "usted" with me.`,
      infoTitle: "TODAY'S COMIDA CORRIDA ($95)",
      info: `Primer tiempo: sopa de fideo or consomé de pollo
Segundo tiempo: arroz rojo or espagueti
Plato fuerte: pollo en mole, bistec a la mexicana, enchiladas verdes, chile relleno (+$15). The enchiladas verdes are sold out today; only say so if I order them.
Postre: gelatina or arroz con leche
Includes tortillas or bolillo, and the agua del día: today it's limón con chía.`,
      lead: `Greet me and ask if I want the comida corrida. Then ask for each course one at a time: "¿De primero?", "¿Arroz o espagueti?", "¿Y de plato fuerte?". Ask "¿Tortillas o bolillo?". Offer dessert at the end, and give the total when I ask.`,
      recast: `I say "Para primero quiero la sopa de fideos" and you say "De primero, sopa de fideo. Muy bien."`
    }
  },
  {
    title: "La tortería", partner: "Don Polo", place: "Tortas Los Cuates · Puebla",
    goal: "A busy torta shop. Order tortas to go with changes, ask what comes on them, and order a licuado.",
    board: {
      title: "Tortas Los Cuates", sub: "Puebla, Pue. · Para aquí y para llevar",
      cols: [
        [{ h: "Tortas", items: [["De milanesa", "$75"], ["De pierna", "$70"], ["De jamón", "$55"], ["Hawaiana", "$75"], ["Cubana", "$95"]] },
         { h: "Extras", items: [["Queso extra", "$15"], ["Aguacate extra", "$15"]] }],
        [{ h: "Licuados", items: [["Plátano", "$45"], ["Fresa", "$45"], ["Mamey", "$55"]] },
         { h: "Jugos", items: [["Naranja", "$40"], ["Zanahoria", "$40"]] },
         { h: "Todas llevan", items: [["Frijoles, mayonesa, jitomate"], ["Cebolla, aguacate, chiles en vinagre"]] }]
      ],
      note: "Ask what's in the cubana before you order it."
    },
    words: [
      ["la torta", "Mexican sandwich"], ["el bolillo", "crusty white roll"], ["la milanesa", "breaded thin steak"],
      ["la pierna", "roast pork leg"], ["el jamón", "ham"], ["la cubana", "torta with many meats"],
      ["los chiles en vinagre", "pickled jalapeños"], ["la mayonesa", "mayonnaise"], ["el licuado", "milkshake-style smoothie"],
      ["el mamey", "sweet orange tropical fruit"], ["la bolsa", "bag"], ["tardar", "to take (time)"]
    ],
    phrases: [
      ["Una de milanesa para llevar, por favor.", "One milanesa torta to go, please."],
      ["¿Qué lleva la cubana?", "What's on the cubana?"],
      ["Sin chiles, por favor.", "Without chiles, please."],
      ["Con queso extra.", "With extra cheese."],
      ["¿Cuánto tiempo tarda?", "How long does it take?"]
    ],
    prompt: {
      role: `You are Don Polo, the owner of Tortas Los Cuates in Puebla. It's lunchtime and busy. I'm a customer at the counter. Use "usted" with me.`,
      infoTitle: "MENU (pesos)",
      info: `Tortas: milanesa $75, pierna $70, jamón $55, hawaiana (jamón, piña, queso) $75, cubana $95 (milanesa, pierna, jamón, salchicha, huevo, queso)
Every torta comes with frijoles, mayonesa, jitomate, cebolla, aguacate, and chiles en vinagre.
Extras: queso $15, aguacate $15
Licuados: plátano $45, fresa $45, mamey $55. Jugos: naranja $40, zanahoria $40.
Tortas take about 10 minutes.`,
      lead: `Ask "¿Para aquí o para llevar?", take my order one torta at a time, and ask "¿Con todo?" for each. Ask about drinks, repeat the order back, and tell me the total and how long it will take.`,
      recast: `I say "Quiero un torta de milanesa" and you say "Una torta de milanesa, claro."`
    }
  }
];
