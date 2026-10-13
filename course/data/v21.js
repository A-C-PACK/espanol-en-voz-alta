LESSONS["21"].vars = [
  {
    title: "Una gripa fuerte", partner: "Don Felipe", place: "Farmacia de barrio · Toluca",
    goal: "You have a bad cold in cold, high Toluca. At the pharmacy counter, describe your symptoms, ask for something to take, and understand the doses for two medicines.",
    board: {
      title: "Farmacia San Felipe", sub: "Toluca, Edo. Méx. · mostrador",
      cols: [
        [{ h: "Tus síntomas", items: [["Dolor de garganta", "3 días"], ["Tos seca", "en la noche"], ["Nariz tapada"], ["Dolor de cabeza"], ["Sin fiebre"]] }],
        [{ h: "En el mostrador", items: [["Pastillas para la garganta", "$65"], ["Jarabe para la tos", "$140"], ["Paracetamol", "$45"], ["Té de manzanilla", "$30"]] },
         { h: "Ojo", items: [["Mañana manejas temprano"]] }]
      ],
      note: "One medicine makes you sleepy. Ask about it."
    },
    words: [
      ["la gripa", "cold, flu (Mexico)"], ["la nariz tapada", "stuffy nose"], ["la tos seca", "dry cough"], ["el jarabe", "syrup"],
      ["la cucharada", "spoonful"], ["dar sueño", "to make sleepy"], ["manejar", "to drive"], ["el mostrador", "counter"],
      ["sin receta", "over the counter"], ["el paracetamol", "acetaminophen"], ["el té de manzanilla", "chamomile tea"], ["abrigarse", "to bundle up"]
    ],
    phrases: [
      ["Tengo una gripa muy fuerte.", "I have a really bad cold."],
      ["Me duele la garganta desde hace tres días.", "My throat has hurt for three days."],
      ["Tengo tos, sobre todo en la noche.", "I have a cough, especially at night."],
      ["¿Este jarabe da sueño?", "Does this syrup make you sleepy?"],
      ["¿Cuántas cucharadas, y cada cuánto?", "How many spoonfuls, and how often?"]
    ],
    prompt: {
      role: `You are Don Felipe, 65, the pharmacist at a small neighborhood pharmacy in Toluca. It's cold today. I'm a customer with a bad cold. Use "usted" with me. You're kind and a bit grandfatherly.`,
      infoTitle: "YOUR PHARMACY",
      info: `Throat lozenges $65 (one every 3 hours). Cough syrup $140 (2 spoonfuls every 8 hours; it makes you sleepy, so no driving). A non-drowsy daytime syrup $160. Paracetamol $45 (1 pill every 8 hours for pain). Chamomile tea $30. You also give home advice: tea with honey and lemon, bundle up, no cold drinks. If I have a fever above 38.5°C or trouble breathing, go to a doctor.`,
      lead: `Ask what I have and since when. Ask about fever. Recommend products and explain doses. Mention the side effect only if I ask or tell you about driving.`,
      recast: `I say "Tengo garganta dolor" and you say "¿Le duele la garganta? ¿Desde cuándo?"`
    }
  },
  {
    title: "Una torcedura", partner: "Dr. Medina", place: "Urgencias · San Miguel de Allende",
    goal: "You fell on the cobblestone streets and hurt your ankle. In the emergency room, explain how it happened, describe the pain, and understand the treatment and what not to do.",
    board: {
      title: "Urgencias · Clínica", sub: "San Miguel de Allende, Gto.",
      cols: [
        [{ h: "Lo que pasó", items: [["Bajabas una calle empedrada"], ["Te resbalaste"], ["Te caíste sobre el tobillo"], ["Hace una hora"]] }],
        [{ h: "Ahora", items: [["Está hinchado y morado"], ["Te duele 7 de 10"], ["Puedes caminar un poco"]] },
         { h: "Tu viaje", items: [["Mañana: excursión a caballo"]] }]
      ],
      note: "You'll need to change tomorrow's plans. Ask what you can and can't do."
    },
    words: [
      ["el tobillo", "ankle"], ["la rodilla", "knee"], ["la muñeca", "wrist"], ["torcerse", "to twist, sprain"],
      ["resbalarse", "to slip"], ["caerse", "to fall"], ["hinchado, hinchada", "swollen"], ["morado", "bruised (purple)"],
      ["la radiografía", "X-ray"], ["la venda", "bandage"], ["el hielo", "ice"], ["el reposo", "rest"]
    ],
    phrases: [
      ["Me caí en la calle y me torcí el tobillo.", "I fell in the street and twisted my ankle."],
      ["Bajaba una calle empedrada y me resbalé.", "I was going down a cobblestone street and slipped."],
      ["Está muy hinchado y me duele mucho.", "It's very swollen and it hurts a lot."],
      ["¿Está roto?", "Is it broken?"],
      ["¿Puedo montar a caballo mañana?", "Can I ride a horse tomorrow?"]
    ],
    prompt: {
      role: `You are Doctor Medina, 50, an emergency doctor at a clinic in San Miguel de Allende. I'm a tourist who hurt my ankle. Use "usted" with me.`,
      infoTitle: "WHAT YOU DO",
      info: `Ask how it happened, when, where it hurts, how much (1–10), and if I can walk. Take an X-ray (it takes 15 minutes). Result: it's not broken, it's a sprain (torcedura). Treatment: bandage, ice 20 minutes every 3 hours, keep the foot up, ibuprofen every 8 hours for 3 days, rest for one week. No walking long distances, no horse riding, no hiking. Come back if the pain gets worse.`,
      lead: `Ask me to explain what happened step by step. Ask follow-up questions. After the X-ray, explain the treatment. When I ask about my plans, say no kindly and suggest alternatives.`,
      recast: `I say "Yo caí en la calle" and you say "Se cayó en la calle. ¿Y cómo pasó?"`
    }
  },
  {
    title: "Con el dentista", partner: "Dra. Cervantes", place: "Consultorio dental · Tijuana",
    goal: "You have a terrible toothache. At a dental office, describe the pain, answer the dentist's questions, and decide between two treatments with different prices.",
    board: {
      title: "Consultorio Dental", sub: "Tijuana, B.C. · consulta $400",
      cols: [
        [{ h: "Tus síntomas", items: [["Muela de abajo, izquierda"], ["Dolor fuerte con frío y dulce"], ["Desde hace una semana"], ["No puedes masticar"]] }],
        [{ h: "Tratamientos", items: [["Resina (si es pequeña)", "$900"], ["Endodoncia + corona", "$7,500"], ["Extracción", "$1,200"]] },
         { h: "Regresas a casa", items: [["En 3 días"]] }]
      ],
      note: "The best treatment needs two visits. You only have three days."
    },
    words: [
      ["el diente", "tooth"], ["la muela", "molar"], ["la encía", "gum"], ["la caries", "cavity"],
      ["masticar", "to chew"], ["sensible", "sensitive"], ["la endodoncia", "root canal"], ["la corona", "crown"],
      ["la extracción", "extraction"], ["la anestesia", "anesthetic"], ["la cita", "appointment"], ["el presupuesto", "estimate, quote"]
    ],
    phrases: [
      ["Me duele mucho una muela.", "One of my molars hurts a lot."],
      ["Me duele con el frío y con lo dulce.", "It hurts with cold and with sweet things."],
      ["Es la de abajo, del lado izquierdo.", "It's the bottom one, on the left side."],
      ["¿Cuántas citas necesito?", "How many appointments do I need?"],
      ["¿Se puede hacer antes del viernes?", "Can it be done before Friday?"]
    ],
    prompt: {
      role: `You are Doctora Cervantes, 45, a dentist in Tijuana. I'm a patient with a bad toothache. Use "usted" with me.`,
      infoTitle: "WHAT YOU FIND",
      info: `Ask which tooth, since when, what makes it hurt (cold, hot, sweet, chewing), and if there's swelling. After looking: there's a deep cavity near the nerve. Best option: root canal + crown, $7,500, needs two appointments (today and in 5 days for the crown; a temporary crown today is possible). Cheaper option: extraction, $1,200, today. A simple filling won't work. Give me painkillers either way.`,
      lead: `Ask about my symptoms one at a time. Explain the problem simply. Present the options and prices. When I say I'm leaving in 3 days, help me find a solution.`,
      recast: `I say "Me duele con cosas frías y con dulces" and you say "Ah, le duele con el frío y con lo dulce. Es sensible."`
    }
  }
];
