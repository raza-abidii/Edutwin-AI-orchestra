# learning-assistant

## Overview
The Learning Assistant project is designed to help students manage their study materials effectively. It allows users to upload a syllabus in PDF format, which is then processed to generate structured notes, flashcards, and a weekly study plan.

## Features
- **PDF Upload**: Students can upload their syllabus in PDF format.
- **Notes Generation**: Summarizes the syllabus into structured notes.
- **Flashcards Creation**: Generates multiple-choice questions or flashcards from the syllabus content.
- **Study Planner**: Outputs a basic weekly study plan in JSON format.
- **Dashboard**: A single-page UI with tabs for Notes, Quizzes, and Study Plan.

## Tech Stack
- **Backend**: Python (FastAPI), LangChain, OpenAI GPT-4o-mini
- **Frontend**: Next.js, Tailwind CSS
- **Deployment**: 
  - Backend: Railway/Render or local with ngrok
  - Frontend: Vercel

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Run the FastAPI application:
   ```
   uvicorn main:app --reload
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Run the Next.js application:
   ```
   npm run dev
   ```

## Usage
1. Upload your syllabus PDF through the `/upload` endpoint.
2. Access the generated notes, quizzes, and study plan through the frontend dashboard.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.