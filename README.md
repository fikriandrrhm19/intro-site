# Intro Site — Fikri Andra Irham

Personal portfolio website built using **React**, **Vite**, and **Tailwind CSS**.  

Designed to showcase projects, share testimonials, and enable easy contact through a built-in form using **EmailJS**.

Live Demo: [https://fikriandra.my.id](https://fikriandra.my.id)  
By [Fikri Andra Irham](mailto:fikri.andrhm@gmail.com)

## Features

- ⚛️ React + Vite for fast dev experience
- 🎨 Tailwind CSS for sleek, responsive styling
- 📬 Contact form powered by EmailJS
- 💼 Landing page with sections:
  - Hero
  - About
  - Recent Work
  - Testimonials
  - Footer
- 📄 Contact page with personal details and social links
- 🌐 Routing with React Router


## Project Structure

```bash
intro-site/
├── public/                # Static assets and custom fonts
│   ├── assets/            # Public images
│   └── fonts/             # Neue Montreal font
├── src/                   # App source code
│   ├── assets/            # React image imports (hero)
│   ├── components/        # Reusable UI components
│   ├── pages/             # LandingPage & ContactPage
│   ├── App.jsx            # Routes and navigation
│   ├── index.css          # Tailwind + base styles
│   └── main.jsx           # Root render
├── index.html             # HTML entry
├── tailwind.config.js     # Tailwind setup
├── postcss.config.js      # PostCSS plugins (used by Tailwind CSS)
├── package.json           # Project metadata, scripts, dependencies
├── vite.config.js         # Vite bundler configuration
```

## Getting Started

> **Node.js version:** Make sure you're using **Node.js v18 or higher** for full compatibility with Vite and its dependencies.

1. Clone the repository

    ```
    git clone https://github.com/fikriandrrhm19/intro-site.git
    cd intro-site
    ```

2. Install dependencies

    ```
    npm install
    ```

3. Start the development server
    ```
    npm run dev
    ```
    
    Open http://localhost:5173 in your browser.

## EmailJS Setup (for Contact Form)

To make the contact form functional, set up your EmailJS account and replace these values in `ContactPage.jsx`:

```
.sendForm(
  'your_service_id',
  'your_template_id',
  form.current,
  'your_public_key'
)
```
> You can store these values as environment variables for security in production.

## Build for Production

```
npm run build
```

Files will be generated in the dist/ directory.

## License

MIT — feel free to use, modify, or contribute.