# IIITBuzz — Design System & UI Guidelines

## 🎨 Design Philosophy

IIITBuzz is a community forum with a unique fusion of:
- **Neobrutalism** → Sharp borders, solid shadows, raw UI blocks.
- **8-Bit Pixel Art** → Pixelated icons, retro aesthetics.
- **Ghibli-Inspired Pastel Colors** → Soft, welcoming tones with playful charm.

This document serves as the guidelines for UI design, components, theming.

---

## 🐝 Logo Usage

- The IIITBuzz logo is a **pixel-art bee wearing glasses holding a laptop**.
- Always use the colored version on both light and dark backgrounds.

---

## 🌈 Color Palette

### 🟢 **Light Mode Palette**
| Name          | Hex       | Usage                               |
|---------------|-----------|-------------------------------------|
| Background    | `#fce9d6` | Page background                     |
| Surface/Card  | `#fffdfb` | Cards, containers                   |
| Primary Blue  | `#62d8e2` | Buttons, highlights, links          |
| Accent Yellow | `#f4be52` | Icons, hover states, accents        |
| Soft Orange   | `#f18e5d` | Secondary buttons, icons            |
| Pastel Pink   | `#f8b3c8` | Decorations, badges, subtle UI      |
| Border Gray   | `#888888` | Card borders, dividers              |
| Text Primary  | `#2d2d2d` | Main text                           |
| Text Secondary| `#5a5a5a` | Hints, secondary text               |

---

### 🔵 **Dark Mode Palette**
| Name           | Hex       | Usage                               |
|----------------|-----------|-------------------------------------|
| Background     | `#141420` | Page background                     |
| Surface/Card   | `#1c1c2a` | Cards, containers                   |
| Primary Cyan   | `#62d8e2` | Buttons, highlights, links          |
| Accent Magenta | `#e870a7` | Hover states, active elements       |
| Soft Coral     | `#f18e5d` | Warnings, minor highlights          |
| Pastel Lavender| `#bca4e2` | Decorations, badges, subtle UI      |
| Border Gray    | `#3c3c4a` | Card borders, dividers              |
| Text Primary   | `#f5f5f5` | Main text                           |
| Text Secondary | `#aaaaaa` | Hints, secondary text               |

---

## 🏗️ UI Layout Principles

- **Desktop-first** → Optimized for 1280px width upwards.
- **Chunky elements** with **4px to 8px borders**.
- Consistent **block shadows** in neobrutalist style.
- **Pixel-line dividers** and **dotted pixel grid patterns** for subtle structure.
- Use UI components from [neobrutalism library](https://neobrutalism.dev)

---

## 📐 Component Rules

- **Navbar:**  
  - Left: Logo  
  - Center: Search + Categories  
  - Right: Profile, Theme Toggle, Notifications  

- **Sidebar:**  
  - Home, Categories, Tags, Announcements, Leaderboard, About  
  - Pixel-art icons paired with text  

- **Post & Comment Cards:**  
  - Thick borders (4px)  
  - Pixel drop shadow  
  - User avatar (pixel icon) → Username → Timestamp → Content  
  - Interaction buttons: ❤️ Like, 💬 Reply, 🔖 Bookmark, ↗️ Share  

- **Buttons:**  
  - Square or slightly rounded (max 4px radius)  
  - Pixel-style hover glow or shadow inset  

- **Input Fields:**  
  - Dashed or pixel-line borders  
  - Highlighted focus with subtle glow  

---

## 🔤 Typography

- **Font:**  
  - [Press Start 2P (Google Fonts)](https://fonts.google.com/specimen/Press+Start+2P) → For headings, navbar, buttons.  
  - Optional body font: `Fredoka`, `Quicksand`, or `Inter` for long-form content (e.g., posts, articles) to improve readability.

---

## ✨ Effects & Animations

- Subtle **pixel glow** on hover.  
- **Floating motion** for cards — mimics Ghibli wind spirit vibes.  
- Page transitions: **pixel dissolve/fade.**  
- Cursor: Blinking pixel-style in text fields.

---

## 🔧 Responsiveness Guidelines

- After desktop layout, scale down using:
  - **Sidebar collapse → hamburger menu.**  
  - Navbar stacks vertically if under 768px width.  
  - Cards become single column.

---

## 📁 Assets

- ![IIITBuzz Logo](/assets/logo.png)  
- ![UI Overview](/assets/overview.png)
- ![Other UI discussed](/assets/ui-overview.png)

---

## 🤝 Credits

Design system inspired by:  
- Material You dynamic theming  
- Neobrutalism UI movement  
- 8-bit retro aesthetics  
- Studio Ghibli pastel color inspiration

---
