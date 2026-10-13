(function(){"use strict";
window.COURSE={"lessons":[{"id":"1-1","t":"Hola, ¿qué tal?","u":1,"lv":"A1","cd":"I can greet people, say goodbye, and spell my name, choosing tú or usted.","steps":8},{"id":"1-2","t":"¿De dónde eres?","u":1,"lv":"A1","cd":"I can introduce myself: my name, where I'm from, where I live and my job.","steps":8},{"id":"1-3","t":"Mis datos","u":1,"lv":"A1","cd":"I can give personal details (age, phone, email) and fill out a simple form.","steps":8},{"id":"2-1","t":"Mi familia","u":2,"lv":"A1","cd":"I can ask and answer simple questions about family.","steps":8},{"id":"2-2","t":"Mi casa","u":2,"lv":"A1","cd":"I can describe where I live in simple phrases.","steps":8},{"id":"2-3","t":"¿Dónde está?","u":2,"lv":"A1","cd":"I can ask where something is and understand a simple answer.","steps":8},{"id":"3-1","t":"En el mercado","u":3,"lv":"A1","cd":"I can buy something at a market or shop: numbers, prices and quantities.","steps":8},{"id":"3-2","t":"Un café, por favor","u":3,"lv":"A1","cd":"I can order a simple meal or drink.","steps":8},{"id":"3-3","t":"Me gusta","u":3,"lv":"A1","cd":"I can say what I like and don't like (food, activities).","steps":8},{"id":"4-1","t":"¿A qué hora?","u":4,"lv":"A1","cd":"I can ask and tell the time, the day and the date.","steps":8},{"id":"4-2","t":"Mi tiempo libre","u":4,"lv":"A1","cd":"I can say what I do in my free time and how often.","steps":8},{"id":"4-3","t":"¿Qué tiempo hace?","u":4,"lv":"A1","cd":"I can talk about the weather and write a short postcard or message.","steps":8},{"id":"5-1","t":"Una semana en la Ciudad de México","u":5,"lv":"A1","cd":"I can use everything from A1 together: introduce myself, describe people and places, buy, order, and talk about my week.","steps":8},{"id":"6-1","t":"En la taquería","u":6,"lv":"A2","cd":"I can order food at a restaurant or taquería and ask about the menu.","steps":8},{"id":"6-2","t":"¿Cómo llego?","u":6,"lv":"A2","cd":"I can ask for and give directions using a map and landmarks.","steps":8},{"id":"6-3","t":"Un boleto, por favor","u":6,"lv":"A2","cd":"I can buy a bus ticket and ask about schedules and prices.","steps":8},{"id":"7-1","t":"Un día normal","u":7,"lv":"A2","cd":"I can describe my daily routine and my job.","steps":8},{"id":"7-2","t":"¿Cómo es?","u":7,"lv":"A2","cd":"I can describe family, friends and colleagues.","steps":8},{"id":"7-3","t":"¿Me lo puedo probar?","u":7,"lv":"A2","cd":"I can shop for clothes: size, color, trying on, price.","steps":8},{"id":"8-1","t":"¿Qué vas a hacer el sábado?","u":8,"lv":"A2","cd":"I can make plans with a friend: suggest, accept, decline, set a time and place.","steps":8},{"id":"8-2","t":"¡Perdóname!","u":8,"lv":"A2","cd":"I can make and respond to invitations and apologies.","steps":8},{"id":"8-3","t":"Tengo una reservación","u":8,"lv":"A2","cd":"I can book a hotel room or check in.","steps":8},{"id":"9-1","t":"¿Qué hiciste el fin de semana?","u":9,"lv":"A2","cd":"I can talk about what I did last weekend.","steps":8},{"id":"9-2","t":"No sirve","u":9,"lv":"A2","cd":"I can explain a simple problem (wrong item, broken thing) and ask for a fix.","steps":8},{"id":"9-3","t":"Me siento mal","u":9,"lv":"A2","cd":"I can describe symptoms at a pharmacy or a doctor's office.","steps":8},{"id":"10-1","t":"¿Cuál prefieres?","u":10,"lv":"A2","cd":"I can compare two things or places and say which I prefer and why.","steps":8},{"id":"10-2","t":"Te cuento mi viaje","u":10,"lv":"A2","cd":"I can tell a short story about a past trip.","steps":8},{"id":"10-3","t":"¿Qué planes tienes?","u":10,"lv":"A2","cd":"I can talk about plans for next weekend or a vacation.","steps":8},{"id":"11-1","t":"Un fin de semana en Oaxaca","u":11,"lv":"A2","cd":"I can use everything from A2 together: travel, sort out problems, tell what happened and talk about plans.","steps":8},{"id":"12-1","t":"¡Se me fue el camión!","u":12,"lv":"B1","cd":"I can handle most travel situations, including unexpected ones (a missed bus, a lost item).","steps":8},{"id":"12-2","t":"Quisiera poner una queja","u":12,"lv":"B1","cd":"I can make a complaint and explain what happened.","steps":8},{"id":"12-3","t":"Paso a paso","u":12,"lv":"B1","cd":"I can ask for and follow detailed instructions, and explain them to someone else.","steps":8},{"id":"13-1","t":"¿Tú qué opinas?","u":13,"lv":"B1","cd":"I can give and briefly justify opinions on familiar topics.","steps":8},{"id":"13-2","t":"¿De qué se trata?","u":13,"lv":"B1","cd":"I can narrate the plot of a movie or book and my reactions.","steps":8},{"id":"13-3","t":"Mi sueño","u":13,"lv":"B1","cd":"I can describe a hope, dream or ambition and explain why.","steps":8},{"id":"14-1","t":"Platicando","u":14,"lv":"B1","cd":"I can sustain small talk with a new acquaintance.","steps":8},{"id":"14-2","t":"La entrevista","u":14,"lv":"B1","cd":"I can take part in a short job or volunteer interview.","steps":8},{"id":"14-3","t":"Dar clases","u":14,"lv":"B1","cd":"I can talk about my work as a teacher: duties, challenges, what I enjoy.","steps":8},{"id":"15-1","t":"Despedida","u":15,"lv":"B1","cd":"I can use everything from B1 together: tell stories, give opinions, deal with problems and talk about my plans and work.","steps":8}],"tests":["u1","u2","u3","u4","u6","u7","u8","u9","u10","u12","u13","u14","a1","a2","b1"]};
// 01-store.js
// Progress store: everything the learner does, in localStorage, exportable as JSON.
var KEY = "eva-progress-v1";
var DAY = 86400000;
var BOX_DAYS = [0, 1, 3, 7, 16];

var Store = (function () {
  var mem = null;
  function blank() { return { v: 1, lessons: {}, tests: {}, deck: {}, last: null, notes: {}, settings: { rate: 1 } }; }
  function load() {
    if (mem) return mem;
    try { mem = JSON.parse(localStorage.getItem(KEY)) || blank(); } catch (e) { mem = blank(); }
    var b = blank();
    for (var k in b) if (!(k in mem)) mem[k] = b[k];
    return mem;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) { /* private mode: keep in memory */ } }
  function lesson(id) { var s = load(); return s.lessons[id] || (s.lessons[id] = { step: 1, maxStep: 1, done: false, ex: {}, sc: [] }); }

  function addCards(ids, src, dueNow) {
    var s = load(), now = Date.now(), added = 0;
    (ids || []).forEach(function (id) {
      if (!s.deck[id]) { s.deck[id] = { b: 1, due: now, src: src, n: 0 }; added++; }
      else if (dueNow) { s.deck[id].b = 1; s.deck[id].due = now; }
    });
    save();
    return added;
  }
  function review(id, knew) {
    var s = load(), c = s.deck[id];
    if (!c) return;
    c.n = (c.n || 0) + 1;
    if (knew) { c.b = Math.min(5, c.b + 1); c.due = Date.now() + BOX_DAYS[c.b - 1] * DAY; }
    else { c.b = 1; c.due = Date.now(); }
    save();
  }
  function dueCount() {
    var s = load(), now = Date.now(), n = 0;
    for (var id in s.deck) if (s.deck[id].due <= now) n++;
    return n;
  }

  // Merge an imported file: keep whichever copy of each lesson/test/card is further along.
  function merge(other) {
    var s = load();
    if (!other || other.v !== 1) throw new Error("This file is not a progress file from this course.");
    Object.keys(other.lessons || {}).forEach(function (id) {
      var a = s.lessons[id], b = other.lessons[id];
      if (!a || (b.done && !a.done) || (!a.done && (b.maxStep || 0) > (a.maxStep || 0))) s.lessons[id] = b;
    });
    Object.keys(other.tests || {}).forEach(function (id) {
      var a = s.tests[id], b = other.tests[id];
      if (!a || (b.best || 0) > (a.best || 0)) s.tests[id] = b;
    });
    Object.keys(other.deck || {}).forEach(function (id) {
      var a = s.deck[id], b = other.deck[id];
      if (!a || (b.n || 0) > (a.n || 0)) s.deck[id] = b;
    });
    Object.keys(other.notes || {}).forEach(function (k) { if (!(k in s.notes)) s.notes[k] = other.notes[k]; });
    if (other.last && (!s.last || other.last.at > s.last.at)) s.last = other.last;
    save();
  }
  function reset() { mem = blank(); save(); }
  function exportJSON() { return JSON.stringify(load(), null, 1); }

  return { load: load, save: save, lesson: lesson, addCards: addCards, review: review, dueCount: dueCount,
    merge: merge, reset: reset, exportJSON: exportJSON };
})();

// 02-audio.js
// Audio: one shared player for every play button, "play all" sequences, slower speed.
var Audio_ = (function () {
  var el = null, current = null, queue = [], qPlayer = null, root = "";
  function player() {
    if (!el) {
      el = new Audio();
      el.preload = "auto";
      el.addEventListener("ended", next);
      el.addEventListener("error", function () { stopUI(); toast("Sorry, this audio could not be played."); queue = []; });
    }
    return el;
  }
  function rate() { return Store.load().settings.rate || 1; }
  function btns(id) { return document.querySelectorAll('[data-audio="' + id + '"]'); }
  function stopUI() {
    document.querySelectorAll(".play.playing").forEach(function (b) { b.classList.remove("playing"); });
    document.querySelectorAll("[data-line].now").forEach(function (l) { l.classList.remove("now"); });
    if (qPlayer) { var pa = qPlayer.querySelector("[data-play-all]"); if (pa) pa.setAttribute("aria-pressed", "false"); }
  }
  function play(id, keepQueue) {
    var a = player();
    if (!keepQueue) { queue = []; qPlayer = null; }
    stopUI();
    if (current === id && !a.paused && !keepQueue) { a.pause(); current = null; return; }
    current = id;
    a.src = root + "audio/" + id + ".mp3";
    a.playbackRate = rate();
    if ("preservesPitch" in a) a.preservesPitch = true;
    btns(id).forEach(function (b) { b.classList.add("playing"); });
    var line = document.querySelector('[data-line="' + id + '"]');
    if (line && keepQueue) { line.classList.add("now"); }
    var p = a.play();
    if (p && p.catch) p.catch(function () { stopUI(); });
  }
  function next() {
    stopUI();
    current = null;
    if (queue.length) { var id = queue.shift(); setTimeout(function () { play(id, true); }, 350); }
    else if (qPlayer) { qPlayer = null; }
  }
  function playAll(ids, playerEl) {
    if (!ids.length) return;
    if (qPlayer === playerEl && el && !el.paused) { queue = []; el.pause(); stopUI(); qPlayer = null; return; }
    queue = ids.slice(1);
    qPlayer = playerEl;
    play(ids[0], true);
    var pa = playerEl.querySelector("[data-play-all]");
    if (pa) pa.setAttribute("aria-pressed", "true");
  }
  function setRate(r) {
    var s = Store.load(); s.settings.rate = r; Store.save();
    if (el) el.playbackRate = r;
    document.querySelectorAll("[data-rate]").forEach(function (b) { b.setAttribute("aria-pressed", String(+b.dataset.rate === r)); });
  }
  function init(r) {
    root = r;
    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-audio]");
      if (b) { play(b.dataset.audio); return; }
      var all = e.target.closest("[data-play-all]");
      if (all) {
        var pl = all.closest("[data-player]");
        playAll(pl.dataset.player.split(",").filter(Boolean), pl);
        return;
      }
      var rt = e.target.closest("[data-rate]");
      if (rt) setRate(+rt.dataset.rate);
    });
    var r0 = rate();
    document.querySelectorAll("[data-rate]").forEach(function (b) { b.setAttribute("aria-pressed", String(+b.dataset.rate === r0)); });
    // a slow rate the page doesn't offer (B1 has 0.85, A1 0.75) falls back to the page's own
    var offered = Array.prototype.map.call(document.querySelectorAll("[data-rate]"), function (b) { return +b.dataset.rate; });
    if (offered.length && offered.indexOf(r0) < 0) setRate(r0 < 1 ? Math.min.apply(null, offered) : 1);
  }
  return { init: init, play: play, playAll: playAll };
})();

