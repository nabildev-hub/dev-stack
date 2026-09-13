# 🚀 Dev Stack

**Build Your Ideal Development Stack**

Dev Stack is a web app that helps developers explore and compare frontend, backend, database, and tooling options side by side. Browse technology cards across categories, pick your favorites, and put together the stack that fits your next project — all tracked in a live "Your Stack" panel.

---

## 🔗 Live Demo & Repository

- 🌍 *Live Demo:* [https://react-devstack.netlify.app](#)
- 💻 *Repository:* [https://github.com/nabildev-hub/dev-stack](#)


---
## 🛠️ Built With

- **React.js** (with **TypeScript**) – component-based UI
- **Tailwind CSS** – utility-first styling
- **DaisyUI** – prebuilt Tailwind component classes
- **React-Toastify** – toast notifications
- **JSON** – technology dataset (id, category, description, icon, rating, difficulty, badge)
- **Vite** – build tool / dev server

---

## ✨ Features

- 🗂️ **Categorized Technology Explorer** – browse technologies grouped by category (Frontend, Backend, Database, Language, Styling, DevOps) as clean, ratable cards
- 🧱 **Live "Your Stack" Builder** – add one technology per category and watch your personal stack update in real time
- 🔔 **Instant Feedback with Toasts** – react-toastify notifications confirm actions like adding a technology to your stack

---

## 📖 React Concepts Q&A

**1. What is JSX, and why is it used in React?**
JSX lets you write HTML-like markup directly inside JavaScript. Instead of manually building elements, I can write something like `<TechCard tech={tech} />` right in my component code, which makes describing the UI way more readable.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent — read-only from the child's side. State is data a component manages internally and can change over time.

**3. What does the useState hook do, and where did you use it in this project?**
`useState` lets a component store a value and re-render whenever that value changes. I used it to keep track of the technologies added to "Your Stack" — every time a card gets added, state updates and the panel re-renders with the new list.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
`useEffect` runs a piece of code after the component renders (or when certain values change). I used it to load the technology JSON data once when the page first mounts, so the data is ready before the cards try to render.

**5. Why does every item in a .map() list need a unique key prop?**
The `key` helps React tell items in a list apart so it can efficiently figure out what changed, added, or got removed. Without unique keys, React can mix up which card is which, causing rendering bugs when the list updates.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI depending on a condition. In the "Your Stack" panel, if no technologies have been added yet, it shows *"No technologies selected yet"* — otherwise, it renders the list of selected technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Parent → child: pass data as props, e.g. `<TechCard tech={techData} />`. Child → parent: the parent passes a function down as a prop (e.g. `onAddToStack`), and the child calls that function (like on the "Add to Stack" button click) to send data back up.

---

## 📄 License

**Nabil Ahmed**