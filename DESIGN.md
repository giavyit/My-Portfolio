---
name: Dark Engineering
colors:
  surface: '#0d1515'
  surface-dim: '#0d1515'
  surface-bright: '#323b3b'
  surface-container-lowest: '#081010'
  surface-container-low: '#151d1d'
  surface-container: '#192121'
  surface-container-high: '#232b2c'
  surface-container-highest: '#2e3637'
  on-surface: '#dce4e4'
  on-surface-variant: '#b9caca'
  inverse-surface: '#dce4e4'
  inverse-on-surface: '#2a3232'
  outline: '#849495'
  outline-variant: '#3a494a'
  surface-tint: '#00dce5'
  primary: '#e9feff'
  on-primary: '#003739'
  primary-container: '#00f5ff'
  on-primary-container: '#006c71'
  inverse-primary: '#00696e'
  secondary: '#bbc3ff'
  on-secondary: '#001d93'
  secondary-container: '#0231de'
  on-secondary-container: '#b1bbff'
  tertiary: '#fff9f0'
  on-tertiary: '#3a3000'
  tertiary-container: '#ffdb3f'
  on-tertiary-container: '#736000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#63f7ff'
  primary-fixed-dim: '#00dce5'
  on-primary-fixed: '#002021'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#dee0ff'
  secondary-fixed-dim: '#bbc3ff'
  on-secondary-fixed: '#000f5d'
  on-secondary-fixed-variant: '#002ccd'
  tertiary-fixed: '#ffe16c'
  tertiary-fixed-dim: '#e7c427'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#544600'
  background: '#0d1515'
  on-background: '#dce4e4'
  surface-variant: '#2e3637'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-base:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

This design system targets a high-end engineering audience, evoking the precision of Integrated Development Environments (IDEs) and industrial digital twin interfaces. The brand personality is authoritative, meticulous, and performance-oriented. 

The visual style utilizes **Technical Brutalism**—combining the raw, structured layout of engineering documentation with modern high-fidelity accents. Key visual motifs include 1px geometric grid overlays, microscopic typography for metadata, and "active state" glows that suggest a live, functioning system rather than a static page. The emotional response should be one of trust in the engineer's technical depth and attention to detail.

## Colors

The palette is anchored in deep blacks and charcoals to maximize contrast for the primary neon accents. 

- **Primary Cyan (#00F5FF):** Reserved for primary actions, success states, and critical data points. It represents "Active" or "Online" status.
- **Neon Blue (#3D5AFE):** Used for interactive elements like links, secondary buttons, and hover highlights.
- **Neutrals:** Backgrounds utilize `#0A0A0A` for the base and `#121212` for elevated surfaces (cards, modals). Borders and secondary text use Slate Grays (`#1E293B` and `#94A3B8`) to maintain a low-noise environment.
- **Accents:** Use low-opacity Cyan glows for "powered-on" effects on specific hardware-style components.

## Typography

The system employs a dual-font strategy to balance legibility with technical flavor.

1.  **Geist Sans:** Used for the majority of the UI (Headlines and Body). Its geometric, neutral character provides a clean, professional canvas that doesn't distract from the technical content.
2.  **JetBrains Mono:** Used for "Engineering metadata"—labels, timestamps, code snippets, and technical specs. This font signals expertise and provides a rhythmic, tabular feel to data-heavy sections.

**Hierarchy Note:** Use `label-caps` for section headers and small captions to mimic the look of blueprints and technical schematics.

## Layout & Spacing

The layout is built on a **12-column fixed grid** for desktop, shifting to a single-column fluid layout for mobile. 

- **The Grid Overlay:** A subtle background pattern of 24px x 24px squares (rendered in `#1E293B` at 0.1 opacity) should be visible across the entire viewport to emphasize the "engineering canvas."
- **CAD Lines:** Use thin, 1px horizontal and vertical lines to separate major sections, often extending to the edge of the viewport to create a sense of infinite workspace.
- **Alignment:** All elements must snap to the 4px baseline grid. Padding within cards and containers should be generous (typically 24px or 32px) to prevent the dark UI from feeling cramped.

## Elevation & Depth

In a "Dark Engineering" aesthetic, depth is created through **Luminance and Outlines** rather than traditional shadows.

1.  **Tonal Layers:** The lowest layer is `#0A0A0A`. Floating panels or cards use `#121212`.
2.  **Glowing Borders:** Instead of shadows, use 1px solid borders (`#1E293B`). Active or featured cards receive a "Glow" treatment: a primary Cyan border with a 4px outer blur of the same color at 20% opacity.
3.  **Glassmorphism:** Use sparingly for top navigation bars or floating tooltips. A `backdrop-filter: blur(12px)` with a semi-transparent `#0A0A0A` background maintains legibility without breaking the technical structure.

## Shapes

The design system uses a **Sharp (0px)** or **Micro-radius (2px)** approach.

- **Hard Edges:** All primary containers, buttons, and input fields must have sharp 90-degree corners to reinforce the industrial, CAD-inspired look.
- **Geometric Accents:** Use 45-degree chamfered corners on decorative elements or "Status Tags" to mimic machined parts. 
- **Icons:** Use stroke-based icons with consistent 1.5px or 2px weights. Do not use filled icons unless they represent an "Active" state.

## Components

### Atoms
- **Buttons:** Primary buttons are sharp-edged, Cyan background, black text. Secondary buttons are transparent with a Cyan 1px border. Hover states trigger a subtle Cyan outer glow.
- **Inputs:** Dark background (`#0A0A0A`) with a Slate border. On focus, the border turns Cyan and a small "Focus Coordinate" (e.g., [F-01]) appears in the corner in Mono font.
- **Chips/Tags:** Monospaced text inside a subtle Slate border. Use a small leading dot (color-coded) to indicate status.

### Molecules
- **Technical Cards:** Feature a top header row with a "Serial Number" or "ID" in Mono font. The card body is separated by a 1px line. The border glows when hovered.
- **Data Pairs:** A label in `label-caps` (Slate) paired with a value in `code-sm` (White/Cyan).

### Organisms
- **The "Terminal" Hero:** A section mimicking a terminal emulator, showcasing key skills or a bio as if it were a JSON output or system log.
- **Project Grid:** A collection of Technical Cards aligned to the 12-column grid, using "connector lines" (1px slate lines) to visually link related projects.
- **Navigation:** A minimal top-docked bar with "System Status: Online" indicators and monospaced navigation links.