// 03-ui.js
// Small shared UI pieces: toast, answer checking, saved fields, recorder, speech input.
function toast(msg) {
  var t = document.querySelector(".toast");
  if (!t) return;
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toast._t);
  toast._t = setTimeout(function () { t.hidden = true; }, 4000);
}

function norm(s, keepAccents) {
  s = String(s || "").toLowerCase().normalize("NFC")
    .replace(/[¿?¡!.,;:"“”«»()…]/g, " ").replace(/[’']/g, "'").replace(/\s+/g, " ").trim();
  if (!keepAccents) s = s.normalize("NFD").replace(/[̀-ͯ]/g, "").normalize("NFC");
  return s;
}
// numbers said aloud come back from speech recognition as digits
var NUMS = { 0: "cero", 1: "uno", 2: "dos", 3: "tres", 4: "cuatro", 5: "cinco", 6: "seis", 7: "siete", 8: "ocho", 9: "nueve", 10: "diez", 11: "once", 12: "doce", 13: "trece", 14: "catorce", 15: "quince", 16: "dieciséis", 17: "diecisiete", 18: "dieciocho", 19: "diecinueve", 20: "veinte" };
function normSpoken(s) { return norm(String(s).replace(/\b\d{1,2}\b/g, function (d) { return NUMS[+d] || d; })); }

function lev(a, b) {
  var m = a.length, n = b.length, d = [], i, j;
  for (i = 0; i <= m; i++) { d[i] = [i]; }
  for (j = 0; j <= n; j++) d[0][j] = j;
  for (i = 1; i <= m; i++) for (j = 1; j <= n; j++)
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[m][n];
}
function similar(a, b) { var l = Math.max(a.length, b.length) || 1; return 1 - lev(a, b) / l; }

/** Compare a typed answer: "ok" (exact, accents included), "almost" (only accents differ), or "no". */
function grade(given, accepted) {
  var g = norm(given, true);
  if (!g) return "no";
  for (var i = 0; i < accepted.length; i++) if (g === norm(accepted[i], true)) return "ok";
  var gl = norm(given);
  for (i = 0; i < accepted.length; i++) if (gl === norm(accepted[i])) return "almost";
  return "no";
}
/** Compare speech: recognition drops punctuation and accents, so be tolerant. */
function gradeSpoken(heard, accepted) {
  var h = normSpoken(heard), best = 0;
  accepted.forEach(function (a) { best = Math.max(best, similar(h, normSpoken(a))); });
  return best >= 0.8 ? "ok" : best >= 0.6 ? "almost" : "no";
}

function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function ic(name) { var t = document.getElementById("ic-" + name); return t ? t.innerHTML : ""; }

var ICONS = {
  ok: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><path d="M7.5 12.5l3 3 6-6.5"/></svg>',
  no: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><path d="M8.5 8.5l7 7M15.5 8.5l-7 7"/></svg>',
  almost: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><path d="M12 7v6M12 16.5v.5"/></svg>',
};
function feedback(box, kind, html) {
  var label = { ok: "Correcto.", no: "Not quite.", almost: "Almost." }[kind];
  box.innerHTML = '<div class="feedback ' + kind + '">' + ICONS[kind] + '<div><p><b class="lbl" lang="' + (kind === "ok" ? "es" : "en") + '">' + label + "</b>" + (html || "") + "</p></div></div>";
}

// Text fields and checkboxes with data-save keep their value in the progress store.
function initSaved() {
  var notes = Store.load().notes;
  document.querySelectorAll("[data-save]").forEach(function (el) {
    var k = el.dataset.save;
    if (el.type === "checkbox") { el.checked = !!notes[k]; }
    else if (notes[k]) el.value = notes[k];
    var ev = el.type === "checkbox" ? "change" : "input";
    el.addEventListener(ev, function () {
      var s = Store.load();
      s.notes[k] = el.type === "checkbox" ? el.checked : el.value;
      Store.save();
      if (el.tagName === "TEXTAREA") wordcount(el);
    });
    if (el.tagName === "TEXTAREA") wordcount(el);
  });
}
function wordcount(ta) {
  var out = ta.parentNode.querySelector("[data-wc]");
  if (!out) return;
  var n = (ta.value.trim().match(/\S+/g) || []).length;
  var min = +ta.dataset.min || 0, max = +ta.dataset.max || 0;
  out.textContent = n + (n === 1 ? " word" : " words") + (min ? (n < min ? " · aim for at least " + min : n > max ? " · a little long: aim for " + max + " or fewer" : " · good length") : "");
}

// Special-character buttons insert into the last focused text field nearby.
var lastField = null;
function initAccents() {
  document.addEventListener("focusin", function (e) { if (e.target.matches("input[type=text], textarea")) lastField = e.target; });
  document.addEventListener("mousedown", function (e) { if (e.target.closest("[data-insert]")) e.preventDefault(); });
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-insert]");
    if (!b) return;
    var scope = b.closest(".exercise, .panel, .build, section") || document;
    var f = lastField && scope.contains(lastField) ? lastField : scope.querySelector("input[type=text], textarea");
    if (!f) return;
    var s = f.selectionStart != null ? f.selectionStart : f.value.length, en = f.selectionEnd != null ? f.selectionEnd : s;
    f.value = f.value.slice(0, s) + b.dataset.insert + f.value.slice(en);
    f.focus();
    f.setSelectionRange(s + 1, s + 1);
    f.dispatchEvent(new Event("input", { bubbles: true }));
  });
}

