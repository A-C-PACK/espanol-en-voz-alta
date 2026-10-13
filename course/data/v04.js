LESSONS["04"].vars = [
  {
    title: "En la juguería", partner: "Rosa", place: "Mercado de Coyoacán · CDMX",
    goal: "A juice stand in the market. Order a juice or licuado in the size you want, ask what's in a drink, and order something to eat.",
    board: {
      title: "Jugos Rosita", sub: "Mercado de Coyoacán, CDMX · chico / grande",
      cols: [
        [{ h: "Jugos", items: [["Naranja", "$30 / $40"], ["Zanahoria", "$30 / $40"], ["Jugo verde", "$35 / $45"]] },
         { h: "Licuados", items: [["Plátano", "$40 / $50"], ["Fresa", "$40 / $50"], ["Mamey", "$45 / $55"]] }],
        [{ h: "Para comer", items: [["Sincronizada", "$45"], ["Quesadilla", "$40"], ["Coctel de fruta", "$45"]] },
         { h: "Extras", items: [["Avena", "$5"], ["Granola", "$10"]] }]
      ],
      note: "Licuados come con leche or con agua."
    },
    words: [
      ["el jugo", "juice"], ["el licuado", "smoothie"], ["chico", "small"], ["grande", "large"],
      ["con leche", "with milk"], ["con agua", "with water"], ["la zanahoria", "carrot"], ["el nopal", "cactus paddle"],
      ["el apio", "celery"], ["la piña", "pineapple"], ["la sincronizada", "tortilla, ham, and cheese, grilled"], ["la avena", "oats"]
    ],
    phrases: [
      ["Un jugo de naranja grande, por favor.", "A large orange juice, please."],
      ["¿Qué tiene el jugo verde?", "What's in the green juice?"],
      ["Un licuado de plátano con leche.", "A banana smoothie with milk."],
      ["Para llevar, por favor.", "To go, please."],
      ["¿Me da una sincronizada?", "Could I have a sincronizada?"]
    ],
    prompt: {
      role: `You are Rosa, who runs the juice stand Jugos Rosita in the Mercado de Coyoacán, Mexico City. It's a weekday morning. I'm a customer at the counter. Use "usted" with me.`,
      infoTitle: "MENU (pesos, chico / grande)",
      info: `Jugos: naranja $30/$40, zanahoria $30/$40, jugo verde (nopal, piña, apio, perejil, naranja) $35/$45
Licuados (con leche o con agua): plátano $40/$50, fresa $40/$50, mamey $45/$55. Extras: avena $5, granola $10.
Para comer: sincronizada $45, quesadilla $40, coctel de fruta $45. You have no fresa today; only say so if I order it.`,
      lead: `Greet me ("¿Qué le damos?"), ask "¿Chico o grande?", ask "¿Con leche o con agua?" for licuados, ask "¿Para aquí o para llevar?", ask if I want something to eat, and give the total when I ask.`,
      recast: `I say "Quiero jugo verde en grande" and you say "Un jugo verde grande, muy bien."`
    }
  },
  {
    title: "Chocolate y tamales", partner: "Julián", place: "Chocolatería La Soledad · Oaxaca",
    goal: "An evening snack at a chocolate shop in Oaxaca. Order a hot drink and something to eat, ask what one item is, and ask for the check.",
    board: {
      title: "Chocolatería La Soledad", sub: "Oaxaca de Juárez · la merienda",
      cols: [
        [{ h: "Bebidas calientes", items: [["Chocolate con agua", "$45"], ["Chocolate con leche", "$50"], ["Champurrado", "$45"], ["Café de olla", "$40"]] }],
        [{ h: "Para comer", items: [["Pan de yema", "$25"], ["Tamal de mole", "$35"], ["Tamal de rajas", "$30"], ["Tamal de dulce", "$30"]] },
         { h: "Para llevar", items: [["Chocolate en tablilla (½ kg)", "$150"]] }]
      ],
      note: "In Oaxaca, hot chocolate is often made with water."
    },
    words: [
      ["la merienda", "evening snack"], ["el chocolate con agua", "hot chocolate made with water"], ["el champurrado", "thick hot chocolate made with corn"],
      ["el pan de yema", "egg-yolk bread"], ["el tamal", "steamed corn dough with filling"], ["de mole", "with mole sauce"],
      ["de rajas", "with chile strips and cheese"], ["de dulce", "sweet"], ["la hoja de plátano", "banana leaf"], ["caliente", "hot"], ["la taza", "cup"]
    ],
    phrases: [
      ["Un chocolate con agua, por favor.", "A hot chocolate made with water, please."],
      ["¿Qué es el champurrado?", "What is champurrado?"],
      ["¿El tamal de rajas pica?", "Is the rajas tamal spicy?"],
      ["Y un pan de yema.", "And an egg-yolk bread."],
      ["La cuenta, por favor.", "The check, please."]
    ],
    prompt: {
      role: `You are Julián, a server at Chocolatería La Soledad in Oaxaca. It's 7 pm, time for the merienda. I'm a customer sitting at a table. Use "usted" with me.`,
      infoTitle: "MENU (pesos)",
      info: `Bebidas: chocolate con agua $45 (the traditional Oaxacan way), chocolate con leche $50, champurrado $45 (thick chocolate drink made with corn dough), café de olla $40
Para comer: pan de yema $25 (for dipping in chocolate), tamal de mole $35 (chicken, in banana leaf), tamal de rajas $30 (chile and cheese, pica poquito), tamal de dulce $30
Para llevar: chocolate en tablilla, half kilo $150`,
      lead: `Greet me, ask what I'd like to drink first, then offer something to eat. Explain items in very simple words if I ask. Ask "¿Algo más?" and give the total when I ask for the check.`,
      recast: `I say "Quiero un chocolate de agua" and you say "Un chocolate con agua, muy bien."`
    }
  },
  {
    title: "Desayuno en el hotel", partner: "Gerardo", place: "Hotel Cuatro Ríos · Morelia",
    goal: "Breakfast at your hotel's restaurant. Order eggs the way you like them, a drink, and a side, ask for more coffee, and charge it to your room.",
    board: {
      title: "Restaurante Cuatro Ríos", sub: "Morelia, Mich. · desayunos 7–12",
      cols: [
        [{ h: "Huevos al gusto", items: [["Estrellados", "$90"], ["Revueltos", "$90"], ["A la mexicana", "$95"], ["Con jamón", "$95"]] },
         { h: "Otros platos", items: [["Hot cakes", "$85"], ["Enfrijoladas", "$95"], ["Fruta picada", "$70"]] }],
        [{ h: "Bebidas", items: [["Café americano", "$35"], ["Jugo de naranja", "$45"], ["Jugo de toronja", "$45"], ["Té", "$30"]] },
         { h: "Acompañantes", items: [["Pan tostado", "$30"], ["Frijoles", "$25"]] },
         { h: "Tu cuarto", items: [["Habitación 215"]] }]
      ],
      note: "Refills of café americano are free."
    },
    words: [
      ["al gusto", "the way you like"], ["estrellados", "fried (sunny side up)"], ["revueltos", "scrambled"],
      ["a la mexicana", "with tomato, onion, and chile"], ["los hot cakes", "pancakes"], ["las enfrijoladas", "tortillas in bean sauce"],
      ["la fruta picada", "chopped fruit"], ["el pan tostado", "toast"], ["la toronja", "grapefruit"], ["la habitación", "hotel room"], ["cargar", "to charge (to a room)"]
    ],
    phrases: [
      ["Unos huevos revueltos, por favor.", "Scrambled eggs, please."],
      ["¿Me trae más café, por favor?", "Could you bring me more coffee?"],
      ["Con pan tostado, por favor.", "With toast, please."],
      ["¿Lo puede cargar a mi habitación?", "Can you charge it to my room?"],
      ["Es la habitación doscientos quince.", "It's room 215."]
    ],
    prompt: {
      role: `You are Gerardo, a server at the restaurant of Hotel Cuatro Ríos in Morelia. It's 8 am. I'm a hotel guest in room 215. Use "usted" with me.`,
      infoTitle: "MENU (pesos)",
      info: `Huevos al gusto (served with frijoles and tortillas): estrellados $90, revueltos $90, a la mexicana $95, con jamón $95
Otros: hot cakes $85, enfrijoladas $95, fruta picada $70
Bebidas: café americano $35 (free refills), jugo de naranja $45, jugo de toronja $45, té $30
Acompañantes: pan tostado $30, frijoles $25
Guests can charge breakfast to their room (cargar a la habitación).`,
      lead: `Greet me, offer coffee first, then ask what I'd like to eat. Ask "¿Cómo quiere sus huevos?" and "¿Con tortillas o pan tostado?". Offer more coffee during the meal. At the end, ask "¿Lo cargo a su habitación?" and ask for my room number.`,
      recast: `I say "Quiero los huevos revuelto" and you say "Huevos revueltos, muy bien."`
    }
  }
];
