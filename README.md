# Pomodoro Timer App

The Pomodoro Timer App is a productivity tool that helps users manage their work and break intervals efficiently. It's designed to enhance your focus and productivity by following the Pomodoro Technique, which consists of 25-minute work sessions followed by 5-minute breaks.

## Features

- User Authentication: Users can sign up and log in using their email and password. Google authentication is also available for convenience.
- Pomodoro Timer: The app displays a 25-minute countdown timer for work sessions. Users can reset, pause, and start the timer as needed.
- Break Timer: After completing a 25-minute work session, the app  shows take break when user click on short break it starts break session.
- User-Friendly Interface: The app provides a clean and intuitive user interface, making it easy to manage work and break sessions.

![image](https://github.com/subramaneshwar/pomodoroapp/assets/42493880/2a9a5071-d6ae-41ec-949f-1ca1c88cf294)



## Tech Stack

- **React.js:** Used for building the user interface and managing components.
- **Tailwind CSS:** Utilized for styling and creating a responsive design.
- **React Router:** Enables navigation and routing within the app.
- **Firebase:** Used for user authentication, including email/password and Google authentication.

## Installation

1. Clone this repository.
2. Navigate to the project directory and run `npm install` to install dependencies.
3. Set up Firebase for authentication and create a Firebase project.
4. Configure Firebase in your project by adding the necessary configuration details (Firebase API keys, etc.).
5. Run `npm start` to start the development server.
6. Access the application in your web browser at the provided URL.

## User Authentication

The app uses Firebase Authentication to securely manage user accounts. You can choose to enable both email/password and Google authentication methods for your users.

## Usage

1. Register or log in to the app using your email and password or Google account.
2. Start a work session by clicking the "Start" button on the 25-minute timer.
3. Use the "Pause" button to pause the timer if needed.
4. Click "Reset" to reset the timer to 25 minutes.
5. After completing a work session,it display take break and user can click on short break button a 5-minute break timer will start.
6. Repeat the process to manage your work and break intervals effectively.

Feel free to explore, contribute, and customize the Pomodoro Timer App according to your preferences and needs.

## License

This project is licensed under the [MIT License](LICENSE).

