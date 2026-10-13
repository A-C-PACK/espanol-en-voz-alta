LESSONS["14"].vars = [
  {
    title: "Un fin de semana en la playa", partner: "Raúl", place: "Oficina · Monterrey",
    goal: "Back at work on Monday, your coworker Raúl wants to hear about your weekend trip to the beach in Tampico. Tell him what you did, what you ate, and one thing that went wrong.",
    board: {
      title: "Playa Miramar", sub: "Tampico, Tamps. · tus fotos",
      cols: [
        [{ h: "Viernes y sábado", items: [["Viernes: manejé cinco horas"], ["Sábado: nadé y tomé el sol"], ["Comí jaibas rellenas"], ["Me quemé con el sol"]] }],
        [{ h: "Domingo", items: [["Paseo en lancha por la laguna"], ["Vi cocodrilos"], ["Regresé a las diez de la noche"]] }]
      ],
      note: "Raúl knows Tampico well and will compare."
    },
    words: [
      ["la playa", "beach"], ["nadar", "to swim"], ["tomar el sol", "to sunbathe"], ["quemarse", "to get sunburned"],
      ["las jaibas", "blue crabs"], ["la lancha", "small boat"], ["la laguna", "lagoon"], ["el cocodrilo", "crocodile"],
      ["manejar", "to drive"], ["la carretera", "highway"], ["el bloqueador", "sunscreen"], ["valió la pena", "it was worth it"]
    ],
    phrases: [
      ["El viernes manejé cinco horas.", "On Friday I drove five hours."],
      ["El sábado nadé y tomé el sol todo el día.", "On Saturday I swam and sunbathed all day."],
      ["Probé las jaibas rellenas. ¡Riquísimas!", "I tried the stuffed crabs. Delicious!"],
      ["No usé bloqueador y me quemé.", "I didn't use sunscreen and I got burned."],
      ["Fue cansado, pero valió la pena.", "It was tiring, but it was worth it."]
    ],
    prompt: {
      role: `You are Raúl, 40, my coworker at an office in Monterrey. It's Monday and we're at the coffee machine. You're from Tampico. Use "tú" with me.`,
      infoTitle: "YOU (RAÚL)",
      info: `You grew up in Tampico. You think the best food there is "tortas de la barda" and jaibas rellenas. You know Playa Miramar and the Laguna del Carpintero, where there are crocodiles. Your weekend: you watched the Rayados soccer game with friends and did a carne asada on Sunday.`,
      lead: `Notice that I'm sunburned and ask about my weekend. Ask follow-up questions about the drive, the beach, the food, and the boat. Compare with what you know. Tell me about your weekend only if I ask.`,
      recast: `I say "Yo como jaibas el sábado" and you say "¿Comiste jaibas? ¡Qué rico!"`
    }
  },
  {
    title: "Un fin de semana en casa", partner: "Mamá de Lucía", place: "Llamada · Querétaro", reg: "usted",
    goal: "You're house-sitting for a Mexican friend. Her mother calls on Monday to check on things. Tell her what you did all weekend in the house, and what happened with the dog.",
    board: {
      title: "Casa de Lucía", sub: "Querétaro, Qro. · tu fin de semana",
      cols: [
        [{ h: "Hiciste", items: [["Regaste las plantas"], ["Paseaste a Canela (la perra)"], ["Cocinaste chilaquiles"], ["Viste una serie"]] }],
        [{ h: "Pasó algo", items: [["Canela se escapó el sábado"], ["La encontraste en el parque"], ["Se rompió un vaso"]] }]
      ],
      note: "Be honest about what happened. She will ask lots of questions."
    },
    words: [
      ["regar", "to water (plants)"], ["pasear al perro", "to walk the dog"], ["escaparse", "to escape, run away"], ["encontrar", "to find"],
      ["romperse", "to break"], ["el vaso", "glass"], ["la serie", "TV series"], ["preocuparse", "to worry"],
      ["asustarse", "to get scared"], ["por suerte", "luckily"], ["el vecino", "neighbor"], ["todo bien", "everything's fine"]
    ],
    phrases: [
      ["Regué las plantas el sábado y el domingo.", "I watered the plants on Saturday and Sunday."],
      ["Paseé a Canela dos veces al día.", "I walked Canela twice a day."],
      ["El sábado, Canela se escapó.", "On Saturday, Canela ran away."],
      ["Por suerte, la encontré en el parque.", "Luckily, I found her in the park."],
      ["Se me rompió un vaso. Lo siento.", "I broke a glass. I'm sorry."]
    ],
    prompt: {
      role: `You are Doña Teresa, 65, the mother of my friend Lucía. I'm house-sitting Lucía's house in Querétaro while she travels. You call me on Monday to check that everything's OK. You use "tú" with me; I use "usted" with you.`,
      infoTitle: "WHAT YOU WORRY ABOUT",
      info: `The plants (they need water every day), the dog Canela (a small brown dog who likes to run away), the gas (did I turn it off?), and the neighbor Don Pepe (he complains about noise). You're a bit nervous but kind.`,
      lead: `Ask what I did each day, and ask about each of your worries. When I tell you Canela escaped, get worried and ask exactly what happened. Calm down when I explain.`,
      recast: `I say "Canela escapó y yo la encuentro" and you say "¿Se escapó? ¿Y la encontraste? ¡Ay, qué susto!"`
    }
  },
  {
    title: "Las vacaciones del puente", partner: "Profe Martín", place: "Clase en línea", reg: "usted",
    goal: "It's the first online class after a long weekend. Your teacher asks each student to talk about their three days off. Talk about all three days and say what was the best part.",
    board: {
      title: "El puente del 16 de septiembre", sub: "Clase de conversación · lunes",
      cols: [
        [{ h: "Día 15", items: [["Fuiste al Grito en el centro"], ["Comiste pozole"]] }, { h: "Día 16", items: [["Viste el desfile"], ["Te dolió la cabeza"]] }],
        [{ h: "Día 17", items: [["Limpiaste la casa"], ["Hiciste la tarea"]] }, { h: "Lo mejor", items: [["¿?"]] }]
      ],
      note: "Your teacher will correct one thing you say. Repeat it correctly."
    },
    words: [
      ["el puente", "long weekend"], ["el Grito", "Independence Day cry (Sept. 15)"], ["el desfile", "parade"], ["el pozole", "hominy stew"],
      ["la bandera", "flag"], ["los fuegos artificiales", "fireworks"], ["la multitud", "crowd"], ["dolerle la cabeza", "to have a headache"],
      ["limpiar", "to clean"], ["la tarea", "homework"], ["lo mejor", "the best part"], ["lo peor", "the worst part"]
    ],
    phrases: [
      ["El quince fui al Grito en el centro.", "On the 15th I went to the Grito downtown."],
      ["Había muchísima gente.", "There were tons of people."],
      ["El dieciséis vi el desfile.", "On the 16th I watched the parade."],
      ["El último día hice la tarea.", "On the last day I did the homework."],
      ["Lo mejor fue el pozole.", "The best part was the pozole."]
    ],
    prompt: {
      role: `You are Profe Martín, 45, my Spanish conversation teacher. This is an online class right after the long weekend of September 16 (Mexican Independence Day). Use "usted" with me.`,
      infoTitle: "YOUR CLASS",
      info: `You ask every student: "¿Qué hizo en el puente?" You want them to use the preterite. You spent the long weekend in Dolores Hidalgo, where the Grito started in 1810, and you ate ice cream with strange flavors (mole, shrimp, tequila).`,
      lead: `Ask what I did each day. Ask follow-up questions. Once, when I make a mistake, correct me directly like a teacher ("Ojo: se dice 'fui', no 'iba'") and ask me to repeat. At the end, ask "¿Y qué fue lo mejor?".`,
      recast: `I say "Yo voy al Grito el quince" and you say "Ah, fue al Grito el quince. ¿Y qué tal?"`
    }
  }
];
