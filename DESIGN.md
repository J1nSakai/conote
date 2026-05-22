---
name: Midnight Professional
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#6bd8cb'
  on-secondary: '#003732'
  secondary-container: '#29a195'
  on-secondary-container: '#00302b'
  tertiary: '#c0c1ff'
  on-tertiary: '#1000a9'
  tertiary-container: '#8083ff'
  on-tertiary-container: '#0d0096'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 20px
  margin: 24px
---

## Brand & Style

The design system is engineered for deep focus and academic rigor. It targets students and researchers who require a distraction-free environment for synthesising complex information. The aesthetic balances the high-tech nature of AI with the grounded reliability of traditional scholarship.

We employ a **Modern Minimalist** style with **Tonal Layering**. By using a palette of deep blacks and charcoals, the interface recedes into the background, allowing user content and AI-generated insights to take center stage. The emotional response is one of "calm productivity"—a digital study hall that feels both sophisticated and infinitely capable. Visual noise is eliminated; every border, shadow, and transition is purposeful and restrained.

## Colors

The color strategy utilizes a tiered dark-mode approach to create functional depth without relying on heavy shadows.

- **Backgrounds:** The foundation is `Navy Black (#0B0E14)`, providing a cooler, deeper base than standard pitch black. `Deep Charcoal (#121212)` is used for the primary workspace and sidebars.
- **Accents:** `Electric Violet (#8B5CF6)` is reserved exclusively for AI-assisted features, highlights, and primary "magic" actions. `Academic Teal (#0D9488)` serves as the secondary action color, used for standard navigation and utilitarian tasks.
- **Contrast:** Text and icons use a scale of desaturated grays to maintain a soft contrast ratio, preventing eye strain during long-form reading sessions. Pure white (#FFFFFF) is used only for the highest level of hierarchy in headlines.

## Typography

This design system relies on **Inter** for its exceptional legibility in data-dense applications. The typographic scale is generous, prioritizing a vertical rhythm that makes long notes easy to scan.

- **Hierarchy:** We use tight letter-spacing and heavier weights (600-700) for headlines to create a "locked-in" professional look. 
- **Body Text:** Body copy utilizes a slightly increased line height (1.5x to 1.6x) to ensure optimal readability during extended study sessions.
- **Labels:** Small labels use a semi-bold weight and subtle letter spacing to maintain clarity even at 12px, particularly useful for metadata and AI tags.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a focus on internal containment. 

- **Grid:** A 12-column grid is used for desktop views. On mobile, we transition to a single-column stack with 16px horizontal margins.
- **Rhythm:** All spacing is derived from a 4px baseline. Components generally utilize 16px (`md`) or 24px (`lg`) padding to ensure the UI feels airy despite the dark color palette.
- **Focus Mode:** The design system supports a "Center-Weighted" layout for note-taking, where the main text editor is constrained to a max-width of 800px to maintain an ideal character-per-line count for reading.

## Elevation & Depth

In this dark-themed environment, depth is communicated through **Tonal Layers** rather than heavy shadows.

- **Z-Axis Tiering:** The background is the darkest layer. Each successive level of elevation (cards, modals, popovers) uses a progressively lighter shade of charcoal.
- **Outlines:** To maintain sharpness, elevated elements use a `1px` low-contrast border (`#FFFFFF` at 8% opacity). This "ghost border" replaces shadows for a cleaner, more academic look.
- **AI Glow:** Components interacting with AI (like the active note synthesis card) may use a subtle, localized outer glow of `Electric Violet` at 10% opacity to signal background processing or active intelligence.

## Shapes

The shape language is **Soft and Precise**. We use a 4px (`0.25rem`) base radius for standard components like input fields and buttons. This provides a modern touch without appearing overly "bubbly" or informal. 

Larger containers like cards use 8px (`0.5rem`), and the most prominent elements (like the AI input bar) use 12px (`0.75rem`). This progressive rounding helps users visually categorize elements by their importance and scale.

## Components

### Buttons
- **Primary Action (Utilitarian):** Solid `Academic Teal` with white text.
- **Primary Action (AI/Special):** Solid `Electric Violet` with white text.
- **Secondary:** Transparent with a `1px` border of the respective accent color.

### Input Fields
Inputs are styled with the `Deep Charcoal` background and a subtle `1px` border. On focus, the border transitions to `Academic Teal` (standard) or `Electric Violet` (AI prompt).

### Cards & Surfaces
Cards use the `background_surface` token with a subtle top-light border to simulate a slight bevel. This adds a tactile feel to the "professional" aesthetic.

### AI Chips & Tags
Used for identifying topics or AI-generated keywords. These use a desaturated violet background at 15% opacity with a vibrant violet label, creating a distinct visual marker that is easily distinguishable from standard metadata.

### Lists
Lists are separated by thin horizontal rules (`#FFFFFF` at 5% opacity). Hover states are indicated by a slight shift to a lighter charcoal tint rather than a color change, keeping the interface stable and calm.