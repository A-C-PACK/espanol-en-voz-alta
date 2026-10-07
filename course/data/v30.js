LESSONS["30"].vars = [
  {
    title: "Clase de tortillas", partner: "Doña Eva", place: "Clase de cocina · Oaxaca", reg: "usted",
    goal: "In a cooking class, learn to make corn tortillas by hand. Ask about quantities, how the dough should feel, and how long to cook each side. Repeat the steps at the end.",
    board: {
      title: "Cocina de Doña Eva", sub: "Oaxaca, Oax. · clase de tortillas",
      cols: [
        [{ h: "Ingredientes", items: [["Masa de maíz", "1 kilo"], ["Agua tibia", "un poco"], ["Sal", "una pizca"]] },
         { h: "Utensilios", items: [["El comal"], ["La prensa para tortillas"], ["Dos plásticos"]] }],
        [{ h: "Pregunta", items: [["¿Cómo debe quedar la masa?"], ["¿De qué tamaño hago las bolitas?"], ["¿Cuánto tiempo de cada lado?"], ["¿Cómo sé que ya está?"]] }]
      ],
      note: "Your first tortilla will break. Ask why."
    },
    words: [
      ["la masa", "corn dough"], ["amasar", "to knead"], ["la bolita", "little ball"], ["la prensa", "tortilla press"],
      ["el comal", "griddle"], ["voltear", "to flip"], ["inflarse", "to puff up"], ["pegajoso, pegajosa", "sticky"],
      ["seco, seca", "dry"], ["quebrarse", "to crack, break"], ["tibio, tibia", "lukewarm"], ["el tortillero", "tortilla warmer"]
    ],
    phrases: [
      ["¿Cuánta agua le pongo?", "How much water do I add?"],
      ["¿Así está bien, o está muy seca?", "Is this OK, or is it too dry?"],
      ["¿De qué tamaño hago las bolitas?", "What size do I make the balls?"],
      ["¿Cuándo la volteo?", "When do I flip it?"],
      ["Se me quebró. ¿Qué hice mal?", "It broke. What did I do wrong?"]
    ],
    prompt: {
      role: `You are Doña Eva, 68, a traditional cook who teaches tortilla-making classes in her home kitchen in Oaxaca. I'm your student. You use "tú" with students; I use "usted" with you.`,
      infoTitle: "THE STEPS",
      info: `1) Add warm water little by little to the masa and knead until it feels like soft play-dough, not sticky, not cracking. 2) Make balls the size of a golf ball (una pelota de golf, or "como un huevo chiquito"). 3) Put a ball between two plastic sheets in the press, press gently. 4) Peel off the plastic carefully. 5) Put it on the hot comal: 30 seconds, flip; 1 minute, flip again; it should puff up. 6) Keep them in the tortillero wrapped in a cloth.
If a tortilla breaks or cracks at the edges, the masa is too dry: add water.`,
      lead: `Give one step at a time and wait for me to do it. Ask me how it looks or feels. Answer my questions with specific details. My first tortilla breaks; let me ask why. At the end, ask me to repeat all the steps.`,
      recast: `I say "¿Cuánto agua pongo?" and you say "¿Cuánta agua? Poquita, mijo/mija, poco a poco."`
    }
  },
  {
    title: "Abrir una cuenta", partner: "Ejecutiva Sandra", place: "Banco · Querétaro",
    goal: "You're opening a bank account in Mexico. Ask what documents you need, follow the steps to activate the app and the card, and make sure you understand the fees.",
    board: {
      title: "Banco · Sucursal Centro", sub: "Querétaro, Qro. · apertura de cuenta",
      cols: [
        [{ h: "Documentos", items: [["Pasaporte"], ["Tarjeta de residente"], ["Comprobante de domicilio"], ["CURP o RFC"]] }],
        [{ h: "Pasos", items: [["1. Llenar la solicitud"], ["2. Firmar el contrato"], ["3. Activar la tarjeta"], ["4. Descargar la app"], ["5. Crear el NIP"]] },
         { h: "Comisiones", items: [["Saldo mínimo", "$3,000"], ["Si no", "$150 al mes"]] }]
      ],
      note: "You don't have a proof of address. Ask what else you can use."
    },
    words: [
      ["la cuenta", "account"], ["la sucursal", "branch"], ["el comprobante de domicilio", "proof of address"], ["el NIP", "PIN (Mexico)"],
      ["la comisión", "fee"], ["el saldo mínimo", "minimum balance"], ["activar", "to activate"], ["descargar", "to download"],
      ["la contraseña", "password"], ["el código", "code"], ["el cajero automático", "ATM"], ["el estado de cuenta", "statement"]
    ],
    phrases: [
      ["¿Qué documentos necesito para abrir una cuenta?", "What documents do I need to open an account?"],
      ["No tengo comprobante de domicilio. ¿Qué más puedo usar?", "I don't have proof of address. What else can I use?"],
      ["¿Cómo activo la tarjeta?", "How do I activate the card?"],
      ["Espere, ¿el código me llega por mensaje?", "Wait, does the code come by text?"],
      ["¿Hay alguna comisión si no tengo el saldo mínimo?", "Is there a fee if I don't have the minimum balance?"]
    ],
    prompt: {
      role: `You are Sandra, 30, an account executive at a bank branch in downtown Querétaro. I want to open a bank account. Use "usted" with me.`,
      infoTitle: "THE PROCEDURE",
      info: `Documents: passport, resident card, proof of address (utility bill under 3 months old), and CURP or RFC. Without proof of address: a lease contract with a copy of the landlord's bill is accepted. Steps: fill in the form, sign the contract, receive the card, activate it at an ATM by checking the balance with the temporary PIN (on the envelope), then change the PIN. App: download, enter card number, receive a 6-digit code by SMS, create a password (8 characters, one number, one capital letter). Minimum balance $3,000; if lower, $150 fee per month. First 5 ATM withdrawals at this bank are free.`,
      lead: `Ask what kind of account I want. Explain documents, then steps one by one. Wait for me to confirm each step. Make me ask about the fees. Answer clarification questions patiently.`,
      recast: `I say "¿Cómo yo activo la tarjeta?" and you say "¿Cómo la activa? Muy fácil: vaya al cajero y…"`
    }
  },
  {
    title: "El camino a la cascada", partner: "Guía Ulises", place: "Sierra Norte · Puebla", reg: "tú",
    goal: "Before a solo hike to a waterfall, a local guide gives you detailed directions and safety advice. Ask about each part of the trail, landmarks, time, and what to do if something goes wrong. Repeat the route back.",
    board: {
      title: "Cascada Las Brisas", sub: "Cuetzalan, Pue. · sendero de 4 km",
      cols: [
        [{ h: "El sendero", items: [["Salida: la iglesia del pueblo"], ["Un puente colgante"], ["Una bifurcación"], ["Escaleras de piedra"], ["La cascada"]] }],
        [{ h: "Pregunta", items: [["¿Cuánto tiempo hago?"], ["¿Por dónde voy en la bifurcación?"], ["¿Hay señal de celular?"], ["¿Qué hago si llueve?"]] }]
      ],
      note: "One part of the trail is dangerous after rain. Ask about it."
    },
    words: [
      ["el sendero", "trail"], ["la cascada", "waterfall"], ["el puente colgante", "suspension bridge"], ["la bifurcación", "fork (in the path)"],
      ["resbaloso, resbalosa", "slippery"], ["la neblina", "fog"], ["la señal", "signal"], ["perderse", "to get lost"],
      ["regresarse", "to turn back"], ["el letrero", "sign"], ["subir / bajar", "to go up / down"], ["la piedra", "stone"]
    ],
    phrases: [
      ["¿Cuánto tiempo hago hasta la cascada?", "How long does it take me to the waterfall?"],
      ["En la bifurcación, ¿voy a la derecha o a la izquierda?", "At the fork, do I go right or left?"],
      ["¿Cómo sé que voy bien?", "How do I know I'm going the right way?"],
      ["¿Qué hago si empieza a llover?", "What do I do if it starts to rain?"],
      ["A ver si entendí: salgo de la iglesia, cruzo el puente…", "Let's see if I got it: I leave from the church, cross the bridge…"]
    ],
    prompt: {
      role: `You are Ulises, 29, a local guide in Cuetzalan, Puebla. I want to hike alone to the Las Brisas waterfall, and you explain the route. Use "tú" with me.`,
      infoTitle: "THE ROUTE",
      info: `1) Start at the town church, go down the stone street behind it for 10 minutes. 2) Cross the suspension bridge over the river (one person at a time). 3) After 20 minutes, at the fork, go LEFT (there's a small wooden sign; right goes to a coffee farm). 4) Go down the stone stairs, about 200 steps; they're very slippery after rain. 5) The waterfall: about 1 hour 15 minutes total. No cell signal after the bridge. If it rains: don't go down the stairs, turn back. Fog comes at 4 pm, so be back by 3:30. Bring water and repellent.`,
      lead: `Explain the route one part at a time, with landmarks. Wait for my questions. Give safety warnings. At the end, ask me to repeat the whole route and correct any mistake.`,
      recast: `I say "En la bifurcación, voy por la derecha?" and you say "No, en la bifurcación vas a la izquierda. A la derecha es la finca de café."`
    }
  }
];
