# Task Manager App

A simple and interactive task management application built with **React** and **TypeScript**. This project serves as a practical demonstration of various core concepts in front-end development, including managing state with React hooks, filtering data, handling user input, and applying styling with CSS.

## Features

- **Add Tasks**: Users can input new tasks and add them to the task list.
- **Toggle Task Completion**: Users can mark tasks as completed or pending by checking/unchecking a checkbox.
- **Delete Tasks**: Users can remove tasks from the list by clicking the trash icon.
- **Filter Tasks**: Users can filter tasks by their completion status (All, Completed, Pending).
- **Responsive Design**: The app adjusts gracefully to different screen sizes, ensuring a seamless experience on both mobile and desktop.

## Tech Stack

- **React**: The app is built using React, leveraging the power of its component-based architecture for efficient rendering.
- **TypeScript**: TypeScript is used for static typing, improving code safety and providing better development experiences, especially in larger projects.
- **CSS**: Custom CSS styling is applied to the app, ensuring a visually appealing and user-friendly interface.

## What I Learned

This project allowed me to explore and learn several important concepts in modern web development:

1. **React and State Management**:

   - Learned to use React's `useState` hook to manage application state (tasks and filter).
   - Utilized functional components and passed down functions and data via props to child components.

2. **TypeScript**:

   - Introduced static typing to the project using TypeScript, ensuring better code quality and reducing runtime errors.
   - Defined interfaces (`Task` and `FilterProps`) to clearly define the structure of data passed between components, which enhanced the maintainability of the app.

3. **Event Handling**:

   - Implemented functions to handle user interactions, such as adding, toggling, and deleting tasks.
   - Learned how to pass functions as props to child components and update state based on user actions.

4. **Conditional Rendering**:

   - Used conditional rendering to display tasks based on the filter selected (All, Completed, Pending).
   - Learned to handle dynamic rendering based on application state.

5. **CSS Styling**:

   - Applied CSS to create a clean, modern, and user-friendly interface.
   - Worked with both global and component-level styles, using modern CSS techniques like flexbox and media queries for responsive design.

6. **Component Structure and Reusability**:

   - Broke down the app into small, reusable components (`TaskForm`, `TaskList`, `TaskItem`, `Filter`), promoting maintainability and scalability.
   - Enhanced reusability by keeping components modular and focused on a single responsibility.

7. **User Input and Validation**:
   - Handled form input and validation for task creation, ensuring that only valid tasks are added to the list.
   - Learned how to manage form inputs and control their state within React components.
