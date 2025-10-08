# 🍎 Tablas Alimentación

## Description

This is a personal web application that automatically displays the meal schedule for the current week based on the current date. The app selects the most appropriate meal table image from a collection based on day and month matching, ignoring the year.

## Features

- Automatically selects meal schedule based on current date (day/month)
- Displays meal table images stored locally
- Built with Vite for fast development and building
- Responsive design that works on different screen sizes

## Project Structure

```
tablas-alimentacion
├── src
│   ├── script.js
│   ├── style.css
│   ├── image-list.json
│   └── img/
│       └── [meal schedule images]
├── index.html
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd tablas-alimentacion
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running the Application

To start the development server, run:

```
npm run dev
```

This will start the Vite development server and open the application in your default web browser.

### Building for Production

To build the application for production, run:

```
npm run build
```

This will create a `dist` directory with the production-ready files.

## Note

This is a personal project created for individual meal planning purposes. While the repository may be public, it's designed for personal use and contains meal schedules specific to the creator's needs.

**Disclaimer**: This app has been vibe coded 🎵✨

## License

This project is licensed under the MIT License.
