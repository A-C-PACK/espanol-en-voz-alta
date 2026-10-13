LESSONS["15"].vars = [
  {
    title: "Un hostal en la playa", partner: "Nico", place: "Hostal Las Olas · Puerto Escondido", reg: "tú",
    goal: "You arrive at a beach hostel with no reservation. Compare a dorm bed and a private room, ask what's included, and book two nights.",
    board: {
      title: "Hostal Las Olas", sub: "Puerto Escondido, Oax. · precios por noche",
      cols: [
        [{ h: "Habitaciones", items: [["Cama en dormitorio (8 personas)", "$350"], ["Cuarto privado con ventilador", "$900"], ["Cuarto privado con aire", "$1,200"]] }],
        [{ h: "Incluye", items: [["Toallas", "$30 extra"], ["Lockers", "trae candado"], ["Cocina", "compartida"], ["Desayuno", "no"]] },
         { h: "Actividades", items: [["Clase de surf", "$600"], ["Tour de tortugas", "$450"]] }]
      ],
      note: "It's very hot tonight. Think about air conditioning."
    },
    words: [
      ["el hostal", "hostel"], ["el dormitorio", "dorm room"], ["la litera", "bunk bed"], ["el cuarto privado", "private room"],
      ["el ventilador", "fan"], ["el aire acondicionado", "air conditioning"], ["el locker", "locker"], ["el candado", "padlock"],
      ["compartido", "shared"], ["el mosquitero", "mosquito net"], ["la ola", "wave"], ["apartar", "to reserve, hold"]
    ],
    phrases: [
      ["¿Tienes camas para esta noche?", "Do you have beds for tonight?"],
      ["¿Cuál es la diferencia de precio?", "What's the price difference?"],
      ["¿El cuarto privado tiene baño propio?", "Does the private room have its own bathroom?"],
      ["¿Me apartas un cuarto por dos noches?", "Can you hold a room for me for two nights?"],
      ["¿Dónde puedo comprar un candado?", "Where can I buy a padlock?"]
    ],
    prompt: {
      role: `You are Nico, 24, from Mexico City, working the front desk at Hostal Las Olas in Puerto Escondido. You're very relaxed and friendly. Use "tú" with me.`,
      infoTitle: "THE HOSTEL",
      info: `Dorm bed (8 people, shared bathroom): $350. Private room with fan, shared bathroom: $900. Private room with air conditioning and private bathroom: $1,200 (only one left). Towels $30. Bring your own padlock for the locker (the OXXO next door sells them). Shared kitchen, no breakfast. Surf class $600, turtle release tour $450. It's very hot and humid tonight. The dorm has a party crowd; it's loud until 1 am.`,
      lead: `Greet me casually. Answer my questions one at a time. Mention the noise in the dorm only if I ask. Help me decide and book, then ask if I want to sign up for an activity.`,
      recast: `I say "¿El cuarto tiene un baño de él?" and you say "¿Si tiene baño propio? Sí, el de aire sí tiene."`
    }
  },
  {
    title: "Una cabaña en el bosque", partner: "Sra. Garza", place: "Teléfono · Mazamitla, Jal.",
    goal: "Call a cabin rental in the mountains to book a cabin for a family weekend. Ask about size, prices, the fireplace, and what you need to bring.",
    board: {
      title: "Cabañas El Pinar", sub: "Mazamitla, Jal. · fin de semana",
      cols: [
        [{ h: "Cabañas", items: [["Cabaña chica · 2 personas", "$1,500"], ["Cabaña mediana · 4 personas", "$2,400"], ["Cabaña grande · 8 personas", "$3,800"]] }],
        [{ h: "Tu grupo", items: [["4 adultos y 2 niños"], ["Viernes a domingo"], ["Con un perro"]] },
         { h: "Reglas", items: [["Anticipo", "50%"], ["Leña", "$100 el bulto"]] }]
      ],
      note: "You have a dog. Find out if that's OK."
    },
    words: [
      ["la cabaña", "cabin"], ["el bosque", "forest"], ["la chimenea", "fireplace"], ["la leña", "firewood"],
      ["el bulto", "bundle, sack"], ["el anticipo", "deposit (Mexico)"], ["la transferencia", "bank transfer"], ["las mascotas", "pets"],
      ["el asador", "grill"], ["la ropa de cama", "bedding"], ["caber", "to fit"], ["cuántas personas caben", "how many people fit"]
    ],
    phrases: [
      ["Quiero reservar una cabaña para el fin de semana.", "I want to book a cabin for the weekend."],
      ["Somos cuatro adultos y dos niños.", "We're four adults and two children."],
      ["¿Cuántas personas caben en la mediana?", "How many people fit in the medium one?"],
      ["¿Aceptan mascotas?", "Do you accept pets?"],
      ["¿Cómo pago el anticipo?", "How do I pay the deposit?"]
    ],
    prompt: {
      role: `You are Señora Garza, 55, owner of Cabañas El Pinar in Mazamitla, a mountain town in Jalisco. I call you to book a cabin. Use "usted" with me.`,
      infoTitle: "THE CABINS",
      info: `Small cabin (2 people) $1,500 per night. Medium cabin (4 people, but you can add 2 extra mattresses for $200 each) $2,400. Large cabin (8 people) $3,800. All have a fireplace, kitchen, bedding and towels, and a grill. Firewood $100 per bundle. Pets: only in the large cabin, $300 extra. 50% deposit by bank transfer to confirm. Check-in 3 pm, check-out 1 pm. It's cold at night, about 5°C.`,
      lead: `Answer the phone ("Cabañas El Pinar, buenas tardes"). Ask how many people and which dates. Answer my questions, one at a time. Help me find the best option for six people and a dog. At the end, ask for my name and confirm everything.`,
      recast: `I say "¿Cuántas personas entran en la cabaña?" and you say "¿Cuántas caben? En la mediana caben cuatro."`
    }
  },
  {
    title: "Problemas en la habitación", partner: "Gerardo", place: "Hotel Real · Zacatecas",
    goal: "It's 11 pm. You call the front desk because three things in your room don't work. Explain each problem and get a solution.",
    board: {
      title: "Hotel Real, habitación 308", sub: "Zacatecas, Zac. · 11:00 pm",
      cols: [
        [{ h: "No funciona", items: [["La regadera: no hay agua caliente"], ["La tele: no prende"], ["El wifi: muy lento"]] }],
        [{ h: "También", items: [["Falta una toalla"], ["Mañana sales a las 5 am"]] },
         { h: "Necesitas", items: [["Un taxi a las 4:30 am"], ["Pagar antes de dormir"]] }]
      ],
      note: "The night receptionist can fix some things now and some tomorrow."
    },
    words: [
      ["la regadera", "shower (Mexico)"], ["el agua caliente", "hot water"], ["prender", "to turn on (Mexico)"], ["apagar", "to turn off"],
      ["el control", "remote control"], ["lento", "slow"], ["faltar", "to be missing"], ["el técnico", "maintenance person"],
      ["mandar", "to send"], ["subir", "to bring up"], ["pedir un taxi", "to call a taxi"], ["madrugar", "to get up very early"]
    ],
    phrases: [
      ["Hablo de la habitación trescientos ocho.", "I'm calling from room 308."],
      ["No hay agua caliente en la regadera.", "There's no hot water in the shower."],
      ["La tele no prende.", "The TV won't turn on."],
      ["¿Me puede subir una toalla?", "Can you bring me up a towel?"],
      ["¿Me puede pedir un taxi para las cuatro y media?", "Can you call me a taxi for 4:30?"]
    ],
    prompt: {
      role: `You are Gerardo, the night receptionist at Hotel Real in Zacatecas. It's 11 pm. I call you from room 308. Use "usted" with me.`,
      infoTitle: "WHAT YOU CAN DO",
      info: `Hot water: the water needs to run for 3 minutes before it gets hot. If that doesn't work, you can move me to room 312. TV: the remote needs batteries; you can bring new ones. Wifi: it's slow at night everywhere in the hotel; you can give me the password for the lobby network, which is faster. Towel: you can bring one up in 10 minutes. Taxi: you can book one for 4:30 am ($180 to the airport). I can pay tonight or tomorrow before I leave.`,
      lead: `Answer the phone politely. Ask me to explain each problem, one at a time, and give a solution for each. Ask questions to understand ("¿Ya dejó correr el agua?").`,
      recast: `I say "La tele no está prendiendo" and you say "¿La tele no prende? Seguramente son las pilas."`
    }
  }
];
