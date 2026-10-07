window.LESSONS = window.LESSONS || {};
LESSONS["02"] = {
  id: "02", level: "A1", title: "Mi familia", minutes: 25,
  cando: "I can ask and answer simple questions about family.",
  scale: "Information exchange",
  reg: "tú", partner: "Doña Lupe", place: "Casa de Lupe · Oaxaca",
  scene: "my host mother Doña Lupe in Oaxaca showed me family photos and we talked about our families",
  goal: "You've just arrived at your homestay in Oaxaca. ChatGPT plays Doña Lupe, your host mother, showing family photos. Find out who is in her family, and tell her about yours.",
  boardStep: ["Prepara tu familia", "Lupe's family is a surprise. Prepare yours, and the questions you'll ask her."],
  board: {
    title: "Las fotos de Lupe", sub: "Oaxaca de Juárez · en la cocina",
    cols: [
      [{ h: "Tu familia", items: [["¿Estás casado / casada?"], ["¿Tienes hijos? ¿Cuántos?"], ["¿Tienes hermanos?"], ["¿Cómo se llaman?"], ["¿Cuántos años tienen?"]] }],
      [{ h: "Pregúntale a Lupe", items: [["¿Quién es él / ella?"], ["¿Tienes hijos?"], ["¿Cómo se llama?"], ["¿Cuántos años tiene?"], ["¿Dónde vive?"]] }]
    ],
    note: "One photo will be a surprise. Ask questions until you know who it is."
  },
  dialogue: [
    ["m", "Mira, esta es mi familia.", "Look, this is my family."],
    ["c", "¡Qué bonita! ¿Quién es él?", "How lovely! Who is he?"],
    ["m", "Es mi esposo, Javier.", "He's my husband, Javier."],
    ["c", "¿Tienes hijos?", "Do you have children?"],
    ["m", "Sí, tengo dos hijos: Daniel y Sofía.", "Yes, I have two children: Daniel and Sofía."],
    ["c", "¿Cuántos años tiene Sofía?", "How old is Sofía?"],
    ["m", "Tiene treinta años. Es enfermera. ¿Y tú? ¿Tienes hermanos?", "She's thirty. She's a nurse. And you? Do you have siblings?"],
    ["c", "Sí, tengo un hermano y dos hermanas.", "Yes, I have a brother and two sisters."],
    ["m", "¿Cómo se llama tu hermano?", "What's your brother's name?"],
    ["c", "Se llama Ben. Vive en Texas.", "His name is Ben. He lives in Texas."],
    ["m", "¿Y tienes hijos?", "And do you have children?"],
    ["c", "Sí, tengo una hija. Tiene doce años.", "Yes, I have a daughter. She's twelve."],
    ["m", "¡Qué bien! ¿Tienes una foto?", "How nice! Do you have a photo?"],
    ["c", "Sí, mira. Esta es mi hija.", "Yes, look. This is my daughter."],
    ["m", "¡Qué linda!", "How cute!"]
  ],
  core: [
    ["¿Tienes hijos?", "Do you have children?"],
    ["¿Tienes hermanos?", "Do you have brothers and sisters?"],
    ["Tengo dos hermanos.", "I have two siblings."],
    ["¿Quién es él? / ¿Quién es ella?", "Who is he? / Who is she?"],
    ["¿Cómo se llama?", "What's his / her name?"],
    ["¿Cuántos años tiene?", "How old is he / she?"],
    ["Esta es mi hija.", "This is my daughter."]
  ],
  hear: [
    ["Mira, esta es mi familia.", "Look, this is my family."],
    ["Es mi esposo.", "He's my husband."],
    ["¿Estás casado? / ¿Estás casada?", "Are you married? (m / f)"],
    ["¿Dónde vive?", "Where does he / she live?"],
    ["¿A qué se dedica?", "What does he / she do?"],
    ["¡Qué bonita familia!", "What a lovely family!"]
  ],
  extra: [
    ["Este es mi hermano.", "This is my brother."],
    ["Estoy casado. / Estoy casada.", "I'm married. (m / f)"],
    ["No tengo hijos.", "I don't have children."],
    ["Soy hijo único. / Soy hija única.", "I'm an only child. (m / f)"],
    ["Mis padres viven en Arizona.", "My parents live in Arizona."],
    ["Es mayor que yo.", "He / she is older than me."],
    ["Es menor que yo.", "He / she is younger than me."],
    ["Se llama Sofía. Tiene treinta años.", "Her name is Sofía. She's thirty."],
    ["Tengo un perro.", "I have a dog."],
    ["¿Y tus padres? ¿Dónde viven?", "(you'll hear) And your parents? Where do they live?"]
  ],
  vocab: [
    ["La familia", [["el padre, la madre", "father, mother"], ["los padres", "parents"], ["el esposo, la esposa", "husband, wife"], ["el hijo, la hija", "son, daughter"], ["el hermano, la hermana", "brother, sister"], ["el abuelo, la abuela", "grandfather, grandmother"], ["el nieto, la nieta", "grandson, granddaughter"], ["el tío, la tía", "uncle, aunt"], ["el primo, la prima", "cousin"]]],
    ["Describir", [["mayor", "older"], ["menor", "younger"], ["casado, casada", "married"], ["soltero, soltera", "single"], ["la mascota", "pet"]]],
    ["Números", [["veinte", "20"], ["treinta", "30"], ["cuarenta", "40"], ["cincuenta", "50"], ["sesenta", "60"], ["setenta", "70"]]]
  ],
  qd: [
    ["Ask if she has children.", "¿Tienes hijos?"],
    ["Say you have two siblings.", "Tengo dos hermanos."],
    ["Point to a photo and ask who he is.", "¿Quién es él?"],
    ["Ask the person's name.", "¿Cómo se llama?"],
    ["Ask how old he is.", "¿Cuántos años tiene?"],
    ["Say your daughter is twelve.", "Mi hija tiene doce años."],
    ["Show a photo: \"This is my brother.\"", "Este es mi hermano."]
  ],
  patterns: [
    ["Tengo + [número] + [hijos / hermanos]", "Tengo dos hijos. · No tengo hermanos."],
    ["¿Cuántos años tiene + [persona]?", "Age uses <i>tener</i>: <i>Tiene treinta años</i>, not <i>Es treinta</i>."],
    ["mi / mis + [persona]", "mi hermano · mis hermanos · mis padres"],
    ["este / esta + es + mi…", "Showing a photo: <i>Este es mi hermano. Esta es mi hija.</i>"]
  ],
  notes: [
    ["Hijos = children", "<i>¿Tienes hijos?</i> asks about sons and daughters together. <i>Hermanos</i> covers brothers and sisters."],
    ["Family first", "Asking about family is normal small talk in Mexico, and people love showing photos."],
    ["Two last names", "Mexicans use two surnames, the father's then the mother's: Guadalupe Ruiz Méndez."],
    ["Lupe = Guadalupe", "Many nicknames shorten a name: Lupe (Guadalupe), Pepe (José), Paco (Francisco), Lalo (Eduardo)."]
  ],
  prompt: {
    role: `You are Doña Lupe (Guadalupe), 60, my host mother in Oaxaca City. I just arrived to stay with you. We're at the kitchen table looking at family photos on your phone. You prefer "tú" and use "tú" with me.`,
    infoTitle: "YOUR FAMILY (I DON'T KNOW THIS YET)",
    info: `Husband: Javier, 62, a retired math teacher. Son: Daniel, 35, engineer, lives in Monterrey, has two kids: Mateo (6) and Valeria (3). Daughter: Sofía, 30, nurse, lives in Oaxaca, single. Dog: Canelo, 8.`,
    twist: `One photo is a surprise: your sister Rosa, 55, who lives in Los Angeles. Don't say who she is until I ask. Also ask me one question I may not have prepared: "¿Y tus padres? ¿Dónde viven?"`,
    lead: `Show me photos one at a time and let me ask questions. Answer briefly, then ask about my family. Make it two-way: about half your turns should be questions about my family.`,
    recast: `I say "Mi hermana es treinta años" and you say "Ah, tu hermana tiene treinta años."`
  },
  twists: [
    ["La familia de un amigo", "Harder", "Talk about a friend's family instead of your own (él / ella forms).", `Otra vez, por favor. This time ask me about my best friend's family instead of mine, so I have to use él / ella forms. Same rules.`],
    ["Foto misteriosa", "Harder", "Lupe describes a photo and you guess who it is. Then you switch.", `Otra vez, por favor. This time describe a person in a family photo without saying who it is (age, job, where they live). I ask questions and guess. Then I'll describe one of mine. Same rules.`]
  ],
  sa: [
    "I can ask if someone has children or siblings",
    "I can say who is in my family",
    "I can ask and say names (se llama…)",
    "I can ask and say ages with tener",
    "I can ask follow-up questions about a photo"
  ]
};
