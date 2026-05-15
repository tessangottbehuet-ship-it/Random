# Objection Detox

Objection Detox is a beginner-friendly practice web app for insurance sales coaching.

It helps you practice responding to common customer objections in a calm, human way without sounding pushy, fake, or robotic.

## What it does

- Shows a random objection.
- Lets you choose a category.
- Lets you type your own response.
- Includes a **Too Pushy?** checker that flags aggressive, guilt-trippy, dismissive, or scripted language.
- Reveals a better suggested response.
- Explains coaching notes for why that response works.

Includes 20+ sample objections across categories like:

- Price
- Need to think about it
- Spouse/partner decision
- Already insured
- Distrust of salespeople
- Bad timing
- Fear of change

## Project structure

```text
.
├── index.html   # Page layout and UI sections
├── styles.css   # Clean, friendly styling
├── app.js       # Objections data, randomizer, pushy checker, interactions
└── README.md    # This guide
```

## How to run (brand-new beginner version)

### Option 1: Easiest (just open it)

1. Open the project folder.
2. Double-click `index.html`.
3. The app opens in your web browser.

### Option 2: Run a tiny local web server (recommended habit)

If you have Python installed:

1. Open a terminal in this folder.
2. Run:

```bash
python3 -m http.server 8000
```

3. Open your browser to:

```text
http://localhost:8000
```

4. Stop the server with `Ctrl + C` in the terminal.

## How to expand later

- Add more objections in `app.js` inside `objectionBank`.
- Add new categories by updating:
  - the `categories` object
  - objections using that new `category` value
- Improve the pushy checker by adding patterns in `aggressivePatterns`.
- Save practice history by adding `localStorage`.
- Track coaching scores (empathy, clarity, confidence).

## Notes for coaching tone

The suggested responses are written to sound:

- Confident but not forceful
- Human and conversational
- Empathetic and respectful
- Practical (clear next step)

No corporate buzzwords, no pressure tactics.
