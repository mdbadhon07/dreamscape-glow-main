import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
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
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Glassmorphism color palette
				glass: {
					base: 'hsl(var(--glass-base))',
					border: 'hsl(var(--glass-border))',
					glow: 'hsl(var(--glass-glow))'
				},
				purple: {
					primary: 'hsl(var(--purple-primary))',
					light: 'hsl(var(--purple-light))',
					dark: 'hsl(var(--purple-dark))'
				},
				cyan: {
					primary: 'hsl(var(--cyan-primary))',
					light: 'hsl(var(--cyan-light))',
					dark: 'hsl(var(--cyan-dark))'
				},
				pink: {
					primary: 'hsl(var(--pink-primary))',
					light: 'hsl(var(--pink-light))',
					dark: 'hsl(var(--pink-dark))'
				}
			},
			backgroundImage: {
				'gradient-cosmic': 'var(--gradient-cosmic)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-glow': 'var(--gradient-glow)'
			},
			boxShadow: {
				'glass': 'var(--glass-shadow)',
				'glass-glow': 'var(--glass-glow-shadow)',
				'glow': '0 0 20px hsl(var(--primary) / 0.4)',
				'glow-lg': '0 0 40px hsl(var(--primary) / 0.6)'
			},
			backdropBlur: {
				'glass': '20px'
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'float': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
