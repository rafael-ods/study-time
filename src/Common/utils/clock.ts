export const clockFormat = (time: string) => {
    const [ hours = "0", minutes = "0", seconds = "0" ] = time.split(":")

    const hoursSeconds = Number(hours) * 3600
    const minutesSeconds = Number(minutes) * 60
    return hoursSeconds + minutesSeconds + Number(seconds)
}