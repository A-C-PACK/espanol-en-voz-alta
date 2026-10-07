LESSONS["27"].vars = [
  {
    title: "Un libro para el club", partner: "Rosa", place: "Club de lectura · Coyoacán, CDMX",
    goal: "Your book club needs to choose next month's book. Present a book you've read: what it's about, the main characters, why it's interesting, and what you didn't like. Answer questions.",
    board: {
      title: "Club de lectura", sub: "Librería en Coyoacán · elegimos el libro del mes",
      cols: [
        [{ h: "Tu presentación", items: [["Título y autor"], ["Se trata de…"], ["El personaje principal es…"], ["Lo que más me gustó…"], ["Lo que no me gustó…"]] }],
        [{ h: "Las preguntas del club", items: [["¿Es difícil de leer?"], ["¿Cuántas páginas tiene?"], ["¿Hay versión en español?"], ["¿Por qué este y no otro?"]] }]
      ],
      note: "Rosa prefers a different book. Convince her."
    },
    words: [
      ["el autor, la autora", "author"], ["la novela", "novel"], ["el capítulo", "chapter"], ["la página", "page"],
      ["el narrador", "narrator"], ["la traducción", "translation"], ["engancharse", "to get hooked"], ["aburrirse", "to get bored"],
      ["fácil / difícil de leer", "easy / hard to read"], ["el desenlace", "outcome, ending"], ["reflexionar", "to reflect"], ["proponer", "to propose"]
    ],
    phrases: [
      ["Les propongo una novela de…", "I propose a novel by…"],
      ["Se trata de una mujer que…", "It's about a woman who…"],
      ["Me enganché desde el primer capítulo.", "I was hooked from the first chapter."],
      ["Lo único que no me gustó fue…", "The only thing I didn't like was…"],
      ["Creo que nos va a dar mucho de qué hablar.", "I think it'll give us a lot to talk about."]
    ],
    prompt: {
      role: `You are Rosa, 60, a retired literature teacher who runs a small book club in a bookstore in Coyoacán, Mexico City. Each member proposes a book. Use "tú" with me.`,
      infoTitle: "YOUR CLUB",
      info: `The club meets once a month; members prefer books under 300 pages, available in Spanish. You'd like to read "Como agua para chocolate" by Laura Esquivel next. You ask good questions about characters and themes. You're open to being convinced if I give good reasons.`,
      lead: `Ask me to present my book. Ask about the story, characters, themes, length, and difficulty. Mention your own preference and ask why mine is better. At the end, decide with me.`,
      recast: `I say "Se trata de una mujer quien vivió en…" and you say "Ah, se trata de una mujer que vive en… ¿Y qué le pasa?"`
    }
  },
  {
    title: "La serie del momento", partner: "Kevin", place: "Taxi compartido · Guadalajara",
    goal: "Sharing a ride with a talkative young driver, you end up talking about TV series. Tell him about a series you're watching: the premise, the characters, a season you liked, and why he should watch it.",
    board: {
      title: "Viaje al aeropuerto", sub: "Guadalajara, Jal. · 40 minutos",
      cols: [
        [{ h: "Tu serie", items: [["¿De qué se trata?"], ["¿Dónde y cuándo pasa?"], ["¿Quién es tu personaje favorito?"], ["¿Qué temporada es la mejor?"]] }],
        [{ h: "Kevin pregunta", items: [["¿Es de miedo?"], ["¿Cuántas temporadas tiene?"], ["¿En qué plataforma está?"]] }]
      ],
      note: "Kevin has seen the first episode and didn't like it."
    },
    words: [
      ["la serie", "TV series"], ["la temporada", "season"], ["el capítulo, el episodio", "episode"], ["la plataforma", "streaming platform"],
      ["el protagonista", "lead character"], ["el villano", "villain"], ["de miedo", "scary"], ["de suspenso", "thriller"],
      ["engancharse", "to get hooked"], ["dar una oportunidad", "to give a chance"], ["mejorar", "to get better"], ["ver de un jalón", "to binge-watch (Mexico)"]
    ],
    phrases: [
      ["Ahorita estoy viendo una serie que se llama…", "Right now I'm watching a series called…"],
      ["El primer capítulo es lento, pero después mejora muchísimo.", "The first episode is slow, but then it gets much better."],
      ["Mi personaje favorito es… porque…", "My favorite character is… because…"],
      ["La segunda temporada me la vi de un jalón.", "I binged the second season."],
      ["Dale otra oportunidad, en serio.", "Give it another chance, seriously."]
    ],
    prompt: {
      role: `You are Kevin, 24, a talkative ride-share driver in Guadalajara. I'm your passenger on the way to the airport. You love series and movies. Use "tú" with me.`,
      infoTitle: "YOU (KEVIN)",
      info: `Whatever series I mention, you've seen only the first episode and found it boring. You love Mexican series like "Club de Cuervos" and "La Casa de las Flores". You ask lots of questions and you're easy to convince if I'm enthusiastic and specific.`,
      lead: `Start chatting about traffic, then ask what series I'm watching. Ask about the story, characters, and seasons. Say you didn't like the first episode. Let me convince you. Be casual and funny.`,
      recast: `I say "El primer capítulo es lento, pero después mejoró mucho" and you say "¿Después mejora mucho? A ver, convénceme."`
    }
  },
  {
    title: "Una leyenda mexicana", partner: "Doña Chuy", place: "Patio de la casa · Guanajuato", reg: "usted",
    goal: "On Día de Muertos, an older neighbor tells legends. When it's your turn, retell a legend you learned: La Llorona or El Callejón del Beso. Then explain what you thought of it and compare it with a story from your country.",
    board: {
      title: "Noche de leyendas", sub: "Guanajuato, Gto. · 1 de noviembre",
      cols: [
        [{ h: "El Callejón del Beso", items: [["Una joven rica, Carmen, y un joven pobre, Luis"], ["El papá de Carmen prohíbe su amor"], ["Sus balcones están casi juntos"], ["Se besan de balcón a balcón"], ["El papá los descubre…"]] }],
        [{ h: "La Llorona", items: [["Una mujer pierde a sus hijos en el río"], ["Su espíritu llora de noche"], ["«¡Ay, mis hijos!»"]] },
         { h: "Tu reacción", items: [["Me dio miedo / tristeza"], ["En mi país hay una historia parecida…"]] }]
      ],
      note: "Doña Chuy knows a different ending. Compare versions."
    },
    words: [
      ["la leyenda", "legend"], ["el callejón", "alley"], ["el balcón", "balcony"], ["el beso", "kiss"],
      ["el espíritu, el fantasma", "spirit, ghost"], ["llorar", "to cry"], ["descubrir", "to discover"], ["prohibir", "to forbid"],
      ["la venganza", "revenge"], ["dar miedo", "to be scary"], ["parecido, parecida", "similar"], ["según la leyenda", "according to the legend"]
    ],
    phrases: [
      ["Según la leyenda, había una joven que se llamaba Carmen.", "According to the legend, there was a young woman named Carmen."],
      ["Su papá no quería que se vieran.", "Her father didn't want them to see each other."],
      ["Un día, el papá los descubre y…", "One day, her father discovers them and…"],
      ["Me dio mucha tristeza el final.", "The ending made me very sad."],
      ["En mi país hay una historia parecida.", "In my country there's a similar story."]
    ],
    prompt: {
      role: `You are Doña Chuy, 80, an older neighbor in Guanajuato. It's the night of November 1st (Día de Muertos) and the neighbors are sitting in the patio telling legends. You love telling stories. You use "tú" with me; I use "usted" with you.`,
      infoTitle: "WHAT YOU KNOW",
      info: `El Callejón del Beso: Carmen (rich) and Luis (poor miner) were in love; her father forbade it. Luis rented the house across the narrow alley; their balconies almost touch. They kissed from balcony to balcony. The father found them and killed Carmen with a dagger; Luis kissed her hand as she died. Couples who kiss on the third step of the alley get 7 years of happiness.
La Llorona: a woman drowned her children in a river and now cries at night "¡Ay, mis hijos!". In your version, she did it out of jealousy of her husband.`,
      lead: `Tell a very short story first (2 sentences) to start. Then ask me to tell one. Interrupt with "¿Y luego?", "¡Ay, no!" Correct one detail with your version ("No, mijo/mija, en la versión que yo conozco…"). Ask what I felt and if there are legends like that in my country.`,
      recast: `I say "El papá descubrió y los mató" and you say "Sí, el papá los descubre y la mata a ella… ¡Qué tristeza!"`
    }
  }
];
