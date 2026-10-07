LESSONS["17"].vars = [
  {
    title: "Un nuevo compañero", partner: "Lic. Treviño", place: "Oficina · Monterrey", reg: "usted",
    goal: "A new employee, Licenciado Treviño, starts on your team tomorrow. Describe your four coworkers: who they are, what they do, what they're like, and any tips for working with them.",
    board: {
      title: "Tu equipo", sub: "Monterrey, N.L. · departamento de capacitación",
      cols: [
        [{ h: "Laura · la jefa", items: [["Muy organizada, exigente"], ["Llega a las 7:30"], ["Prefiere correos cortos"]] },
         { h: "Toño · diseñador", items: [["Creativo, muy buena onda"], ["Siempre llega tarde"]] }],
        [{ h: "Mari · contadora", items: [["Seria, pero amable"], ["Sabe todo de la oficina"]] },
         { h: "Rodrigo · practicante", items: [["Joven, tímido"], ["Muy trabajador"]] }]
      ],
      note: "He'll ask who to go to for help. Give advice."
    },
    words: [
      ["el equipo", "team"], ["el jefe, la jefa", "boss"], ["el practicante", "intern"], ["el contador, la contadora", "accountant"],
      ["el diseñador", "designer"], ["organizado, organizada", "organized"], ["exigente", "demanding"], ["amable", "kind"],
      ["creativo, creativa", "creative"], ["puntual", "punctual"], ["un consejo", "a piece of advice"], ["le conviene", "it's a good idea for you"]
    ],
    phrases: [
      ["Laura es la jefa. Es muy organizada.", "Laura is the boss. She's very organized."],
      ["Toño es muy buena onda, pero siempre llega tarde.", "Toño is really nice, but he's always late."],
      ["Si tiene una pregunta, hable con Mari.", "If you have a question, talk to Mari."],
      ["Rodrigo es tímido, pero muy trabajador.", "Rodrigo is shy, but very hard-working."],
      ["Un consejo: llegue temprano.", "A tip: arrive early."]
    ],
    prompt: {
      role: `You are Licenciado Jorge Treviño, 40, a new employee who starts on my team tomorrow at an office in Monterrey. We're having coffee. Use "usted" with me.`,
      infoTitle: "WHAT YOU WANT TO KNOW",
      info: `You want to know who everyone is, their job, their personality, and how to make a good impression. You're worried about the boss. You also want to know who to ask about practical things (computer, parking, lunch) and who likes to go out after work.`,
      lead: `Ask about one person at a time. Ask follow-up questions ("¿Y cómo es trabajar con ella?", "¿Algún consejo?"). At the end, summarize what you understood with one mistake.`,
      recast: `I say "Laura es muy exigenta" and you say "Ah, es muy exigente. Entendido."`
    }
  },
  {
    title: "La boda de mi prima", partner: "Rubén", place: "Boda · Guadalajara",
    goal: "At a family wedding, your friend Rubén doesn't know anyone. Point out and describe five people at the party so he can talk to them.",
    board: {
      title: "En la boda", sub: "Guadalajara, Jal. · el salón de fiestas",
      cols: [
        [{ h: "En la mesa 3", items: [["Tu tía Carmen · vestido rojo, pelo chino"], ["Tu abuelo · sombrero, bastón"], ["Tu primo Luis · alto, tatuajes"]] }],
        [{ h: "En la pista", items: [["La novia · tu prima Ana"], ["Su papá · bigote, traje gris"]] },
         { h: "Datos", items: [["Tía Carmen: muy chismosa"], ["Luis: músico"], ["Abuelo: cuenta historias"]] }]
      ],
      note: "Rubén will point at the wrong person once."
    },
    words: [
      ["la boda", "wedding"], ["la novia, el novio", "bride, groom"], ["la pista", "dance floor"], ["la tía, el tío", "aunt, uncle"],
      ["el primo, la prima", "cousin"], ["el bigote", "mustache"], ["el bastón", "cane"], ["el tatuaje", "tattoo"],
      ["el traje", "suit"], ["chismoso, chismosa", "gossipy"], ["al lado de", "next to"], ["el de…", "the one with…"]
    ],
    phrases: [
      ["¿Ves a la señora del vestido rojo?", "Do you see the woman in the red dress?"],
      ["Es mi tía Carmen. Es muy simpática, pero chismosa.", "That's my aunt Carmen. She's very nice, but a gossip."],
      ["El señor del sombrero es mi abuelo.", "The man with the hat is my grandfather."],
      ["No, ese no. El alto, el de los tatuajes.", "No, not that one. The tall one, with the tattoos."],
      ["Platica con él. Es muy buena onda.", "Talk with him. He's really nice."]
    ],
    prompt: {
      role: `You are Rubén, 30, my friend. I brought you to my cousin's wedding in Guadalajara and you don't know anyone. We're standing near the bar. Use "tú" with me.`,
      infoTitle: "THE PARTY",
      info: `People: aunt Carmen (red dress, curly hair, loves gossip), grandfather Don Chuy (hat, cane, 88 years old, tells stories about the Revolution), cousin Luis (tall, tattoos, plays in a mariachi band), the bride Ana (my cousin, a doctor), her father Don Raúl (mustache, gray suit, very serious). There are also two other tall guys near Luis, one with a beard.`,
      lead: `Ask me who people are ("¿Y quién es ese señor?"). Ask what each one is like and what you could talk about with them. Once, point at the wrong person ("¿El de barba?") so I have to describe more precisely.`,
      recast: `I say "Él es la papá de la novia" and you say "Ah, es el papá de la novia. Se ve serio."`
    }
  },
  {
    title: "Un intercambio de casa", partner: "Familia López", place: "Videollamada · Puebla", reg: "usted",
    goal: "A Mexican family will host your teenage nephew for a school exchange. The mother wants to know what he's like: personality, habits, food, and hobbies.",
    board: {
      title: "Intercambio escolar", sub: "Puebla, Pue. · seis semanas",
      cols: [
        [{ h: "Tu sobrino, Ethan", items: [["16 años · muy alto · pelo café"], ["Tímido al principio"], ["Duerme mucho"], ["Juega videojuegos y basquetbol"]] }],
        [{ h: "La Sra. López va a preguntar", items: [["¿Cómo es?"], ["¿Qué come?"], ["¿Es ordenado?"], ["¿Habla español?"]] }]
      ],
      note: "Be honest, but kind. The family has two young children."
    },
    words: [
      ["el sobrino, la sobrina", "nephew, niece"], ["el adolescente", "teenager"], ["ordenado, ordenada", "tidy"], ["desordenado", "messy"],
      ["dormilón, dormilona", "sleepyhead"], ["respetuoso", "respectful"], ["educado", "polite"], ["los videojuegos", "video games"],
      ["quisquilloso para comer", "picky eater"], ["adaptarse", "to adapt"], ["extrañar", "to miss (someone)"], ["al principio", "at first"]
    ],
    phrases: [
      ["Es un chico muy educado, pero tímido al principio.", "He's a very polite boy, but shy at first."],
      ["Es un poco desordenado, la verdad.", "He's a bit messy, to be honest."],
      ["Le gusta mucho el basquetbol.", "He really likes basketball."],
      ["No es quisquilloso para comer.", "He's not a picky eater."],
      ["Habla un poco de español, pero entiende más.", "He speaks a little Spanish, but understands more."]
    ],
    prompt: {
      role: `You are Señora Patricia López, 45, a mother in Puebla. Your family will host my 16-year-old nephew for a six-week school exchange. We're on a video call. You use "usted" with me.`,
      infoTitle: "YOUR FAMILY",
      info: `Your husband Fernando (engineer), your son Diego (16, loves soccer, not basketball), and your daughter Sofi (8, very energetic). You eat a lot of spicy food and the big meal is at 3 pm. The house has one computer and the kids have to share. You're a bit worried about video games and messy rooms.`,
      lead: `Ask about my nephew: appearance (so you recognize him at the airport), personality, habits, food, hobbies, Spanish level. Ask follow-up questions and share a little about your family.`,
      recast: `I say "Él es muy timido en el primer" and you say "Ah, es tímido al principio. Es normal."`
    }
  }
];
