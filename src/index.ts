export enum EnumFormat {
  milliseconds = "milliseconds",
  seconds = "seconds",
  minutes = "minutes",
  hours = "hours",
  days = "days",
}

class LogTime {
  private startDate: Date | null
  private stoppedDate: Date | null

  constructor(private logging: (message: string) => any) {
    this.logging = logging
    this.startDate = null
    this.stoppedDate = null
  }

  private getDifferenceInMilliseconds(start: Date | null, stop: Date | null) {
    if (start && stop) return stop.getTime() - start.getTime()

    return 0
  }

  private getDifferenceInSeconds(start: Date | null, stop: Date | null) {
    return this.getDifferenceInMilliseconds(start, stop) / 1000
  }

  private getDifferenceInMinutes(start: Date | null, stop: Date | null) {
    return this.getDifferenceInSeconds(start, stop) / 60
  }

  private getDifferenceInHours(start: Date | null, stop: Date | null) {
    return this.getDifferenceInMinutes(start, stop) / 60
  }

  private getDifferenceInDays(start: Date | null, stop: Date | null) {
    return this.getDifferenceInHours(start, stop) / 24
  }

  private getDurationText(value?: EnumFormat) {
    if (EnumFormat.seconds === value)
      return this.getDifferenceInSeconds(
        this.startDate,
        this.stoppedDate
      ).toString()

    if (EnumFormat.minutes === value)
      return this.getDifferenceInMinutes(
        this.startDate,
        this.stoppedDate
      ).toString()

    if (EnumFormat.hours === value)
      return this.getDifferenceInHours(
        this.startDate,
        this.stoppedDate
      ).toString()

    if (EnumFormat.days === value)
      return this.getDifferenceInDays(
        this.startDate,
        this.stoppedDate
      ).toString()

    return this.getDifferenceInMilliseconds(
      this.startDate,
      this.stoppedDate
    ).toString()
  }

  private getValue(word: string) {
    const value = /\{{(.*?)\}}/g.exec(word)?.[1] as string

    if (value && value in EnumFormat) return value as EnumFormat

    return EnumFormat.milliseconds
  }

  private replace(word: string, pattern: RegExp) {
    return word.replace(pattern, this.getDurationText(this.getValue(word)))
  }

  start() {
    this.startDate = new Date()
  }

  stop(message: string) {
    this.stoppedDate = new Date()

    const pattern = /\{{(.*?)\}}/g

    const newMessage = message
      .split(" ")
      .map((word) => {
        if (pattern.exec(word)?.[1]) {
          return this.replace(word, pattern)
        }

        return word
      })
      .join(" ")

    this.startDate = null
    this.stoppedDate = null

    this.logging(newMessage)
  }
}

export default LogTime
