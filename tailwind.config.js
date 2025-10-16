/** @type {import('tailwindcss').Config} */
module.exports = {
  // Critical: Add content paths to prevent CSS purging issues
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      // Fixed: Comprehensive font configuration
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', '-apple-system', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      // Add custom colors for consistency
      colors: {
        primary: {
          DEFAULT: '#F97316',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#18181B',
          foreground: '#A1A1AA',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        border: 'var(--border)',
      },
      // Fix animation issues
      animation: {
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      // Prevent border radius issues
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    // Add commonly needed plugins
    require('@tailwindcss/typography'),
  ],
};
