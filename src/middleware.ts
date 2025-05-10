import { type NextRequest, NextResponse } from 'next/server'

export const middleware = (request: NextRequest) => {
	const { url, cookies, nextUrl } = request

	const session = cookies.get('session')?.value

	const isAuthRoute = nextUrl.pathname.startsWith('/auth')
	const isDeactivateRoute = nextUrl.pathname === '/auth/deactivate'
	const isDashboardRoute = nextUrl.pathname.startsWith('/dashboard')

	if (!session && isDashboardRoute) {
		return NextResponse.redirect(new URL('/auth/login', url))
	}

	if (!session && isDeactivateRoute) {
		return NextResponse.redirect(new URL('/auth/login', url))
	}

	if (session && isAuthRoute && !isDeactivateRoute) {
		return NextResponse.redirect(new URL('/', url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/auth/:path*', '/profile/settings/:path*']
}
