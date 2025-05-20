/**
 * Форматирует дату в человекочитаемый вид:
 * - "только что"
 * - "X минут/часов/дней назад"
 * - "12 мая", если старше недели
 * - "12.09.22", если старше года
 */
export const formatDateTime = (date: Date | string | undefined): string => {
	if (!date) return ''

	const now = new Date()
	const inputDate = typeof date === 'string' ? new Date(date) : date

	const diffInSeconds = Math.floor((now.getTime() - inputDate.getTime()) / 1000)

	if (diffInSeconds < 60) return 'только что'

	const diffInMinutes = Math.floor(diffInSeconds / 60)
	if (diffInMinutes < 60) {
		return `${diffInMinutes} ${decline(diffInMinutes, ['минута', 'минуты', 'минут'])} назад`
	}

	const diffInHours = Math.floor(diffInMinutes / 60)
	if (diffInHours < 24) {
		return `${diffInHours} ${decline(diffInHours, ['час', 'часа', 'часов'])} назад`
	}

	const diffInDays = Math.floor(diffInHours / 24)
	if (diffInDays < 7) {
		return `${diffInDays} ${decline(diffInDays, ['день', 'дня', 'дней'])} назад`
	}

	if (diffInDays < 365) {
		return formatMonthOnly(inputDate)
	}

	return formatDateShort(inputDate)
}

/**
 * Форматирует дату в формате "12.09.22"
 */
export const formatDateShort = (date: Date): string => {
	const d = new Date(date)
	const day = String(d.getDate()).padStart(2, '0')
	const month = String(d.getMonth() + 1).padStart(2, '0')
	const year = String(d.getFullYear()).slice(-2)

	return `${day}.${month}.${year}`
}

/**
 * Возвращает только день и месяц без года, если тема не старше года
 * - Например: "12 апр"
 */
export const formatMonthOnly = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'short'
	}
	return new Date(date).toLocaleDateString('ru-RU', options).replace(/\s/g, ' ')
}

/**
 * Склонение слов: 1 день, 2 дня, 5 дней
 */
const decline = (n: number, titles: [string, string, string]): string => {
	const cases = [2, 0, 1, 1, 1, 2]
	const i =
		n % 100 > 4 && n % 100 < 20
			? 2
			: n % 10 < 5 && n % 10 > 0
				? cases[(n % 10) - 1]
				: 2

	return titles[i]
}
