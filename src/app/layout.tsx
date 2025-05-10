import type { Metadata } from 'next'
import { Inter, Montserrat, Roboto } from 'next/font/google'

import {
	SITE_DESCRIPTION,
	SITE_KEYWORDS,
	SITE_NAME
} from '@/libs/constants/seo.constants'
import { APP_URL } from '@/libs/constants/url.constants'

import { ApolloClientProvider } from '@/providers/ApolloClientProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { ToastProvider } from '@/providers/ToastProvider'

import '../styles/globals.css'

const roboto = Roboto({
	subsets: ['cyrillic'],
	variable: '--font-roboto',
	weight: ['400', '500', '600', '700', '800', '900']
})

const inter = Inter({
	subsets: ['cyrillic'],
	variable: '--font-inter',
	weight: ['400', '500', '600', '700', '800', '900']
})

const montserrat = Montserrat({
	subsets: ['cyrillic'],
	variable: '--font-montserrat',
	weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s - ${SITE_NAME}`
	},
	authors: [
		{
			name: 'Bragin Stepan',
			url: new URL('https://github.com/Bragin-Stepan')
		}
	],
	description: SITE_DESCRIPTION,
	metadataBase: new URL(APP_URL),
	applicationName: SITE_NAME,
	keywords: SITE_KEYWORDS,
	generator: 'Next.js',
	creator: 'Stepan',
	publisher: 'Stepan'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${montserrat.variable} ${roboto.variable} ${inter.variable} antialiased`}
			>
				<ApolloClientProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						disableTransitionOnChange
					>
						<ToastProvider />
						{children}
					</ThemeProvider>
				</ApolloClientProvider>
			</body>
		</html>
	)
}
