window.LESSONS = window.LESSONS || {};
LESSONS["25"] = {
  id: "25", level: "B1", title: "Quisiera poner una queja", minutes: 32,
  cando: "I can make a complaint and explain what happened.",
  scale: "Transactions to obtain goods and services",
  reg: "usted", partner: "Lic. Treviño", place: "Hotel Bahía · Puerto Vallarta",
  scene: "at checkout from a hotel in Puerto Vallarta, I complained to the manager, Licenciada Treviño, about several problems during my stay and asked for compensation",
  goal: "You're checking out after three bad nights. Ask for the manager, explain what went wrong and what the staff told you, say what you expected, and ask for fair compensation. Stay polite but firm.",
  boardStep: ["Organiza tu queja", "Put the problems in order and decide what you'll ask for."],
  board: {
    title: "Hotel Bahía", sub: "Puerto Vallarta, Jal. · tu cuenta · 3 noches",
    cols: [
      [{ h: "Lo que pasó", items: [["Noche 1: el aire acondicionado no servía"], ["Llamaste a recepción: «ahorita mandamos a alguien»"], ["Nadie vino"], ["Noche 2: fiesta en la alberca hasta las 3 am"], ["Noche 3: te cambiaron de cuarto, ya muy tarde"]] }],
      [{ h: "Tu cuenta", items: [["Habitación vista al mar · 3 noches", "$7,800"], ["Minibar", "$640"], ["Total", "$8,440"]] },
       { h: "Ojo", items: [["Nunca abriste el minibar"]] }]
    ],
    note: "The manager will offer something small first. Decide what's fair."
  },
  dialogue: [
    ["c", "Buenos días. Quisiera hablar con el gerente, por favor. Quiero poner una queja.", "Good morning. I'd like to speak to the manager, please. I want to make a complaint."],
    ["m", "Buenos días, soy la licenciada Treviño, la gerente. Dígame, ¿qué pasó?", "Good morning, I'm Ms. Treviño, the manager. Tell me, what happened?"],
    ["c", "Mire, la primera noche el aire acondicionado no servía. Llamé a recepción y me dijeron que iban a mandar a alguien, pero nadie vino.", "Look, the first night the air conditioning didn't work. I called the front desk and they told me they'd send someone, but nobody came."],
    ["m", "Lamento mucho escuchar eso.", "I'm very sorry to hear that."],
    ["c", "Además, la segunda noche hubo una fiesta en la alberca hasta las tres de la mañana. No pude dormir.", "Also, the second night there was a pool party until three in the morning. I couldn't sleep."],
    ["m", "Sí, era un evento privado. ¿Lo reportó en ese momento?", "Yes, it was a private event. Did you report it at the time?"],
    ["c", "Sí, dos veces. Y para colmo, me cobraron el minibar, y nunca lo abrí.", "Yes, twice. And to top it off, you charged me for the minibar, and I never opened it."],
    ["m", "Eso lo quito ahorita mismo. Y le puedo ofrecer un desayuno gratis en su próxima visita.", "I'll remove that right now. And I can offer you a free breakfast on your next visit."],
    ["c", "Le agradezco, pero no me parece suficiente. Pagué por una habitación con vista al mar para descansar, y no descansé.", "I appreciate it, but I don't think that's enough. I paid for an ocean-view room to rest, and I didn't rest."],
    ["m", "Entiendo. ¿Qué le parecería justo?", "I understand. What would seem fair to you?"],
    ["c", "Creo que lo justo sería no cobrarme una de las tres noches.", "I think the fair thing would be not to charge me for one of the three nights."],
    ["m", "Déjeme ver… Le puedo descontar la primera noche completa.", "Let me see… I can discount the whole first night."],
    ["c", "Me parece bien. ¿Me puede dar la cuenta corregida por escrito?", "That sounds good. Can you give me the corrected bill in writing?"],
    ["m", "Claro que sí. Y de nuevo, una disculpa por todo.", "Of course. And again, my apologies for everything."]
  ],
  core: [
    ["Quisiera hablar con el gerente. Quiero poner una queja.", "I'd like to speak to the manager. I want to make a complaint."],
    ["Llamé a recepción y me dijeron que iban a mandar a alguien.", "I called the front desk and they told me they'd send someone."],
    ["Pero nadie vino.", "But nobody came."],
    ["Y para colmo, me cobraron algo que no usé.", "And to top it off, they charged me for something I didn't use."],
    ["Le agradezco, pero no me parece suficiente.", "I appreciate it, but I don't think that's enough."],
    ["Creo que lo justo sería…", "I think the fair thing would be…"],
    ["¿Me lo puede dar por escrito?", "Can you give it to me in writing?"]
  ],
  hear: [
    ["Lamento mucho escuchar eso.", "I'm very sorry to hear that."],
    ["¿Lo reportó en ese momento?", "Did you report it at the time?"],
    ["No es política del hotel.", "It's not hotel policy."],
    ["¿Qué le parecería justo?", "What would seem fair to you?"],
    ["Lo más que le puedo ofrecer es…", "The most I can offer you is…"],
    ["Una disculpa por las molestias.", "Our apologies for the inconvenience."]
  ],
  extra: [
    ["Esperaba un servicio mucho mejor.", "I expected much better service."],
    ["No es la primera vez que pasa.", "It's not the first time it's happened."],
    ["Me parece inaceptable.", "I find it unacceptable."],
    ["Entiendo que no es su culpa, pero…", "I understand it's not your fault, but…"],
    ["Según la página web, la habitación tenía…", "According to the website, the room had…"],
    ["Tengo fotos, si quiere verlas.", "I have photos, if you'd like to see them."],
    ["Si no hay solución, voy a escribir una reseña.", "If there's no solution, I'm going to write a review."],
    ["¿Hay alguien más con quien pueda hablar?", "Is there anyone else I can talk to?"],
    ["Le agradezco su comprensión.", "Thank you for your understanding."],
    ["Lamentablemente, no puedo autorizar eso.", "(you'll hear) Unfortunately, I can't authorize that."]
  ],
  vocab: [
    ["Quejarse", [["poner una queja", "to make a complaint"], ["quejarse de", "to complain about"], ["reclamar", "to demand, complain"], ["el reclamo", "complaint, claim"], ["inaceptable", "unacceptable"], ["las molestias", "inconvenience"], ["para colmo", "to top it off"]]],
    ["Contar lo que pasó", [["me dijeron que…", "they told me that…"], ["me prometieron que…", "they promised me that…"], ["no servía", "it didn't work (Mexico)"], ["nadie vino", "nobody came"], ["en ese momento", "at that moment"], ["varias veces", "several times"], ["sin embargo", "however"]]],
    ["La solución", [["la compensación", "compensation"], ["el descuento", "discount"], ["el reembolso", "refund"], ["descontar", "to discount"], ["cobrar", "to charge"], ["justo", "fair"], ["por escrito", "in writing"], ["la reseña", "review"]]]
  ],
  qd: [
    ["Ask for the manager and say you want to complain.", "Quisiera hablar con el gerente. Quiero poner una queja."],
    ["Say you called reception and they said they'd send someone.", "Llamé a recepción y me dijeron que iban a mandar a alguien."],
    ["Say nobody came.", "Pero nadie vino."],
    ["Say you expected much better service.", "Esperaba un servicio mucho mejor."],
    ["Thank them, but say it's not enough.", "Le agradezco, pero no me parece suficiente."],
    ["Say the fair thing would be not to charge one night.", "Creo que lo justo sería no cobrarme una noche."],
    ["Ask for it in writing.", "¿Me lo puede dar por escrito?"]
  ],
  patterns: [
    ["Me dijeron que + [iban a / imperfecto]", "Reported speech: <i>Me dijeron que iban a mandar a alguien. Me dijeron que era un evento privado.</i>"],
    ["Quisiera + [infinitivo]", "Polite and firm: <i>Quisiera hablar con el gerente. Quisiera un reembolso.</i>"],
    ["Lo justo sería + [infinitivo]", "Propose a solution: <i>Lo justo sería devolverme una noche.</i>"],
    ["Le agradezco, pero + [objeción]", "Reject an offer politely: <i>Le agradezco, pero no me parece suficiente.</i>"]
  ],
  notes: [
    ["Ahorita", "<i>Ahorita</i> can mean \"right now\" or \"sometime later\". When staff say <i>ahorita mandamos a alguien</i>, follow up."],
    ["Licenciado/a", "Managers and professionals are often called <i>licenciado</i> or <i>licenciada</i> (university graduate). Using the title is polite."],
    ["Tone", "Mexican service culture values calm courtesy. A firm, polite complaint (<i>con todo respeto…</i>) works better than anger."],
    ["PROFECO", "For serious problems, PROFECO (consumer protection) handles complaints against hotels and stores."]
  ],
  prompt: {
    role: `You are Licenciada Sofía Treviño, 45, the manager of Hotel Bahía in Puerto Vallarta. I'm a guest checking out, and I've asked to speak to the manager. Use "usted" with me. You're professional and polite, and you try to keep compensation small.`,
    infoTitle: "WHAT YOU KNOW",
    info: `My bill: ocean-view room, 3 nights at $2,600 = $7,800, plus minibar $640. Total $8,440.
The front desk log shows: night 1, I reported broken AC at 11 pm, the technician was off duty. Night 2, I called twice about noise; there was a private wedding party at the pool until 3 am. Night 3, I was moved to another room at 10 pm.
The minibar charge is an error; remove it immediately. Your offers, in order: (1) a free breakfast next visit, (2) 20% off one night, (3) one full night free. Only go to (3) if I explain clearly and stay calm and firm. You can't refund more than one night.`,
    twist: `Defend the hotel once ("La fiesta era un evento autorizado"). If I raise my voice or become rude, become more formal and less flexible.`,
    lead: `Ask me what happened and let me explain everything. Ask clarifying questions ("¿A qué hora llamó?", "¿Con quién habló?"). Make your offers one at a time and let me negotiate.`,
    recast: `I say "Me dijeron que van a mandar a alguien" and you say "¿Le dijeron que iban a mandar a alguien? Lo lamento."`
  },
  twists: [
    ["En el restaurante", "Harder", "Complain at a restaurant: long wait, wrong food, and a rude waiter.", `Otra vez, por favor. New situation: you're the manager of a restaurant in Guadalajara. I waited 50 minutes, they brought the wrong dish, and the waiter was rude when I mentioned it. Same structure: let me explain, ask questions, and make small offers first. Same rules.`],
    ["Por teléfono", "Challenge", "Call customer service about an online purchase. They keep transferring you.", `Otra vez, por favor. This time we're on the phone. I ordered a laptop online; it arrived broken, and the delivery company and the store both say it's the other's fault. Play customer service. Transfer me once ("le comunico con el área de envíos") and play the second person too. Same rules.`]
  ],
  sa: [
    "I can ask for the right person and say I want to complain",
    "I can explain what happened in order",
    "I can report what staff told me (me dijeron que…)",
    "I can politely reject an offer that isn't enough",
    "I can propose a fair solution and confirm it"
  ]
};
