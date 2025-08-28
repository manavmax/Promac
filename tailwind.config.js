const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
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
  			success: {
  				DEFAULT: 'var(--color-success)',
  				foreground: 'var(--color-success-foreground)'
  			},
  			warning: {
  				DEFAULT: 'var(--color-warning)',
  				foreground: 'var(--color-warning-foreground)'
  			},
  			error: {
  				DEFAULT: 'var(--color-error)',
  				foreground: 'var(--color-error-foreground)'
  			},
  			'promac-red': {
  				'50': '#FFF0F0',
  				'100': '#FFDDDD',
  				'200': '#FFC0C1',
  				'300': '#FF9495',
  				'400': '#FF5758',
  				'500': '#FF2325',
  				'600': '#FF0C0E',
  				'700': '#D70002',
  				'800': '#B10304',
  				'900': '#920A0B',
  				'950': '#500001'
  			},
  			'brand-navy': '#000000',
  			'brand-amber': '#FF0C0D',
  			'brand-orange': '#FF0C0D',
  			'brand-green': '#FF0C0D',
  			'brand-red': '#FF0C0D',
  			'text-primary': '#ffffff',
  			'text-secondary': '#ffffff',
  			'text-headline': '#ffffff',
  			surface: '#000000',
  			'surface-light': '#000000',
  			'surface-dark': '#000000',
  			'action-blue': '#FF0C0D',
  			'action-cta': '#FF0C0D',
  			'section-bg': '#000000',
  			'section-light': '#000000',
  			'footer-bg': '#000000',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			],
  			mono: [
  				'JetBrains Mono',
  				'monospace'
  			],
  			inter: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		fontWeight: {
  			light: '300',
  			normal: '400',
  			medium: '500',
  			semibold: '600',
  			bold: '700'
  		},
  		fontSize: {
  			hero: [
  				'3rem',
  				{
  					lineHeight: '1.1',
  					letterSpacing: '-0.02em'
  				}
  			],
  			display: [
  				'2.5rem',
  				{
  					lineHeight: '1.2',
  					letterSpacing: '-0.01em'
  				}
  			],
  			heading: [
  				'2rem',
  				{
  					lineHeight: '1.3'
  				}
  			],
  			subheading: [
  				'1.5rem',
  				{
  					lineHeight: '1.4'
  				}
  			],
  			body: [
  				'1rem',
  				{
  					lineHeight: '1.6'
  				}
  			],
  			small: [
  				'0.875rem',
  				{
  					lineHeight: '1.5'
  				}
  			],
  			xs: [
  				'0.75rem',
  				{
  					lineHeight: '1.4'
  				}
  			]
  		},
  		spacing: {
  			'18': '4.5rem',
  			'88': '22rem',
  			'128': '32rem',
  			'144': '36rem'
  		},
  		borderRadius: {
  			xl: '1rem',
  			'2xl': '1.5rem',
  			'3xl': '2rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			glass: '0 8px 32px rgba(0, 0, 0, 0.3)',
  			neomorphic: '20px 20px 60px rgba(0, 0, 0, 0.3), -20px -20px 60px rgba(255, 255, 255, 0.05)',
  			brand: '0 4px 20px rgba(255, 12, 13, 0.2)',
  			amber: '0 8px 24px rgba(255, 12, 13, 0.3)',
  			'amber-hover': '0 12px 32px rgba(255, 12, 13, 0.4)',
  			primary: '0 8px 24px rgba(255, 12, 13, 0.3)',
  			premium: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
  			card: '0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)'
  		},
  		backdropBlur: {
  			xs: '2px',
  			brand: '20px'
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.6s ease-out',
  			'slide-up': 'slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  			'slide-left': 'slideLeft 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)',
  			'scale-in': 'scaleIn 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
  			float: 'float 3s ease-in-out infinite',
  			aurora: 'aurora 60s linear infinite'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(60px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			slideLeft: {
  				'0%': {
  					transform: 'translateX(-40px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			scaleIn: {
  				'0%': {
  					transform: 'scale(0.95)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			aurora: {
  				from: {
  					backgroundPosition: '50% 50%, 50% 50%'
  				},
  				to: {
  					backgroundPosition: '350% 50%, 350% 50%'
  				}
  			}
  		},
  		transitionTimingFunction: {
  			brand: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  			smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  		},
  		zIndex: {
  			'60': '60',
  			'70': '70',
  			'80': '80',
  			'90': '90',
  			'100': '100'
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
    addVariablesForColors
  ],
}