window.LESSONS = window.LESSONS || {};
LESSONS["15"] = {
  id: "15", level: "A2", title: "Tengo una reservación", minutes: 28,
  cando: "I can book a hotel room or check in.",
  scale: "Transactions to obtain goods and services",
  reg: "usted", partner: "Andrés", place: "Hotel Casa del Valle · San Cristóbal de las Casas",
  scene: "I checked in at a small hotel in San Cristóbal de las Casas with the receptionist Andrés, sorted out a problem with my room, and asked about the hotel services",
  goal: "You arrive at your hotel in San Cristóbal. Check in, confirm the details of your reservation, solve a problem with the room, and ask about breakfast, wifi, and check-out.",
  boardStep: ["Mira tu reservación", "Andrés has the same information on his screen. Or does he?"],
  board: {
    title: "Hotel Casa del Valle", sub: "San Cristóbal de las Casas, Chis. · confirmación",
    cols: [
      [{ h: "Tu reservación", items: [["Habitación doble", "1 cama matrimonial"], ["Llegada", "viernes 14"], ["Salida", "lunes 17"], ["Noches", "3"], ["Precio por noche", "$1,100"], ["Desayuno", "incluido"]] }],
      [{ h: "El hotel", items: [["Desayuno", "7:30–10:30"], ["Wifi", "gratis"], ["Check-out", "12:00 pm"], ["Estacionamiento", "no hay"], ["Agua caliente", "24 horas"]] }]
    ],
    note: "The hotel made a mistake with your room. Ask for what you booked."
  },
  dialogue: [
    ["m", "Buenas tardes, bienvenido. ¿En qué le puedo ayudar?", "Good afternoon, welcome. How can I help you?"],
    ["c", "Buenas tardes. Tengo una reservación a nombre de Alex Johnson.", "Good afternoon. I have a reservation under the name Alex Johnson."],
    ["m", "Un momento… Sí, aquí está. Tres noches, ¿verdad?", "One moment… Yes, here it is. Three nights, right?"],
    ["c", "Sí, hasta el lunes. ¿El desayuno está incluido?", "Yes, until Monday. Is breakfast included?"],
    ["m", "Sí, de siete y media a diez y media. ¿Me permite una identificación?", "Yes, from 7:30 to 10:30. May I see an ID?"],
    ["c", "Claro, aquí está mi pasaporte.", "Sure, here's my passport."],
    ["m", "Gracias. Le di la habitación doce, con dos camas individuales.", "Thank you. I gave you room twelve, with two single beds."],
    ["c", "Perdón, pero reservé una habitación con cama matrimonial.", "Sorry, but I booked a room with a double bed."],
    ["m", "Ay, tiene razón. Déjeme ver… Tengo una en el segundo piso, pero da a la calle.", "Oh, you're right. Let me see… I have one on the second floor, but it faces the street."],
    ["c", "¿Hay mucho ruido en la noche?", "Is there a lot of noise at night?"],
    ["m", "Los viernes un poco. Mañana la puedo cambiar a una más tranquila.", "On Fridays a little. Tomorrow I can move you to a quieter one."],
    ["c", "Está bien, gracias. ¿Cuál es la contraseña del wifi?", "OK, thanks. What's the wifi password?"],
    ["m", "Está en la llave: \"valle2024\". ¿Algo más?", "It's on the key: \"valle2024\". Anything else?"],
    ["c", "¿A qué hora es la salida?", "What time is check-out?"],
    ["m", "A las doce. Si quiere, le guardamos la maleta.", "At twelve. If you want, we'll keep your suitcase for you."]
  ],
  core: [
    ["Tengo una reservación a nombre de Alex Johnson.", "I have a reservation under the name Alex Johnson. (use your name)"],
    ["Reservé una habitación doble por tres noches.", "I booked a double room for three nights."],
    ["¿El desayuno está incluido?", "Is breakfast included?"],
    ["Perdón, pero reservé una habitación con cama matrimonial.", "Sorry, but I booked a room with a double bed."],
    ["¿Tiene una habitación más tranquila?", "Do you have a quieter room?"],
    ["¿Cuál es la contraseña del wifi?", "What's the wifi password?"],
    ["¿A qué hora es la salida?", "What time is check-out?"]
  ],
  hear: [
    ["¿A nombre de quién?", "Under what name?"],
    ["¿Me permite una identificación?", "May I see an ID?"],
    ["Da a la calle.", "It faces the street."],
    ["Da al patio.", "It faces the courtyard."],
    ["Firme aquí, por favor.", "Sign here, please."],
    ["Le guardamos la maleta.", "We'll keep your suitcase for you."]
  ],
  extra: [
    ["¿Tienen habitaciones disponibles para esta noche?", "Do you have rooms available for tonight?"],
    ["¿Cuánto cuesta por noche?", "How much is it per night?"],
    ["¿Puedo ver la habitación?", "Can I see the room?"],
    ["¿Puedo dejar la maleta aquí?", "Can I leave my suitcase here?"],
    ["¿Tiene toallas extra?", "Do you have extra towels?"],
    ["¿Me puede despertar a las seis?", "Can you wake me up at six?"],
    ["¿Puedo pagar con tarjeta?", "Can I pay by card?"],
    ["¿Me puede recomendar un restaurante cerca?", "Can you recommend a restaurant nearby?"],
    ["Hace frío en la noche. ¿Hay cobijas extra?", "It's cold at night. Are there extra blankets?"],
    ["Hay un depósito de quinientos pesos.", "(you'll hear) There's a 500-peso deposit."]
  ],
  vocab: [
    ["La habitación", [["la habitación, el cuarto", "room"], ["sencilla", "single"], ["doble", "double"], ["la cama matrimonial", "double bed"], ["la cama individual", "single bed"], ["la llave", "key"], ["la cobija", "blanket (Mexico)"], ["la toalla", "towel"]]],
    ["La recepción", [["la reservación", "reservation (Mexico)"], ["la llegada", "arrival, check-in"], ["la salida", "departure, check-out"], ["la noche", "night"], ["disponible", "available"], ["el depósito", "deposit"], ["la contraseña", "password"]]],
    ["Problemas", [["el ruido", "noise"], ["tranquilo, tranquila", "quiet"], ["da a la calle", "faces the street"], ["cambiar de habitación", "to change rooms"], ["no funciona", "doesn't work"], ["un error", "a mistake"]]]
  ],
  qd: [
    ["Say you have a reservation in your name.", "Tengo una reservación a nombre de… (tu nombre)."],
    ["Say you booked a double room for three nights.", "Reservé una habitación doble por tres noches."],
    ["Ask if breakfast is included.", "¿El desayuno está incluido?"],
    ["Politely say you booked a double bed.", "Perdón, pero reservé una habitación con cama matrimonial."],
    ["Ask for a quieter room.", "¿Tiene una habitación más tranquila?"],
    ["Ask for the wifi password.", "¿Cuál es la contraseña del wifi?"],
    ["Ask what time check-out is.", "¿A qué hora es la salida?"]
  ],
  patterns: [
    ["a nombre de + [nombre]", "<i>Tengo una reservación a nombre de Smith.</i>"],
    ["Reservé + [habitación] + por + [noches]", "<i>por</i> for how long: <i>por tres noches, por una semana.</i>"],
    ["Perdón, pero + [lo que reservé]", "Fix a mistake politely: <i>Perdón, pero pedí una habitación con baño.</i>"],
    ["¿Tiene una habitación más + [adjetivo]?", "<i>más tranquila, más grande, más barata</i>"]
  ],
  notes: [
    ["Reservación", "Mexicans say <i>reservación</i>. In Spain it's <i>reserva</i>."],
    ["San Cristóbal is cold", "At 2,200 m, nights are cold. Many hotels have no heating, so ask for <i>cobijas</i>."],
    ["Patio rooms", "Colonial hotels are built around a courtyard. Rooms that <i>dan al patio</i> are quieter than those that <i>dan a la calle</i>."],
    ["Depósito", "Some small hotels ask for a cash deposit or a card imprint at check-in."]
  ],
  prompt: {
    role: `You are Andrés, 27, the receptionist at Hotel Casa del Valle, a small colonial hotel in San Cristóbal de las Casas. I'm a guest arriving to check in. Use "usted" with me.`,
    infoTitle: "THE RESERVATION AND THE HOTEL",
    info: `My reservation: double room with one double bed (cama matrimonial), Friday 14 to Monday 17, 3 nights, $1,100 per night, breakfast included.
The hotel: breakfast 7:30–10:30 in the courtyard. Free wifi, password on the key tag: valle2024. Check-out 12:00. No parking (public parking two blocks away, $150/day). Hot water 24 hours. You can keep luggage after check-out. You ask for ID and a $500 cash deposit for the key.`,
    twist: `Your computer shows the wrong room: two single beds. When I complain, the only double-bed room left faces the noisy street. Offer to move me to a quiet room tomorrow, or offer a free dinner. Let me choose.`,
    lead: `Welcome me and ask for my name. Confirm the details, one at a time. Answer my questions about the hotel. Let me discover and fix the room problem.`,
    recast: `I say "Yo reservo una cama matrimonial" and you say "Ah, reservó una cama matrimonial. Déjeme ver."`
  },
  twists: [
    ["Sin reservación", "Harder", "You arrive with no reservation. Book a room on the spot.", `Otra vez, por favor. This time I don't have a reservation. Tonight you only have one room left: a suite at $1,900. Tomorrow there are cheaper rooms. Let me ask questions and negotiate. Same rules.`],
    ["Por teléfono", "Challenge", "Call the hotel to book a room for next month.", `Otra vez, por favor. This time we're on the phone. I'm calling to book a room for next month. Ask for my dates, the number of people, my name, my email and how I'll pay. Spell-check my email by repeating it back. Same rules.`]
  ],
  sa: [
    "I can check in with my name and reservation",
    "I can confirm dates, nights, and what's included",
    "I can politely say there's a mistake",
    "I can ask for a different room",
    "I can ask about hotel services (wifi, breakfast, check-out)"
  ]
};
