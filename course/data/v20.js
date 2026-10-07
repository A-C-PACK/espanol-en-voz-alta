LESSONS["20"].vars = [
  {
    title: "¿Playa o montaña?", partner: "Alejandra", place: "Oficina · Guadalajara",
    goal: "Your office is planning a team trip. Compare a beach option and a mountain option with your coworker Alejandra, and agree on which one to propose to the boss.",
    board: {
      title: "Viaje de la oficina", sub: "Guadalajara, Jal. · 2 días, 15 personas",
      cols: [
        [{ h: "Puerto Vallarta", items: [["Distancia", "5 horas"], ["Precio por persona", "$3,200"], ["Hotel todo incluido"], ["Calor: 33°C"], ["Actividades: playa, snorkel"]] }],
        [{ h: "Tapalpa", items: [["Distancia", "2 horas"], ["Precio por persona", "$1,900"], ["Cabañas"], ["Frío en la noche: 6°C"], ["Actividades: caminatas, fogata"]] }]
      ],
      note: "Not everyone likes the same things. Think about the whole team."
    },
    words: [
      ["la playa", "beach"], ["la montaña", "mountains"], ["la cabaña", "cabin"], ["todo incluido", "all-inclusive"],
      ["la caminata", "hike"], ["la fogata", "campfire"], ["el presupuesto", "budget"], ["el equipo", "team"],
      ["proponer", "to propose"], ["convencer", "to convince"], ["la mayoría", "the majority"], ["valer la pena", "to be worth it"]
    ],
    phrases: [
      ["Vallarta es más divertido, pero también es más caro.", "Vallarta is more fun, but it's also more expensive."],
      ["Tapalpa está mucho más cerca.", "Tapalpa is much closer."],
      ["El clima en Tapalpa es mejor para caminar.", "The weather in Tapalpa is better for hiking."],
      ["Para el equipo, lo más importante es convivir.", "For the team, the most important thing is spending time together."],
      ["Yo propondría Tapalpa porque…", "I'd propose Tapalpa because…"]
    ],
    prompt: {
      role: `You are Alejandra, 29, my coworker at an office in Guadalajara. The boss asked us to choose between two options for a two-day team trip for 15 people. Use "tú" with me.`,
      infoTitle: "THE OPTIONS",
      info: `Puerto Vallarta: 5 hours by bus, $3,200 per person, all-inclusive hotel, 33°C, beach and snorkel. Tapalpa: 2 hours, $1,900 per person, cabins with fireplaces, 6°C at night, hiking, waterfalls, campfire. The company budget is $40,000 total. Two coworkers don't swim, and one has a bad knee. You love the beach and want Vallarta.`,
      lead: `Ask what I think. Compare the two options with me point by point. Disagree with me at least once. Bring up the budget and the coworkers' needs. At the end, we must agree on one option and two reasons for the boss.`,
      recast: `I say "Tapalpa es más barata que Vallarta por mucho" and you say "Sí, Tapalpa es mucho más barata que Vallarta."`
    }
  },
  {
    title: "Dos escuelas de español", partner: "Sra. Villanueva", place: "Agencia de estudios · Oaxaca", reg: "usted",
    goal: "You want to study Spanish for a month. An adviser shows you two schools. Ask questions, compare them, and choose one.",
    board: {
      title: "Escuelas de español", sub: "Oaxaca, Oax. · cursos de 4 semanas",
      cols: [
        [{ h: "Instituto Monte Albán", items: [["Clases", "grupos de 8"], ["Horas", "20 por semana"], ["Precio", "$9,500"], ["Actividades: cocina, baile"], ["En el centro"]] }],
        [{ h: "Escuela La Ceiba", items: [["Clases", "individuales"], ["Horas", "15 por semana"], ["Precio", "$12,800"], ["Casa con familia incluida"], ["A 20 minutos del centro"]] }]
      ],
      note: "You learn better when you speak a lot. Remember that."
    },
    words: [
      ["el curso", "course"], ["el grupo", "group"], ["la clase individual", "one-on-one class"], ["la familia anfitriona", "host family"],
      ["el alojamiento", "accommodation"], ["las actividades", "activities"], ["el nivel", "level"], ["el examen de colocación", "placement test"],
      ["practicar", "to practice"], ["convivir", "to spend time with"], ["la ubicación", "location"], ["incluir", "to include"]
    ],
    phrases: [
      ["¿Cuál es la diferencia entre las dos escuelas?", "What's the difference between the two schools?"],
      ["Las clases individuales son mejores para hablar.", "One-on-one classes are better for speaking."],
      ["El instituto es más barato, pero no incluye alojamiento.", "The institute is cheaper, but it doesn't include accommodation."],
      ["¿Cuál me recomienda para mi nivel?", "Which one do you recommend for my level?"],
      ["Me quedo con La Ceiba porque…", "I'll go with La Ceiba because…"]
    ],
    prompt: {
      role: `You are Señora Villanueva, 50, an adviser at a study agency in Oaxaca. I want to take a Spanish course for 4 weeks and you're showing me two schools. Use "usted" with me.`,
      infoTitle: "THE TWO SCHOOLS",
      info: `Instituto Monte Albán: groups of 8, 20 hours/week, $9,500 for 4 weeks, cooking and dance classes included, downtown. No accommodation (rooms nearby cost about $6,000/month).
Escuela La Ceiba: one-on-one classes, 15 hours/week, $12,800 for 4 weeks INCLUDING a room with a host family and breakfast, 20 minutes from downtown by bus.
You think La Ceiba is better value, but you're neutral if I ask directly.`,
      lead: `Ask about my level, my goals, and my budget. Answer my questions and help me compare. Ask "¿Qué es más importante para usted?" Let me decide.`,
      recast: `I say "La Ceiba es más cara de Monte Albán" and you say "Sí, es más cara que Monte Albán, pero incluye la casa."`
    }
  },
  {
    title: "Mi ciudad y la tuya", partner: "Óscar", place: "Videollamada · Monterrey",
    goal: "Your Mexican friend Óscar is thinking of moving to your city for work. Compare your city with Monterrey: weather, cost, transportation, people, food. Then tell him if you think he should move.",
    board: {
      title: "¿Me mudo o no?", sub: "Videollamada con Óscar · Monterrey, N.L.",
      cols: [
        [{ h: "Monterrey", items: [["Verano: 40°C"], ["Mucho tráfico, todos tienen carro"], ["Carne asada todos los domingos"], ["Cerca de su familia"]] }],
        [{ h: "Tu ciudad", items: [["El clima: …"], ["El transporte: …"], ["La comida: …"], ["La gente: …"], ["El costo de vida: …"]] }]
      ],
      note: "Óscar will ask about the thing you like least about your city."
    },
    words: [
      ["mudarse", "to move (house)"], ["el costo de vida", "cost of living"], ["el clima", "weather, climate"], ["el transporte público", "public transportation"],
      ["la gente", "people"], ["amable", "friendly"], ["frío / caluroso", "cold / hot"], ["húmedo / seco", "humid / dry"],
      ["extrañar", "to miss"], ["acostumbrarse", "to get used to"], ["lo que menos me gusta", "what I like least"], ["en cambio", "on the other hand"]
    ],
    phrases: [
      ["Mi ciudad es menos calurosa que Monterrey.", "My city is less hot than Monterrey."],
      ["El transporte público es mejor que allá.", "Public transportation is better than there."],
      ["La comida no es tan buena como en México.", "The food isn't as good as in Mexico."],
      ["En cambio, la vida es más cara.", "On the other hand, life is more expensive."],
      ["Yo que tú, me mudaría.", "If I were you, I'd move."]
    ],
    prompt: {
      role: `You are Óscar, 34, my friend from Monterrey. Your company offered you a job in my city for two years. You're not sure. We're on a video call. Use "tú" with me.`,
      infoTitle: "YOU (ÓSCAR)",
      info: `You love Monterrey: carne asada on Sundays, your family nearby, the mountains. You hate the summer heat (40°C) and the traffic. The new job pays 30% more. You worry about the weather, loneliness, the food, and the cost of living.`,
      lead: `Ask me to compare my city with Monterrey, one topic at a time. Compare with what you know. Ask "¿Y qué es lo que menos te gusta de tu ciudad?" At the end, ask "¿Tú qué harías?"`,
      recast: `I say "Mi ciudad es más fría de Monterrey" and you say "¿Es más fría que Monterrey? ¡Qué bueno!"`
    }
  }
];
