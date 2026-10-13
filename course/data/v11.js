LESSONS["11"].vars = [
  {
    title: "Un viaje a Tequila", partner: "Beto", place: "Guadalajara → Tequila, Jal.",
    goal: "Plan a day trip to Tequila with your friend Beto. Agree on the day, how to get there, what to do, and how much to spend.",
    board: {
      title: "Excursión a Tequila", sub: "Desde Guadalajara · 1 hora y media",
      cols: [
        [{ h: "Cómo ir", items: [["Autobús desde la Central Vieja", "$120"], ["Tren José Cuervo Express", "$2,500"], ["Tour en camioneta", "$900"], ["En el carro de Beto", "gasolina"]] }],
        [{ h: "Qué hacer", items: [["Visitar una destilería", "$350"], ["Caminar por el pueblo"], ["Ver los campos de agave"], ["Comer en el mercado"]] }]
      ],
      note: "You and Beto don't have the same budget. Find a plan you both like."
    },
    words: [
      ["la excursión", "day trip"], ["el agave", "agave plant"], ["la destilería", "distillery"], ["la camioneta", "van, SUV"],
      ["el presupuesto", "budget"], ["caro, cara", "expensive"], ["barato, barata", "cheap"], ["salir temprano", "to leave early"],
      ["regresar", "to come back"], ["manejar", "to drive"], ["la gasolina", "gas, petrol"], ["dividir", "to split"]
    ],
    phrases: [
      ["¿Por qué no vamos en autobús? Es más barato.", "Why don't we go by bus? It's cheaper."],
      ["El tren es muy caro para mí.", "The train is too expensive for me."],
      ["¿Qué tal si salimos a las ocho?", "How about we leave at eight?"],
      ["Dividimos la gasolina, ¿va?", "We split the gas, OK?"],
      ["¿A qué hora regresamos?", "What time do we come back?"]
    ],
    prompt: {
      role: `You are Beto, 32, my friend in Guadalajara. We're planning a day trip to Tequila. Use "tú" with me.`,
      infoTitle: "THE OPTIONS",
      info: `Getting there: bus from the Central Vieja ($120 each way, 2 hours), the José Cuervo Express train ($2,500, includes tasting, Saturdays only), a tour van ($900 with a distillery visit), or your car (you're happy to drive if we split the gas, about $400 total).
In Tequila: distillery visit ($350), walk around the town, see the agave fields, lunch at the market (cheap).
You really want to take the train, but you can be convinced. You're free Saturday or Sunday, but you want to be back by 8 pm on Sunday.`,
      lead: `Start excited about the train. Let me suggest other options and convince you. Make me agree on the day, transport, what to do, and the leaving and returning times.`,
      recast: `I say "El tren es más caro que el autobús por mucho" and you say "Sí, es mucho más caro que el autobús."`
    }
  },
  {
    title: "Una carne asada", partner: "Lic. Herrera", place: "Oficina · Monterrey", reg: "usted",
    goal: "Your boss invites you to a carne asada at her house. Accept, ask the details, and offer to bring something. Then decline a second invitation politely.",
    board: {
      title: "Carne asada en casa de la Lic. Herrera", sub: "Monterrey, N.L. · invitación del trabajo",
      cols: [
        [{ h: "Pregunte", items: [["¿Qué día y a qué hora?"], ["¿Dónde es?"], ["¿Puedo llevar a alguien?"], ["¿Llevo algo?"]] }],
        [{ h: "Su agenda", items: [["Sábado", "libre"], ["Domingo", "comida con amigos"], ["Viernes en la noche", "clase de español"]] }]
      ],
      note: "She'll invite you to something else too. You can't go."
    },
    words: [
      ["la carne asada", "barbecue (Mexico)"], ["la invitación", "invitation"], ["el asador", "grill"], ["la dirección", "address"],
      ["llevar", "to bring"], ["el postre", "dessert"], ["las bebidas", "drinks"], ["con mucho gusto", "with pleasure"],
      ["el compromiso", "prior commitment"], ["agradecer", "to thank"], ["la próxima vez", "next time"], ["a partir de", "from (a time) on"]
    ],
    phrases: [
      ["Muchas gracias por la invitación.", "Thank you very much for the invitation."],
      ["Con mucho gusto. ¿A qué hora empieza?", "With pleasure. What time does it start?"],
      ["¿Llevo algo? ¿Un postre, unas bebidas?", "Shall I bring something? A dessert, some drinks?"],
      ["Qué pena, pero ese día tengo un compromiso.", "I'm so sorry, but I have a commitment that day."],
      ["Quizás la próxima vez.", "Maybe next time."]
    ],
    prompt: {
      role: `You are Licenciada Mónica Herrera, 50, my boss at an office in Monterrey. You invite me to a carne asada at your house. Use "usted" with me, and I'll use "usted" with you.`,
      infoTitle: "THE INVITATION",
      info: `Carne asada: Saturday from 2 pm, at your house in Colonia Contry, Calle Ébano 210. Your husband grills. People from the office and their families are coming. I can bring a partner or a friend. You'll say "no hace falta" when I offer to bring something, but if I insist, ask for a dessert or ice.
Second invitation: Sunday lunch at your mother's house, or Friday night at a concert. I have plans both times.`,
      lead: `Invite me warmly. Answer my questions. After we agree on Saturday, invite me to the second thing so I have to decline politely. Accept my excuse kindly.`,
      recast: `I say "¿Puedo traer algo para la carne asada?" and you say "¿Llevar algo? No hace falta, pero gracias."`
    }
  },
  {
    title: "El cumpleaños de Sofi", partner: "Daniela", place: "Mensajes de voz · Puebla",
    goal: "Your friend Sofi's birthday is next week. Plan a surprise dinner with Daniela: pick the restaurant, the date and time, who invites whom, and the gift.",
    board: {
      title: "Sorpresa para Sofi", sub: "Puebla, Pue. · cumpleaños el jueves",
      cols: [
        [{ h: "Restaurantes", items: [["El Mural de los Poblanos · cocina poblana", "$$$"], ["Tacos Árabes Bagdad", "$"], ["La Pizzería del Centro", "$$"]] }],
        [{ h: "Quién puede", items: [["Jueves", "Daniela no"], ["Viernes", "todos"], ["Sábado", "Sofi viaja"]] },
         { h: "Ideas de regalo", items: [["Un libro"], ["Flores"], ["Una clase de cocina"]] }]
      ],
      note: "Only one day works for everyone. Divide the tasks."
    },
    words: [
      ["la sorpresa", "surprise"], ["el cumpleaños", "birthday"], ["el regalo", "gift"], ["el pastel", "cake"],
      ["reservar", "to book"], ["la mesa", "table"], ["avisar", "to tell, to let know"], ["cooperar", "to chip in (Mexico)"],
      ["encargarse de", "to be in charge of"], ["el grupo", "group chat"], ["no le digas", "don't tell her"], ["a escondidas", "secretly"]
    ],
    phrases: [
      ["¿Qué tal si le hacemos una cena sorpresa?", "How about we throw her a surprise dinner?"],
      ["El viernes es el único día que podemos todos.", "Friday is the only day we all can."],
      ["Yo me encargo de reservar.", "I'll take care of booking."],
      ["¿Cuánto cooperamos para el regalo?", "How much do we each chip in for the gift?"],
      ["¡No le digas nada!", "Don't tell her anything!"]
    ],
    prompt: {
      role: `You are Daniela, 26, my friend in Puebla. We're planning a surprise birthday dinner for our friend Sofi. Use "tú" with me.`,
      infoTitle: "WHAT YOU KNOW",
      info: `Sofi's birthday is Thursday, but you can't on Thursday (you have an exam). Sofi travels on Saturday. So Friday is the only option.
Restaurants: El Mural de los Poblanos (elegant, poblano food, about $600 per person), Tacos Árabes Bagdad (cheap, casual, about $150), La Pizzería del Centro (about $300). Sofi loves mole poblano.
Gift ideas: a book, flowers, or a cooking class (about $1,200). Eight friends will chip in.
You'll offer to bring the cake if I book the table.`,
      lead: `Start by suggesting a surprise. Let me suggest the restaurant and the time. Discuss the price. At the end, we must decide who books, who buys the gift, who tells the others, and who brings Sofi.`,
      recast: `I say "Yo encargo de la reservación" and you say "¿Tú te encargas de la reservación? ¡Perfecto!"`
    }
  }
];
