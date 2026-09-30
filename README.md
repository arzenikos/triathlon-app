# Triathlon Training Tracker

A browser-based timer for recording triathlon training drills in the sequence **Run → Bike → Swim**.

## Project Structure

<!-- START_STRUCTURE -->
```text
src/
├── app.js                     # Timer and application flow
├── TrainingSessionStore.js    # Browser persistence
├── training-session.js        # Duration and speed insights
└── styles.css                 # Responsive app styling

test/
└── specs/session.spec.js      # Session persistence and insight tests

index.html                     # App entry point
```
<!-- END_STRUCTURE -->

## Features

### Recording a session
1. Start the timer for the Run segment.
2. Press the flag button at the end of Run, Bike, and Swim. The timer resets between segments and follows the required sequence.
3. After Swim, the completed set is saved as a drill. Choose to create another drill or save the training session.
4. Enter the athlete name and training location. The athlete ID is filled automatically, and the session records the current time.

Completed drills and training sessions are stored in browser local storage. The session table reports drill count, total duration, average speed, and whether the 37.16 km/h target was met. Speed uses 26.55 km per drill.

## Run locally

```sh
npm install
npm run dev
```

## Running Tests

```bash
npm test -- --runInBand
```

---

> [!WARNING]
> ## Important Notice: Academic Integrity
> **BCDE211 - Best Programming Practices (Web and Mobile Development)**
> 
> This portfolio contains original work completed as part of my BCDE211 - Best Programming Practices (Web and Mobile Development) course at Ara Institute of Canterbury. I do not condone plagiarism or academic misconduct in any form. This project is for academic purposes only and is not intended to be copied or used without proper authorisation.
> The university has a STRICT policy on academic misconduct, and I fully support this policy. Any attempt to plagiarize, copy, or use this work as your own will result in serious consequences. Please respect academic integrity and do not attempt to pass off this work as your own.
>
> ## **Disclaimer**
> All the content presented here is the result of my own individual work, and any resemblance to other works is purely coincidental. If you are a student, please refrain from using or copying this work in any way that violates the principles of academic honesty and integrity.
