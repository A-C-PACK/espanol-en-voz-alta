window.LESSONS = window.LESSONS || {};
LESSONS["01"] = {
  id: "01", level: "A1", title: "Mucho gusto", minutes: 25,
  cando: "I can introduce myself: my name, where I'm from, where I live, and my job.",
  scale: "Overall spoken interaction",
  reg: "tú", partner: "Mariana", place: "Intercambio · Coyoacán, CDMX",
  scene: "I met Mariana, an architect, at a language exchange in Mexico City and introduced myself",
  setup: "You're at a language exchange at Café La Selva in Coyoacán, Mexico City. You meet Mariana, an architect, and introduce yourselves.",
  goal: "You're at a language exchange (intercambio) in a café in Coyoacán. ChatGPT plays Mariana. Introduce yourself, and find out three things about her.",
  boardStep: ["Prepara tu ficha", "Fill in the blanks in your head before you start. Mariana will ask all four."],
  board: {
    title: "Intercambio", sub: "Café La Selva · Coyoacán, CDMX · jueves 7 pm",
    cols: [
      [{ h: "Tu ficha", items: [["Me llamo…"], ["Soy de…"], ["Vivo en…"], ["Trabajo en… / Soy…"], ["Hablo inglés y un poco de español."]] }],
      [{ h: "Pregúntale", items: [["¿Cómo te llamas?"], ["¿De dónde eres?"], ["¿Dónde vives?"], ["¿A qué te dedicas?"]] }]
    ],
    note: "Mariana will also ask you something you didn't prepare."
  },
  dialogue: [
    ["m", "¡Hola! Me llamo Mariana. ¿Cómo te llamas?", "Hi! My name is Mariana. What's your name?"],
    ["c", "Hola, me llamo Alex. Mucho gusto.", "Hi, my name is Alex. Nice to meet you."],
    ["m", "Mucho gusto, Alex. ¿De dónde eres?", "Nice to meet you, Alex. Where are you from?"],
    ["c", "Soy de Estados Unidos. ¿Y tú?", "I'm from the United States. And you?"],
    ["m", "Soy de Puebla, pero vivo aquí en Coyoacán.", "I'm from Puebla, but I live here in Coyoacán."],
    ["c", "¡Qué bien! Yo vivo en Chicago.", "Great! I live in Chicago."],
    ["m", "¿Y a qué te dedicas?", "And what do you do?"],
    ["c", "Trabajo en una universidad. Enseño inglés.", "I work at a university. I teach English."],
    ["m", "¡Qué interesante! Yo soy arquitecta.", "How interesting! I'm an architect."],
    ["c", "¿Hablas inglés?", "Do you speak English?"],
    ["m", "Un poco. ¿Y tú hablas español?", "A little. And do you speak Spanish?"],
    ["c", "Sí, un poco. Estoy aprendiendo.", "Yes, a little. I'm learning."],
    ["m", "¡Hablas muy bien! Bueno, nos vemos el jueves.", "You speak very well! Well, see you Thursday."],
    ["c", "Igualmente. ¡Hasta luego!", "Same to you. See you later!"]
  ],
  core: [
    ["Hola, me llamo Alex. Mucho gusto.", "Hi, my name is Alex. Nice to meet you. (use your name)"],
    ["¿Cómo te llamas?", "What's your name?"],
    ["Soy de Estados Unidos.", "I'm from the United States. (use your country)"],
    ["¿De dónde eres?", "Where are you from?"],
    ["Vivo en Chicago.", "I live in Chicago. (use your city)"],
    ["Trabajo en una universidad.", "I work at a university."],
    ["¿A qué te dedicas?", "What do you do for work?"]
  ],
  hear: [
    ["Mucho gusto.", "Nice to meet you."],
    ["Igualmente.", "Likewise."],
    ["¿Y tú?", "And you?"],
    ["¿Dónde vives?", "Where do you live?"],
    ["¿Hablas inglés?", "Do you speak English?"],
    ["¡Qué interesante!", "How interesting!"]
  ],
  extra: [
    ["Encantado. / Encantada.", "Pleased to meet you. (m / f)"],
    ["Soy profesor. / Soy profesora.", "I'm a teacher. (m / f)"],
    ["Enseño inglés.", "I teach English."],
    ["Estoy aprendiendo español.", "I'm learning Spanish."],
    ["Hablo un poco de español.", "I speak a little Spanish."],
    ["¿Cómo se escribe?", "How do you spell it?"],
    ["¿Por qué estudias español?", "(you'll hear) Why are you studying Spanish?"],
    ["Porque viajo a México.", "Because I travel to Mexico."],
    ["Hasta luego.", "See you later."],
    ["Nos vemos.", "See you."]
  ],
  vocab: [
    ["Lugares", [["Estados Unidos", "the United States"], ["Canadá", "Canada"], ["México", "Mexico"], ["la ciudad", "city"], ["el país", "country"], ["el barrio", "neighborhood"]]],
    ["Trabajos", [["el profesor, la profesora", "teacher"], ["el ingeniero, la ingeniera", "engineer"], ["el arquitecto, la arquitecta", "architect"], ["el médico, la médica", "doctor"], ["el estudiante, la estudiante", "student"], ["jubilado, jubilada", "retired"]]],
    ["Verbos", [["me llamo, te llamas", "my name is, your name is"], ["soy, eres", "I am, you are (origin, job)"], ["vivo, vives", "I live, you live"], ["trabajo, trabajas", "I work, you work"], ["hablo, hablas", "I speak, you speak"]]]
  ],
  qd: [
    ["Say hello, your name, and nice to meet you.", "Hola, me llamo Alex. Mucho gusto."],
    ["Ask her name.", "¿Cómo te llamas?"],
    ["Say what country you're from.", "Soy de Estados Unidos."],
    ["Ask where she's from.", "¿De dónde eres?"],
    ["Say what city you live in.", "Vivo en Chicago."],
    ["Ask what she does for work.", "¿A qué te dedicas?"],
    ["Say where you work.", "Trabajo en una universidad."]
  ],
  patterns: [
    ["Soy de [país / ciudad]", "Soy de Canadá. ¿De dónde eres?"],
    ["Vivo en [lugar]", "Vivo en Chicago. Use <i>en</i>, not <i>a</i>."],
    ["Soy [profesión] · Trabajo en [lugar]", "No <i>un / una</i> before a job: <i>Soy profesor</i>, not <i>Soy un profesor</i>."],
    ["… ¿Y tú?", "Bounce any question back: <i>Soy de Canadá. ¿Y tú?</i>"]
  ],
  notes: [
    ["Tú or usted?", "At a language exchange, people your age use <i>tú</i>. With older strangers or in formal settings, start with <i>usted</i>."],
    ["Greetings", "Mexicans often greet with a handshake. Friends, and women greeting anyone they know, add one light kiss on the right cheek."],
    ["¿A qué te dedicas?", "The most natural way to ask about a job. <i>¿Qué haces?</i> can also mean \"what are you doing right now?\""],
    ["Intercambios", "Language exchanges are popular in Mexico City: half the time in Spanish, half in English."]
  ],
  prompt: {
    role: `You are Mariana, 28, an architect from Puebla who lives in Coyoacán, Mexico City. We just met at a Thursday-night language exchange (intercambio) at Café La Selva. Use "tú" with me.`,
    infoTitle: "ABOUT YOU (MARIANA)",
    info: `From Puebla. Lives in Coyoacán with a roommate. Works at a small architecture firm. Speaks a little English. Likes coffee and walking in the Viveros park.`,
    twist: `After I say my name, say it back slightly wrong once, so I have to correct you. Later, ask me one question I probably didn't prepare: "¿Por qué estudias español?"`,
    lead: `Lead like a friendly new acquaintance: say hi, then ask my name, where I'm from, where I live, and what I do, one at a time. Answer my questions about you. After each of my answers, react briefly ("¡Qué bien!") and ask the next question.`,
    recast: `I say "Yo soy vivo en Chicago" and you say "Ah, vives en Chicago. ¡Qué bien!"`
  },
  twists: [
    ["Otra persona", "Harder", "Meet Don Ernesto, an older man. Use usted this time.", `Otra vez, por favor. New person: you are Don Ernesto, 65, a retired teacher from Guadalajara. We both use "usted". Same rules.`],
    ["Más preguntas", "Harder", "Ask at least three extra questions beyond the basics.", `Otra vez, por favor. This time give a little more detail about yourself, and I'll try to ask you at least three extra questions. Same rules.`]
  ],
  sa: [
    "I can say my name and ask someone's name",
    "I can say where I'm from and ask where someone is from",
    "I can say where I live",
    "I can say what I do and ask about someone's job",
    "I can bounce a question back with \"¿Y tú?\""
  ]
};
