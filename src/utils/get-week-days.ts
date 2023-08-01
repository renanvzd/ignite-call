interface GetWeekDaysParams {
  short?: boolean
}

export function getWeekDays({ short = false }: GetWeekDaysParams = {}) {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  return (
    Array.from(Array(7).keys())
      .map((day) => formatter.format(new Date(Date.UTC(2021, 5, day))))
      // pegar o ano e o mes que o dia comeca no dia 01
      .map((weekDay) => {
        if (short) {
          return weekDay.substring(0, 3).toUpperCase()
        }

        return weekDay
          .substring(0, 1)
          .toUpperCase()
          .concat(weekDay.substring(1))
      })
  )
}
