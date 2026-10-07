LESSONS["32"].vars = [
  {
    title: "Visita a una escuela", partner: "Directora Elvia", place: "Secundaria pública · Oaxaca", reg: "usted",
    goal: "You're visiting a public secondary school in Oaxaca. The principal asks about your teaching and shows you hers. Describe your work, compare the two school systems, and offer one idea you could share with her teachers.",
    board: {
      title: "Escuela Secundaria Técnica", sub: "Oaxaca, Oax. · visita de intercambio",
      cols: [
        [{ h: "La escuela", items: [["900 alumnos, dos turnos"], ["Grupos de 45"], ["Inglés: 3 horas por semana"], ["Pocos recursos, mucha creatividad"]] }],
        [{ h: "Hablen de", items: [["Horarios y carga de trabajo"], ["Disciplina y motivación"], ["Evaluación"], ["La relación con las familias"]] },
         { h: "Ella le va a pedir", items: [["Una idea para sus maestros"]] }]
      ],
      note: "Be respectful when you compare. Ask before you advise."
    },
    words: [
      ["la secundaria", "middle school (12–15)"], ["el director, la directora", "principal"], ["el turno matutino / vespertino", "morning / afternoon shift"], ["los recursos", "resources"],
      ["la evaluación", "assessment"], ["la disciplina", "discipline"], ["los padres de familia", "parents"], ["la capacitación", "training"],
      ["compartir", "to share"], ["el sistema educativo", "education system"], ["en cambio", "on the other hand"], ["con todo respeto", "with all respect"]
    ],
    phrases: [
      ["En mi contexto, los grupos son más pequeños, pero…", "In my context, groups are smaller, but…"],
      ["Me impresiona lo que logran con pocos recursos.", "I'm impressed by what you achieve with few resources."],
      ["Allá evaluamos más con proyectos que con exámenes.", "Over there we assess more with projects than exams."],
      ["Si le parece, podría compartir una actividad que me funciona.", "If you like, I could share an activity that works for me."],
      ["Yo también tengo mucho que aprender de ustedes.", "I also have a lot to learn from you."]
    ],
    prompt: {
      role: `You are Directora Elvia Cruz, 55, principal of a public technical secondary school in Oaxaca. I'm a visiting foreign teacher. Use "usted" with me. You're proud of your school and curious about other systems.`,
      infoTitle: "YOUR SCHOOL",
      info: `900 students in two shifts (7 am–1 pm and 2–8 pm). Groups of 45. English 3 hours a week, often taught by teachers who are still learning English themselves. Few resources: chalkboards, one projector for the whole school. Teachers are creative and committed. Big challenges: absenteeism during planting season, motivation, large groups. Parents are very involved in festivals but less in academics. You'd love a practical idea for large classes that needs no technology.`,
      lead: `Ask about my work and context. Describe your school and compare. Ask my opinion of what I've seen. At the end, ask me for one practical idea for your teachers and react to it honestly.`,
      recast: `I say "En mi país los grupos son más pequeños que aquí por mucho" and you say "Sí, allá los grupos son mucho más pequeños que aquí, me imagino."`
    }
  },
  {
    title: "Un día malo", partner: "Juan Pablo", place: "Cantina · Ciudad de México", reg: "tú",
    goal: "After a terrible day at work, you meet a Mexican friend for a drink. Tell him what went wrong today, how you felt, what you did, and what you'd like to change about your job.",
    board: {
      title: "Después del trabajo", sub: "Cantina en el Centro, CDMX · 7 pm",
      cols: [
        [{ h: "Hoy pasó…", items: [["El proyector no funcionó"], ["Un alumno se quejó de su calificación"], ["Una junta de 2 horas"], ["Te quedaste sin comer"]] }],
        [{ h: "Para desahogarte", items: [["¡Qué día!"], ["Estoy harto/a de…"], ["Lo que más me molestó fue…"], ["Ojalá…"], ["Bueno, al menos…"]] }]
      ],
      note: "Juan Pablo also had a bad day. Listen and compare."
    },
    words: [
      ["desahogarse", "to vent"], ["estar harto, harta", "to be fed up"], ["molestar", "to bother"], ["quejarse", "to complain"],
      ["la calificación", "grade"], ["injusto", "unfair"], ["quedarse sin", "to end up without"], ["aguantar", "to put up with"],
      ["el colmo", "the last straw"], ["al menos", "at least"], ["salud", "cheers"], ["ni modo", "oh well"]
    ],
    phrases: [
      ["¡Qué día! No te imaginas.", "What a day! You can't imagine."],
      ["Primero, el proyector no funcionó, y tenía toda la clase en diapositivas.", "First, the projector didn't work, and I had the whole class on slides."],
      ["Lo que más me molestó fue que el alumno me gritó.", "What bothered me most was that the student yelled at me."],
      ["Y el colmo: ¡me quedé sin comer!", "And the last straw: I didn't get to eat!"],
      ["Bueno, al menos mañana es viernes.", "Well, at least tomorrow is Friday."]
    ],
    prompt: {
      role: `You are Juan Pablo, 40, my Mexican friend, an accountant. We meet at a traditional cantina in downtown Mexico City after work. Use "tú" with me. You're funny and supportive.`,
      infoTitle: "YOU (JUAN PABLO)",
      info: `Your day was also bad: your boss changed a report deadline to today at 4 pm, and the system crashed at 3:55. You order botanas (free snacks come with drinks at cantinas). You think teachers have it easier ("¡Pero tienes vacaciones largas!"), and you joke about it. You'll ask what I'd change about my job if I could.`,
      lead: `Ask how my day was. React with sympathy and humor ("¡No manches!", "¡Qué mala onda!"). Ask follow-ups about each problem. Tell your story briefly when I ask. Tease me once about teachers' vacations so I have to defend my job.`,
      recast: `I say "Lo que más me molestó fue cuando el alumno me gritaba" and you say "¿Te gritó? ¡No manches! ¿Y tú qué hiciste?"`
    }
  },
  {
    title: "Presentación en el congreso", partner: "Moderador Iván", place: "Congreso · Guadalajara", reg: "usted",
    goal: "You give a 5-minute talk at a teachers' conference about one activity that works in your classes. Describe it, explain why it works, mention a problem, and answer questions from the moderator and audience.",
    board: {
      title: "Congreso Nacional de Maestros de Idiomas", sub: "Guadalajara, Jal. · sesión de buenas prácticas",
      cols: [
        [{ h: "Tu presentación", items: [["1. El contexto: mis alumnos"], ["2. La actividad, paso a paso"], ["3. Por qué funciona"], ["4. Un problema y cómo lo resolví"], ["5. Consejo para otros maestros"]] }],
        [{ h: "Frases de presentación", items: [["Hoy les quiero compartir…"], ["Primero, … Después, …"], ["Lo interesante es que…"], ["Para terminar, …"], ["Muy buena pregunta."]] }]
      ],
      note: "Someone will ask how it works with very large groups."
    },
    words: [
      ["la ponencia", "talk, paper"], ["el ponente", "speaker"], ["el moderador", "moderator"], ["el público", "audience"],
      ["la buena práctica", "good practice"], ["la actividad", "activity"], ["adaptar", "to adapt"], ["el resultado", "result"],
      ["la pregunta del público", "audience question"], ["agradecer", "to thank"], ["las diapositivas", "slides"], ["para terminar", "to finish"]
    ],
    phrases: [
      ["Buenos días a todos. Hoy les quiero compartir una actividad que…", "Good morning, everyone. Today I want to share an activity that…"],
      ["Funciona porque los alumnos hablan sin miedo a equivocarse.", "It works because students talk without fear of making mistakes."],
      ["Al principio tuve un problema: …", "At first I had a problem: …"],
      ["Con grupos grandes, se puede adaptar así: …", "With big groups, it can be adapted like this: …"],
      ["Muy buena pregunta. En mi experiencia, …", "Very good question. In my experience, …"]
    ],
    prompt: {
      role: `You are Iván Herrera, 38, the moderator of a "good practices" session at a national language teachers' conference in Guadalajara. I'm a speaker giving a 5-minute talk about an activity that works in my classes. Use "usted" with me in public.`,
      infoTitle: "THE SESSION",
      info: `You introduce me, then let me talk. After my talk, ask two questions as the moderator and two more "from the audience" (say "Una pregunta del público: …"). Audience questions: "¿Cómo funciona con grupos de 40?" and "¿Cómo evalúa esa actividad?". At the end, thank me and summarize my main idea in one sentence.`,
      lead: `Introduce me briefly. Let me give the whole talk without interrupting (if I stop early, ask "¿Algo más que quiera agregar?"). Then ask the questions one at a time. React professionally.`,
      recast: `I say "Funciona porque los alumnos no tienen miedo de equivocar" and you say "Funciona porque no tienen miedo de equivocarse. Muy interesante."`
    }
  }
];
