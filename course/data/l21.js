window.LESSONS = window.LESSONS || {};
LESSONS["21"] = {
  id: "21", level: "A2+", title: "Me siento mal", minutes: 30,
  cando: "I can describe my symptoms at a pharmacy or doctor's office.",
  scale: "Goods & services · Information exchange",
  reg: "usted", partner: "Dra. Salinas", place: "Consultorio de farmacia · Playa del Carmen",
  scene: "I felt sick in Playa del Carmen and went to the doctor's office next to a pharmacy, where I described my symptoms to Dra. Salinas and understood her instructions",
  goal: "You've felt sick since yesterday. At the small doctor's office next to a pharmacy, describe your symptoms, answer the doctor's questions, mention your allergy, and make sure you understand how to take the medicine.",
  boardStep: ["Prepara tus síntomas", "The doctor will ask about each of these. Plan how to say them."],
  board: {
    title: "Consultorio · Farmacia", sub: "Playa del Carmen, Q. Roo · consulta $60",
    cols: [
      [{ h: "Tus síntomas", items: [["Dolor de estómago", "desde ayer"], ["Diarrea", "4 veces hoy"], ["Fiebre", "38°C"], ["Mucho cansancio"]] },
       { h: "Ayer comiste", items: [["Ceviche en la playa"], ["Agua de la llave"]] }],
      [{ h: "Información importante", items: [["Alérgico/a a la penicilina"], ["No tomas otros medicamentos"]] },
       { h: "Pregunta", items: [["¿Cada cuánto lo tomo?"], ["¿Por cuántos días?"], ["¿Puedo comer normal?"]] }]
    ],
    note: "The doctor will prescribe something you're allergic to. Speak up."
  },
  dialogue: [
    ["m", "Pásele. Siéntese, por favor. ¿Qué le pasa?", "Come in. Have a seat, please. What's the matter?"],
    ["c", "Me siento muy mal. Me duele mucho el estómago.", "I feel really bad. My stomach hurts a lot."],
    ["m", "¿Desde cuándo?", "Since when?"],
    ["c", "Desde ayer en la noche. Y tengo diarrea.", "Since last night. And I have diarrhea."],
    ["m", "¿Tiene fiebre?", "Do you have a fever?"],
    ["c", "Sí, creo que sí. Esta mañana tenía treinta y ocho.", "Yes, I think so. This morning I had thirty-eight."],
    ["m", "¿Qué comió ayer?", "What did you eat yesterday?"],
    ["c", "Comí ceviche en la playa y tomé agua de la llave.", "I ate ceviche at the beach and drank tap water."],
    ["m", "Ah, eso fue. Le voy a dar un antibiótico, amoxicilina…", "Ah, that was it. I'm going to give you an antibiotic, amoxicillin…"],
    ["c", "Perdón, doctora. Soy alérgico a la penicilina.", "Sorry, doctor. I'm allergic to penicillin."],
    ["m", "Qué bueno que me dice. Entonces le doy otro. Tómese una pastilla cada doce horas.", "Good thing you told me. Then I'll give you another one. Take one pill every twelve hours."],
    ["c", "¿Cada doce horas? ¿Por cuántos días?", "Every twelve hours? For how many days?"],
    ["m", "Por cinco días. Y tome mucho suero.", "For five days. And drink a lot of electrolyte drink."],
    ["c", "¿Puedo comer normal?", "Can I eat normally?"],
    ["m", "Coma ligero: arroz, caldo de pollo, plátano. Nada de picante. Si no mejora en dos días, regrese.", "Eat light: rice, chicken broth, banana. Nothing spicy. If you don't get better in two days, come back."]
  ],
  core: [
    ["Me siento muy mal.", "I feel really bad."],
    ["Me duele mucho el estómago.", "My stomach hurts a lot."],
    ["Desde ayer en la noche.", "Since last night."],
    ["Tengo fiebre y diarrea.", "I have a fever and diarrhea."],
    ["Soy alérgico a la penicilina. / Soy alérgica a la penicilina.", "I'm allergic to penicillin. (m / f)"],
    ["¿Cada cuánto lo tomo?", "How often do I take it?"],
    ["¿Por cuántos días?", "For how many days?"]
  ],
  hear: [
    ["¿Qué le pasa?", "What's the matter?"],
    ["¿Desde cuándo?", "Since when?"],
    ["¿Le duele aquí?", "Does it hurt here?"],
    ["¿Es alérgico a algún medicamento?", "Are you allergic to any medicine?"],
    ["Tómese una pastilla cada ocho horas.", "Take one pill every eight hours."],
    ["Si no mejora, regrese.", "If you don't get better, come back."]
  ],
  extra: [
    ["Me duele la cabeza.", "I have a headache."],
    ["Me duele la garganta.", "I have a sore throat."],
    ["Tengo tos. / Tengo gripa.", "I have a cough. / I have a cold. (Mexico)"],
    ["Estoy mareado. / Estoy mareada.", "I'm dizzy. (m / f)"],
    ["Tengo náuseas. Vomité dos veces.", "I'm nauseous. I threw up twice."],
    ["No puedo dormir.", "I can't sleep."],
    ["Estoy tomando otro medicamento.", "I'm taking another medication."],
    ["¿Tiene efectos secundarios?", "Does it have side effects?"],
    ["¿Me lo puede escribir, por favor?", "Can you write it down for me, please?"],
    ["Saque la lengua. Respire hondo.", "(you'll hear) Stick out your tongue. Breathe deeply."]
  ],
  vocab: [
    ["El cuerpo", [["la cabeza", "head"], ["la garganta", "throat"], ["el estómago", "stomach"], ["la panza", "belly (informal)"], ["la espalda", "back"], ["el pecho", "chest"], ["el oído", "ear (inner)"]]],
    ["Síntomas", [["el dolor", "pain"], ["la fiebre", "fever"], ["la tos", "cough"], ["la gripa", "cold, flu (Mexico)"], ["la diarrea", "diarrhea"], ["las náuseas", "nausea"], ["mareado, mareada", "dizzy"], ["el cansancio", "tiredness"]]],
    ["El tratamiento", [["la receta", "prescription"], ["la pastilla", "pill"], ["el jarabe", "syrup"], ["el antibiótico", "antibiotic"], ["el suero", "electrolyte drink"], ["cada ocho horas", "every eight hours"], ["en ayunas", "on an empty stomach"], ["mejorar", "to get better"]]]
  ],
  qd: [
    ["Say you feel really bad.", "Me siento muy mal."],
    ["Say your stomach hurts a lot.", "Me duele mucho el estómago."],
    ["Say since last night.", "Desde ayer en la noche."],
    ["Say you have a fever and diarrhea.", "Tengo fiebre y diarrea."],
    ["Say you're allergic to penicillin.", "Soy alérgico a la penicilina."],
    ["Ask how often you take it.", "¿Cada cuánto lo tomo?"],
    ["Ask for how many days.", "¿Por cuántos días?"]
  ],
  patterns: [
    ["Me duele + [el / la…] · Me duelen + [los / las…]", "Like <i>gustar</i>: <i>Me duele la cabeza. Me duelen los pies.</i> (no <i>mi</i>)"],
    ["Tengo + [síntoma]", "<i>Tengo fiebre. Tengo tos. Tengo náuseas.</i>"],
    ["desde + [tiempo]", "<i>desde ayer, desde el lunes, desde hace dos días</i>"],
    ["cada + [número] + horas · por + [número] + días", "<i>Una pastilla cada ocho horas por cinco días.</i>"]
  ],
  notes: [
    ["Consultorios de farmacia", "Many Mexican pharmacies have a small doctor's office next door. A visit costs about $50–$80 and you don't need an appointment."],
    ["Suero", "<i>Suero oral</i> (electrolyte drink) is sold everywhere in Mexico. Doctors recommend it for stomach problems."],
    ["Agua de la llave", "Locals don't drink tap water either. Use <i>agua purificada</i> or a <i>garrafón</i>."],
    ["Antibióticos", "In Mexico you need a prescription (<i>receta</i>) to buy antibiotics. The pharmacy keeps a copy."]
  ],
  prompt: {
    role: `You are Doctora Salinas, 40, a doctor at the small office next to a pharmacy in Playa del Carmen. I'm a patient who feels sick. Use "usted" with me. You're calm and kind.`,
    infoTitle: "WHAT YOU DO",
    info: `Ask about symptoms one at a time: what, where, since when, how bad (1 to 10), fever, what I ate and drank. Check for allergies only if I don't mention them. Diagnosis: stomach infection from food. Treatment: an antibiotic, 1 pill every 12 hours for 5 days; electrolyte drink (suero); light food (rice, broth, banana, no spicy food, no alcohol, no milk). Come back if no better in 2 days. Visit costs $60. The medicine is about $280 at the pharmacy next door.`,
    twist: `First prescribe amoxicillin (a penicillin), so I have to say I'm allergic. Later, say the dose quickly once ("una cada doce por cinco") so I have to ask you to repeat.`,
    lead: `Ask "¿Qué le pasa?" and let me describe. Ask follow-up questions one at a time. At the end, give the instructions and ask "¿Tiene alguna pregunta?"`,
    recast: `I say "Me duelen el estómago" and you say "Le duele el estómago. ¿Desde cuándo?"`
  },
  twists: [
    ["En la farmacia", "Harder", "No doctor today. Describe symptoms to the pharmacist.", `Otra vez, por favor. This time there's no doctor; you're the pharmacist at the counter. I have a cold: sore throat, cough, and headache for three days. Recommend over-the-counter medicine and explain how to take it. Ask about allergies and other medications. Same rules.`],
    ["Para otra persona", "Challenge", "Your friend is sick in the hotel. Describe their symptoms.", `Otra vez, por favor. This time I'm calling you about my friend, who is sick at the hotel. I have to describe their symptoms (third person: le duele, tiene fiebre) and answer your questions. You decide if they need to come in. Same rules.`]
  ],
  sa: [
    "I can say what hurts (me duele…)",
    "I can describe symptoms and how long I've had them",
    "I can mention an allergy",
    "I can ask how to take the medicine",
    "I can check instructions by repeating them"
  ]
};
