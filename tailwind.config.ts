import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
    darkMode: ["class"],
    content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'sm': '640px',
  			'md': '768px',
  			'lg': '1024px',
  			'xl': '1280px',
  			'2xl': '1400px',
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: '#9FE88D', // Pantone 15-6437 "Green Ash"
  				dark: '#2D5A27',
  				light: '#F1F8E9',
  				accent: '#7CB342'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: ["var(--font-inter)", ...fontFamily.sans],
  			heading: ["var(--font-cal-sans)", ...fontFamily.sans],
  			mono: ["var(--font-mono)", ...fontFamily.mono],
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'float': {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-10px)' }
  			},
  			'pulse-slow': {
  				'0%, 100%': { transform: 'scale(1)' },
  				'50%': { transform: 'scale(1.05)' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'float': 'float 3s ease-in-out infinite',
  			'pulse-slow': 'pulse-slow 4s ease-in-out infinite'
  		},
  		spacing: {
  			'safe-top': 'env(safe-area-inset-top)',
  			'safe-bottom': 'env(safe-area-inset-bottom)',
  			'safe-left': 'env(safe-area-inset-left)',
  			'safe-right': 'env(safe-area-inset-right)',
  		},
  		height: {
  			'screen-small': '100vh',
  			'screen-large': 'calc(var(--vh, 1vh) * 100)',
  		},
  		maxWidth: {
  			'8xl': '88rem',
  			'prose-lg': '75ch',
  		},
  		boxShadow: {
  			'glow': '0 0 40px -10px var(--tw-shadow-color)',
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					maxWidth: '75ch',
  					color: 'hsl(var(--foreground))',
  					a: {
  						color: 'hsl(var(--primary))',
  						'&:hover': {
  							color: 'hsl(var(--primary) / 0.8)',
  						},
  					},
  					'h1, h2, h3, h4, h5, h6': {
  						color: 'hsl(var(--foreground))',
  						fontWeight: '700',
  					},
  				},
  			},
  		},
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
} satisfies Config

export default config;
