<div align="center">
   <img width="100" height="100" alt="triathlon-app-logo" src="https://github.com/user-attachments/assets/6d2cb014-580e-4a33-a851-4538446b7bf5" />

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
- **Branch**: `main`  
- **Status**: Ready for Release
- **Release Version**: `v1.3.0`
- **Purpose**: Primary production branch containing finalized, tested features for the Triathlon App.
- **Summary**: Core functionality rebuilt, stale assets removed, and full drill → training workflow implemented.
- **Key Points**: 
   - Rebuilt base app flow; removed unused/stale files across the directory.
   - Added digital timer + segment‑end flag button for Run → Bike → Swim sequence.
   - Implemented drill creation: each completed segment set is saved as a drill.
   - Added training session flow: athlete fills name + location; ID auto‑filled; timestamp captured.
   - Training sessions now saved, displayed in table, and enriched with calculated insights.

> `⎇` See [ Branch Info](https://github.com/arzenikos/triathlon-app/wiki) for more information

## Project Structure

<!-- START_STRUCTURE -->
```text
.
├── README.md
├── babel.config.cjs
├── babel.config.js
├── index.html
├── jest.config.cjs
├── jest.config.js
├── package.json
├── src
│   ├── TrainingSessionStore.js
│   ├── app.js
│   ├── athlete.js
│   ├── styles.css
│   ├── training-session.js
│   └── triathlon.js
├── structure.txt
└── test
    ├── athlete_specs
    ├── specs
    └── triathlon_specs

6 directories, 14 files
```
<!-- END_STRUCTURE -->

## Features

- **Multi-sport Logging** – Record swimming, cycling, and running sessions with distance, duration, and notes.  
- **Progress Tracking** – Visualize improvements over time with charts and summaries.  
- **Responsive Design** – Works on desktop and mobile devices.  
- **TypeScript Integration** – Type-safe codebase for reliability and maintainability.  
- **Customizable Workouts** – Add personalized training plans and goals.  
- **Data Persistence** – Store and retrieve sessions using local storage or an API backend (optional).  


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

## Installation

1. Clone the repository:  

```bash
git clone https://github.com/arsenie-sarmiento/triathlon-app.git
cd triathlon-app
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

## Usage

1. Sign up or log in (if authentication is implemented).
2. Add your training sessions for each sport.
3. Track your weekly/monthly performance via dashboards.
4. Set goals and view charts to monitor your progress.


## Future Improvements
- Integration with external APIs (e.g., Strava, Garmin)
- User authentication & profile management
- Export training data to CSV or PDF
- Mobile app version with React Native
- Automated unit and integration testing with Jest and React Testing Library, with potential CI integration

---

> [!WARNING]
>
> ![IMPORTANT_NOTICE-_Academic_Integrity](https://img.shields.io/badge/IMPORTANT_NOTICE-_Academic_Integrity-%23800000.svg?style=for-the-badge&logoColor=white)
> 
> **BCDE211 - Best Programming Practices (Web and Mobile Development)**
> 
> This portfolio contains original work completed as part of my BCDE211 - Best Programming Practices (Web and Mobile Development) course at Ara Institute of Canterbury. I do not condone plagiarism or academic misconduct in any form. This project is for academic purposes only and is not intended to be copied or used without proper authorisation.
> The university has a STRICT policy on academic misconduct, and I fully support this policy. Any attempt to plagiarize, copy, or use this work as your own will result in serious consequences. Please respect academic integrity and do not attempt to pass off this work as your own.
>
> **Disclaimer**
>
> All the content presented here is the result of my own individual work, and any resemblance to other works is purely coincidental. If you are a student, please refrain from using or copying this work in any way that violates the principles of academic honesty and integrity.

---

Created by Arsenie — 2024
