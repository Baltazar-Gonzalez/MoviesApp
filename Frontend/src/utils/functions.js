import { MOVIE, TV, MOVIES, SERIES } from './constants'

//Transforma minutos a horas y minutos
export function minutesConvert(minutes) {
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  let str = ''

  if (hours > 0) {
    str += `${hours}h`
  }

  if (rest > 0) {
    str += ` ${rest}m`
  }

  return str.trim()
}

//Transforma numero a dolares
export function numberWithCommas(number) {
  return (
    '$' +
    number.toLocaleString('en-US', {
      minimumFractionDigits: 2,
    })
  )
}

//Pasa el formato de TMDB al que utilizo yo
export function ApiToUrl(media) {
  if (media === MOVIE || media === MOVIES) return MOVIES
  else if (media === TV || media === SERIES) return SERIES
}

//Cambia formato de la fecha
export function changeDateFormat(date) {
  const [year, month, day] = date.split('-').map(Number)
  const newDate = new Date(year, month - 1, day)
  const longFormat = new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return longFormat.format(newDate)
}
