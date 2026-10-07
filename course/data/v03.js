LESSONS["03"].vars = [
  {
    title: "La carnicería", partner: "Don Chema", place: "Mercado de San Juan · CDMX",
    goal: "Buy meat and eggs for a carne asada at the market butcher. Ask prices, buy by weight, ask for a cut, and check the total.",
    board: {
      title: "Carnicería Don Chema", sub: "Mercado de San Juan, CDMX · precio por kilo",
      cols: [
        [{ h: "Res", items: [["Bistec", "$240"], ["Arrachera", "$320"], ["Carne molida", "$190"]] },
         { h: "Cerdo", items: [["Chuleta", "$160"], ["Chorizo", "$140"]] }],
        [{ h: "Pollo", items: [["Pechuga", "$150"], ["Muslo y pierna", "$95"]] },
         { h: "Otros", items: [["Huevo (kilo)", "$45"]] },
         { h: "Tu lista", items: [["1 kilo de arrachera"], ["½ kilo de chorizo"], ["Un cuarto de huevo"]] }]
      ],
      note: "In Mexican markets, eggs are often sold by the kilo."
    },
    words: [
      ["la carnicería", "butcher shop"], ["la carne de res", "beef"], ["el cerdo", "pork"], ["el pollo", "chicken"],
      ["la pechuga", "breast"], ["el bistec", "thin steak"], ["la arrachera", "skirt steak"], ["la carne molida", "ground meat"],
      ["la chuleta", "pork chop"], ["un cuarto (de kilo)", "a quarter kilo"], ["delgadito", "nice and thin"], ["el huevo", "egg"]
    ],
    phrases: [
      ["¿A cómo está la arrachera?", "How much is the skirt steak?"],
      ["Me da un kilo de arrachera, por favor.", "A kilo of skirt steak, please."],
      ["¿Me la corta delgadita?", "Could you cut it thin for me?"],
      ["Un cuarto de huevo, por favor.", "A quarter kilo of eggs, please."],
      ["¿Cuánto es de todo?", "How much is it all together?"]
    ],
    prompt: {
      role: `You are Don Chema, a friendly butcher at the Mercado de San Juan in Mexico City. It's Saturday morning. I'm a customer. Use "usted" with me.`,
      infoTitle: "YOUR PRICES (pesos per kilo)",
      info: `Res: bistec $240, arrachera $320, carne molida $190. Cerdo: chuleta $160, chorizo $140. Pollo: pechuga $150, muslo y pierna $95. Huevo: $45 per kilo. You can cut meat thin (delgadito) or thick (gruesa).`,
      lead: `Call me over ("¡Pásele, güero/güera! ¿Qué le damos?"), ask what I want, give prices when I ask, ask "¿Se la corto delgadita?" for steak, ask "¿Qué más?" after each item, and give the total when I'm done. Say prices clearly.`,
      recast: `I say "Quiero un kilo de la arrachera" and you say "Un kilo de arrachera, claro."`
    }
  },
  {
    title: "La panadería", partner: "Lupita", place: "Panadería La Espiga · Toluca",
    goal: "In a Mexican bakery you pick bread with a tray and tongs, then pay at the register. Ask what the breads are called, buy what's on your list, and pay.",
    board: {
      title: "Panadería La Espiga", sub: "Toluca, Méx. · pan dulce y salado",
      cols: [
        [{ h: "Pan dulce", items: [["Concha", "$14"], ["Cuernito", "$15"], ["Oreja", "$16"], ["Dona", "$18"], ["Rol de canela", "$22"]] }],
        [{ h: "Pan salado", items: [["Bolillo", "$4"], ["Telera", "$5"]] },
         { h: "De temporada", items: [["Pan de muerto", "$45"]] },
         { h: "Tu lista", items: [["Pan para el desayuno de 4 personas"], ["6 bolillos"]] }]
      ],
      note: "You only have a $500 bill. Ask if they have change."
    },
    words: [
      ["la panadería", "bakery"], ["la charola", "tray"], ["las pinzas", "tongs"], ["la concha", "sweet bun with a shell-shaped top"],
      ["el cuernito", "small croissant"], ["la oreja", "palmier (ear-shaped pastry)"], ["el bolillo", "crusty white roll"],
      ["la telera", "flat roll for tortas"], ["la bolsa", "bag"], ["la caja", "register"], ["el cambio", "change"], ["el billete", "bill (money)"]
    ],
    phrases: [
      ["¿Cómo se llama este pan?", "What's this bread called?"],
      ["Son dos conchas y seis bolillos.", "It's two conchas and six bolillos."],
      ["¿Tiene pan de muerto?", "Do you have pan de muerto?"],
      ["¿Tiene cambio de quinientos?", "Do you have change for 500?"],
      ["¿Me da una bolsa, por favor?", "Could I have a bag, please?"]
    ],
    prompt: {
      role: `You are Lupita, the cashier at Panadería La Espiga in Toluca. It's 8 am. I bring my tray to the register. Use "usted" with me.`,
      infoTitle: "YOUR PRICES (pesos)",
      info: `Pan dulce: concha $14, cuernito $15, oreja $16, dona $18, rol de canela $22. Pan salado: bolillo $4, telera $5. Pan de muerto $45 (in season). Bags are free. You have change for a $500 bill, but you'll ask if I have something smaller first.`,
      lead: `Greet me and ask what I have on my tray. Count each item back to me ("Dos conchas…"). If I ask what a bread is, explain in very simple words. Ask "¿Algo más?", tell me the total, and ask "¿No tiene más chico?" if I pay with $500.`,
      recast: `I say "Tengo dos concha y seis bolillo" and you say "Dos conchas y seis bolillos, muy bien."`
    }
  },
  {
    title: "El tianguis de artesanías", partner: "Don Arturo", place: "Tlaquepaque · Jalisco",
    goal: "Buy gifts at a crafts stand. Ask prices, compare two things, ask for a small discount, and pay.",
    board: {
      title: "Artesanías Don Arturo", sub: "Tlaquepaque, Jal. · domingo",
      cols: [
        [{ h: "Barro", items: [["Taza", "$60"], ["Jarrito", "$45"], ["Plato pintado", "$120"]] },
         { h: "Textiles", items: [["Servilleta bordada", "$80"], ["Bolsa de palma", "$150"]] }],
        [{ h: "Otros", items: [["Alebrije chico", "$200"], ["Alebrije grande", "$450"]] },
         { h: "Tu lista", items: [["3 regalos"], ["Presupuesto: $400"]] }]
      ],
      note: "Prices are not fixed. If you buy several things, ask for a discount."
    },
    words: [
      ["el tianguis", "open-air market"], ["la artesanía", "handicraft"], ["el barro", "clay"], ["la taza", "mug"],
      ["el jarrito", "small clay cup"], ["pintado, pintada", "painted"], ["bordado, bordada", "embroidered"], ["el alebrije", "painted fantasy animal figure"],
      ["el regalo", "gift"], ["el descuento", "discount"], ["más barato", "cheaper"], ["este, esta", "this one"]
    ],
    phrases: [
      ["¿Cuánto cuesta esta taza?", "How much is this mug?"],
      ["¿Tiene uno más chico?", "Do you have a smaller one?"],
      ["¿Me hace un descuento?", "Can you give me a discount?"],
      ["Si llevo tres, ¿cuánto me deja?", "If I take three, what price will you give me?"],
      ["Es para regalo.", "It's a gift."]
    ],
    prompt: {
      role: `You are Don Arturo, a friendly crafts vendor at the Sunday market in Tlaquepaque, Jalisco. I'm a customer looking for gifts. Use "usted" with me.`,
      infoTitle: "YOUR PRICES (pesos)",
      info: `Barro: taza $60, jarrito $45, plato pintado $120. Textiles: servilleta bordada $80, bolsa de palma $150. Alebrije chico $200, alebrije grande $450. Everything is handmade by local families. If I buy two or more things and ask for a discount, take about 10% off. If I only buy one, say the price is already very good.`,
      lead: `Invite me to look ("Pásele, sin compromiso"). Answer my questions about prices and materials, and suggest gifts. Ask who the gift is for. Bargain gently, offer to wrap gifts in newspaper, and give the total.`,
      recast: `I say "¿Cuánto cuesta el taza?" and you say "¿La taza? Sesenta pesos."`
    }
  }
];
