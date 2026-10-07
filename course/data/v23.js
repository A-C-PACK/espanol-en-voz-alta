LESSONS["23"].vars = [
  {
    title: "El fin de semana largo", partner: "Toño", place: "Llamada · Guadalajara",
    goal: "There's a long weekend coming. Your friend Toño calls to ask about your plans. Tell him what you're going to do each day, what's still undecided, and see if your plans can fit together.",
    board: {
      title: "Puente de noviembre", sub: "Viernes a lunes · Guadalajara",
      cols: [
        [{ h: "Tus planes", items: [["Viernes: trabajo hasta las 3"], ["Sábado: Día de Muertos en Tlaquepaque"], ["Domingo: ¿Chapala? Depende del clima"], ["Lunes: descansar"]] }],
        [{ h: "Toño quiere", items: [["Ir a Chapala"], ["Comer pescado blanco"], ["Salir temprano"]] },
         { h: "No sabes", items: [["Si tu carro está listo (taller)"]] }]
      ],
      note: "Your car is at the mechanic's. That might change everything."
    },
    words: [
      ["el puente", "long weekend"], ["el Día de Muertos", "Day of the Dead"], ["el altar", "altar (ofrenda)"], ["el taller", "repair shop"],
      ["estar listo", "to be ready"], ["el lago", "lake"], ["el malecón", "waterfront promenade"], ["el pescado blanco", "whitefish"],
      ["avisar", "to let know"], ["a ver si", "let's see if"], ["el pronóstico", "forecast"], ["juntarnos", "to get together"]
    ],
    phrases: [
      ["El sábado voy a ver los altares en Tlaquepaque.", "On Saturday I'm going to see the altars in Tlaquepaque."],
      ["El domingo me gustaría ir a Chapala, pero depende del clima.", "On Sunday I'd like to go to Chapala, but it depends on the weather."],
      ["Mi carro está en el taller. Si está listo, manejo yo.", "My car is at the shop. If it's ready, I'll drive."],
      ["Te aviso el viernes.", "I'll let you know on Friday."],
      ["A ver si nos juntamos el domingo.", "Let's see if we can get together on Sunday."]
    ],
    prompt: {
      role: `You are Toño, 33, my friend in Guadalajara. There's a long weekend in November. You call me to ask about my plans. Use "tú" with me.`,
      infoTitle: "YOU (TOÑO)",
      info: `You want to go to Lake Chapala on Sunday to eat pescado blanco on the malecón and leave at 8 am. You don't have a car. The forecast for Sunday: 40% chance of rain. On Saturday you're going to your grandmother's house for Día de Muertos and you'll help her with the altar.`,
      lead: `Ask what I'm going to do each day. Ask "¿Y si…?" questions (if it rains, if the car isn't ready). Try to get me to agree to Chapala. If I'm not sure, ask when I'll know.`,
      recast: `I say "El domingo me gustaría de ir a Chapala" and you say "¿Te gustaría ir a Chapala? ¡A mí también!"`
    }
  },
  {
    title: "Un año sabático", partner: "Maestra Julia", place: "Clase de conversación · en línea", reg: "usted",
    goal: "Your conversation teacher asks about your plans for next year: you're planning a sabbatical in Mexico. Explain where you're going to live, what you plan to do, what you hope to learn, and what still worries you.",
    board: {
      title: "Mi año en México", sub: "Plan para el próximo año",
      cols: [
        [{ h: "Seguro", items: [["Seis meses en Oaxaca"], ["Clases de español en las mañanas"], ["Voluntariado en una biblioteca"]] },
         { h: "Me gustaría", items: [["Aprender a cocinar mole"], ["Viajar a Chiapas y Yucatán"]] }],
        [{ h: "Depende", items: [["Si consigo visa: un año completo"], ["Si encuentro un buen departamento: me quedo en el centro"]] },
         { h: "Me preocupa", items: [["El dinero"], ["Extrañar a mi familia"]] }]
      ],
      note: "Your teacher will ask about the things that worry you."
    },
    words: [
      ["el año sabático", "sabbatical year"], ["el voluntariado", "volunteer work"], ["la biblioteca", "library"], ["la visa", "visa"],
      ["conseguir", "to get, obtain"], ["el ahorro", "savings"], ["preocupar", "to worry"], ["extrañar", "to miss"],
      ["la meta", "goal"], ["el próximo año", "next year"], ["dentro de seis meses", "in six months"], ["aprovechar", "to make the most of"]
    ],
    phrases: [
      ["El próximo año voy a vivir seis meses en Oaxaca.", "Next year I'm going to live in Oaxaca for six months."],
      ["Pienso tomar clases en las mañanas.", "I plan to take classes in the mornings."],
      ["Si consigo la visa, me quedo un año completo.", "If I get the visa, I'll stay a full year."],
      ["Mi meta es hablar con más confianza.", "My goal is to speak with more confidence."],
      ["Lo que me preocupa es el dinero.", "What worries me is money."]
    ],
    prompt: {
      role: `You are Maestra Julia, 50, my online Spanish conversation teacher from Mexico City. Today's topic is "plans for the future". Use "usted" with me.`,
      infoTitle: "WHAT YOU KNOW",
      info: `You know Oaxaca well. Monthly cost of living there is about $15,000–20,000 pesos. Tourist visa is 180 days maximum; staying longer needs a temporary resident visa. You think the best way to learn is to make Mexican friends, not just take classes.`,
      lead: `Ask about my plans one topic at a time: where, how long, what I'll do, my goals. Ask "¿Y qué le preocupa?" Give one practical tip. Encourage me to use different future forms (voy a, pienso, me gustaría, si…).`,
      recast: `I say "Si consigo la visa, me quedaré un año completo" and you say "Muy bien. O también: si consigo la visa, me quedo un año completo."`
    }
  },
  {
    title: "Planes con la familia", partner: "Doña Tere", place: "Comida · Morelia", reg: "usted",
    goal: "You're spending Christmas with a Mexican family. The grandmother asks about your plans for the holidays and New Year. Some of your plans clash with family traditions. Explain and adjust.",
    board: {
      title: "Diciembre con la familia Ríos", sub: "Morelia, Mich. · las fiestas",
      cols: [
        [{ h: "La familia", items: [["24: cena a las 11 pm, todos juntos"], ["25: recalentado al mediodía"], ["31: cena y uvas a las 12"]] }],
        [{ h: "Tus planes", items: [["24: ¿misa? no sé"], ["26–29: viaje a Pátzcuaro"], ["31: fiesta con amigos en el centro"]] }]
      ],
      note: "Doña Tere really wants you at the New Year's dinner."
    },
    words: [
      ["la Nochebuena", "Christmas Eve"], ["la Navidad", "Christmas"], ["el Año Nuevo", "New Year"], ["el recalentado", "leftovers party (Dec. 25)"],
      ["las uvas", "grapes (12 at midnight)"], ["la misa", "mass"], ["los romeritos", "traditional Christmas dish"], ["el bacalao", "salt cod dish"],
      ["la tradición", "tradition"], ["juntarse", "to get together"], ["pasar las fiestas", "to spend the holidays"], ["quedar bien", "to make a good impression"]
    ],
    phrases: [
      ["Del veintiséis al veintinueve pienso ir a Pátzcuaro.", "From the 26th to the 29th I plan to go to Pátzcuaro."],
      ["El treinta y uno iba a ir a una fiesta con amigos.", "On the 31st I was going to go to a party with friends."],
      ["Si quiere, ceno con ustedes y después voy a la fiesta.", "If you'd like, I'll have dinner with you and go to the party afterward."],
      ["Me gustaría probar los romeritos.", "I'd like to try the romeritos."],
      ["Todavía no sé si voy a la misa.", "I don't know yet if I'm going to mass."]
    ],
    prompt: {
      role: `You are Doña Tere Ríos, 75, the grandmother of the Mexican family I'm spending the holidays with in Morelia. You're warm, traditional, and a bit insistent. You use "tú" with me like a grandmother; I use "usted" with you.`,
      infoTitle: "THE FAMILY TRADITIONS",
      info: `Dec 24: midnight mass at 10 pm (optional), then dinner at 11 pm with romeritos, bacalao, and ponche. Dec 25: "recalentado" (leftovers) at noon. Dec 31: big dinner at 10 pm, and at midnight everyone eats 12 grapes and makes 12 wishes. You'd be sad if I missed the 31st dinner. You think Pátzcuaro is beautiful but cold in December.`,
      lead: `Ask about my plans for each date. Explain the family traditions as they come up. When my plans clash with the 31st, insist a little ("¿Cómo que no vas a estar?"). Let me find a compromise.`,
      recast: `I say "El treinta y uno voy a la fiesta de mis amigos" and you say "¿El treinta y uno te vas a ir? ¡Ay, no! ¿Y la cena?"`
    }
  }
];
