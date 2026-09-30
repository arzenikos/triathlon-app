<div align="center">
   <img width="100" height="100" alt="triathlon-app-logo" src="https://github.com/user-attachments/assets/0979260e-0e43-4e11-965c-1cca5e793c0b" />

   # Sikad | Triathlon App 🏊‍♂️🚴‍♂️🏃‍♂️

![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-%236DA55F.svg?style=for-the-badge&logo=node.js&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-%23C21325.svg?style=for-the-badge&logo=jest&logoColor=white)


> BCDE211 Best Programming Practices - JavaScript
>
> A browser-based timer for recording triathlon training drills in the sequence **Run → Bike → Swim** Built with **React JS / TypeScript** to help triathletes track and analyze their training across swimming, cycling, and running. Designed for both casual enthusiasts and competitive athletes to log sessions, monitor progress, and visualize performance trends.

~✦~

</div>

## Branch Note
- **Branch**: `feature/timer-segment`  
- **Purpose**:
- **Release Version**: `v1.3.0`
- **Key Points**: []
Merges into `main` once stable
> `⎇` See [ Branch Info](https://github.com/arzenikos/project-name/wiki) for more information


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

---

Created by Arsenie — 2024