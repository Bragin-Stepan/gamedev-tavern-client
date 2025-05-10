import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface AuthStore {
	isAuthenticated: boolean
	setIsAuthenticated: (value: boolean) => void
}

export const authStore = create(
	persist<AuthStore>(
		set => ({
			isAuthenticated: false,
			setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value })
		}),
		{
			name: 'auth',
			storage: createJSONStorage(() => localStorage)
		}
	)
)
