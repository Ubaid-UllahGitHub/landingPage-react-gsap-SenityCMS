# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# UzzyStudio Frontend

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/Ubaid-UllahGitHub/landingPage-react-gsap-SenityCMS)

A modern frontend web application built with **React + Vite**, powered by **Sanity CMS** as a headless content management system.

This project fetches live content from Sanity and is deployed on **Vercel**.

---

## 🛠 Tech Stack

- **React** (Vite)
- **Sanity CMS** (Headless CMS)
- **Material UI (MUI)**
- **GSAP / Lenis / AOS** (Animations)
- **ESLint** (Code quality)

---

## 📦 Project Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Ubaid-UllahGitHub/landingPage-react-gsap-SenityCMS.git
cd uzzy-studio


2️⃣ Install dependencies
npm install

3️⃣ Environment Variables
cp .env.example .env


Fill in the values:

VITE_SANITY_PROJECT_ID=your_project_id_here
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01


4️⃣ Run the project locally
npm run dev or yarn dev

The app will be available at:
http://localhost:5173


🧠 Sanity CMS Integration

This project uses @sanity/client to fetch live content from Sanity.
src/sanityClient.js


UzzyStudio/
├── public/
├── src/
├── .env.example
├── .gitignore
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
├── README.md
