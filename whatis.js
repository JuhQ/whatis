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

const createMethodPairs = methods => valueFrom => () =>
  Object.keys(methods).reduce(
    (initial, key) => ({
      ...initial,
      [key]: methods[key],
      [createMethodNameWithPresentTense(key)]: methods[key],
    }),
    {},
  )[valueFrom]

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

  const secondsMethod = createMethodPairs({
    second: val,
    minute: val * 60,
    hour: val * 60 * 60,
    day: val * 60 * 60 * 24,
    week: val * 60 * 60 * 24 * 7,
    month: val * 60 * 60 * 24 * daysInMonth,
    year: val * 60 * 60 * 24 * daysInYear,
    decade: val * 60 * 60 * 24 * daysInYear * 10,
    century: val * 60 * 60 * 24 * daysInYear * 100,
  })

  const minutesMethod = createMethodPairs({
    second: val / 60,
    minute: val,
    hour: val * 60 * 60,
    day: val * 60 * 60 * 24,
    week: val * 60 * 60 * 24 * 7,
    month: val * 60 * 60 * 24 * daysInMonth,
    year: val * 60 * 60 * 24 * daysInYear,
    decade: val * 60 * 60 * 24 * daysInYear * 10,
    century: val * 60 * 60 * 24 * daysInYear * 100,
  })

  const hoursMethod = createMethodPairs({
    second: val / 60 / 60,
    minute: val / 60,
    hour: val,
    day: val * 24,
    week: val * 24 * 7,
    month: val * 24 * daysInMonth,
    year: val * 24 * daysInYear,
    decade: val * 24 * daysInYear * 10,
    century: val * 24 * daysInYear * 100,
  })

  const daysMethod = createMethodPairs({
    second: val / 24 / 60 / 60,
    minute: val / 24 / 60,
    hour: val / 24,
    day: val,
    week: val * 7,
    month: val * daysInMonth,
    year: val * daysInYear,
    decade: val * daysInYear * 10,
    century: val * daysInYear * 100,
  })

  const weeksMethod = createMethodPairs({
    second: val / 7 / 24 / 60 / 60,
    minute: val / 7 / 24 / 60,
    hour: val / 7 / 24,
    day: val / 7,
    week: val,
    month: val * daysInMonth,
    year: val * daysInYear,
    decade: val * daysInYear * 10,
    century: val * daysInYear * 100,
  })

  const monthsMethod = createMethodPairs({
    second: val / daysInMonth / 24 / 3600,
    minute: val / daysInMonth / 24 / 60,
    hour: val / daysInMonth / 24,
    day: val / daysInMonth,
    week: val / 7,
    month: val,
    year: val * monthsInYear,
    decade: val * monthsInYear * 10,
    century: val * monthsInYear * 100,
  })

  const yearsMethod = createMethodPairs({
    second: val / daysInYear / 24 / 60 / 60,
    minute: val / daysInYear / 24 / 60,
    hour: val / daysInYear / 24,
    day: val / daysInYear,
    week: val / 52,
    month: val / monthsInYear,
    year: val,
    decade: val * 10,
    century: val * 100,
  })

  const decadesMethod = createMethodPairs({
    second: val / daysInYear / 24 / 60 / 60 / 10,
    minute: val / daysInYear / 24 / 60 / 10,
    hour: val / daysInYear / 24 / 10,
    day: val / daysInYear / 10,
    week: val / 52 / 10,
    month: val / monthsInYear / 10,
    year: val / 10,
    decade: val,
    century: val * 10,
  })

  const centuriesMethod = createMethodPairs({
    second: val / daysInYear / 24 / 60 / 60 / 100,
    minute: val / daysInYear / 24 / 60 / 100,
    hour: val / daysInYear / 24 / 100,
    day: val / daysInYear / 100,
    week: val / 52 / 100,
    month: val / monthsInYear / 100,
    year: val / 100,
    decade: val / 10,
    century: val,
  })

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

  const gramsMethod = createMethodPairs({
    gram: val,
    kilogram: val * 1000,
  })

  const kilogramsMethod = createMethodPairs({
    gram: val / 1000,
    kilogram: val,
  })

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

const inLength = val => {
  const lengths = [
    'yoctometre',
    'zeptometre',
    'attometre',
    'femtometre',
    'picometre',
  ]
  // 10**−24 ym yoctometre
  // 10**−21 zm zeptometre
  // 10**−18 am attometre
  // 10**−15 fm femtometre
  // 10**−12 pm picometre
  // 10**−9 nm nanometre
  // 10**−6 µm micrometre
  // 10**−3 mm millimetre
  // 10**−2 cm centimetre
  // 10**−1 dm decimetre
  // 1 m metre
  // 10**1 dam decametre
  // 10**2 hm hectometre
  // 10**3 km kilometre
  // 10**6 Mm megametre
  // 10**9 Gm gigametre
  // 10**12 Tm terametre
  // 10**15 Pm petametre
  // 10**18 Em exametre
  // 10**21 Zm zettametre
  // 10**24 Ym yottametre

  const yoctometreMethod = createMethodPairs({
    yoctometre: val,
    zeptometre: val * 10 ** 3,
    attometre: val * 10 ** 6,
    femtometre: val * 10 ** 9,
    picometre: val * 10 ** 12,
  })

  const zeptometreMethod = createMethodPairs({
    yoctometre: val / 10 ** 3,
    zeptometre: val,
    attometre: val * 10 ** 3,
    femtometre: val * 10 ** 6,
    picometre: val * 10 ** 9,
  })

  const attometreMethod = createMethodPairs({
    yoctometre: val / 10 ** 6,
    zeptometre: val / 10 ** 3,
    attometre: val,
    femtometre: val * 10 ** 3,
    picometre: val * 10 ** 6,
  })

  const femtometreMethod = createMethodPairs({
    yoctometre: val / 10 ** 9,
    zeptometre: val / 10 ** 6,
    attometre: val / 10 ** 3,
    femtometre: val,
    picometre: val * 10 ** 3,
  })

  const picometreMethod = createMethodPairs({
    yoctometre: val / 10 ** 12,
    zeptometre: val / 10 ** 9,
    attometre: val / 10 ** 6,
    femtometre: val / 10 ** 3,
    picometre: val,
  })

  const lengthMethods = {
    yoctometre: yoctometreMethod,
    zeptometre: zeptometreMethod,
    attometre: attometreMethod,
    femtometre: femtometreMethod,
    picometre: picometreMethod,
  }

  const resultsInLength = createResultMethods({
    list: lengths,
    methods: lengthMethods,
  })

  return createMethodList({
    list: lengths,
    resultsIn: resultsInLength,
  })
}

const whatis = val => ({ ...inTime(val), ...inWeight(val), ...inLength(val) })

export default whatis