function initCopy() {
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-copy]");
    if (!b) return;
    var box = b.closest(".panel").querySelector("[data-prompt]");
    var text = box.textContent;
    function done() { toast("Prompt copied. Paste it into ChatGPT or Claude."); }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback);
    else fallback();
    function fallback() {
      var r = document.createRange(); r.selectNodeContents(box);
      var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
      try { document.execCommand("copy"); done(); } catch (err) { toast("Select the text and copy it with Ctrl+C."); }
    }
  });
}

function initGlosses() {
  document.addEventListener("click", function (e) {
    var g = e.target.closest(".gloss");
    document.querySelectorAll(".gloss.open").forEach(function (o) { if (o !== g) o.classList.remove("open"); });
    if (g) g.classList.toggle("open");
  });
  document.addEventListener("keydown", function (e) {
    var g = e.target.closest && e.target.closest(".gloss");
    if (g && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); g.classList.toggle("open"); }
    if (e.key === "Escape") document.querySelectorAll(".gloss.open").forEach(function (o) { o.classList.remove("open"); });
  });
}

// Record yourself (MediaRecorder); hidden gracefully where unsupported.
function initRecorders() {
  document.querySelectorAll("[data-recorder]").forEach(function (box) {
    var btn = box.querySelector("[data-rec]"), status = box.querySelector("[data-rec-status]");
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder)) {
      btn.hidden = true;
      status.textContent = "Recording isn't available in this browser. Say your part aloud instead, or use the AI partner below.";
      return;
    }
    var rec = null, chunks = [], stream = null, audioEl = null;
    btn.addEventListener("click", function () {
      if (rec && rec.state === "recording") { rec.stop(); return; }
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (s) {
        stream = s; chunks = [];
        rec = new MediaRecorder(s);
        rec.ondataavailable = function (e) { chunks.push(e.data); };
        rec.onstop = function () {
          stream.getTracks().forEach(function (t) { t.stop(); });
          var url = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType }));
          if (!audioEl) { audioEl = document.createElement("audio"); audioEl.controls = true; box.appendChild(audioEl); }
          audioEl.src = url;
          audioEl.setAttribute("aria-label", "Your recording");
          btn.innerHTML = btn.innerHTML.replace(/Stop|Record again|Record/, "Record again");
          status.textContent = "Done. Play it back and compare it with the model. (Your recording stays on this device.)";
        };
        rec.start();
        btn.innerHTML = btn.innerHTML.replace(/Record again|Record/, "Stop");
        status.innerHTML = '<span class="rec-dot" aria-hidden="true"></span> Recording… press Stop when you finish.';
      }).catch(function () {
        status.textContent = "The microphone isn't available (permission was refused or there is none). You can still say your part aloud.";
      });
    });
  });
}

// Speech recognition (Chrome, Edge, Safari). Returns null where unsupported.
var SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
function listen(onText, onEnd) {
  if (!SR) return null;
  var r = new SR();
  r.lang = "es-MX"; r.interimResults = false; r.maxAlternatives = 3;
  r.onresult = function (e) {
    var alts = [];
    for (var i = 0; i < e.results[0].length; i++) alts.push(e.results[0][i].transcript);
    onText(alts);
  };
  r.onerror = function (e) { onEnd(e.error); };
  r.onend = function () { onEnd(null); };
  try { r.start(); } catch (e) { onEnd("start"); return null; }
  return r;
}

// Tables wider than the screen get a visible hint (the scroll shadows are subtle).
function initTableHints() {
  // show the hint only while the table really overflows (and is visible); remove it otherwise
  document.querySelectorAll(".gtable-wrap").forEach(function (w) {
    if (!w.clientWidth) return;
    var has = w.nextElementSibling && w.nextElementSibling.classList.contains("table-hint");
    var over = w.scrollWidth > w.clientWidth + 2;
    if (over && !has) {
      var p = document.createElement("p");
      p.className = "table-hint"; p.textContent = "Scroll sideways to see the whole table →";
      w.after(p);
    } else if (!over && has) w.nextElementSibling.remove();
  });
}

