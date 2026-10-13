# Español en voz alta

A self-study Spanish speaking course built around CEFR can-do statements (A1–B1, Mexican Spanish). Each lesson follows one cycle:

1. **Prepárate**: a scene board (menu, map, schedule), a model dialogue, 8 core phrases, vocabulary with show/hide practice, and a recall drill.
2. **Role play**: copy a prompt into ChatGPT, switch to voice mode, and play the scene with an AI partner.
3. **Feedback**: quick spoken feedback in ChatGPT, or paste the transcript into Claude with the review prompt.
4. **Otra vez**: repeat the task with a twist.
5. **¿Lo logré?**: rate yourself against the can-do statement.
6. **Variaciones** (another day): the same can-do in three new places, each with its own menu or information, new words, and its own prompt.

Progress (checked phrases, notes, ratings) is saved in your browser only.

**Live site:** https://a-c-pack.github.io/espanol-en-voz-alta/

## Lessons

| # | Level | Lesson |
|---|---|---|
| 1 | A1 | Mucho gusto: introduce yourself |
| 2 | A1 | Mi familia: talk about family |
| 3 | A1 | En el mercado: buy things at a market |
| 4 | A1 | Un café, por favor: order a simple meal |
| 5 | A1 | ¿A qué hora?: time, days, dates |
| 6 | A1 | Me gusta: likes and dislikes |
| 7 | A1 | Mi casa: describe where you live |
| 8 | A1 | ¿Dónde está?: ask where something is |
| 9 | A2 | En la taquería: order food, ask about the menu |
| 10 | A2 | ¿Cómo llego?: ask for and give directions |
| 11 | A2 | ¿Qué vas a hacer el sábado?: make plans with a friend |
| 12 | A2 | Un día normal: describe your routine and job |
| 13 | A2 | Un boleto, por favor: buy a bus ticket |
| 14 | A2 | ¿Qué hiciste el fin de semana?: talk about last weekend |
| 15 | A2 | Tengo una reservación: check in at a hotel |
| 16 | A2 | ¿Me la puedo probar?: shop for clothes |
| 17 | A2 | ¿Cómo es?: describe family, friends, colleagues |
| 18 | A2 | ¡Perdóname!: invitations and apologies |
| 19 | A2+ | No funciona: explain a problem and ask for a fix |
| 20 | A2+ | ¿Cuál prefieres?: compare and say which you prefer |
| 21 | A2+ | Me siento mal: describe symptoms |
| 22 | A2+ | Te cuento mi viaje: tell a story about a trip |
| 23 | A2+ | ¿Qué planes tienes?: talk about plans |
| 24 | B1 | ¡Perdí el autobús!: handle unexpected travel problems |
| 25 | B1 | Quisiera poner una queja: make a complaint |
| 26 | B1 | ¿Tú qué opinas?: give and justify opinions |
| 27 | B1 | ¿De qué se trata?: tell the plot of a movie or book |
| 28 | B1 | Mi sueño: describe a hope or ambition |
| 29 | B1 | Mucho gusto, ¿y tú?: keep small talk going |
| 30 | B1 | Paso a paso: ask for and follow instructions |
| 31 | B1 | La entrevista: a volunteer or job interview |
| 32 | B1 | Dar clases: talk about your work as a teacher |

The full list of 32 can-do statements is in [`cando-statements.md`](cando-statements.md).

## Building

```
node course/build.js
```

- `course/data/lNN.js`: one file per lesson (all content and prompt details)
- `course/data/vNN.js`: the three variations for that lesson (new context and information)
- `course/src/template.html`: the shared page (hub and lesson view)
- Output: `docs/index.html` (served by GitHub Pages)

To add a lesson, copy an existing data file, change the content, and rebuild.
