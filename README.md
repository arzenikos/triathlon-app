# Triathlon App 🏊‍♂️🚴‍♂️🏃‍♂️

![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Claude](https://img.shields.io/badge/Claude-%23D97757.svg?style=for-the-badge&logo=anthropic&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-%236DA55F.svg?style=for-the-badge&logo=node.js&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-%23C21325.svg?style=for-the-badge&logo=jest&logoColor=white)


> BCDE211 Best Programming Practices - JavaScript
>
> A web application built with **JavaScript/ES6** to help triathletes track and analyze their training across swimming, cycling, and running. Designed for both casual enthusiasts and competitive athletes to log sessions, monitor progress, and visualize performance trends.  

---

## Branch Note
- **Branch**: `sandbox/triathlon_1.0`  
- **Purpose**:
- **Release Version**: `v1.3.0`
- **Key Points**: []
Merges into `release/v3.0.0` once stable
> `⎇` See [ Branch Info](https://github.com/arzenikos/project-name/wiki) for more information

## Project Structure

<!-- START_STRUCTURE -->
```text
src/
├── training.js                 # Training model
├── drill.js                   # TrainingDrill model
├── storage.js                 # Storage facade
├── StorageManager.js          # Singleton storage manager
├── LocalStorageStrategy.js    # LocalStorage implementation
├── IndexedDBStrategy.js       # IndexedDB implementation
├── TrainingDrillFactory.js    # Factory for drill creation
├── TrainingViewModel.js       # MVVM ViewModel for training
└── DrillViewModel.js          # MVVM ViewModel for drills

test/
├── training.test.js           # Training tests
├── drill.test.js              # Drill tests
└── storage.test.js            # Storage tests

index.html                     # Interactive UI
```
<!-- END_STRUCTURE -->

## Features

### Core Functionality
- Create training sessions with date and location
- Add training drills with swimming, running, and cycling durations
- Calculate total duration and average speed
- Track goal achievement (37.16 kph target speed)
- Sort drills by time
- Remove drills from sessions
- Update drill values

### Storage Options
- **LocalStorage**: Quick, lightweight storage for browser session
- **IndexedDB**: Structured, persistent storage for complex data queries

### User Interface
- Modern, responsive design with gradient styling
- Form-based input for creating training sessions and drills
- Real-time performance statistics
- Drill list with detailed metrics
- Goal achievement indicator
- Storage type selector (LocalStorage vs IndexedDB)

## Running Tests

```bash
npm test
```

All 38 Jest tests pass with full coverage.

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

