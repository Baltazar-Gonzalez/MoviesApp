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