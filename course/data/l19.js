window.LESSONS = window.LESSONS || {};
LESSONS["19"] = {
  id: "19", level: "A2+", title: "No funciona", minutes: 30,
  cando: "I can explain a simple problem, like a wrong or broken item, and ask for a fix.",
  scale: "Transactions to obtain goods and services",
  reg: "usted", partner: "Sr. Ortega", place: "Tienda de electrodomésticos · Puebla",
  scene: "I went back to an appliance store in Puebla because the blender I bought yesterday doesn't work, explained the problem to Señor Ortega at customer service, and asked for a solution",
  goal: "Yesterday you bought a blender, and it doesn't work. Go back to the store, explain the problem clearly, and get an exchange or a refund. The store has rules, so be ready to negotiate.",
  boardStep: ["Mira tu ticket y las reglas", "Señor Ortega follows these rules. Know what you want before you start."],
  board: {
    title: "Electro Hogar", sub: "Puebla, Pue. · atención a clientes",
    cols: [
      [{ h: "Tu ticket", items: [["Licuadora Turbo 600 · blanca", "$1,290"], ["Fecha", "ayer"], ["Pago", "tarjeta"]] },
       { h: "El problema", items: [["Prende, pero no gira"], ["Hace un ruido raro"], ["Huele a quemado"]] }],
      [{ h: "Política de la tienda", items: [["Cambios", "7 días con ticket"], ["Reembolso", "solo con caja original"], ["Garantía", "1 año con el fabricante"]] },
       { h: "Ojo", items: [["Tiraste la caja"]] }]
    ],
    note: "You don't have the box anymore. That changes your options."
  },
  dialogue: [
    ["c", "Buenas tardes. Compré esta licuadora ayer y no funciona.", "Good afternoon. I bought this blender yesterday and it doesn't work."],
    ["m", "A ver, ¿qué le pasa?", "Let's see, what's wrong with it?"],
    ["c", "Prende, pero no gira. Y hace un ruido muy raro.", "It turns on, but it doesn't spin. And it makes a really strange noise."],
    ["m", "¿La usó con hielo?", "Did you use it with ice?"],
    ["c", "No, solo con fruta y leche. La usé una vez.", "No, just with fruit and milk. I used it once."],
    ["m", "Ok. ¿Trae el ticket?", "OK. Do you have the receipt?"],
    ["c", "Sí, aquí está. ¿Me la pueden cambiar por otra?", "Yes, here it is. Can you exchange it for another one?"],
    ["m", "Claro. ¿Y la caja?", "Of course. And the box?"],
    ["c", "La tiré, perdón. ¿Es un problema?", "I threw it away, sorry. Is that a problem?"],
    ["m", "Para un cambio no, pero para un reembolso sí necesitamos la caja.", "For an exchange no, but for a refund we do need the box."],
    ["c", "Está bien, prefiero un cambio. ¿Tienen otra igual?", "OK, I prefer an exchange. Do you have another one the same?"],
    ["m", "En blanca ya no. Tengo la negra, o la Turbo 800, que cuesta trescientos más.", "Not in white anymore. I have the black one, or the Turbo 800, which costs three hundred more."],
    ["c", "La negra está bien. ¿Me la puede probar aquí, por favor?", "The black one is fine. Can you test it here for me, please?"],
    ["m", "Sí, cómo no. Mire… funciona perfecto.", "Yes, of course. Look… it works perfectly."],
    ["c", "Perfecto. Muchas gracias por su ayuda.", "Perfect. Thank you very much for your help."]
  ],
  core: [
    ["Compré esta licuadora ayer y no funciona.", "I bought this blender yesterday and it doesn't work."],
    ["Prende, pero no gira.", "It turns on, but it doesn't spin."],
    ["Hace un ruido muy raro.", "It makes a really strange noise."],
    ["Solo la usé una vez.", "I only used it once."],
    ["¿Me la pueden cambiar por otra?", "Can you exchange it for another one?"],
    ["¿Me pueden devolver el dinero?", "Can you give me my money back?"],
    ["¿Me la puede probar aquí, por favor?", "Can you test it here for me, please?"]
  ],
  hear: [
    ["¿Qué le pasa?", "What's wrong with it?"],
    ["¿Trae el ticket?", "Do you have the receipt?"],
    ["¿Cómo la usó?", "How did you use it?"],
    ["Tiene que hablar con el fabricante.", "You have to talk to the manufacturer."],
    ["Ya no tenemos en ese color.", "We don't have it in that color anymore."],
    ["Le hacemos válida la garantía.", "We'll honor the warranty."]
  ],
  extra: [
    ["Está rota. / Está descompuesta.", "It's broken. / It's out of order."],
    ["No prende.", "It doesn't turn on."],
    ["Le falta una pieza.", "It's missing a part."],
    ["Me dieron la talla equivocada.", "They gave me the wrong size."],
    ["No es el que pedí.", "It's not the one I ordered."],
    ["Huele a quemado.", "It smells like something's burning."],
    ["¿Qué opciones tengo?", "What options do I have?"],
    ["¿Puedo hablar con el gerente?", "Can I talk to the manager?"],
    ["¿Me da un comprobante del cambio?", "Can you give me a receipt for the exchange?"],
    ["¿Seguro que la conectó bien?", "(you'll hear) Are you sure you plugged it in right?"]
  ],
  vocab: [
    ["El problema", [["no funciona", "it doesn't work"], ["está descompuesto", "it's broken (machine)"], ["está roto", "it's broken (cracked)"], ["prender / apagar", "to turn on / off"], ["girar", "to spin"], ["el ruido", "noise"], ["la pieza", "part"], ["equivocado", "wrong"]]],
    ["La solución", [["cambiar", "to exchange"], ["devolver", "to return, give back"], ["el reembolso", "refund"], ["reparar", "to repair"], ["la garantía", "warranty"], ["el fabricante", "manufacturer"], ["el comprobante", "proof, receipt"]]],
    ["En la tienda", [["atención a clientes", "customer service"], ["el ticket", "receipt"], ["la caja", "box; register"], ["el gerente", "manager"], ["la licuadora", "blender"], ["la plancha", "iron"], ["el ventilador", "fan"]]]
  ],
  qd: [
    ["Say you bought it yesterday and it doesn't work.", "Compré esta licuadora ayer y no funciona."],
    ["Say it turns on but doesn't spin.", "Prende, pero no gira."],
    ["Say it makes a strange noise.", "Hace un ruido muy raro."],
    ["Say you only used it once.", "Solo la usé una vez."],
    ["Ask them to exchange it for another one.", "¿Me la pueden cambiar por otra?"],
    ["Ask for your money back.", "¿Me pueden devolver el dinero?"],
    ["Ask them to test it in the store.", "¿Me la puede probar aquí, por favor?"]
  ],
  patterns: [
    ["[Verbo], pero no + [verbo]", "Describe exactly what fails: <i>Prende, pero no gira. Carga, pero no prende.</i>"],
    ["¿Me lo / la pueden + [cambiar / reparar]?", "Ask for the fix: <i>¿Me la pueden cambiar? ¿Me lo pueden reparar?</i>"],
    ["Me + [dieron / vendieron] + [cosa equivocada]", "<i>Me dieron la talla equivocada. Me vendieron el modelo equivocado.</i>"],
    ["Prefiero + [opción] + porque…", "<i>Prefiero un cambio porque la necesito hoy.</i>"]
  ],
  notes: [
    ["Ticket y caja", "Mexican stores usually need the <i>ticket</i> for any return, and often the original box for a refund. Keep both for a week."],
    ["PROFECO", "PROFECO is Mexico's consumer protection office. Mentioning it calmly can help if a store refuses a fair return."],
    ["Descompuesto", "For machines, Mexicans say <i>está descompuesto</i> (broken down). <i>Roto</i> is for things that are cracked or torn."],
    ["Pruébela", "It's normal to ask the clerk to test a new appliance in the store before you take it home."]
  ],
  prompt: {
    role: `You are Señor Ortega, 45, at the customer service desk of Electro Hogar, an appliance store in Puebla. I'm a customer with a problem. Use "usted" with me. You're polite but you follow the rules.`,
    infoTitle: "THE PRODUCT AND THE RULES",
    info: `I bought a white Turbo 600 blender yesterday for $1,290, paid by card. Store policy: exchanges within 7 days with the ticket. Refunds only with the ticket AND the original box. Warranty: 1 year with the manufacturer (they take 3–4 weeks to repair).
In stock: the same blender in black ($1,290), or the Turbo 800 ($1,590). No white Turbo 600 left.`,
    twist: `First, suggest that maybe I'm using it wrong ("¿Seguro que la conectó bien?"). Then, when you learn I don't have the box, say no refund is possible. Let me negotiate an exchange or another solution.`,
    lead: `Ask what's wrong and how I used it. Ask for the ticket. Let me explain the problem in my own words and ask for a solution. Give me the options one at a time.`,
    recast: `I say "La licuadora no está funcionando bien desde que compré" and you say "Ah, no funciona desde que la compró. A ver."`
  },
  twists: [
    ["Pedido equivocado", "Harder", "You ordered online and got the wrong item. Call customer service.", `Otra vez, por favor. New situation: I ordered a phone case online and they sent the wrong model and the wrong color. We're on the phone. Ask for my order number (it's 45821) and make me describe exactly what I ordered and what arrived. Same rules.`],
    ["Sin ticket", "Challenge", "You lost the ticket too. Try to get a solution anyway.", `Otra vez, por favor. Same situation, but this time I lost the ticket and the box. Say there's nothing you can do at first. I have to find another way: the card payment, the warranty, or talking to the manager. Same rules.`]
  ],
  sa: [
    "I can say what I bought and when",
    "I can describe exactly what's wrong",
    "I can ask for an exchange or a refund",
    "I can respond when the store says no",
    "I can choose a solution and confirm it"
  ]
};
