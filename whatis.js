const consonants = 'bcdfghjklmnpqrstvxzwy'
const vowels = 'aeiouyw'

const last = str => str[str.length - 1]

const secondLast = str => str[str.length - 2]

const endsIn = (str, endChar) => last(str) === endChar

const createMethodNameWithPresentTense = key => {
  const secondLastLetter = secondLast(key)

  if (
    consonants.includes(secondLastLetter) &&
    !vowels.includes(secondLastLetter) &&
    endsIn(key, 'y')
  ) {
    return key.replace(/y$/, 'ies')
  }

  return `${key}s`
}

const createMethodList = ({ list, resultsIn }) =>
  list
    .reduce(
      (initial, key) => [
        ...initial,
        key,
        createMethodNameWithPresentTense(key),
      ],
      [],
    )
    .reduce(
      (initial, key) => ({
        ...initial,
        [key]: () => ({ in: resultsIn(key) }),
      }),
      {},
    )

const createResultMethods = ({ list, methods }) => valueFrom =>
  list.reduce(
    (initial, key) => ({
      ...initial,
      [key]: methods[key](valueFrom),
      [createMethodNameWithPresentTense(key)]: methods[key](valueFrom),
    }),
    {},
  )

const inTime = val => {
  const time = [
    'second',
    'minute',
    'hour',
    'day',
    'week',
    'month',
    'year',
    'decade',
    'century',
  ]

  const daysInYear = 365
  const monthsInYear = 12

  const daysInMonth = daysInYear / monthsInYear

  const secondsMethod = valueFrom => () =>
    ({
      second: val,
      seconds: val,
      minute: val * 60,
      minutes: val * 60,
      hour: val * 60 * 60,
      hours: val * 60 * 60,
      day: val * 60 * 60 * 24,
      days: val * 60 * 60 * 24,
      week: val * 60 * 60 * 24 * 7,
      weeks: val * 60 * 60 * 24 * 7,
      month: val * 60 * 60 * 24 * daysInMonth,
      months: val * 60 * 60 * 24 * daysInMonth,
      year: val * 60 * 60 * 24 * daysInYear,
      years: val * 60 * 60 * 24 * daysInYear,
      decade: val * 60 * 60 * 24 * daysInYear * 10,
      decades: val * 60 * 60 * 24 * daysInYear * 10,
      century: val * 60 * 60 * 24 * daysInYear * 100,
      centuries: val * 60 * 60 * 24 * daysInYear * 100,
    }[valueFrom])

  const minutesMethod = valueFrom => () =>
    ({
      second: val / 60,
      seconds: val / 60,
      minute: val,
      minutes: val,
      hour: val * 60 * 60,
      hours: val * 60 * 60,
      day: val * 60 * 60 * 24,
      days: val * 60 * 60 * 24,
      week: val * 60 * 60 * 24 * 7,
      weeks: val * 60 * 60 * 24 * 7,
      month: val * 60 * 60 * 24 * daysInMonth,
      months: val * 60 * 60 * 24 * daysInMonth,
      year: val * 60 * 60 * 24 * daysInYear,
      years: val * 60 * 60 * 24 * daysInYear,
      decade: val * 60 * 60 * 24 * daysInYear * 10,
      decades: val * 60 * 60 * 24 * daysInYear * 10,
      century: val * 60 * 60 * 24 * daysInYear * 100,
      centuries: val * 60 * 60 * 24 * daysInYear * 100,
    }[valueFrom])

  const hoursMethod = valueFrom => () =>
    ({
      second: val / 60 / 60,
      seconds: val / 60 / 60,
      minute: val / 60,
      minutes: val / 60,
      hour: val,
      hours: val,
      day: val * 24,
      days: val * 24,
      week: val * 24 * 7,
      weeks: val * 24 * 7,
      month: val * 24 * daysInMonth,
      months: val * 24 * daysInMonth,
      year: val * 24 * daysInYear,
      years: val * 24 * daysInYear,
      decade: val * 24 * daysInYear * 10,
      decades: val * 24 * daysInYear * 10,
      century: val * 24 * daysInYear * 100,
      centuries: val * 24 * daysInYear * 100,
    }[valueFrom])

  const daysMethod = valueFrom => () =>
    ({
      second: val / 24 / 60 / 60,
      seconds: val / 24 / 60 / 60,
      minute: val / 24 / 60,
      minutes: val / 24 / 60,
      hour: val / 24,
      hours: val / 24,
      day: val,
      days: val,
      week: val * 7,
      weeks: val * 7,
      month: val * daysInMonth,
      months: val * daysInMonth,
      year: val * daysInYear,
      years: val * daysInYear,
      decade: val * daysInYear * 10,
      decades: val * daysInYear * 10,
      century: val * daysInYear * 100,
      centuries: val * daysInYear * 100,
    }[valueFrom])

  const weeksMethod = valueFrom => () =>
    ({
      second: val / 7 / 24 / 60 / 60,
      seconds: val / 7 / 24 / 60 / 60,
      minute: val / 7 / 24 / 60,
      minutes: val / 7 / 24 / 60,
      hour: val / 7 / 24,
      hours: val / 7 / 24,
      day: val / 7,
      days: val / 7,
      week: val,
      weeks: val,
      month: val * daysInMonth,
      months: val * daysInMonth,
      year: val * daysInYear,
      years: val * daysInYear,
      decade: val * daysInYear * 10,
      decades: val * daysInYear * 10,
      century: val * daysInYear * 100,
      centuries: val * daysInYear * 100,
    }[valueFrom])

  const monthsMethod = valueFrom => () =>
    ({
      second: val / daysInMonth / 24 / 3600,
      seconds: val / daysInMonth / 24 / 3600,
      minute: val / daysInMonth / 24 / 60,
      minutes: val / daysInMonth / 24 / 60,
      hour: val / daysInMonth / 24,
      hours: val / daysInMonth / 24,
      day: val / daysInMonth,
      days: val / daysInMonth,
      week: val / 7,
      weeks: val / 7,
      month: val,
      months: val,
      year: val * monthsInYear,
      years: val * monthsInYear,
      decade: val * monthsInYear * 10,
      decades: val * monthsInYear * 10,
      century: val * monthsInYear * 100,
      centuries: val * monthsInYear * 100,
    }[valueFrom])

  const yearsMethod = valueFrom => () =>
    ({
      second: val / daysInYear / 24 / 60 / 60,
      seconds: val / daysInYear / 24 / 60 / 60,
      minute: val / daysInYear / 24 / 60,
      minutes: val / daysInYear / 24 / 60,
      hour: val / daysInYear / 24,
      hours: val / daysInYear / 24,
      day: val / daysInYear,
      days: val / daysInYear,
      week: val / 52,
      weeks: val / 52,
      month: val / monthsInYear,
      months: val / monthsInYear,
      year: val,
      years: val,
      decade: val * 10,
      decades: val * 10,
      century: val * 100,
      centuries: val * 100,
    }[valueFrom])

  const decadesMethod = valueFrom => () =>
    ({
      second: val / daysInYear / 24 / 60 / 60 / 10,
      seconds: val / daysInYear / 24 / 60 / 60 / 10,
      minute: val / daysInYear / 24 / 60 / 10,
      minutes: val / daysInYear / 24 / 60 / 10,
      hour: val / daysInYear / 24 / 10,
      hours: val / daysInYear / 24 / 10,
      day: val / daysInYear / 10,
      days: val / daysInYear / 10,
      week: val / 52 / 10,
      weeks: val / 52 / 10,
      month: val / monthsInYear / 10,
      months: val / monthsInYear / 10,
      year: val / 10,
      years: val / 10,
      decade: val,
      decades: val,
      century: val * 10,
      centuries: val * 10,
    }[valueFrom])

  const centuriesMethod = valueFrom => () =>
    ({
      second: val / daysInYear / 24 / 60 / 60 / 100,
      seconds: val / daysInYear / 24 / 60 / 60 / 100,
      minute: val / daysInYear / 24 / 60 / 100,
      minutes: val / daysInYear / 24 / 60 / 100,
      hour: val / daysInYear / 24 / 100,
      hours: val / daysInYear / 24 / 100,
      day: val / daysInYear / 100,
      days: val / daysInYear / 100,
      week: val / 52 / 100,
      weeks: val / 52 / 100,
      month: val / monthsInYear / 100,
      months: val / monthsInYear / 100,
      year: val / 100,
      years: val / 100,
      decade: val / 10,
      decades: val / 10,
      century: val,
      centuries: val,
    }[valueFrom])

  const timeMethods = {
    second: secondsMethod,
    minute: minutesMethod,
    hour: hoursMethod,
    day: daysMethod,
    week: weeksMethod,
    month: monthsMethod,
    year: yearsMethod,
    decade: decadesMethod,
    century: centuriesMethod,
  }

  const resultsInTime = createResultMethods({
    list: time,
    methods: timeMethods,
  })

  return createMethodList({ list: time, resultsIn: resultsInTime })
}

const inWeight = val => {
  const weights = ['gram', 'kilogram']

  const gramsMethod = valueFrom => () =>
    ({
      gram: val,
      grams: val,
      kilogram: val * 1000,
      kilograms: val * 1000,
    }[valueFrom])

  const kilogramsMethod = valueFrom => () =>
    ({
      gram: val / 1000,
      grams: val / 1000,
      kilogram: val,
      kilograms: val,
    }[valueFrom])

  const weightMethods = {
    gram: gramsMethod,
    kilogram: kilogramsMethod,
  }

  const resultsInWeight = createResultMethods({
    list: weights,
    methods: weightMethods,
  })

  return createMethodList({
    list: weights,
    resultsIn: resultsInWeight,
  })
}

const whatis = val => ({ ...inTime(val), ...inWeight(val) })

export default whatis
