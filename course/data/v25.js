LESSONS["25"].vars = [
  {
    title: "La tintorería", partner: "Sr. Pérez", place: "Tintorería · Ciudad de México",
    goal: "The dry cleaner ruined your best jacket: it shrank and has a stain that wasn't there before. Explain what happened, what they told you when you dropped it off, and ask for compensation.",
    board: {
      title: "Tintorería La Moderna", sub: "Colonia Condesa, CDMX · nota #2219",
      cols: [
        [{ h: "Lo que pasó", items: [["El lunes dejaste tu saco de lana"], ["Te dijeron: «queda como nuevo»"], ["Hoy: el saco encogió"], ["Tiene una mancha café"]] }],
        [{ h: "Datos", items: [["El saco costó", "$3,500"], ["La limpieza", "$180"], ["Tienes la nota"]] },
         { h: "Aviso en la pared", items: [["«No nos hacemos responsables por prendas delicadas»"]] }]
      ],
      note: "The sign on the wall is their defense. Do you accept it?"
    },
    words: [
      ["la tintorería", "dry cleaner"], ["el saco", "blazer, jacket (Mexico)"], ["la prenda", "garment"], ["encoger", "to shrink"],
      ["la mancha", "stain"], ["la nota", "ticket, receipt"], ["la etiqueta", "care label"], ["lavar en seco", "to dry-clean"],
      ["hacerse responsable", "to take responsibility"], ["reponer", "to replace"], ["el valor", "value"], ["la mitad", "half"]
    ],
    phrases: [
      ["Cuando lo dejé, me dijeron que iba a quedar como nuevo.", "When I dropped it off, they told me it would be like new."],
      ["Antes no tenía esta mancha.", "It didn't have this stain before."],
      ["La etiqueta dice claramente «lavar en seco».", "The label clearly says \"dry-clean\"."],
      ["Entiendo el aviso, pero ustedes no siguieron las instrucciones.", "I understand the sign, but you didn't follow the instructions."],
      ["Lo justo sería pagar al menos la mitad del saco.", "The fair thing would be to pay at least half the jacket."]
    ],
    prompt: {
      role: `You are Señor Pérez, 58, the owner of a small dry cleaner in Colonia Condesa, Mexico City. I'm a customer picking up a wool blazer that came back damaged. Use "usted" with me.`,
      infoTitle: "THE SITUATION",
      info: `There's a sign: "We're not responsible for delicate garments." Your employee washed the blazer with water instead of dry-cleaning it (you know this, but don't admit it at first). The blazer cost me $3,500. Your offers in order: (1) clean it again for free, (2) refund the $180, (3) pay $1,000. If I point out the care label says dry-clean, admit the mistake and go up to $1,750 (half).`,
      lead: `Start defensive ("Así llegó, ¿no?"). Point to the sign on the wall. Ask questions about when I brought it and what it looked like. Make offers one at a time. Accept fault only if I argue well and politely.`,
      recast: `I say "Me dijeron que va a quedar como nuevo" and you say "¿Le dijeron que iba a quedar como nuevo? ¿Quién le dijo?"`
    }
  },
  {
    title: "El vuelo cancelado", partner: "Agente Ruiz", place: "Mostrador · Aeropuerto de Monterrey",
    goal: "Your flight was cancelled with no explanation, and the first agent was unhelpful. Complain to a supervisor, explain what happened and what you were told, and get a new flight plus compensation.",
    board: {
      title: "Aeropuerto de Monterrey", sub: "Mostrador de la aerolínea · 8:15 pm",
      cols: [
        [{ h: "Lo que pasó", items: [["Vuelo a CDMX, 6:00 pm: cancelado"], ["Te avisaron a las 5:45"], ["El primer agente: «no hay nada que hacer»"], ["Esperaste 2 horas en la fila"]] }],
        [{ h: "Necesitas", items: [["Llegar a CDMX mañana antes de las 11"]] },
         { h: "Tus derechos (PROFECO)", items: [["Vuelo nuevo o reembolso"], ["Comida y hotel si es de noche"], ["Compensación: al menos 25% del boleto"]] }]
      ],
      note: "Mention your rights calmly. The supervisor knows them too."
    },
    words: [
      ["cancelar", "to cancel"], ["el supervisor", "supervisor"], ["el agente", "agent"], ["los derechos", "rights"],
      ["la compensación", "compensation"], ["el vale", "voucher"], ["el hospedaje", "lodging"], ["la causa", "cause, reason"],
      ["atribuible a", "attributable to"], ["reprogramar", "to rebook"], ["exigir", "to demand"], ["de mala manera", "rudely"]
    ],
    phrases: [
      ["Quisiera hablar con un supervisor, por favor.", "I'd like to speak with a supervisor, please."],
      ["Nos avisaron quince minutos antes de la salida.", "They told us fifteen minutes before departure."],
      ["El agente me dijo que no había nada que hacer, y de mala manera.", "The agent told me there was nothing to be done, and rudely."],
      ["Según la ley, tengo derecho a una compensación.", "According to the law, I'm entitled to compensation."],
      ["Necesito llegar mañana antes de las once, sin falta.", "I need to arrive tomorrow before eleven, without fail."]
    ],
    prompt: {
      role: `You are Agente Ruiz, the shift supervisor at the airline counter in Monterrey airport. A passenger asks for a supervisor after a cancelled flight. Use "usted" with me.`,
      infoTitle: "THE SITUATION",
      info: `The 6:00 pm flight to Mexico City was cancelled because of a crew problem (the airline's fault). Options: tomorrow 6:00 am flight (arrives 7:30), or 9:30 am (arrives 11:00). The airline must give: a hotel voucher near the airport, a dinner voucher ($250), and compensation of 25% of the ticket price as a travel credit. At first you only offer the 9:30 flight. Offer the hotel and compensation only if I ask about them. Apologize for the first agent if I mention it.`,
      lead: `Ask what happened and let me explain. Be professional. Offer solutions one at a time. If I mention my rights, acknowledge them ("Tiene razón").`,
      recast: `I say "El agente me dijo que no hay nada que hacer" and you say "¿Le dijo que no había nada que hacer? Le ofrezco una disculpa."`
    }
  },
  {
    title: "Los vecinos de arriba", partner: "Administradora Karla", place: "Edificio · Querétaro",
    goal: "For weeks, the upstairs neighbors have been making noise late at night, and water from their apartment leaked into your bathroom. Complain to the building administrator and agree on concrete steps.",
    board: {
      title: "Edificio Los Arcos", sub: "Querétaro, Qro. · oficina de la administración",
      cols: [
        [{ h: "Lo que pasó", items: [["Hace 3 semanas: música hasta la 1 am"], ["Les tocaste la puerta: «sí, perdón»"], ["Siguió igual, 4 veces más"], ["El martes: una fuga de agua en tu baño"]] }],
        [{ h: "Reglamento", items: [["Silencio", "10 pm – 7 am"], ["Multa por ruido", "$500"], ["Daños: los paga el responsable"]] },
         { h: "Tienes", items: [["Fotos de la fuga"], ["Videos del ruido"]] }]
      ],
      note: "Karla doesn't want problems with anyone. Be specific about what you want."
    },
    words: [
      ["la administradora", "building manager"], ["el reglamento", "building rules"], ["la multa", "fine"], ["la fuga", "leak"],
      ["el techo", "ceiling"], ["la humedad", "damp"], ["tocar la puerta", "to knock on the door"], ["seguir igual", "to stay the same"],
      ["el daño", "damage"], ["el plomero", "plumber"], ["hacerse cargo", "to take charge, pay"], ["el aviso por escrito", "written notice"]
    ],
    phrases: [
      ["Vengo a poner una queja sobre los vecinos del 302.", "I'm here to make a complaint about the neighbors in 302."],
      ["Ya hablé con ellos y me dijeron que iban a bajar la música.", "I already talked to them and they said they'd turn the music down."],
      ["Pero siguió igual, cuatro veces más.", "But it stayed the same, four more times."],
      ["Además, el martes hubo una fuga y se mojó mi techo.", "Also, on Tuesday there was a leak and my ceiling got wet."],
      ["Lo que pido es un aviso por escrito y que paguen el daño.", "What I'm asking for is a written notice and that they pay for the damage."]
    ],
    prompt: {
      role: `You are Karla, 40, the administrator of a 12-apartment building in Querétaro. I'm a tenant in apartment 202 and I come to your office to complain about the neighbors in 302. Use "usted" with me.`,
      infoTitle: "WHAT YOU KNOW",
      info: `The building rules: quiet hours 10 pm–7 am, $500 fine for noise after a written warning, and whoever causes damage pays for repairs. The 302 neighbors are a young couple; nobody else has complained (because 201 and 301 are empty). The leak came from their washing machine hose. You don't like conflict and first suggest I "talk to them again". You can: send a written warning, send the plumber to check 302, and ask them to pay the repair (about $2,000).`,
      lead: `Listen and ask for details: dates, times, what they said. Try to avoid action at first. When I'm specific and show evidence, agree to concrete steps. Summarize the agreement at the end.`,
      recast: `I say "Ellos me dijeron que van a bajar la música" and you say "¿Le dijeron que iban a bajarle? ¿Y cuándo fue eso?"`
    }
  }
];