// 10-exercises.js
// Exercise engine: choice, listen, gap, order, match, say, build. Shared by lessons and tests.
// Markup comes from build/lesson.mjs; answer keys from the page's JSON (data.exercises).
var Exercises = (function () {
  var onScore = function () {};

  function scoreBox(sec, score, max) {
    var s = sec.querySelector(".ex-score");
    if (s) s.textContent = score + " of " + max + (score === max ? " · ¡Excelente!" : "");
    var retry = sec.querySelector("[data-retry]");
    if (retry) retry.hidden = false;
  }

  function choice(sec, d, idx) {
    var answered = 0, right = 0;
    sec.querySelectorAll(".item").forEach(function (item) {
      var it = d.items[+item.dataset.i];
      item.querySelectorAll(".opt").forEach(function (o) {
        o.addEventListener("click", function () {
          if (item.dataset.done) return;
          item.dataset.done = "1";
          var k = +o.dataset.opt, ok = k === it.answer;
          item.querySelectorAll(".opt").forEach(function (x) {
            x.disabled = true;
            if (+x.dataset.opt === it.answer) x.classList.add("correct");
          });
          if (!ok) o.classList.add("wrong");
          o.setAttribute("aria-pressed", "true");
          var why = ok ? it.why : ((it.whyWrong && it.whyWrong[k]) || it.why);
          feedback(item.querySelector(".fb"), ok ? "ok" : "no", (why ? " " + why : "") + (ok ? "" : ' <span class="muted">Answer: <span' + (o.getAttribute("lang") ? ' lang="es"' : "") + ">" + esc(it.options[it.answer]) + "</span></span>"));
          var tr = item.querySelector("details.transcript"); if (tr) tr.open = true;
          answered++; if (ok) right++;
          if (answered === d.items.length) { scoreBox(sec, right, d.items.length); onScore(idx, right, d.items.length, sec); }
        });
      });
    });
  }

  function gap(sec, d, idx) {
    sec.querySelector("[data-check]").addEventListener("click", function () {
      var right = 0;
      sec.querySelectorAll(".item").forEach(function (item) {
        var it = d.items[+item.dataset.i], worst = "ok", fixes = [];
        item.querySelectorAll(".gap").forEach(function (inp, g) {
          var acc = it.answers[g] || it.answers[0];
          var r = grade(inp.value, acc);
          inp.classList.remove("correct", "wrong", "almost");
          inp.classList.add(r === "ok" ? "correct" : r === "almost" ? "almost" : "wrong");
          inp.setAttribute("aria-invalid", r === "no" ? "true" : "false");
          if (r !== "ok") fixes.push(acc[0]);
          if (r === "no") worst = "no"; else if (r === "almost" && worst === "ok") worst = "almost";
        });
        var answerText = esc(it.text).split("___").map(function (p, i, arr) { return i < arr.length - 1 ? p + "<b>" + esc(it.answers[i] ? it.answers[i][0] : it.answers[0][0]) + "</b>" : p; }).join("");
        if (worst === "ok") { right++; feedback(item.querySelector(".fb"), "ok", it.why ? " " + it.why : ""); }
        else if (worst === "almost") { right++; feedback(item.querySelector(".fb"), "almost", ' Check the accents: <span lang="es">' + answerText + "</span>"); }
        else feedback(item.querySelector(".fb"), "no", (it.why ? " " + it.why : "") + ' <span lang="es">' + answerText + "</span>");
      });
      scoreBox(sec, right, d.items.length);
      onScore(idx, right, d.items.length, sec);
    });
    sec.querySelectorAll(".gap").forEach(function (inp) {
      inp.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); sec.querySelector("[data-check]").click(); } });
    });
  }

  function order(sec, d, idx) {
    sec.querySelectorAll(".item").forEach(function (item) {
      var pool = item.querySelector("[data-pool]"), ans = item.querySelector("[data-answer]");
      item.addEventListener("click", function (e) {
        var t = e.target.closest(".tile");
        if (!t || item.dataset.locked) return;
        (t.parentNode === pool ? ans : pool).appendChild(t);
        t.focus();
      });
    });
    sec.querySelector("[data-check]").addEventListener("click", function () {
      var right = 0;
      sec.querySelectorAll(".item").forEach(function (item) {
        var it = d.items[+item.dataset.i];
        var built = Array.prototype.map.call(item.querySelectorAll("[data-answer] .tile"), function (t) { return t.textContent; }).join(" ");
        var ok = [it.answer].concat(it.alt).some(function (a) { return norm(a, true) === norm(built, true) && a.split(/\s+/).length === built.split(/\s+/).length; });
        if (ok) { right++; feedback(item.querySelector(".fb"), "ok", it.why ? " " + it.why : ""); }
        else feedback(item.querySelector(".fb"), "no", (it.why ? " " + it.why : "") + ' <span lang="es">' + esc(it.answer) + "</span>");
      });
      scoreBox(sec, right, d.items.length);
      onScore(idx, right, d.items.length, sec);
    });
  }

  function match(sec, d, idx) {
    var sel = null, paired = 0, misses = 0, fb = sec.querySelector(".fb");
    sec.querySelectorAll(".mbtn").forEach(function (b) {
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", function () {
        if (b.classList.contains("paired")) return;
        if (!sel || sel.dataset.side === b.dataset.side) {
          if (sel) sel.setAttribute("aria-pressed", "false");
          sel = b; b.setAttribute("aria-pressed", "true");
          return;
        }
        var a = sel; sel = null;
        a.setAttribute("aria-pressed", "false");
        if (a.dataset.id === b.dataset.id) {
          [a, b].forEach(function (x) { x.classList.add("paired"); x.setAttribute("aria-disabled", "true"); });
          paired++;
          var p = d.items[+a.dataset.id];
          fb.innerHTML = '<p class="small muted" style="margin:var(--s2) 0 0"><span lang="es">' + esc(p.es) + "</span> = " + esc(p.en) + "</p>";
          if (paired === d.items.length) {
            var score = Math.max(0, d.items.length - misses);
            feedback(fb, "ok", " All matched" + (misses ? " (" + misses + " wrong " + (misses === 1 ? "try" : "tries") + " on the way)." : " on the first try."));
            scoreBox(sec, score, d.items.length);
            onScore(idx, score, d.items.length, sec);
          }
        } else {
          misses++;
          [a, b].forEach(function (x) { x.classList.add("shake"); setTimeout(function () { x.classList.remove("shake"); }, 700); });
          var L = a.dataset.side === "L" ? a : b, R = L === a ? b : a;
          fb.innerHTML = '<p class="small" style="margin:var(--s2) 0 0;color:var(--red)">✕ <span lang="es">' + esc(L.textContent) + "</span> doesn't mean “" + esc(R.textContent) + "”. Try again.</p>";
        }
      });
    });
  }

  function say(sec, d, idx) {
    var right = 0, done = 0;
    sec.querySelectorAll(".item").forEach(function (item) {
      var it = d.items[+item.dataset.i], heard = item.querySelector(".heard"), input = item.querySelector("input");
      var mic = item.querySelector("[data-mic]");
      function finish(kind, extra) {
        item.querySelector(".answer").hidden = false;
        item.querySelector("[data-reveal]").hidden = true;
        feedback(item.querySelector(".fb"), kind, extra || "");
        if (!item.dataset.done) {
          item.dataset.done = "1"; done++;
          if (kind !== "no") right++;
          if (done === d.items.length) { scoreBox(sec, right, d.items.length); onScore(idx, right, d.items.length, sec); }
        }
      }
      if (SR && mic) {
        mic.hidden = false;
        var rec = null;
        mic.addEventListener("click", function () {
          if (rec) { rec.stop(); return; }
          mic.classList.add("listening");
          heard.textContent = "Listening… speak now.";
          rec = listen(function (alts) {
            var best = "no", said = alts[0];
            alts.forEach(function (a) { var g = gradeSpoken(a, it.es); if (g === "ok" || (g === "almost" && best === "no")) { best = g; said = a; } });
            input.value = said;
            heard.innerHTML = 'You said: <span lang="es">' + esc(said) + "</span>";
            finish(best, best === "ok" ? "" : best === "almost" ? " Close. Listen to the model and try again." : " Listen to the model and try again.");
          }, function (err) {
            mic.classList.remove("listening"); rec = null;
            if (err === "not-allowed" || err === "service-not-allowed") { heard.textContent = "The microphone isn't available. Type your answer instead."; mic.hidden = true; }
            else if (err === "no-speech") heard.textContent = "I didn't hear anything. Try again, or type it.";
            else if (err && err !== "aborted") heard.textContent = "Speech recognition isn't working right now. Type your answer instead.";
            else if (heard.textContent.indexOf("Listening") === 0) heard.textContent = "";
          });
          if (!rec) { mic.classList.remove("listening"); heard.textContent = "Speech recognition isn't available. Type your answer instead."; }
        });
      }
      item.querySelector("[data-check-say]").addEventListener("click", function () {
        if (!input.value.trim()) { input.focus(); heard.textContent = "Type your answer first, or press Show answer."; return; }
        var g = grade(input.value, it.es);
        if (g === "no") { var s = gradeSpoken(input.value, it.es); if (s === "ok") g = "almost"; }
        finish(g, g === "almost" ? " Very close: compare with the answer, including accents." : g === "no" ? " Compare with the answer below." : "");
      });
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); item.querySelector("[data-check-say]").click(); } });
      item.querySelector("[data-reveal]").addEventListener("click", function () {
        item.querySelector(".answer").hidden = false;
        this.hidden = true;
        if (!item.dataset.done) { item.dataset.done = "1"; done++; if (done === d.items.length) { scoreBox(sec, right, d.items.length); onScore(idx, right, d.items.length, sec); } }
      });
    });
  }

  function retry(sec) {
    var r = sec.querySelector("[data-retry]");
    if (!r) return;
    r.addEventListener("click", function () {
      var clone = sec.__orig.cloneNode(true);
      sec.parentNode.replaceChild(clone, sec);
      bind(clone);
      var first = clone.querySelector("button, input");
      if (first) first.focus();
    });
  }

  var DATA = [];
  function bind(sec) {
    if (!sec.__orig) sec.__orig = sec.cloneNode(true);
    var idx = +sec.dataset.ex, d = DATA[idx];
    if (!d) return;
    var fn = { choice: choice, listen: choice, gap: gap, order: order, match: match, say: say }[d.type];
    if (fn) fn(sec, d, idx);
    retry(sec);
  }

  function init(root, data, cb) {
    DATA = data; onScore = cb || onScore;
    root.querySelectorAll(".exercise[data-ex]").forEach(function (sec) {
      sec.__orig = sec.cloneNode(true);
      bind(sec);
    });
  }
  return { init: init };
})();

