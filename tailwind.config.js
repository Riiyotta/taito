import containerQueries from '@tailwindcss/container-queries';
import plugin from 'tailwindcss/plugin';

/*
 * All design tokens from CLONE_SPEC.md §1 live here.
 * Colors are emitted as CSS variables (RGB channels) so the `.dark` class can
 * re-map them locally (footer, persona cards, mobile menu) exactly like the original.
 */

// §1.2 — light / .dark palettes (RGB channels)
const palette = {
  light: {
    surface: '250 250 249', // #fafaf9
    'surface-secondary': '242 241 240', // #f2f1f0
    'surface-tertiary': '229 229 227', // #e5e5e3
    'primary-foreground': '15 14 13', // #0f0e0d
    'secondary-foreground': '82 79 73', // #524f49
    'muted-foreground': '110 106 101', // #6e6a65
    ink: '15 14 13', // #0f0e0d
    'ink-hover': '51 49 44', // #33312c
  },
  dark: {
    surface: '15 14 13', // #0f0e0d
    'surface-secondary': '31 29 26', // #1f1d1a
    'surface-tertiary': '51 49 44', // #33312c
    'primary-foreground': '250 250 249', // #fafaf9
    'secondary-foreground': '204 202 198', // #cccac6
    'muted-foreground': '143 139 133', // #8f8b85
    ink: '250 250 249', // #fafaf9
    'ink-hover': '229 229 227', // #e5e5e3
  },
};

const toVars = (p) =>
  Object.fromEntries(Object.entries(p).map(([k, v]) => [`--color-${k}`, v]));

const themedColor = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

// §1.4 — fluid spacing (Utopia)
const fluidSpace = {
  'space-3xs': 'clamp(0.25rem, 0.2331rem + 0.0847vw, 0.3125rem)',
  'space-2xs': 'clamp(0.5rem, 0.4661rem + 0.1695vw, 0.625rem)',
  'space-xs': 'clamp(0.75rem, 0.6991rem + 0.2542vw, 0.9375rem)',
  'space-s': 'clamp(1rem, 0.9322rem + 0.339vw, 1.25rem)',
  'space-m': 'clamp(1.5rem, 1.3983rem + 0.5085vw, 1.875rem)',
  'space-l': 'clamp(2rem, 1.8644rem + 0.678vw, 2.5rem)',
  'space-xl': 'clamp(3rem, 2.7966rem + 1.0169vw, 3.75rem)',
  'space-2xl': 'clamp(4rem, 3.7288rem + 1.3559vw, 5rem)',
  'space-3xl': 'clamp(6rem, 5.5932rem + 2.0339vw, 7.5rem)',
  'space-3xs-2xs': 'clamp(0.25rem, 0.1483rem + 0.5085vw, 0.625rem)',
  'space-2xs-xs': 'clamp(0.5rem, 0.3814rem + 0.5932vw, 0.9375rem)',
  'space-xs-s': 'clamp(0.75rem, 0.6144rem + 0.678vw, 1.25rem)',
  'space-s-m': 'clamp(1rem, 0.7627rem + 1.1864vw, 1.875rem)',
  'space-m-l': 'clamp(1.5rem, 1.2288rem + 1.3559vw, 2.5rem)',
  'space-l-xl': 'clamp(2rem, 1.5254rem + 2.3729vw, 3.75rem)',
  'space-xl-2xl': 'clamp(3rem, 2.4576rem + 2.7119vw, 5rem)',
  'space-2xl-3xl': 'clamp(4rem, 3.0509rem + 4.7458vw, 7.5rem)',
  'space-m-2xl': 'clamp(1.5rem, 0.5509rem + 4.7458vw, 5rem)',
  'space-s-l': 'clamp(1rem, 0.5932rem + 2.0339vw, 2.5rem)',
  gutter: 'clamp(1rem, 0.5932rem + 2.0339vw, 2.5rem)', // --grid-gutter = space-s-l
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  future: {
    // original gates hover styles behind (hover:hover) and (pointer:fine)
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      screens: {
        nav: '1200px', // desktop nav vs hamburger (§1.4 custom min-[1200px])
      },
      colors: {
        surface: themedColor('surface'),
        'surface-secondary': themedColor('surface-secondary'),
        'surface-tertiary': themedColor('surface-tertiary'),
        'primary-foreground': themedColor('primary-foreground'),
        'secondary-foreground': themedColor('secondary-foreground'),
        'muted-foreground': themedColor('muted-foreground'),
        ink: themedColor('ink'),
        'ink-hover': themedColor('ink-hover'),
        white: '#ffffff',
        'persona-overlay': 'rgba(29, 29, 29, 0.9)',
        glass: 'rgba(255, 255, 255, 0.25)',
      },
      fontFamily: {
        sans: [
          '"Suisse Intl"',
          '"Suisse Intl fallback"',
          '-apple-system',
          'BlinkMacSystemFont',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      // §1.3 fluid type scale (letter-spacing baked in)
      fontSize: {
        'step--2': 'clamp(0.6944rem, 0.6658rem + 0.1431vw, 0.8rem)',
        'step--1': 'clamp(0.8333rem, 0.7881rem + 0.226vw, 1rem)',
        'step-0': 'clamp(1rem, 0.9322rem + 0.339vw, 1.25rem)',
        'step-1': 'clamp(1.2rem, 1.1017rem + 0.4915vw, 1.5625rem)',
        'step-2': ['clamp(1.44rem, 1.3008rem + 0.6958vw, 1.9531rem)', { letterSpacing: '-0.01em' }],
        'step-3': ['clamp(1.728rem, 1.5345rem + 0.9673vw, 2.4414rem)', { letterSpacing: '-0.015em' }],
        'step-4': ['clamp(2.0736rem, 1.8083rem + 1.3263vw, 3.0518rem)', { letterSpacing: '-0.02em' }],
        'step-5': ['clamp(2.4883rem, 2.1286rem + 1.7985vw, 3.8147rem)', { letterSpacing: '-0.025em' }],
      },
      lineHeight: {
        none: '1',
        heading: '1.2',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
      },
      spacing: fluidSpace,
      borderRadius: {
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        prompt: '0 0 0 1px rgba(15, 14, 13, 0.10), 0 1px 2px rgba(0, 0, 0, 0.05)',
      },
      maxWidth: {
        container: '1500px',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out': 'cubic-bezier(0.77, 0, 0.175, 1)',
        'menu-in': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'menu-out': 'cubic-bezier(0.4, 0, 1, 1)',
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translate(0)' },
          to: { transform: 'translate(-50%)' },
        },
        'caret-blink': {
          to: { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '100% 0' },
        },
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 60s) linear infinite',
        caret: 'caret-blink 1s steps(2, end) infinite',
        shimmer: 'shimmer 1.9347s linear infinite backwards',
      },
    },
  },
  plugins: [
    containerQueries,
    plugin(({ addBase }) => {
      addBase({
        ':root': toVars(palette.light),
        '.dark': toVars(palette.dark),
      });
    }),
  ],
};
