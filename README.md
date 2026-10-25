# cit331-assignment1-24l-0023
cit331-assignment1
# Pulse Event Management Club

An official student-led university club website designed, structured, and styled using Semantic HTML5, CSS3, and vanilla JavaScript. Built for **CIT331 · Web Technologies (Assignment 1)**.

---

## Club Overview

**Pulse Event Management Club** is dedicated to bringing vibrant, student-centered campus life to reality. We plan, coordinate, and execute major university gatherings including cultural galas, inter-department sports tournaments, career fairs, and leadership training bootcamps. Our website provides university students with event details, schedules, and a direct digital registration platform to reserve event passes.

---

## Live Demo Links

- **GitHub Pages Live Site:** `https://<Shahreen153>.github.io/cit331-assignment1-24l-0023/`
- **Vercel Live Site (Bonus):** `https://cit331-assignment1-24l-0023.vercel.app`

---

## Website Structure & Pages

1. **Home (`index.html`)**:
   - Features the club introduction, branding, a featured upcoming event with a semantic figure and date, quick highlights of what the club organizes, and an aside containing executive committee contact details.
2. **Events (`events.html`)**:
   - Outlines at least 4 detailed upcoming university events. Each event is encapsulated in an `<article>` with its title, `<time>` tag, location, and description. Includes event guidelines and external university links.
3. **Register (`register.html`)**:
   - An accessible registration form featuring HTML5 validation (`required`, `minlength`, `pattern`, `min`, `max`), fieldsets with legends, connected labels, and an interactive `localStorage` database table allowing students to save, view, and clear their registrations dynamically.

---

## Technologies Used

- **HTML5:** Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<figcaption>`, `<time>`, `<footer>`).
- **CSS3:** Box model with `border-box`, Flexbox navigation & cards, CSS variables, CSS transitions, accessible focus states, and `@media` queries for phone responsiveness and dark mode.
- **JavaScript (Vanilla):** ~45 lines handling form submission, preventing reload, JSON serialization to `localStorage`, and table rendering.

---

## How to Run the Project Locally

No external build tools or package managers are required.

1. Clone or download this repository:
   ```bash
   git clone https://github.com/<your-username>/cit331-assignment1-<rollno>.git
   ```
2. Navigate into the project directory:
   ```bash
   cd cit331-assignment1-<rollno>
   ```
3. Open `index.html` in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge) by double-clicking it, or use the **VS Code Live Server** extension.

---

## Image Sources & Attributions

- All vector illustrations (`logo.svg`, `featured-event.svg`, `bootcamp.svg`) are custom-authored SVGs crafted specifically for this project to maintain 100% original design compliance and zero copyright issues.
