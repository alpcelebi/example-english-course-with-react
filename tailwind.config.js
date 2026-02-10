/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                kuzemRed: '#E63B3B',
                kuzemYellow: '#FFD54A',
                kuzemSky: '#EBF5FF',
                kuzemTeal: '#0C7C86',
                kuzemGreen: '#CDEFB7',
                ink: '#0B1D28',
                white: '#FFFFFF',
                slate: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617',
                }
            },
            fontFamily: {
                heading: ['"Poppins"', 'sans-serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            animation: {
                'blob': 'blob 7s infinite',
                'float': 'float 6s ease-in-out infinite',
                'shimmer': 'shimmer 2s infinite',
                'slide-up': 'slideUp 0.6s ease-out',
                'fade-in': 'fadeIn 0.8s ease-out',
                'scale-in': 'scaleIn 0.5s ease-out',
                'gradient': 'gradient 8s linear infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
            backgroundSize: {
                '300%': '300%',
            },
            boxShadow: {
                'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
                'glass-md': '0 12px 40px rgba(0, 0, 0, 0.12)',
                'glow-red': '0 0 30px rgba(230, 59, 59, 0.25)',
                'glow-teal': '0 0 30px rgba(12, 124, 134, 0.25)',
                'card': '0 4px 24px rgba(0, 0, 0, 0.06)',
                'card-hover': '0 12px 48px rgba(0, 0, 0, 0.12)',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            }
        },
    },
    plugins: [],
}
