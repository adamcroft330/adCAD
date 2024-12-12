           
# adCAD: Code-Driven 3D Modeling

This project is a code-driven 3D modeling application that renders models in a web browser, with live updates based on model code changes.

## Key Features

*   **Code-First Design:** 3D models are defined entirely through JavaScript code, allowing for precise and parametric control over geometry.
*   **Live Updates:** The 3D scene updates in real-time as you modify and save the code definition, providing instant visual feedback.
*   **Browser-Based Rendering:** Utilizes the Three.js library to render 3D graphics directly in a web browser, eliminating the need for external software.
*   **External Code Editor Support:** Edit the model code using your favorite external code editor like Visual Studio Code.

## Architecture

The project has the following structure:

*   **client/**: Contains the frontend assets (HTML, CSS, JavaScript).
    *   `index.html`: Main HTML page
    *   `style.css`: Styles for the application.
    *   `viewer.js`: Three.js 3D scene setup.
    *  `live.js`: WebSocket connection and update logic.
*   **server/**: The Node.js backend for WebSocket communication.
     *  `server.js`: Handles file watching and socket communication.
*   **model/**: Stores the model code.
    *   `cad.js`: Defines the geometry.

## Setup and Usage

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd adCAD
    ```
2.  **Install dependencies:**
   ```bash
   npm install

    

Use code with caution.Markdown

    Start the server:

          
    cd server
    node server.js

        

    Use code with caution.Bash

    Open in browser: Open your web browser and navigate to http://localhost:8080.

    Edit cad.js: Modify the geometry in model/cad.js with an external editor and save to see the 3D scene update automatically in your web browser.

Technologies

    Frontend:

        HTML, CSS, JavaScript

        Three.js (for 3D rendering)

    Backend:

        Node.js (for server-side logic and file watching)

        WebSockets (for real-time communication)

License

This project is licensed under the MIT License - see the LICENSE file for details.
