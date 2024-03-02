export function minutesConvert(minutes) {
    const hours = Math.floor(minutes / 60);
    const rest = minutes % 60;
    let str = '';

    if (hours > 0) {
        str += `${hours}h`;
    }

    if (rest > 0) {
        str += ` ${rest}m`;
    }

    return str.trim();
}

export function numberWithCommas(number){
    return '$' + number.toLocaleString('en-US', {
        minimumFractionDigits: 2, 
    });
};

export function changeDateFormat(date ){
    console.log(date)
    const newDate = new Date(date);
    const longFormat = new Intl.DateTimeFormat('es-ES', {year: 'numeric', month: 'long', day: 'numeric'})

    return longFormat.format(newDate)
} 