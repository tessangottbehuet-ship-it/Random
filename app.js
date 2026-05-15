const objectionBank = [
  {
    category: "price",
    objection: "This is too expensive for me right now.",
    suggested: "Totally fair. Budget matters. If you're open to it, I can show a couple options so you can choose what feels comfortable without overcommitting.",
    notes: [
      "You validate their concern instead of arguing with it.",
      "You offer choice, which lowers pressure.",
      "You keep control with the customer by saying 'if you're open to it'."
    ]
  },
  { category: "price", objection: "I can’t justify paying this every month.", suggested: "I hear you. Monthly cost is real. Would it help if we looked at a lean starter option first, then adjust later if your situation changes?", notes: ["Shows you understand real-life cash flow.", "Offers a smaller first step.", "Avoids all-or-nothing pressure."] },
  { category: "price", objection: "I found something cheaper online.", suggested: "That makes sense to compare. Price is important. If you want, we can quickly compare what each plan actually covers so you can spot any trade-offs before deciding.", notes: ["Does not shame them for shopping around.", "Moves from price-only to value comparison.", "Frames you as a helpful guide, not a closer."] },

  { category: "think", objection: "I need to think about it.", suggested: "Absolutely, take your time. Before you go, would it help if I quickly summarize the top two options so your decision feels easier later?", notes: ["Respects their pace.", "Offers support without pressure.", "Creates clarity so they don't leave confused."] },
  { category: "think", objection: "Let me sleep on it.", suggested: "Totally reasonable. Big choices deserve a pause. What would you want to feel clear about before saying yes or no?", notes: ["Shows emotional intelligence.", "Invites them to name decision criteria.", "Keeps the conversation collaborative."] },
  { category: "think", objection: "Can I get back to you next week?", suggested: "Of course. Would you like me to send a short recap so you have everything in one place when you revisit it?", notes: ["Gives space.", "Makes follow-up easy and low-friction.", "Reduces ghosting by offering practical help."] },

  { category: "partner", objection: "I need to talk to my spouse first.", suggested: "That makes complete sense. Want me to send a simple summary you can review together, and if helpful we can do a short three-way call later?", notes: ["Respects shared decision-making.", "Supports the relationship dynamic.", "Offers a practical next step."] },
  { category: "partner", objection: "My partner handles these decisions.", suggested: "Got it, thanks for telling me. If you'd like, I can tailor the info for them and keep it short so it's easy to review.", notes: ["No ego, no defensiveness.", "You adapt to their decision process.", "You stay helpful and efficient."] },

  { category: "insured", objection: "I already have insurance.", suggested: "That's great—you've already taken action. If you're open, we can do a quick check to see if anything changed since you set it up.", notes: ["Compliments their responsibility.", "Avoids attacking their current plan.", "Positions you as an advisor, not a replacer."] },
  { category: "insured", objection: "My current policy is fine.", suggested: "Makes sense. If it still fits, that's a win. We can do a quick side-by-side just to confirm you're still getting the protection you want.", notes: ["Doesn't challenge them aggressively.", "Offers verification, not fear.", "Reinforces customer control."] },
  { category: "insured", objection: "I’ve been with my provider forever.", suggested: "Loyalty is valuable. You don't have to switch today—would a quick comparison be useful just for peace of mind?", notes: ["Honors loyalty.", "Removes pressure to switch immediately.", "Invites a low-risk next step."] },

  { category: "distrust", objection: "No offense, but salespeople always push too hard.", suggested: "No offense taken—I get why you'd feel that way. My goal is to help you make a good decision, even if that decision is not with me.", notes: ["Disarms tension.", "Signals integrity and low pressure.", "Builds trust through honesty."] },
  { category: "distrust", objection: "This sounds like a sales pitch.", suggested: "Fair call-out. Let's slow it down. Tell me what matters most to you, and I'll keep this focused on that only.", notes: ["Accepts feedback directly.", "Pivots to customer priorities.", "Shows flexibility and respect."] },
  { category: "distrust", objection: "I don’t trust insurance companies.", suggested: "You're not alone in feeling that. Would it help if I walk through exactly how claims work and where people usually get surprised?", notes: ["Normalizes their concern.", "Offers transparency.", "Turns vague distrust into specific questions."] },

  { category: "timing", objection: "This is bad timing.", suggested: "I hear you. We can keep this light. Want to set a better time, or would a 2-minute summary now be more useful?", notes: ["Respects their reality.", "Gives clear options.", "Keeps momentum without being pushy."] },
  { category: "timing", objection: "I have too much going on this month.", suggested: "Totally understandable. We can pause and circle back when life feels calmer. Would next month be better, or should I check in by email?", notes: ["Shows empathy for life context.", "Lets them choose follow-up style.", "Reduces pressure while preserving relationship."] },
  { category: "timing", objection: "Can we revisit this after busy season?", suggested: "Absolutely. Timing matters. Let's set a reminder now so it doesn't get lost, and I'll keep the follow-up short and useful.", notes: ["Respects their calendar.", "Creates a clear, low-pressure next step.", "Shows professionalism without chasing."] },

  { category: "change", objection: "I don’t like changing things that already work.", suggested: "That makes sense. Change can be annoying. We don't have to change anything today—just see whether you have a gap worth fixing.", notes: ["Validates resistance to change.", "Removes immediate pressure.", "Frames review as low risk."] },
  { category: "change", objection: "I’m worried switching will be a hassle.", suggested: "Good point. Process matters. If you want, I can map out the exact steps so you can judge whether the effort is worth it.", notes: ["Acknowledges operational friction.", "Provides clarity and predictability.", "Keeps decision in their hands."] },
  { category: "change", objection: "What if I make the wrong choice?", suggested: "That's a smart question. We can focus on your must-haves first, then rule out options that miss those—so the decision feels safer.", notes: ["Treats fear as wisdom, not weakness.", "Uses a simple decision framework.", "Builds confidence through structure."] }
];

