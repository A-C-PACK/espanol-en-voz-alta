LESSONS["16"].vars = [
  {
    title: "Botas en León", partner: "Joel", place: "Zapatería · León, Gto.",
    goal: "León is famous for leather. Buy a pair of boots: ask for your shoe size in Mexican numbers, try them on, compare two styles, and ask for a discount.",
    board: {
      title: "Zapatería El Cuero", sub: "León, Gto. · zona piel",
      cols: [
        [{ h: "Botas", items: [["Vaquera clásica · café", "$2,200"], ["Botín casual · negro", "$1,600"], ["Bota de trabajo", "$1,350"]] }],
        [{ h: "Números mexicanos", items: [["US 7 · mujer 9", "25"], ["US 8 · mujer 10", "26"], ["US 9", "27"], ["US 10", "28"], ["US 11", "29"]] },
         { h: "Pago", items: [["En efectivo", "−10%"]] }]
      ],
      note: "Mexican shoe sizes are in centimeters. Check your number first."
    },
    words: [
      ["la zapatería", "shoe store"], ["las botas", "boots"], ["el botín", "ankle boot"], ["la piel", "leather (Mexico)"],
      ["el número", "shoe size"], ["el par", "pair"], ["el tacón", "heel"], ["la suela", "sole"],
      ["me aprietan", "they're tight on me"], ["me lastiman", "they hurt me"], ["medio número", "half size"], ["en efectivo", "in cash"]
    ],
    phrases: [
      ["Busco unas botas de piel.", "I'm looking for some leather boots."],
      ["¿Las tiene en el veintiséis?", "Do you have them in a 26?"],
      ["Me aprietan un poco aquí.", "They're a bit tight here."],
      ["¿Tiene medio número más?", "Do you have a half size up?"],
      ["Si pago en efectivo, ¿me hace descuento?", "If I pay cash, will you give me a discount?"]
    ],
    prompt: {
      role: `You are Joel, 30, a salesman at a leather shoe store in León, Guanajuato. I'm a customer. Use "usted" with me.`,
      infoTitle: "THE STORE",
      info: `Classic cowboy boot (brown) $2,200; casual ankle boot (black) $1,600; work boot $1,350. All real leather, made in León. Mexican sizes go in half numbers: 25, 25.5, 26, 26.5, 27, 27.5, 28, 29. If I don't know my Mexican size, measure my foot. Paying cash: 10% off. The cowboy boot runs small, so I need half a size more.`,
      lead: `Ask what I'm looking for and my size. If I give a US size, help me convert it. After I try them on, ask "¿Cómo las siente?" Recommend the cowboy boots, but let me decide.`,
      recast: `I say "Me quedan apretado" and you say "¿Le quedan apretadas? Le traigo medio número más."`
    }
  },
  {
    title: "En el tianguis", partner: "Marcos", place: "Tianguis de ropa · Guadalajara", reg: "tú",
    goal: "At a weekend street market, buy two T-shirts and a jacket. There's no fitting room, so you'll have to ask a lot of questions. Bargain for a better price.",
    board: {
      title: "Tianguis del sábado", sub: "Guadalajara, Jal. · puesto de Marcos",
      cols: [
        [{ h: "Precios", items: [["Playeras", "$120 c/u"], ["3 playeras", "$300"], ["Chamarra de mezclilla", "$450"], ["Sudadera", "$280"]] }],
        [{ h: "Ojo", items: [["No hay probador"], ["No hay cambios"], ["Solo efectivo"]] },
         { h: "Tu presupuesto", items: [["$700"]] }]
      ],
      note: "You have $700. Try to get everything you want."
    },
    words: [
      ["el puesto", "market stall"], ["la playera", "T-shirt"], ["la chamarra", "jacket (Mexico)"], ["la sudadera", "sweatshirt, hoodie"],
      ["la mezclilla", "denim"], ["c/u (cada uno)", "each"], ["el probador", "fitting room"], ["medirse", "to try on (over clothes)"],
      ["regatear", "to bargain"], ["dejármelo en…", "let me have it for…"], ["la última oferta", "final offer"], ["el cambio", "change; exchange"]
    ],
    phrases: [
      ["¿Me la puedo medir encima?", "Can I try it on over my clothes?"],
      ["¿Es talla grande o grande americana?", "Is it a Mexican large or a US large?"],
      ["¿Me deja las tres en doscientos cincuenta?", "Will you let me have all three for 250?"],
      ["Si me llevo la chamarra también, ¿cuánto sería?", "If I take the jacket too, how much would it be?"],
      ["Ok, trato hecho.", "OK, deal."]
    ],
    prompt: {
      role: `You are Marcos, 35, who sells clothes at a Saturday street market (tianguis) in Guadalajara. You're friendly and good at selling. Use "tú" with me.`,
      infoTitle: "YOUR STALL",
      info: `T-shirts $120 each or 3 for $300. Denim jacket $450. Hoodie $280. Sizes CH, M, G, EG (Mexican sizes are smaller than US sizes). No fitting room, but customers can try jackets on over their clothes. No exchanges. Cash only. Your lowest prices: 3 T-shirts for $270, jacket for $400, everything together for $650.`,
      lead: `Call me over ("¡Pásele, pásele!"). Help me find sizes and colors. When I bargain, go down slowly and complain a little ("Ay, así no gano nada"). Let me close the deal.`,
      recast: `I say "¿Cuánto por la tres?" and you say "¿Las tres? Te las dejo en trescientos."`
    }
  },
  {
    title: "Ropa para el frío", partner: "Srta. Daniela", place: "Tienda departamental · Toluca",
    goal: "You came unprepared for the cold in Toluca. In a department store, buy a warm sweater and a scarf. Ask for help finding the right section, sizes, and a gift receipt.",
    board: {
      title: "Tienda departamental", sub: "Toluca, Edo. Méx. · 2.° piso · temporada de frío",
      cols: [
        [{ h: "Suéteres", items: [["Lana · gris o verde", "$1,100"], ["Acrílico · varios colores", "$549"], ["Cuello de tortuga", "$699"]] }],
        [{ h: "Accesorios", items: [["Bufanda", "$299"], ["Gorro", "$249"], ["Guantes", "$199"]] },
         { h: "Hoy", items: [["Meses sin intereses"], ["2.° artículo", "−30%"]] }]
      ],
      note: "You also need a gift for a friend. Ask about a gift receipt."
    },
    words: [
      ["el suéter", "sweater"], ["la lana", "wool"], ["el cuello de tortuga", "turtleneck"], ["la bufanda", "scarf"],
      ["el gorro", "beanie, hat"], ["los guantes", "gloves"], ["abrigador, abrigadora", "warm (clothing)"], ["pica", "it's itchy"],
      ["el departamento de caballeros / damas", "men's / women's section"], ["el ticket de regalo", "gift receipt"], ["envolver", "to wrap"], ["meses sin intereses", "interest-free installments"]
    ],
    phrases: [
      ["¿Dónde está el departamento de caballeros?", "Where's the men's section?"],
      ["Necesito algo abrigador.", "I need something warm."],
      ["Este suéter pica un poco.", "This sweater is a bit itchy."],
      ["¿Me lo puede envolver para regalo?", "Can you gift-wrap it for me?"],
      ["¿Me da un ticket de regalo?", "Can I have a gift receipt?"]
    ],
    prompt: {
      role: `You are Señorita Daniela, 23, a salesperson at a big department store in Toluca. It's cold season. I'm a customer. Use "usted" with me.`,
      infoTitle: "THE STORE",
      info: `Second floor: men's section (caballeros) on the left, women's (damas) on the right. Sweaters: wool $1,100 (very warm but a bit itchy), acrylic $549 (many colors, not as warm), turtleneck $699. Scarves $299, beanies $249, gloves $199. Today: second item 30% off (the cheaper one). Gift wrapping is free at the counter by the elevators. Gift receipts are available. Toluca gets down to 0°C at night.`,
      lead: `Offer help and ask what I need. Ask my size and what colors I like. Explain the promotion. When I mention a gift, explain wrapping and gift receipts.`,
      recast: `I say "Necesito algo que es caliente" and you say "¿Algo abrigador? Le recomiendo el de lana."`
    }
  }
];
