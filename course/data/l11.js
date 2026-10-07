window.LESSONS = window.LESSONS || {};
LESSONS["11"] = {
  id: "11", level: "A2", title: "¿Qué vas a hacer el sábado?", minutes: 28,
  cando: "I can make plans with a friend: suggest, accept, decline, and set a time and place.",
  scale: "Conversation · Goal-oriented cooperation",
  reg: "tú", partner: "Valeria", place: "Llamada · Guadalajara",
  scene: "my friend Valeria called me in Guadalajara and we made plans for the weekend: what to do, when, and where to meet",
  goal: "Your friend Valeria calls to make weekend plans. Suggest something, say no to one of her ideas politely, and agree on a day, a time, and a meeting place.",
  boardStep: ["Mira tu agenda y la cartelera", "You're busy at some times. Valeria has her own plans too."],
  board: {
    title: "Fin de semana", sub: "Guadalajara, Jal. · tu agenda y qué hay",
    cols: [
      [{ h: "Tu agenda", items: [["Sábado, mañana", "ocupado"], ["Sábado, tarde", "libre"], ["Sábado, noche", "libre"], ["Domingo, todo el día", "libre"]] }],
      [{ h: "Qué hay", items: [["Lucha libre · Arena Coliseo", "sáb 8:30 pm"], ["Mariachis · Plaza de los Mariachis", "sáb noche"], ["Tianguis · Tlaquepaque", "dom 10–3"], ["Cine: comedia mexicana", "sáb y dom"]] }]
    ],
    note: "Valeria can't do one of the things you suggest. Find another plan."
  },
  dialogue: [
    ["m", "¡Hola! Oye, ¿qué vas a hacer el sábado?", "Hi! Hey, what are you doing on Saturday?"],
    ["c", "En la mañana estoy ocupado, pero en la tarde estoy libre. ¿Por qué?", "In the morning I'm busy, but in the afternoon I'm free. Why?"],
    ["m", "¿Quieres ir al cine?", "Do you want to go to the movies?"],
    ["c", "Mmm, no sé. ¿Por qué no vamos a la lucha libre?", "Hmm, I don't know. Why don't we go to the wrestling?"],
    ["m", "¡Ay, sí! Nunca he ido. ¿A qué hora es?", "Oh, yes! I've never been. What time is it?"],
    ["c", "Empieza a las ocho y media, en la Arena Coliseo.", "It starts at eight thirty, at the Arena Coliseo."],
    ["m", "Perfecto. ¿Y antes cenamos algo?", "Perfect. And should we have dinner before?"],
    ["c", "Buena idea. ¿Nos vemos a las siete?", "Good idea. Shall we meet at seven?"],
    ["m", "Uy, a las siete no puedo. Salgo de trabajar a las siete. ¿Qué tal a las siete y media?", "Oh, I can't at seven. I get off work at seven. How about seven thirty?"],
    ["c", "Está bien. ¿Dónde nos vemos?", "OK. Where shall we meet?"],
    ["m", "¿Qué tal enfrente de la catedral?", "How about in front of the cathedral?"],
    ["c", "Perfecto. Entonces el sábado a las siete y media, enfrente de la catedral.", "Perfect. So Saturday at seven thirty, in front of the cathedral."],
    ["m", "¡Va! Y el domingo, ¿vamos al tianguis de Tlaquepaque?", "Deal! And on Sunday, shall we go to the Tlaquepaque street market?"],
    ["c", "Gracias, pero el domingo prefiero descansar. ¿Otro día?", "Thanks, but on Sunday I'd rather rest. Another day?"],
    ["m", "Claro, otro día. ¡Nos vemos el sábado!", "Sure, another day. See you Saturday!"]
  ],
  core: [
    ["¿Qué vas a hacer el sábado?", "What are you doing on Saturday?"],
    ["¿Por qué no vamos a la lucha libre?", "Why don't we go to the wrestling?"],
    ["¿Quieres ir al cine conmigo?", "Do you want to go to the movies with me?"],
    ["¡Me encantaría! ¿A qué hora?", "I'd love to! What time?"],
    ["Gracias, pero no puedo. Tengo que trabajar.", "Thanks, but I can't. I have to work."],
    ["¿Qué tal a las siete y media?", "How about seven thirty?"],
    ["¿Dónde nos vemos?", "Where shall we meet?"]
  ],
  hear: [
    ["Oye, ¿tienes planes?", "Hey, do you have plans?"],
    ["¿Te late?", "Are you up for it? (informal Mexico)"],
    ["¡Va! / ¡Sale!", "Deal! / OK! (Mexico)"],
    ["A esa hora no puedo.", "I can't at that time."],
    ["¿Paso por ti?", "Shall I pick you up?"],
    ["Ahí nos vemos.", "See you there."]
  ],
  extra: [
    ["Estoy libre el domingo.", "I'm free on Sunday."],
    ["Ya tengo planes.", "I already have plans."],
    ["¿Y si mejor vamos el domingo?", "What if we go on Sunday instead?"],
    ["¿Compro los boletos?", "Shall I buy the tickets?"],
    ["¿Cuánto cuestan los boletos?", "How much are the tickets?"],
    ["Te mando la ubicación.", "I'll send you the location."],
    ["Si llego tarde, te aviso.", "If I'm late, I'll let you know."],
    ["Me parece bien.", "Sounds good to me."],
    ["¿Invitamos a alguien más?", "Shall we invite someone else?"],
    ["¿Llevas a tu primo? Él quiere venir.", "(you'll hear) Will you bring your cousin? He wants to come."]
  ],
  vocab: [
    ["Planes", [["hacer planes", "to make plans"], ["salir", "to go out"], ["quedar (en)", "to agree (on)"], ["el plan", "plan"], ["el boleto", "ticket"], ["la cartelera", "listings (movies, shows)"], ["el tianguis", "street market (Mexico)"]]],
    ["Tiempo", [["el fin de semana", "weekend"], ["en la mañana", "in the morning"], ["en la tarde", "in the afternoon"], ["en la noche", "at night"], ["antes de", "before"], ["después de", "after"], ["temprano", "early"], ["tarde", "late"]]],
    ["Responder", [["libre", "free"], ["ocupado, ocupada", "busy"], ["me encantaría", "I'd love to"], ["no puedo", "I can't"], ["tengo que…", "I have to…"], ["prefiero…", "I prefer…"], ["otro día", "another day"]]]
  ],
  qd: [
    ["Ask what she's doing on Saturday.", "¿Qué vas a hacer el sábado?"],
    ["Suggest going to the wrestling.", "¿Por qué no vamos a la lucha libre?"],
    ["Accept enthusiastically and ask what time.", "¡Me encantaría! ¿A qué hora?"],
    ["Decline: you have to work.", "Gracias, pero no puedo. Tengo que trabajar."],
    ["Suggest seven thirty instead.", "¿Qué tal a las siete y media?"],
    ["Ask where you'll meet.", "¿Dónde nos vemos?"],
    ["Confirm: Saturday, 7:30, in front of the cathedral.", "Entonces el sábado a las siete y media, enfrente de la catedral."]
  ],
  patterns: [
    ["¿Qué vas a + [verbo]?", "Future plans with <i>ir a</i>: <i>¿Qué vas a hacer? Voy a descansar.</i>"],
    ["¿Por qué no + [nosotros]…?", "A friendly suggestion: <i>¿Por qué no vamos al cine? ¿Por qué no cenamos antes?</i>"],
    ["¿Qué tal + [hora / lugar / día]?", "Counter-offer: <i>¿Qué tal el domingo? ¿Qué tal a las ocho?</i>"],
    ["Gracias, pero + [razón]", "Decline softly: <i>Gracias, pero no puedo. Tengo que trabajar.</i>"]
  ],
  notes: [
    ["¡Va! ¡Sale!", "Mexicans close plans with <i>¡Va!</i>, <i>¡Sale!</i> or <i>¡Sale y vale!</i>, all meaning \"deal\"."],
    ["Lucha libre", "Mexican wrestling is a family event, with masked heroes (<i>técnicos</i>) and villains (<i>rudos</i>)."],
    ["Mexican time", "For a party, arriving 30 minutes late is normal. For the movies or a show, be on time."],
    ["No direct no", "A soft <i>a ver</i> or <i>lo veo</i> can mean \"probably not\". Ask again to be sure."]
  ],
  prompt: {
    role: `You are Valeria, 28, my friend in Guadalajara. You call me to make plans for the weekend. Use "tú" with me.`,
    infoTitle: "YOUR WEEK (VALERIA)",
    info: `Saturday: you work until 7 pm. Free after 7:30. Sunday: free all day. You'd like to go to the movies (a Mexican comedy), but you're open to other ideas. You've never been to lucha libre. Options this weekend: lucha libre at Arena Coliseo (Saturday 8:30 pm, $150), mariachis at Plaza de los Mariachis (Saturday night, free), street market in Tlaquepaque (Sunday 10–3), movies (Saturday and Sunday).
Good meeting places: in front of the cathedral, the Starbucks on Avenida Chapultepec, or you can pick me up in your car.`,
    twist: `When I suggest a time, say you can't and give a reason. Also invite me to one more thing I didn't plan for, so I have to accept or decline.`,
    lead: `Start by asking what I'm doing on Saturday. Let me suggest things. Make me set the exact time and meeting place. At the end, ask me to confirm the plan.`,
    recast: `I say "¿Por qué no vamos en el cine?" and you say "¿Al cine? Mmm, puede ser."`
  },
  twists: [
    ["Cambio de planes", "Harder", "Valeria calls back. She can't go anymore. Change the plan.", `Otra vez, por favor. This time it's Saturday morning and you call me to cancel because something came up. Apologize, and we have to find a new day and plan. Same rules.`],
    ["Tres amigos", "Harder", "A third friend joins the call with different ideas.", `Otra vez, por favor. This time play both Valeria and her cousin Toño, who wants to do something different (a soccer game, Sunday at noon). Say "Habla Toño" when you switch. We have to agree on one plan for all three. Same rules.`]
  ],
  sa: [
    "I can ask what someone is doing (¿qué vas a hacer…?)",
    "I can suggest a plan (¿Por qué no…?)",
    "I can accept and decline politely with a reason",
    "I can offer a different time (¿Qué tal…?)",
    "I can confirm the day, time, and place"
  ]
};
