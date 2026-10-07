window.LESSONS = window.LESSONS || {};
LESSONS["16"] = {
  id: "16", level: "A2", title: "¿Me la puedo probar?", minutes: 28,
  cando: "I can shop for clothes: ask about size and color, try things on, and ask the price.",
  scale: "Transactions to obtain goods and services",
  reg: "usted", partner: "Doña Lety", place: "Guayaberas La Ceiba · Mérida",
  scene: "I shopped for a guayabera shirt in a store in Mérida with the saleswoman Doña Lety: I asked for my size and color, tried it on, and bought it",
  setup: "You're in a guayabera shop in Mérida, looking for a shirt for a wedding. Doña Lety helps you find your size and color.",
  goal: "You need a guayabera for a wedding in Mérida. Find one in your size and a color you like, try it on, deal with a fit problem, and ask about the price and paying.",
  boardStep: ["Mira la tienda", "Doña Lety has these exact shirts and prices. Decide your size and budget first."],
  board: {
    title: "Guayaberas La Ceiba", sub: "Mérida, Yuc. · Calle 59 · precios en pesos",
    cols: [
      [{ h: "Guayaberas", items: [["Algodón · manga corta", "$650"], ["Algodón · manga larga", "$790"], ["Lino · manga larga", "$1,450"]] },
       { h: "Colores", items: [["Blanco · azul cielo · beige · rosa"]] }],
      [{ h: "Tallas", items: [["Chica (CH)"], ["Mediana (M)"], ["Grande (G)"], ["Extra grande (EG)"]] },
       { h: "Promoción", items: [["2 de algodón", "−15%"]] }]
    ],
    note: "The first shirt you try won't fit perfectly."
  },
  dialogue: [
    ["m", "Buenas tardes, ¿qué anda buscando?", "Good afternoon, what are you looking for?"],
    ["c", "Busco una guayabera para una boda.", "I'm looking for a guayabera for a wedding."],
    ["m", "Muy bien. ¿De algodón o de lino?", "Very good. Cotton or linen?"],
    ["c", "¿Cuál es la diferencia?", "What's the difference?"],
    ["m", "La de lino es más elegante y más fresca, pero es más cara.", "The linen one is more elegant and cooler, but it's more expensive."],
    ["c", "¿Tiene esta en azul, en talla mediana?", "Do you have this one in blue, in a medium?"],
    ["m", "Sí, aquí tiene. ¿Se la quiere probar?", "Yes, here you go. Do you want to try it on?"],
    ["c", "Sí, ¿dónde están los probadores?", "Yes, where are the fitting rooms?"],
    ["m", "Al fondo, a la izquierda.", "At the back, on the left."],
    ["c", "Me queda un poco grande. ¿Tiene una talla más chica?", "It's a bit big on me. Do you have a smaller size?"],
    ["m", "En azul ya no, pero en blanco sí.", "Not in blue anymore, but in white yes."],
    ["c", "A ver… Esta me queda bien. ¿Cuánto cuesta?", "Let's see… This one fits me well. How much is it?"],
    ["m", "Setecientos noventa. Si lleva dos, le hago el quince por ciento.", "Seven ninety. If you take two, I'll give you fifteen percent off."],
    ["c", "Solo una, gracias. Me la llevo. ¿Aceptan tarjeta?", "Just one, thanks. I'll take it. Do you take cards?"],
    ["m", "Sí, claro. Pase a la caja, por favor.", "Yes, of course. Please go to the register."]
  ],
  core: [
    ["Busco una guayabera para una boda.", "I'm looking for a guayabera for a wedding."],
    ["¿La tiene en azul, en talla mediana?", "Do you have it in blue, in a medium?"],
    ["¿Me la puedo probar?", "Can I try it on?"],
    ["Me queda un poco grande.", "It's a bit big on me."],
    ["¿Tiene una talla más chica?", "Do you have a smaller size?"],
    ["Esta me queda bien. ¿Cuánto cuesta?", "This one fits me well. How much is it?"],
    ["Me la llevo.", "I'll take it."]
  ],
  hear: [
    ["¿Qué anda buscando?", "What are you looking for?"],
    ["¿Qué talla es usted?", "What size are you?"],
    ["¿Cómo le quedó?", "How did it fit?"],
    ["Ya no hay en ese color.", "There are none left in that color."],
    ["Le hago un descuento.", "I'll give you a discount."],
    ["Pase a la caja.", "Go to the register."]
  ],
  extra: [
    ["Solo estoy viendo, gracias.", "I'm just looking, thanks."],
    ["¿Tiene otros colores?", "Do you have other colors?"],
    ["Me queda apretada. / Me queda floja.", "It's tight on me. / It's loose on me."],
    ["Las mangas están muy largas.", "The sleeves are too long."],
    ["¿Es de algodón?", "Is it cotton?"],
    ["Es un poco cara. ¿Tiene algo más barato?", "It's a bit expensive. Do you have anything cheaper?"],
    ["¿Me hace un descuentito?", "Can you give me a little discount?"],
    ["¿Puedo cambiarla si no me queda?", "Can I exchange it if it doesn't fit?"],
    ["¿Me da el ticket, por favor?", "Can I have the receipt, please?"],
    ["Para una boda, mejor la blanca.", "(you'll hear) For a wedding, the white one is better."]
  ],
  vocab: [
    ["La ropa", [["la guayabera", "guayabera (embroidered shirt)"], ["la camisa", "shirt"], ["la playera", "T-shirt (Mexico)"], ["el vestido", "dress"], ["los pantalones", "pants"], ["la falda", "skirt"], ["los zapatos", "shoes"], ["la manga corta / larga", "short / long sleeve"]]],
    ["Tallas y telas", [["la talla", "size (clothes)"], ["el número", "size (shoes)"], ["chica, mediana, grande", "small, medium, large"], ["el algodón", "cotton"], ["el lino", "linen"], ["apretado, apretada", "tight"], ["flojo, floja", "loose"]]],
    ["En la tienda", [["el probador", "fitting room"], ["probarse", "to try on"], ["quedar", "to fit"], ["la caja", "register"], ["el descuento", "discount"], ["el ticket", "receipt (Mexico)"], ["cambiar", "to exchange"]]]
  ],
  qd: [
    ["Say you're looking for a guayabera for a wedding.", "Busco una guayabera para una boda."],
    ["Ask if they have it in blue in a medium.", "¿La tiene en azul, en talla mediana?"],
    ["Ask if you can try it on.", "¿Me la puedo probar?"],
    ["Say it's a little big on you.", "Me queda un poco grande."],
    ["Ask for a smaller size.", "¿Tiene una talla más chica?"],
    ["Say it fits and ask the price.", "Esta me queda bien. ¿Cuánto cuesta?"],
    ["Say you'll take it.", "Me la llevo."]
  ],
  patterns: [
    ["Me queda + [grande / chico / bien]", "<i>quedar</i> = to fit: <i>Me queda grande. Los pantalones me quedan largos.</i>"],
    ["¿Me lo / la puedo probar?", "<i>lo</i> for el (el vestido), <i>la</i> for la (la camisa): <i>¿Me la puedo probar?</i>"],
    ["¿La tiene en + [color / talla]?", "<i>¿La tiene en blanco? ¿Lo tiene en grande?</i>"],
    ["Me lo / la llevo.", "\"I'll take it.\" Match the object: <i>Me lo llevo</i> (el sombrero)."]
  ],
  notes: [
    ["Guayabera", "The guayabera is formal wear in Yucatán. White linen with long sleeves is the most elegant choice for weddings."],
    ["Tallas", "Mexican sizes use <i>CH, M, G, EG</i> (chica, mediana, grande, extra grande). US sizes are also common."],
    ["Bargaining", "In stores with tags, prices are fixed, but asking for a <i>descuentito</i> when buying two is normal. In markets, bargaining is expected."],
    ["Ticket", "In Mexico the receipt is <i>el ticket</i>. Keep it if you might exchange something."]
  ],
  prompt: {
    role: `You are Doña Lety, 50, a saleswoman at a guayabera store on Calle 59 in Mérida. I'm a customer. Use "usted" with me.`,
    infoTitle: "THE STORE",
    info: `Guayaberas: cotton short sleeve $650, cotton long sleeve $790, linen long sleeve $1,450. Colors: white, sky blue, beige, pink. Sizes: CH, M, G, EG. Promotion: 15% off if I buy two cotton ones. Fitting rooms at the back on the left. Cash or card. Exchanges within 7 days with the ticket.
For a wedding, you think white is best.`,
    twist: `The first guayabera I try doesn't fit (too big or the sleeves are too long). The color I want isn't available in my size. Let me choose another option.`,
    lead: `Ask what I'm looking for and what it's for. Offer options and ask my size and color. After I try it on, ask "¿Cómo le quedó?" Try once to sell me a second one with the promotion.`,
    recast: `I say "Me queda muy grande la camisa" and you say "¿Le queda grande? Le traigo una más chica."`
  },
  twists: [
    ["Un regalo", "Harder", "Buy a gift for someone. You don't know their exact size.", `Otra vez, por favor. This time I'm buying a guayabera dress (vestido) or shirt as a gift for a friend. I don't know the exact size, so I'll describe the person. Ask me questions and help me choose. Also explain how exchanges work. Same rules.`],
    ["Devolución", "Challenge", "Come back the next day to exchange something.", `Otra vez, por favor. This time it's the next day. I bought a guayabera yesterday and I want to exchange it because it shrank / has a stain / doesn't fit. You ask for the ticket. I don't have it. Let me negotiate. Same rules.`]
  ],
  sa: [
    "I can say what I'm looking for and what it's for",
    "I can ask for a size and color",
    "I can ask to try something on",
    "I can say how it fits (me queda…)",
    "I can ask the price and say I'll take it"
  ]
};