// 11-lesson.js
// Lesson page: one step at a time, saved position, Repaso feeding, self-check, finish.
var STEP_NAMES = ["Escucha", "Fíjate", "Practica", "Palabras", "Lee", "Cultura", "Tu turno", "¿Lo logré?"];

function initLesson() {
  var data = JSON.parse(document.getElementById("lesson-data").textContent);
  var id = data.id, L = Store.lesson(id);
  var steps = document.querySelectorAll(".step"), total = steps.length;
  var panel = document.getElementById("steps-panel"), toggle = document.querySelector("[data-steps-toggle]");

  function show(n, focus) {
    n = Math.max(1, Math.min(total, n | 0));
    steps.forEach(function (s) { s.classList.toggle("active", +s.dataset.step === n); });
    L = Store.lesson(id);
    L.step = n; L.maxStep = Math.max(L.maxStep || 1, n);
    var s = Store.load();
    s.last = { href: "leccion/" + id + ".html#paso-" + n, label: id.replace("-", ".") + " " + data.title + " · Paso " + n + ": " + STEP_NAMES[n - 1], at: Date.now(), lesson: id };
    Store.save();
    document.querySelectorAll(".steps-list a").forEach(function (a) {
      var k = +a.dataset.go;
      if (k === n) a.setAttribute("aria-current", "step"); else a.removeAttribute("aria-current");
      a.parentNode.classList.toggle("done", k < n || k <= (L.maxStep || 1) && k !== n);
    });
    document.querySelectorAll(".segbar i").forEach(function (i, k) { i.className = k + 1 === n ? "cur" : (k + 1 <= L.maxStep ? "done" : ""); });
    var lab = document.querySelector("[data-step-label]"), nm = document.querySelector("[data-step-name]");
    if (lab) lab.textContent = "Paso " + n + " de " + total;
    if (nm) nm.textContent = STEP_NAMES[n - 1];
    initTableHints();
    if (n === 4) { var added = Store.addCards(data.vocab, id); if (added) toast(added + " words added to Repaso."); updateDue(); }
    if (panel) { panel.classList.remove("open"); if (toggle) toggle.setAttribute("aria-expanded", "false"); }
    if (location.hash !== "#paso-" + n) history.replaceState(null, "", "#paso-" + n);
    if (focus) {
      var h = document.querySelector("#paso-" + n + " h2");
      var top = document.querySelector(".lesson-layout").getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: Math.max(0, top), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
    }
  }

  document.addEventListener("click", function (e) {
    var g = e.target.closest("[data-go]");
    if (g) { e.preventDefault(); show(+g.dataset.go, true); }
  });
  if (toggle) toggle.addEventListener("click", function () {
    var open = panel.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  window.addEventListener("hashchange", function () { var m = location.hash.match(/paso-(\d)/); if (m) show(+m[1], true); });

  // Spanish text / English translation toggles for each dialogue
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-toggle-es], [data-toggle-en]");
    if (!t) return;
    var pl = t.closest(".player"), box = pl.nextElementSibling;
    while (box && !box.hasAttribute("data-dialogue") && !box.classList.contains("hide-en-off")) box = box.nextElementSibling;
    if (!box) box = pl.parentNode;
    var on = t.getAttribute("aria-pressed") !== "true";
    t.setAttribute("aria-pressed", String(on));
    if (t.hasAttribute("data-toggle-es")) box.classList.toggle("hide-es", !on);
    else { box.classList.toggle("hide-en", !on); box.querySelectorAll(".vocab .en").forEach(function (x) { x.hidden = !on; }); }
  });
  // vocabulary English starts visible; the toggle hides it for self-testing
  document.querySelectorAll("[data-toggle-en]").forEach(function (t) {
    var pl = t.closest(".player"); if (pl && pl.nextElementSibling && pl.nextElementSibling.classList.contains("hide-en-off")) t.setAttribute("aria-pressed", "true");
  });

  Exercises.init(document, data.exercises, function (idx, score, max) {
    var l = Store.lesson(id); l.ex[idx] = { s: score, m: max }; Store.save();
  });

  // self-check
  var sc = document.querySelector("[data-selfcheck]");
  if (sc) {
    sc.querySelectorAll("[data-sc]").forEach(function (li) {
      var i = +li.dataset.sc;
      li.querySelectorAll(".chip").forEach(function (c) {
        if (L.sc && L.sc[i] != null) c.setAttribute("aria-pressed", String(+c.dataset.v === L.sc[i]));
        c.addEventListener("click", function () {
          li.querySelectorAll(".chip").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
          c.setAttribute("aria-pressed", "true");
          var l = Store.lesson(id); l.sc = l.sc || []; l.sc[i] = +c.dataset.v; Store.save();
        });
      });
    });
  }
  var fin = document.querySelector("[data-finish]");
  if (fin) fin.addEventListener("click", function () {
    var l = Store.lesson(id), n = document.querySelectorAll("[data-sc]").length;
    var rated = (l.sc || []).filter(function (v) { return v != null; }).length;
    if (rated < n) { toast("Rate each statement first (" + rated + " of " + n + " done)."); var first = document.querySelector("[data-sc] .chip"); return; }
    l.done = true; l.doneAt = Date.now();
    var phrases = Array.prototype.map.call(document.querySelectorAll(".item.say[data-card]"), function (x) { return x.dataset.card; });
    var weak = (l.sc || []).some(function (v) { return v < 2; });
    Store.addCards(data.vocab.concat(phrases), id, false);
    if (weak) Store.addCards(phrases, id, true);
    var s = Store.load(); s.last = { href: data.next.replace(/^\.\.\//, "").replace(/^(\d+-\d+\.html)$/, "leccion/$1"), label: "Next: " + (data.next.indexOf("examen") >= 0 ? "unit test" : "the next lesson"), at: Date.now(), lesson: id, finished: true };
    Store.save();
    var yes = (l.sc || []).filter(function (v) { return v === 2; }).length;
    document.querySelector("[data-summary-text]").textContent = "You rated " + yes + " of " + n + " goals as achieved." + (weak ? " The phrases for the others are due in Repaso today." : " Your new words and phrases are in Repaso.");
    document.querySelector("[data-summary]").hidden = false;
    document.querySelector("[data-finish-row]").hidden = true;
    updateDue();
    document.querySelector("[data-summary] a").focus();
  });
  if (L.done) {
    var sum = document.querySelector("[data-summary]");
    if (sum) { document.querySelector("[data-summary-text]").textContent = "You finished this lesson. You can go through any step again."; sum.hidden = false; document.querySelector("[data-finish-row]").hidden = true; }
  }

  // Arriving at step 1 keeps the title, the can-do goal and the time in view; resuming at a
  // later step scrolls to it.
  var m = location.hash.match(/paso-(\d)/);
  var start = m ? +m[1] : (L.done ? 1 : L.step || 1);
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  show(start, start > 1);
  // the browser jumps to the #paso-1 anchor after load; undo that at step 1
  if (start === 1) { window.scrollTo(0, 0); window.addEventListener("load", function () { setTimeout(function () { window.scrollTo(0, 0); }, 0); }); }
}

// 20-pages.js
// Home, unit and progress pages: lesson statuses, "continue", export/import.
function lessonStatus(id) {
  var l = Store.load().lessons[id];
  if (!l) return "new";
  return l.done ? "done" : "doing";
}
var STATUS_TEXT = { done: "Done", doing: "In progress", new: "Not started" };

function updateDue() {
  var n = Store.dueCount();
  document.querySelectorAll("[data-due]").forEach(function (b) { b.textContent = n; b.hidden = !n; b.setAttribute("aria-label", n + " cards due"); });
}

function paintStatuses() {
  var tpl = document.getElementById("st-icons");
  document.querySelectorAll("[data-status]").forEach(function (el) {
    var key = el.dataset.status, st;
    if (key.indexOf("test-") === 0) { var t = Store.load().tests[key.slice(5)]; st = t ? (t.best >= 70 ? "done" : "doing") : "new"; }
    else st = lessonStatus(key);
    if (el.classList.contains("st") && tpl) {
      el.className = "st st-" + st;
      el.innerHTML = tpl.content.querySelector('[data-k="' + st + '"]').innerHTML + '<span class="st-text">' + (st === "new" ? "New" : STATUS_TEXT[st]) + "</span>";
    } else {
      el.className = "status " + st;
      el.textContent = st === "new" ? "" : STATUS_TEXT[st];
    }
  });
}

function initHome() {
  paintStatuses();
  document.querySelectorAll(".unit-card[data-lessons]").forEach(function (card) {
    var ids = card.dataset.lessons.split(","), done = ids.filter(function (i) { return lessonStatus(i) === "done"; }).length;
    var bar = card.querySelector("[data-unit-bar]"), cnt = card.querySelector("[data-unit-count]");
    if (bar) bar.style.width = (100 * done / ids.length) + "%";
    if (cnt) cnt.textContent = done + " of " + ids.length + (ids.length === 1 ? " lesson" : " lessons");
  });
  var s = Store.load();
  if (s.last && s.last.href) {
    var box = document.querySelector("[data-continue]");
    box.hidden = false;
    box.querySelector("[data-continue-label]").textContent = s.last.label;
    box.querySelector("[data-continue-link]").href = s.last.href;
    var start = document.querySelector("[data-start]");
    if (start) start.querySelector(".btn-primary").outerHTML = "";
  }
}

function initProgress() {
  var s = Store.load(), ids = (COURSE.lessons || []).map(function (l) { return l.id; });
  var done = ids.filter(function (i) { return lessonStatus(i) === "done"; }).length;
  var cards = Object.keys(s.deck).length, due = Store.dueCount(), tests = Object.keys(s.tests).length;
  document.querySelector("[data-stats]").innerHTML =
    '<div class="stat"><b>' + done + " / " + ids.length + "</b><span>lessons finished</span></div>" +
    '<div class="stat"><b>' + tests + "</b><span>tests taken</span></div>" +
    '<div class="stat"><b>' + cards + '</b><span>cards in <span lang="es">Repaso</span></span></div>' +
    '<div class="stat"><b>' + due + "</b><span>cards due now</span></div>";
  var LBL = ['<span class="tag-no" lang="es">Todavía no</span>', '<span class="tag-almost" lang="es">Casi</span>', '<span class="tag-yes" lang="es">Lo logré</span>'];
  document.querySelectorAll("[data-cando]").forEach(function (td) {
    var l = s.lessons[td.dataset.cando];
    if (!l || !l.sc || !l.sc.length) return;
    var v = l.sc.filter(function (x) { return x != null; });
    if (!v.length) return;
    var avg = v.reduce(function (a, b) { return a + b; }, 0) / v.length;
    td.innerHTML = LBL[avg >= 1.75 ? 2 : avg >= 0.9 ? 1 : 0];
  });
  document.querySelectorAll("[data-test-score]").forEach(function (td) {
    var t = s.tests[td.dataset.testScore];
    if (t) td.innerHTML = '<span class="' + (t.best >= 70 ? "tag-yes" : "tag-almost") + '">' + t.best + "%</span>";
  });
  document.querySelector("[data-export]").addEventListener("click", function () {
    var blob = new Blob([Store.exportJSON()], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "espanol-en-voz-alta-progreso-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(a); a.click(); a.remove();
    toast("Progress exported.");
  });
  var msg = document.querySelector("[data-import-msg]");
  document.querySelector("[data-import]").addEventListener("change", function (e) {
    var f = e.target.files[0];
    if (!f) return;
    var r = new FileReader();
    r.onload = function () {
      try { Store.merge(JSON.parse(r.result)); msg.textContent = "Imported. Your progress now includes the file's lessons, tests and cards."; setTimeout(function () { location.reload(); }, 1200); }
      catch (err) { msg.textContent = "That file couldn't be imported: " + err.message; }
    };
    r.readAsText(f);
  });
  document.querySelector("[data-reset]").addEventListener("click", function () {
    if (confirm("Delete all your progress in this browser? This can't be undone.")) { Store.reset(); location.reload(); }
  });
}

function initUnit() { paintStatuses(); }

// 40-repaso.js
// Repaso: Leitner review of every card the learner has met (words, phrases, missed test items).
function initRepaso() {
  var s = Store.load(), deck = window.DECK || {}, ids = Object.keys(s.deck).filter(function (k) { return deck[k]; });
  var empty = document.querySelector("[data-repaso-empty]"), main = document.querySelector("[data-repaso]");
  if (!ids.length) { empty.hidden = false; main.hidden = true; return; }
  function counts() {
    var boxes = [0, 0, 0, 0, 0], now = Date.now(), due = 0;
    ids.forEach(function (k) { var c = s.deck[k]; boxes[c.b - 1]++; if (c.due <= now) due++; });
    boxes.forEach(function (n, i) { document.querySelector('[data-box="' + (i + 1) + '"]').textContent = n; });
    document.querySelector("[data-due-count]").textContent = due;
    document.querySelector("[data-start-review]").disabled = !due;
    updateDue();
    return due;
  }
  counts();
  // card list grouped by lesson
  var byLesson = {};
  ids.forEach(function (k) { var src = s.deck[k].src || deck[k].src; (byLesson[src] = byLesson[src] || []).push(k); });
  var titles = {}; (COURSE.lessons || []).forEach(function (l) { titles[l.id] = l.t; });
  document.querySelector("[data-card-list]").innerHTML = Object.keys(byLesson).sort(function (a, b) {
    var pa = a.split("-").map(Number), pb = b.split("-").map(Number); return pa[0] - pb[0] || pa[1] - pb[1];
  }).map(function (src) {
    return '<details class="model"><summary>' + (titles[src] ? 'Lesson ' + src.replace("-", ".") + ' · <span lang="es">' + esc(titles[src]) + "</span>" : esc(src)) + " (" + byLesson[src].length + ")</summary><div><ul class=\"vocab\">" +
      byLesson[src].map(function (k) { var c = deck[k]; return '<li><button class="play" type="button" data-audio="' + c.a + '" aria-label="Escuchar: ' + esc(c.es) + '">' + playIcons() + '</button><span><span class="es" lang="es">' + esc(c.es) + '</span><span class="en">' + esc(c.en) + " · box " + s.deck[k].b + "</span></span></li>"; }).join("") +
      "</ul></div></details>";
  }).join("");

  var session = document.querySelector("[data-session]"), queue = [], cur = null, right = 0, seen = 0;
  function start(all) {
    var now = Date.now();
    queue = ids.filter(function (k) { return all || s.deck[k].due <= now; });
    queue.sort(function (a, b) { return s.deck[a].b - s.deck[b].b || Math.random() - 0.5; });
    queue = queue.slice(0, 20);
    right = 0; seen = 0;
    session.hidden = false;
    nextCard();
    session.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }
  function nextCard() {
    cur = queue.shift();
    if (!cur) {
      session.innerHTML = '<div class="card-flash"><p class="front">Session done: ' + right + " of " + seen + ' known.</p><p class="muted">Cards you missed come back today; the others move up a box.</p><div class="btn-row" style="justify-content:center"><a class="btn btn-secondary" href="index.html">Course map</a></div></div>';
      counts();
      return;
    }
    var c = deck[cur], esFirst = document.querySelector("[data-direction]").checked;
    session.innerHTML = '<div class="card-flash"><p class="small muted">Card ' + (seen + 1) + " · " + (queue.length) + " left after this</p>" +
      (esFirst ? '<p class="front"><span lang="es">' + esc(c.es) + '</span></p><p class="muted">What does it mean?</p>'
        : '<p class="front">' + esc(c.en) + '</p><p class="muted">Say it in Spanish, then check.</p>') +
      '<div class="back" hidden><p class="es" lang="es" style="margin:0">' + esc(c.es) + '</p><p class="en" style="margin:4px 0 0">' + esc(c.en) + '</p><p style="margin-top:var(--s3)"><button class="play" type="button" data-audio="' + c.a + '" aria-label="Escuchar: ' + esc(c.es) + '">' + playIcons() + "</button></p></div>" +
      '<div class="btn-row" style="justify-content:center" data-flip-row><button class="btn btn-primary" type="button" data-flip>Show answer</button></div>' +
      '<div class="btn-row" style="justify-content:center" data-grade-row hidden><button class="btn btn-secondary" type="button" data-knew="0">✕ I didn\'t know it</button><button class="btn btn-primary" type="button" data-knew="1">✓ I knew it</button></div>' +
      '<p class="src">From lesson ' + esc((s.deck[cur].src || "").replace("-", ".")) + "</p></div>";
    session.querySelector("[data-flip]").focus();
    if (esFirst) Audio_.play(c.a);
  }
  session.addEventListener("click", function (e) {
    if (e.target.closest("[data-flip]")) {
      session.querySelector(".back").hidden = false;
      session.querySelector("[data-flip-row]").hidden = true;
      session.querySelector("[data-grade-row]").hidden = false;
      if (!document.querySelector("[data-direction]").checked) Audio_.play(deck[cur].a);
      session.querySelector('[data-knew="1"]').focus();
    }
    var k = e.target.closest("[data-knew]");
    if (k) { var knew = k.dataset.knew === "1"; Store.review(cur, knew); seen++; if (knew) right++; s = Store.load(); nextCard(); }
  });
  document.querySelector("[data-start-review]").addEventListener("click", function () { start(false); });
  document.querySelector("[data-start-all]").addEventListener("click", function () { start(true); });
}

function playIcons() {
  return '<svg class="i-play" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg><svg class="i-pause" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="6.5" y="5" width="4" height="14" rx="1" fill="currentColor"/><rect x="13.5" y="5" width="4" height="14" rx="1" fill="currentColor"/></svg>';
}

// 50-andamio.js
// Andamio: say-it-in-Spanish practice with the scaffold structures the learner has unlocked.
function initAndamio() {
  var st = window.STRUCTURES || [], s = Store.load();
  function unlocked(x) { var l = s.lessons[x.lesson]; return l && l.done; }
  document.querySelectorAll("[data-lock]").forEach(function (el) {
    var ok = s.lessons[el.dataset.lock] && s.lessons[el.dataset.lock].done;
    el.className = "status " + (ok ? "done" : "");
    el.textContent = ok ? "· Unlocked" : "· Unlocks when you finish that lesson";
  });
  var box = document.querySelector("[data-andamio-session]");
  document.querySelector("[data-andamio-start]").addEventListener("click", function () {
    var pool = [];
    st.filter(unlocked).forEach(function (x) { x.ex.forEach(function (e) { pool.push({ s: x, e: e }); }); });
    box.hidden = false;
    if (!pool.length) {
      box.innerHTML = '<div class="callout info"><p>No structures unlocked yet. The first one, <i lang="es">necesitar + infinitivo</i>, unlocks with lesson 3.1. Until then, you can listen to the examples on this page.</p></div>';
      return;
    }
    pool.sort(function () { return Math.random() - 0.5; });
    pool = pool.slice(0, 10);
    var i = 0, right = 0;
    function render() {
      if (i >= pool.length) { box.innerHTML = '<div class="card-flash"><p class="front">' + right + " of " + pool.length + ' right.</p><p class="muted">Practice a little every day: the structures become automatic.</p></div>'; return; }
      var p = pool[i];
      box.innerHTML = '<div class="exercise"><header><h3><span class="kind">' + (i + 1) + " of " + pool.length + ' · <span lang="es">' + esc(p.s.es) + "</span></span>" + esc(p.e.en) + '</h3></header>' +
        '<div class="item say"><div class="btn-row">' + (SR ? '<button class="btn btn-secondary btn-sm mic" type="button" data-amic>Say it</button>' : "") +
        '<input type="text" lang="es" autocomplete="off" spellcheck="false" aria-label="Type it in Spanish" placeholder="Type it in Spanish" style="flex:1;min-width:12ch"><button class="btn btn-ghost btn-sm" type="button" data-acheck>Check</button></div>' +
        '<div class="heard" aria-live="polite"></div><div class="answer" hidden><div class="ex"><button class="play" type="button" data-audio="' + p.e.a + '" aria-label="Escuchar">' + playIcons() + '</button><span class="es" lang="es">' + esc(p.e.es[0]) + '</span></div></div><div class="fb" aria-live="polite"></div></div>' +
        '<div class="ex-actions"><button class="btn btn-ghost btn-sm" type="button" data-areveal>Show answer</button><button class="btn btn-primary btn-sm" type="button" data-anext hidden>Next</button></div></div>';
      var inp = box.querySelector("input");
      inp.focus();
      function result(g, said) {
        box.querySelector(".answer").hidden = false;
        box.querySelector("[data-anext]").hidden = false;
        box.querySelector("[data-areveal]").hidden = true;
        if (said) inp.value = said;
        if (said) box.querySelector(".heard").innerHTML = 'You said: <span lang="es">' + esc(said) + "</span>";
        feedback(box.querySelector(".fb"), g, g === "no" ? " Listen to the model and say it again." : "");
        if (g !== "no") right++;
        Audio_.play(p.e.a);
        box.querySelector("[data-anext]").focus();
      }
      box.querySelector("[data-acheck]").onclick = function () { if (inp.value.trim()) result(grade(inp.value, p.e.es) === "no" && gradeSpoken(inp.value, p.e.es) !== "no" ? "almost" : grade(inp.value, p.e.es)); };
      inp.onkeydown = function (e) { if (e.key === "Enter") box.querySelector("[data-acheck]").click(); };
      box.querySelector("[data-areveal]").onclick = function () { result("no"); };
      box.querySelector("[data-anext]").onclick = function () { i++; render(); };
      var mic = box.querySelector("[data-amic]");
      if (mic) mic.onclick = function () {
        mic.classList.add("listening"); box.querySelector(".heard").textContent = "Listening…";
        var r = listen(function (alts) { var best = "no", said = alts[0]; alts.forEach(function (a) { var g = gradeSpoken(a, p.e.es); if (g === "ok" || (g === "almost" && best === "no")) { best = g; said = a; } }); result(best, said); },
          function (err) { mic.classList.remove("listening"); if (err && err !== "aborted") box.querySelector(".heard").textContent = "Speech recognition isn't available right now. Type it instead."; });
        if (!r) { mic.classList.remove("listening"); box.querySelector(".heard").textContent = "Speech recognition isn't available. Type it instead."; }
      };
    }
    render();
  });
}

// 60-test.js
// Unit tests and level exams: auto-scored sections, results, missed items to Repaso.
function initTest() {
  var data = JSON.parse(document.getElementById("test-data").textContent);
  var results = {};
  Exercises.init(document, data.exercises, function (idx, score, max) { results[idx] = { s: score, m: max }; });
  var btn = document.querySelector("[data-finish-test]"), out = document.querySelector("[data-results]");
  btn.addEventListener("click", function () {
    var total = 0, max = 0, bySection = {}, pending = 0;
    data.exercises.forEach(function (ex, i) {
      if (ex.type === "build") return;
      var r = results[i], sec = data.sections[i];
      var m = (ex.items || []).length;
      if (!r) pending++;
      var sc = r ? r.s : 0;
      total += sc; max += m;
      bySection[sec] = bySection[sec] || { s: 0, m: 0 };
      bySection[sec].s += sc; bySection[sec].m += m;
    });
    if (pending && !btn.dataset.confirmed) {
      btn.dataset.confirmed = "1";
      toast(pending + " exercise" + (pending > 1 ? "s are" : " is") + " not finished. Press the button again to see your results anyway.");
      return;
    }
    // every missed item's phrase goes to Repaso, due now
    var missed = [];
    document.querySelectorAll(".item[data-card]").forEach(function (it) {
      var bad = it.querySelector(".opt.wrong, .gap.wrong, .feedback.no") || (!it.dataset.done && !it.querySelector(".feedback"));
      if (bad) missed.push(it.dataset.card);
    });
    Store.addCards(missed, data.id, true);
    var pct = max ? Math.round(100 * total / max) : 0;
    var s = Store.load(), prev = s.tests[data.id];
    s.tests[data.id] = { best: Math.max(pct, prev ? prev.best : 0), last: pct, at: Date.now() };
    Store.save();
    updateDue();
    out.hidden = false;
    out.innerHTML = '<h2>Your results</h2><p class="score-big">' + pct + '%</p><p>' + total + " of " + max + " points on the auto-scored parts. " +
      (pct >= 70 ? '<b lang="es">¡Superado!</b> You have reached the goals of this ' + (data.exam ? "level" : "unit") + "." : "Not yet at 70%. Review the lessons for the sections below, then try again.") + "</p>" +
      '<table><thead><tr><th scope="col">Section</th><th scope="col">Score</th></tr></thead><tbody>' +
      Object.keys(bySection).map(function (k) { var b = bySection[k]; return "<tr><td>" + esc(k) + "</td><td>" + b.s + " / " + b.m + "</td></tr>"; }).join("") +
      "</tbody></table>" +
      "<p style=\"margin-top:var(--s4)\">" + (missed.length ? missed.length + " phrases from items you missed are now due in <a href=\"../repaso.html\" lang=\"es\">Repaso</a>." : "No missed items: nothing new for Repaso.") +
      " Writing and speaking are checked with your own checklists above.</p>" +
      '<div class="btn-row"><a class="btn btn-primary" href="' + data.next + '">' + esc(data.nextLabel) + '</a><a class="btn btn-secondary" href="../index.html">Course map</a></div>';
    out.scrollIntoView({ block: "start" });
    out.setAttribute("tabindex", "-1"); out.focus({ preventScroll: true });
  });
}

// 90-init.js
// Start-up: shared behaviours, then the page's own.
(function () {
  function go() {
    var page = document.body.dataset.page, root = document.body.dataset.root || "";
    Audio_.init(root);
    initSaved(); initAccents(); initTableHints(); window.addEventListener("resize", initTableHints); initCopy(); initGlosses(); initRecorders(); updateDue();
    var fn = { home: initHome, unit: initUnit, lesson: initLesson, progress: initProgress, repaso: initRepaso, andamio: initAndamio, test: initTest }[page];
    if (fn) fn();
    if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
      navigator.serviceWorker.register(root + "sw.js").catch(function () { /* offline support is optional */ });
    }
  }
  // deck.js (Repaso/Andamio pages) is deferred too and runs after this file; DOMContentLoaded
  // fires only once every deferred script has run
  if (document.readyState === "complete") go(); else document.addEventListener("DOMContentLoaded", go);
})();

})();