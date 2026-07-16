# CineSearch - Movie Explorer Application

CineSearch is a modern, responsive React-based Single Page Application (SPA) designed to let users search, filter, discover, and track their favorite films using the TMDB API.

---

## Key Features

*   ** Secure Login Session:** Simulates a user sign-in process, storing the user's name persistently in `localStorage` and presenting a personalized welcome in the application.
*   ** Real-Time & Query-Based Search:** A clean search bar integrated into the navigation panel, supporting instant dynamic queries of the TMDB API.
*   ** Persistent Star / Favorites:** Star your favorite movies from the grid views, detailed dialogs, or cast pages. Favorites are synced dynamically and saved persistently to `localStorage`.
*   **Dynamic Sidebar Filters:**
    *   ** Show Starred Only:** instanly toggle the grid to only show your favorite movies.
    *   ** Genre Selection:** Filter search result matches dynamically.
    *   ** Minimum Votes & Ratings:** Set minimum thresholds to focus on high-quality content.
    *   ** Release Date Range:** Limit results between specific start and end dates.
*   ** Detailed Overlays:**
    *   Clicking on any movie opens a detailed modal view featuring movie metrics, detailed synopsis, and full interactive cast list.

---

## Architecture & Bug Fixes

This project was refined from a base legacy setup with several architectural enhancements:
1.  **Resolved Infinite Re-Render Loops:** Fixed critical API call loops in `MovieDetailOne.jsx` and `MovieCastDetailsOne.jsx` by implementing correct React `useEffect` dependency arrays.
2.  **Safeguarded Render Arrays:** Handled async mapping safely with optional chaining on TMDB API cast/movie results.
3.  **Removed Unused Filters:** Cleaned up unused/deprecated search parameters (like adult movie flags) for a safer and cleaner user experience.
4.  **Clean ESLint compliance:** Addressed multiple key duplication and unused variable issues to ensure stable production builds.

---

## ⚙️ Running Locally

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### 2. Install Dependencies
Run the following command in the project root:
```bash
npm install
```

### 3. Run the Development Server
```bash
npm start
```
The app will run in development mode at [http://localhost:3000](http://localhost:3000).
