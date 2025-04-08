# 🧮 3MTT Mini Calculator Plugin

A lightweight, beginner-friendly calculator project built as part of the 3MTT program. This mini calculator performs basic arithmetic operations and is styled using SCSS for a clean and responsive design.

---

## 📌 Project Overview

This mini calculator was created to demonstrate the fundamentals of web development using:

- **HTML** for structure
- **JavaScript** for functionality
- **SCSS/CSS** for styling

The project features:
- A neat calculator interface
- Addition, subtraction, multiplication, and division support
- SCSS modular styling (organized into `abstracts`, `base`, and `main`)

---

## 📁 Folder Structure

```
3mtt__mini-calc/
├── calc-plugin.html          # Calculator interface HTML
├── script.js                 # JavaScript logic
├── css/style.css             # Output CSS (compiled from SCSS)
├── sass/
│   ├── main.scss             # SCSS entry file
│   ├── abstracts/            # Functions, mixins, and variables
│   └── base/                 # Animations and base styles
├── package.json              # Node and dependencies
└── README.md                 # Project description
```

---

## 🛠️ How to Use

### 1. Clone the Project

```bash
git clone https://github.com/yourusername/3mtt__mini-calc.git
cd 3mtt__mini-calc
```

### 2. Install Dependencies

Make sure Node.js and npm are installed.

```bash
npm install
```

### 3. Compile SCSS (Optional if you want to edit styles)

```bash
npx sass sass/main.scss css/style.css
```

---

## 🚀 Demo

To see the calculator in action, open `calc-plugin.html` in your browser.

---

## ✅ Embedding in Your Project

To use this calculator in your own site:

```html
<link rel="stylesheet" href="css/style.css">
<script src="script.js" defer></script>

<div class="mini-calculator">
  <!-- Calculator will be displayed here -->
</div>
```

---

## 🤝 Contribution

You're welcome to contribute and improve this project!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes
4. Push to GitHub
5. Submit a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## ✍️ Author

Built during the [3MTT program](https://3mtt.nitda.gov.ng) as a learning task to explore front-end development skills.  
Created with 💙 by a 3MTT participant.
