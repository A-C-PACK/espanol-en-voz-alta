LESSONS["26"].vars = [
  {
    title: "Sobremesa en familia", partner: "Don Ramón", place: "Comida de domingo · Puebla", reg: "usted",
    goal: "After Sunday lunch with a Mexican family, the grandfather starts a debate about how things were better in the past. Give your opinions on young people, technology, and food, and disagree respectfully.",
    board: {
      title: "La sobremesa", sub: "Puebla, Pue. · después de la comida",
      cols: [
        [{ h: "Don Ramón dice", items: [["«Los jóvenes de hoy no saben trabajar.»"], ["«La tecnología nos separa.»"], ["«Antes la comida era más sana.»"]] }],
        [{ h: "Para no ofender", items: [["Con todo respeto, …"], ["Entiendo su punto, pero…"], ["En eso tiene razón."], ["Yo lo veo un poco diferente."]] }]
      ],
      note: "Agree with him on one thing. It helps."
    },
    words: [
      ["la sobremesa", "after-meal conversation"], ["los jóvenes", "young people"], ["antes / hoy en día", "before / nowadays"], ["la tecnología", "technology"],
      ["sano, sana", "healthy"], ["los valores", "values"], ["la generación", "generation"], ["respetar", "to respect"],
      ["con todo respeto", "with all due respect"], ["su punto", "your point"], ["exagerar", "to exaggerate"], ["la costumbre", "custom, habit"]
    ],
    phrases: [
      ["Con todo respeto, Don Ramón, yo lo veo un poco diferente.", "With all due respect, Don Ramón, I see it a bit differently."],
      ["Entiendo su punto, pero muchos jóvenes trabajan y estudian.", "I understand your point, but many young people work and study."],
      ["En eso tiene toda la razón.", "You're absolutely right about that."],
      ["Hoy en día hay más comida procesada, es cierto.", "Nowadays there's more processed food, that's true."],
      ["No creo que la tecnología sea el problema.", "I don't think technology is the problem."]
    ],
    prompt: {
      role: `You are Don Ramón, 78, the grandfather of a Mexican family in Puebla. It's the long after-lunch conversation (sobremesa) on Sunday. You're charming, opinionated, and nostalgic. You use "tú" with me; I use "usted" with you.`,
      infoTitle: "YOUR OPINIONS",
      info: `Young people today don't know how to work hard; at 15 you were already working in your father's shop. Technology separates families: at lunch everyone looks at their phone. Food was healthier before: everything was homemade, tortillas from the comal, no soda. But you love video calls with your grandson in Canada.`,
      lead: `State an opinion and ask "¿Tú qué piensas?". Push back once on each topic, but in a friendly way. If I'm respectful and give good examples, concede a little ("Bueno, en eso tienes razón, mijo/mija"). If I agree with something, be pleased.`,
      recast: `I say "No creo que la tecnología es el problema" and you say "¿No crees que sea el problema? A ver, explícame."`
    }
  },
  {
    title: "Un podcast de ciudad", partner: "Marisol", place: "Estudio de podcast · Monterrey",
    goal: "A local podcast interviews foreigners about life in Mexico. Give your honest opinions on transportation, food, and people in Mexican cities, with reasons and examples.",
    board: {
      title: "Podcast «Visto desde fuera»", sub: "Monterrey, N.L. · episodio 42",
      cols: [
        [{ h: "Preguntas", items: [["¿Qué opina del transporte en México?"], ["¿La comida mexicana de aquí es como la de allá?"], ["¿Qué le sorprendió de la gente?"], ["¿Qué cambiaría?"]] }],
        [{ h: "Estructura", items: [["Opinión"], ["Razón"], ["Ejemplo personal"], ["Comparación con tu país"]] }]
      ],
      note: "Marisol will ask one question you don't expect."
    },
    words: [
      ["el episodio", "episode"], ["el oyente", "listener"], ["sorprender", "to surprise"], ["cambiar", "to change"],
      ["el transporte", "transportation"], ["la amabilidad", "kindness"], ["la puntualidad", "punctuality"], ["sincero, sincera", "honest"],
      ["a decir verdad", "to tell the truth"], ["lo que más me llamó la atención", "what struck me most"], ["en comparación con", "compared to"], ["mejorar", "to improve"]
    ],
    phrases: [
      ["A decir verdad, lo que más me llamó la atención fue…", "To tell the truth, what struck me most was…"],
      ["En comparación con mi país, aquí la gente es más…", "Compared to my country, people here are more…"],
      ["Me parece que el transporte público podría mejorar.", "It seems to me public transportation could improve."],
      ["Por ejemplo, el otro día…", "For example, the other day…"],
      ["Si pudiera cambiar algo, sería…", "If I could change one thing, it would be…"]
    ],
    prompt: {
      role: `You are Marisol, 35, host of a podcast in Monterrey called "Visto desde fuera" that interviews foreigners living in or visiting Mexico. We're recording. Use "usted" with me at first; if I suggest it, switch to "tú".`,
      infoTitle: "YOUR SHOW",
      info: `Your questions: what I think of transportation in Mexico; if the Mexican food in my country is like real Mexican food; what surprised me about people; and what I would change. Surprise question: "¿Qué es algo de México que nunca va a entender?" You like honest, funny answers and you laugh easily.`,
      lead: `Introduce the episode and me. Ask one question at a time. Ask follow-ups ("¿Por ejemplo?", "¿Y eso es bueno o malo?"). Share your own opinion briefly sometimes. End with the surprise question and thank me.`,
      recast: `I say "Lo que más me sorprendió es que la gente son muy amable" and you say "Ah, que la gente es muy amable. ¡Qué bonito escuchar eso!"`
    }
  },
  {
    title: "Reunión de maestros", partner: "Mtra. Cecilia", place: "Sala de maestros · Guadalajara",
    goal: "In a teachers' meeting, the coordinator asks for opinions on two proposals: banning homework on weekends and using AI tools in class. Give your view with reasons and examples, and respond to a colleague who disagrees.",
    board: {
      title: "Junta de academia", sub: "Escuela de idiomas · Guadalajara",
      cols: [
        [{ h: "Propuesta 1", items: [["No dejar tarea los fines de semana"]] },
         { h: "Propuesta 2", items: [["Permitir herramientas de IA en clase"]] }],
        [{ h: "Frases de reunión", items: [["Desde mi experiencia, …"], ["Yo propondría que…"], ["Me preocupa que + subj."], ["Coincido con… en que…"]] }]
      ],
      note: "Mtra. Cecilia will play devil's advocate on both."
    },
    words: [
      ["la junta", "meeting (Mexico)"], ["la propuesta", "proposal"], ["la tarea", "homework"], ["la herramienta", "tool"],
      ["la inteligencia artificial (IA)", "artificial intelligence (AI)"], ["copiar", "to copy, cheat"], ["el aprendizaje", "learning"], ["la carga de trabajo", "workload"],
      ["coincidir", "to agree (with someone)"], ["proponer", "to propose"], ["preocupar", "to worry"], ["desde mi experiencia", "from my experience"]
    ],
    phrases: [
      ["Desde mi experiencia, los estudiantes necesitan descansar.", "From my experience, students need to rest."],
      ["Coincido con usted en que la tarea es importante, pero…", "I agree with you that homework is important, but…"],
      ["Me preocupa que los estudiantes copien.", "I'm worried students will copy."],
      ["Yo propondría usarla solo para practicar.", "I'd propose using it only for practice."],
      ["No creo que prohibirla sea la solución.", "I don't think banning it is the solution."]
    ],
    prompt: {
      role: `You are Maestra Cecilia, 55, the academic coordinator at a language school in Guadalajara. You lead a teachers' meeting about two proposals. Use "usted" with me (professional meeting).`,
      infoTitle: "THE PROPOSALS",
      info: `Proposal 1: no homework on weekends. Proposal 2: allow AI tools (like chatbots) in class. You personally are against both, but you want to hear arguments. Your concerns: without weekend homework, students forget; with AI, students will copy and stop thinking. You can be convinced by specific examples and practical compromises.`,
      lead: `Present each proposal and ask my opinion. Challenge my argument once per proposal ("¿Pero no le preocupa que…?"). Ask for examples from my classes. At the end, ask me for one concrete proposal for each.`,
      recast: `I say "Me preocupa que los estudiantes copian" and you say "Le preocupa que copien, entiendo. ¿Y qué propone?"`
    }
  }
];
