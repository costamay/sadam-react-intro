# My React App

This is a React application built with Vite, providing a minimal setup for development with Hot Module Replacement (HMR) and ESLint rules.

## Folder Structure

The project follows a standard React + Vite structure. Below is an explanation of the key directories and files:

- **.gitignore**: Specifies files and directories that Git should ignore (e.g., `node_modules`, build outputs).
- **eslint.config.js**: Configuration file for ESLint, which enforces code quality rules for JavaScript and JSX files.
- **index.html**: The main HTML file that serves as the entry point for the application. It includes the root div where React mounts and references the main JavaScript file.
- **package.json**: Defines the project dependencies, scripts (e.g., `dev`, `build`, `lint`), and metadata.
- **README.md**: This file, providing documentation about the project.
- **vite.config.js**: Configuration file for Vite, the build tool used for development and production builds.
- **public/**: Directory for static assets served directly by the server (e.g., `favicon.svg` for the app icon).
- **src/**: Main source code directory.
  - **App.css**: Styles specific to the main App component.
  - **App.jsx**: The root React component that renders the application structure, including Navbar and Footer.
  - **index.css**: Global CSS styles and CSS variables for theming.
  - **main.jsx**: Entry point for the React application, responsible for rendering the App component into the DOM.
  - **assets/**: Directory for imported assets like images (e.g., `react.svg`, `vite.svg`, `hero.png`).
  - **components/**: Directory for reusable React components.
    - **Footer.css**: Styles for the Footer component.
    - **Footer.jsx**: A simple Footer component that displays "Footer" text.
    - **Navbar.css**: Styles for the Navbar component (e.g., red color for h1 elements).
    - **Navbar.jsx**: A Navbar component displaying "Logo" and "Home".

## Getting Started

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Build for production: `npm run build`
4. Preview the build: `npm run preview`

For more details on Vite and React, refer to the official documentation.