const categories = {
  all: "All categories",
  price: "Price",
  think: "Need to think about it",
  partner: "Spouse/partner decision",
  insured: "Already insured",
  distrust: "Distrust of salespeople",
  timing: "Bad timing",
  change: "Fear of change"
};

const aggressivePatterns = [
  /you need to/i,
  /you have to/i,
  /sign today/i,
  /last chance/i,
  /don't be stupid/i,
  /if you cared/i,
  /everyone does this/i,
  /trust me/i,
  /honestly it's simple/i,
  /why would you/i,
  /just do it/i
];

const categorySelect = document.getElementById("categorySelect");
const newObjectionBtn = document.getElementById("newObjectionBtn");
const objectionText = document.getElementById("objectionText");
const userResponse = document.getElementById("userResponse");
const checkPushyBtn = document.getElementById("checkPushyBtn");
const pushyFeedback = document.getElementById("pushyFeedback");
const showSuggestionBtn = document.getElementById("showSuggestionBtn");
const suggestionPanel = document.getElementById("suggestionPanel");
const suggestedResponse = document.getElementById("suggestedResponse");
const coachingNotes = document.getElementById("coachingNotes");

let currentObjection = null;

function fillCategorySelect() {
  Object.entries(categories).forEach(([key, label]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = label;
    categorySelect.appendChild(option);
  });
}

function pickRandomObjection() {
  const selected = categorySelect.value;
  const pool = selected === "all" ? objectionBank : objectionBank.filter(item => item.category === selected);
  const choice = pool[Math.floor(Math.random() * pool.length)];
  currentObjection = choice;

  objectionText.textContent = choice.objection;
  suggestionPanel.classList.add("hidden");
  pushyFeedback.textContent = "";
  pushyFeedback.className = "feedback";
}

function renderSuggestion() {
  if (!currentObjection) return;
  suggestedResponse.textContent = currentObjection.suggested;
  coachingNotes.innerHTML = "";

  currentObjection.notes.forEach(note => {
    const li = document.createElement("li");
    li.textContent = note;
    coachingNotes.appendChild(li);
  });

  suggestionPanel.classList.remove("hidden");
}

function checkPushiness() {
  const text = userResponse.value.trim();
  if (!text) {
    pushyFeedback.textContent = "Type a response first so I can review it.";
    pushyFeedback.className = "feedback warn";
    return;
  }

  const hits = aggressivePatterns.filter(pattern => pattern.test(text));
  const exclamationCount = (text.match(/!/g) || []).length;

  if (hits.length >= 2 || exclamationCount >= 3) {
    pushyFeedback.textContent = "Warning: this sounds pushy or scripted. Try softer phrasing, ask a question, and give the customer room to choose.";
    pushyFeedback.className = "feedback bad";
  } else if (hits.length === 1 || exclamationCount === 2) {
    pushyFeedback.textContent = "Mild warning: parts of this may feel pressure-heavy. Consider replacing commands with curiosity and empathy.";
    pushyFeedback.className = "feedback warn";
  } else {
    pushyFeedback.textContent = "Nice—this sounds respectful and human.";
    pushyFeedback.className = "feedback good";
  }
}

fillCategorySelect();
pickRandomObjection();

newObjectionBtn.addEventListener("click", pickRandomObjection);
showSuggestionBtn.addEventListener("click", renderSuggestion);
checkPushyBtn.addEventListener("click", checkPushiness);
