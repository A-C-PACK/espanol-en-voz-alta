LESSONS["02"].vars = [
  {
    title: "La fiesta de cumpleaños", partner: "Andrea", place: "Casa de Andrea · Querétaro",
    goal: "Your new neighbor invited you to her son's birthday party. Find out who everyone in her family is, and tell her about yours.",
    board: {
      title: "¡Feliz cumpleaños, Emiliano!", sub: "Querétaro, Qro. · en el jardín · sábado",
      cols: [
        [{ h: "Tu familia", items: [["¿Tienes hermanos? ¿Mayores o menores?"], ["¿Tienes sobrinos?"], ["¿Dónde viven tus papás?"], ["¿Eres hijo único / hija única?"]] }],
        [{ h: "Pregúntale a Andrea", items: [["¿Cuántos años cumple?"], ["¿Quién es él / ella?"], ["¿Cuántos hijos tienes?"], ["¿Tus papás viven aquí?"]] }]
      ],
      note: "Andrea has family far away. Find out who and where."
    },
    words: [
      ["el cumpleaños", "birthday"], ["cumplir … años", "to turn … (age)"], ["el esposo, la esposa", "husband, wife"],
      ["el vecino, la vecina", "neighbor"], ["los papás", "parents"], ["mayor", "older"], ["menor", "younger"],
      ["el sobrino, la sobrina", "nephew, niece"], ["los abuelos", "grandparents"], ["hijo único, hija única", "only child"]
    ],
    phrases: [
      ["¿Cuántos años cumple?", "How old is he turning?"],
      ["Tengo un hermano mayor.", "I have an older brother."],
      ["Soy hijo único. / Soy hija única.", "I'm an only child."],
      ["Mis papás viven en…", "My parents live in…"],
      ["Tengo dos sobrinos.", "I have two nephews (or a nephew and niece)."]
    ],
    prompt: {
      role: `You are Andrea, 34, my new neighbor in Querétaro. We're at your son Emiliano's birthday party in your garden. Use "tú" with me.`,
      infoTitle: "YOUR FAMILY (I DON'T KNOW THIS YET)",
      info: `Husband: Luis, 36, a doctor. Children: Emiliano, turning 8 today, and Renata, 5. Your parents, Jorge and Elena, live in Querétaro, 10 minutes away, and they're at the party. Your younger brother Pablo, 30, lives in Canada and isn't at the party. Your older sister Mónica lives in Mexico City and has a baby girl.`,
      lead: `Point out people at the party one at a time ("Mira, él es…") and let me ask questions. Answer briefly, then ask about my family. About half your turns should be questions about my family.`,
      recast: `I say "Mi hermano es mayor que yo, tiene treinta y cinco" and you say "Ah, tu hermano mayor tiene treinta y cinco años."`
    }
  },
  {
    title: "En una boda", partner: "Don Rafael", place: "Una boda · Puebla", reg: "usted",
    goal: "At a wedding, you sit next to the bride's grandfather. Find out about his big family, and tell him about yours.",
    board: {
      title: "Ximena & Iván", sub: "Puebla, Pue. · la boda · mesa 7",
      cols: [
        [{ h: "Tu familia", items: [["¿Tiene usted abuelos? ¿Tíos? ¿Primos?"], ["¿Su familia es grande o pequeña?"], ["¿Está casado / casada?"]] }],
        [{ h: "Pregúntele a Don Rafael", items: [["¿Usted es el abuelo de la novia?"], ["¿Cuántos hijos tiene?"], ["¿Cuántos nietos tiene?"], ["¿Quién es…?"]] }]
      ],
      note: "Don Rafael has a very big family. Use usted with him."
    },
    words: [
      ["la boda", "wedding"], ["la novia, el novio", "bride, groom"], ["casarse", "to get married"],
      ["el abuelo, la abuela", "grandfather, grandmother"], ["el nieto, la nieta", "grandson, granddaughter"],
      ["el tío, la tía", "uncle, aunt"], ["el primo, la prima", "cousin"], ["grande", "big"], ["pequeña", "small"], ["casado, casada", "married"]
    ],
    phrases: [
      ["¿Usted es el abuelo de la novia?", "Are you the bride's grandfather?"],
      ["¿Cuántos nietos tiene?", "How many grandchildren do you have?"],
      ["Mi familia es pequeña.", "My family is small."],
      ["Tengo muchos primos.", "I have a lot of cousins."],
      ["¡Qué familia tan grande!", "What a big family!"]
    ],
    prompt: {
      role: `You are Don Rafael, 72, the grandfather of the bride at a wedding in Puebla. I'm a guest sitting next to you at table 7. Use "usted" with me.`,
      infoTitle: "YOUR FAMILY (I DON'T KNOW THIS YET)",
      info: `Wife: Doña Carmen, 69, dancing right now. Four children: Rosa, Felipe, Ana, and Miguel. Eleven grandchildren. The bride, Ximena, 27, is Rosa's daughter; she's a lawyer and is marrying Iván, an architect from Veracruz. Your grandson Toño, 19, is the DJ tonight. Your brother Luis is 80 and lives in Los Angeles.`,
      lead: `Start by asking how I know the bride or groom. Point out family members one at a time and let me ask questions. Answer briefly, then ask about my family. About half your turns should be questions about my family.`,
      recast: `I say "Usted tiene muchos nietas" and you say "Sí, tengo muchos nietos. ¡Once!"`
    }
  },
  {
    title: "Tu árbol genealógico", partner: "Marisol", place: "Clase de español en línea",
    goal: "Your online Spanish teacher asks you to describe your family tree. Describe your family in detail, then ask about hers.",
    board: {
      title: "Mi árbol genealógico", sub: "Clase de español · videollamada",
      cols: [
        [{ h: "Describe a tu familia", items: [["Somos … en mi familia."], ["Mi papá se llama… Tiene… años."], ["Mi hermana está casada / es soltera."], ["Vivo con… / Vivo solo, sola."]] }],
        [{ h: "Pregúntale a Marisol", items: [["¿Tienes hijos?"], ["¿Con quién vives?"], ["¿Tienes hermanos?"], ["¿Dónde vive tu familia?"]] }]
      ],
      note: "Marisol will ask for details: names, ages, jobs, and where people live."
    },
    words: [
      ["el árbol genealógico", "family tree"], ["la pareja", "partner"], ["soltero, soltera", "single"],
      ["casado, casada", "married"], ["divorciado, divorciada", "divorced"], ["los gemelos", "twins"],
      ["vivir con", "to live with"], ["el mayor, la mayor", "the oldest"], ["el menor, la menor", "the youngest"], ["el trabajo", "job"]
    ],
    phrases: [
      ["Somos cuatro en mi familia.", "There are four of us in my family."],
      ["Vivo con mi pareja.", "I live with my partner."],
      ["Mi hermana es soltera.", "My sister is single."],
      ["Yo soy el mayor. / Yo soy la mayor.", "I'm the oldest."],
      ["¿Con quién vives?", "Who do you live with?"]
    ],
    prompt: {
      role: `You are Marisol, 40, my online Spanish teacher from Mexico City. Today's class activity: I describe my family tree. Use "tú" with me.`,
      infoTitle: "YOUR FAMILY (MARISOL)",
      info: `You live with your mother, Rosario, 68, and your son Leo, 12. You're divorced. Your sister Claudia, 37, lives in Toluca and has twin girls, Ana and Paula, 7. Your father died a few years ago. You have a cat named Mole.`,
      lead: `Ask me to describe my family. Ask follow-up questions about each person: name, age, job, where they live. Encourage longer answers ("¿Y qué más?"). Near the end, invite me to ask about your family.`,
      recast: `I say "Mi hermana es treinta y dos y es casada" and you say "Ah, tu hermana tiene treinta y dos años y está casada."`
    }
  }
];
