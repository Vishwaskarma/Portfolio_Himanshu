import { Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
  adjustFontFallback: false,
});

// Fixed: Separate metadata and viewport exports
export const metadata = {
  title: 'Your Portfolio',

  // Removed themeColor and viewport from here
  description: 'Full-stack Developer Portfolio'
};

// NEW: Separate viewport export (Required for Next.js 14+)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`antialiased ${poppins.className}`} suppressHydrationWarning>
        {children}
         <Toaster position="bottom-center" reverseOrder={false} />
      </body>
    </html>
  );
}
