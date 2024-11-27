import rootPlugins from '@root-sphere/root-ui-tailwind';
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  /**
   * @name Purge
   * @see https://tailwindcss.com/docs/content-configuration
   */
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/lib/**/*.{ts,tsx,js,jsx}',
    './src/hooks/**/*.{ts,tsx,js,jsx}',
    './src/systems/**/*.{ts,tsx,js,jsx}',
    './src/stories/**/*.{ts,tsx,js,jsx}',
    './src/styles/**/*.{ts,tsx,js,jsx}',
  ],
  darkMode: ["class", 'class'],
  plugins: [...rootPlugins, require("tailwindcss-animate"), require('@tailwindcss/typography')],
  theme: {
  	container: {
  		center: 'true',
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			success: {
  				DEFAULT: 'hsl(var(--success))',
  				foreground: 'hsl(var(--success-foreground))'
  			},
  			warning: {
  				DEFAULT: 'hsl(var(--warning))',
  				foreground: 'hsl(var(--warning-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			border: 'hsl(var(--border))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			foreground: 'hsl(var(--foreground))',
  			input: 'hsl(var(--input))',
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			ring: 'hsl(var(--ring))'
  		},
  		fontFamily: {
  			sans: ["var(--font-sans)", ...fontFamily.sans]
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
  		}
  	}
  }
}
