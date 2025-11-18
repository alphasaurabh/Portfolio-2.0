A modern, fully responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS, showcasing clean UI/UX principles, smooth animations, and a powerful component-based architecture.

This portfolio highlights my skills as a Software Developer & UI/UX Designer, with a strong focus on component design, animation systems, and scalable architecture.

## 🚀 Tech Stack

### Core
- React 18.3.1
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM

### UI Frameworks
- Radix UI (headless primitives)
- shadcn/ui (customizable UI components)
- Lucide React (icons)
- class-variance-authority (component variants)

### Additional Tools
- TanStack React Query
- React Hook Form
- Tailwind Animate
- Sonner (toast notifications)

---

## 🧩 Project Structure

### Main Layout
- `Index.tsx` orchestrates all sections
- Global ambient visuals via `GlobalBackground.tsx`
- Section flow:
  Navigation → FloatingSocials → Hero → About → Experience → Projects → Contact → Footer

### Key Components
- **Navigation:** Sticky header with scroll-aware background
- **Hero:** Animated landing section with particles, portrait & CTAs
- **About:** Two-column layout + horizontal tech-stack row
- **Experience:** Professional timeline with card UI
- **Projects:** Modular card components for project showcases
- **Contact:** Clean and validated contact form
- **Footer:** Gradient branding with social links

---

## 🎨 Design System

- **Typography:** Space Grotesk (headings), Inter (body)
- **Colors:** HSL-based semantic tokens
- **Layout:** 1400px container, consistent spacing scale
- **Borders:** rounded-2xl / rounded-3xl
- **Shadows:** `shadow-soft` & `shadow-strong`
- **Gradients:** Custom utilities like `bg-gradient-electric`

---

## ✨ Animations

Custom keyframes in `index.css`:
- `float` — soft floating motion
- `glow-pulse` — ambient glow
- `travel` — particle movement
- `fade-slide-up` — reveal on scroll

Features:
- Staggered reveal effects
- Smooth transitions
- Reduced-motion accessibility:
  ```css
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; }
  }

## 📄 License

This project is built and owned by Saurabh Chandravanshi.
Feel free to explore the code, but do not reproduce the design without permission.