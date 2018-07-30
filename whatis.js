import {
  createMethodList,
  createMethodPairs,
  createResultMethods,
} from './helpers'

const inTime = val => {
  const time = [
    'planck',
    'second',
    'minute',
    'hour',
    'day',
    'week',
    'month',
    'year',
    'decade',
    'century',
    'millennium',
  ]

  const daysInYear = 365
  const monthsInYear = 12

  const daysInMonth = daysInYear / monthsInYear

  const planckConstant = 5.39 * 1e-44

  const planckTimeUnitMethod = createMethodPairs({
    planck: val,
    second: val * planckConstant,
    minute: val * planckConstant * 60,
    hour: val * planckConstant * 60 * 60,
    day: val * planckConstant * 60 * 60 * 24,
    week: val * planckConstant * 60 * 60 * 24 * 7,
    month: val * planckConstant * 60 * 60 * 24 * daysInMonth,
    year: val * planckConstant * 60 * 60 * 24 * daysInYear,
    decade: val * planckConstant * 60 * 60 * 24 * daysInYear * 10,
    century: val * planckConstant * 60 * 60 * 24 * daysInYear * 100,
    millennium: val * planckConstant * 60 * 60 * 24 * daysInYear * 1000,
  })

  const secondsMethod = createMethodPairs({
    planck: val / planckConstant,
    second: val,
    minute: val * 60,
    hour: val * 60 * 60,
    day: val * 60 * 60 * 24,
    week: val * 60 * 60 * 24 * 7,
    month: val * 60 * 60 * 24 * daysInMonth,
    year: val * 60 * 60 * 24 * daysInYear,
    decade: val * 60 * 60 * 24 * daysInYear * 10,
    century: val * 60 * 60 * 24 * daysInYear * 100,
    millennium: val * 60 * 60 * 24 * daysInYear * 1000,
  })

  const minutesMethod = createMethodPairs({
    planck: val / planckConstant / 60,
    second: val / 60,
    minute: val,
    hour: val * 60,
    day: val * 60 * 24,
    week: val * 60 * 24 * 7,
    month: val * 60 * 24 * daysInMonth,
    year: val * 60 * 24 * daysInYear,
    decade: val * 60 * 24 * daysInYear * 10,
    century: val * 60 * 24 * daysInYear * 100,
    millennium: val * 60 * 24 * daysInYear * 1000,
  })

  const hoursMethod = createMethodPairs({
    planck: val / planckConstant / 60 / 60,
    second: val / 60 / 60,
    minute: val / 60,
    hour: val,
    day: val * 24,
    week: val * 24 * 7,
    month: val * 24 * daysInMonth,
    year: val * 24 * daysInYear,
    decade: val * 24 * daysInYear * 10,
    century: val * 24 * daysInYear * 100,
    millennium: val * 24 * daysInYear * 1000,
  })

  const daysMethod = createMethodPairs({
    planck: val / planckConstant / 24 / 60 / 60,
    second: val / 24 / 60 / 60,
    minute: val / 24 / 60,
    hour: val / 24,
    day: val,
    week: val * 7,
    month: val * daysInMonth,
    year: val * daysInYear,
    decade: val * daysInYear * 10,
    century: val * daysInYear * 100,
    millennium: val * daysInYear * 1000,
  })

  const weeksMethod = createMethodPairs({
    planck: val / planckConstant / 7 / 24 / 60 / 60,
    second: val / 7 / 24 / 60 / 60,
    minute: val / 7 / 24 / 60,
    hour: val / 7 / 24,
    day: val / 7,
    week: val,
    month: val * 4,
    year: val * 52,
    decade: val * 52 * 10,
    century: val * 52 * 100,
    millennium: val * 52 * 1000,
  })

  const monthsMethod = createMethodPairs({
    planck: val / planckConstant / daysInMonth / 24 / 3600,
    second: val / daysInMonth / 24 / 3600,
    minute: val / daysInMonth / 24 / 60,
    hour: val / daysInMonth / 24,
    day: val / daysInMonth,
    week: val / (daysInMonth * 4),
    month: val,
    year: val * monthsInYear,
    decade: val * monthsInYear * 10,
    century: val * monthsInYear * 100,
    millennium: val * monthsInYear * 1000,
  })

  const yearsMethod = createMethodPairs({
    planck: val / planckConstant / daysInYear / 24 / 60 / 60,
    second: val / daysInYear / 24 / 60 / 60,
    minute: val / daysInYear / 24 / 60,
    hour: val / daysInYear / 24,
    day: val / daysInYear,
    week: val / 52,
    month: val / monthsInYear,
    year: val,
    decade: val * 10,
    century: val * 100,
    millennium: val * 1000,
  })

  const decadesMethod = createMethodPairs({
    planck: val / planckConstant / daysInYear / 24 / 60 / 60 / 10,
    second: val / daysInYear / 24 / 60 / 60 / 10,
    minute: val / daysInYear / 24 / 60 / 10,
    hour: val / daysInYear / 24 / 10,
    day: val / daysInYear / 10,
    week: val / 52 / 10,
    month: val / monthsInYear / 10,
    year: val / 10,
    decade: val,
    century: val * 10,
    millennium: val * 100,
  })

  const centuriesMethod = createMethodPairs({
    planck: val / planckConstant / daysInYear / 24 / 60 / 60 / 100,
    second: val / daysInYear / 24 / 60 / 60 / 100,
    minute: val / daysInYear / 24 / 60 / 100,
    hour: val / daysInYear / 24 / 100,
    day: val / daysInYear / 100,
    week: val / 52 / 100,
    month: val / monthsInYear / 100,
    year: val / 100,
    decade: val / 10,
    century: val,
    millennium: val * 10,
  })

  const millenniumsMethod = createMethodPairs({
    planck: val / planckConstant / daysInYear / 24 / 60 / 60 / 1000,
    second: val / daysInYear / 24 / 60 / 60 / 1000,
    minute: val / daysInYear / 24 / 60 / 1000,
    hour: val / daysInYear / 24 / 1000,
    day: val / daysInYear / 1000,
    week: val / 52 / 1000,
    month: val / monthsInYear / 1000,
    year: val / 1000,
    decade: val / 100,
    century: val / 10,
    millennium: val,
  })

  const timeMethods = {
    planck: planckTimeUnitMethod,
    second: secondsMethod,
    minute: minutesMethod,
    hour: hoursMethod,
    day: daysMethod,
    week: weeksMethod,
    month: monthsMethod,
    year: yearsMethod,
    decade: decadesMethod,
    century: centuriesMethod,
    millennium: millenniumsMethod,
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
    'nanometre',
    'micrometre',
    'millimetre',
    'centimetre',
    'decimetre',
    'metre',
    'decametre',
    'hectometre',
    'kilometre',
    'megametre',
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
    zeptometre: val * 1e3,
    attometre: val * 1e6,
    femtometre: val * 1e9,
    picometre: val * 1e12,
    nanometre: val * 1e15,
    micrometre: val * 1e18,
    millimetre: val * 1e21,
    centimetre: val * 1e24,
    decimetre: val * 1e27,
    metre: val * 1e30,
    decametre: val * 1e33,
    hectometre: val * 1e36,
    kilometre: val * 1e39,
    megametre: val * 1e42,
  })

  const zeptometreMethod = createMethodPairs({
    yoctometre: val / 1e3,
    zeptometre: val,
    attometre: val * 1e3,
    femtometre: val * 1e6,
    picometre: val * 1e9,
    nanometre: val * 1e12,
    micrometre: val * 1e15,
    millimetre: val * 1e18,
    centimetre: val * 1e21,
    decimetre: val * 1e24,
    metre: val * 1e27,
    decametre: val * 1e30,
    hectometre: val * 1e33,
    kilometre: val * 1e36,
    megametre: val * 1e39,
  })

  const attometreMethod = createMethodPairs({
    yoctometre: val / 1e6,
    zeptometre: val / 1e3,
    attometre: val,
    femtometre: val * 1e3,
    picometre: val * 1e6,
    nanometre: val * 1e9,
    micrometre: val * 1e12,
    millimetre: val * 1e15,
    centimetre: val * 1e18,
    decimetre: val * 1e21,
    metre: val * 1e24,
    decametre: val * 1e27,
    hectometre: val * 1e30,
    kilometre: val * 1e33,
    megametre: val * 1e36,
  })

  const femtometreMethod = createMethodPairs({
    yoctometre: val / 1e9,
    zeptometre: val / 1e6,
    attometre: val / 1e3,
    femtometre: val,
    picometre: val * 1e3,
    nanometre: val * 1e6,
    micrometre: val * 1e9,
    millimetre: val * 1e12,
    centimetre: val * 1e15,
    decimetre: val * 1e18,
    metre: val * 1e21,
    decametre: val * 1e24,
    hectometre: val * 1e27,
    kilometre: val * 1e30,
    megametre: val * 1e33,
  })

  const picometreMethod = createMethodPairs({
    yoctometre: val / 1e12,
    zeptometre: val / 1e9,
    attometre: val / 1e6,
    femtometre: val / 1e3,
    picometre: val,
    nanometre: val * 1e3,
    micrometre: val * 1e6,
    millimetre: val * 1e9,
    centimetre: val * 1e12,
    decimetre: val * 1e15,
    metre: val * 1e18,
    decametre: val * 1e21,
    hectometre: val * 1e24,
    kilometre: val * 1e27,
    megametre: val * 1e30,
  })

  const nanometreMethod = createMethodPairs({
    yoctometre: val / 1e15,
    zeptometre: val / 1e12,
    attometre: val / 1e9,
    femtometre: val / 1e6,
    picometre: val / 1e3,
    nanometre: val,
    micrometre: val * 1e3,
    millimetre: val * 1e6,
    centimetre: val * 1e9,
    decimetre: val * 1e12,
    metre: val * 1e15,
    decametre: val * 1e18,
    hectometre: val * 1e21,
    kilometre: val * 1e24,
    megametre: val * 1e27,
  })

  const micrometreMethod = createMethodPairs({
    yoctometre: val / 1e18,
    zeptometre: val / 1e15,
    attometre: val / 1e12,
    femtometre: val / 1e9,
    picometre: val / 1e6,
    nanometre: val / 1e3,
    micrometre: val,
    millimetre: val * 1e3,
    centimetre: val * 1e6,
    decimetre: val * 1e9,
    metre: val * 1e12,
    decametre: val * 1e15,
    hectometre: val * 1e18,
    kilometre: val * 1e21,
    megametre: val * 1e24,
  })

  const millimetreMethod = createMethodPairs({
    yoctometre: val / 1e21,
    zeptometre: val / 1e18,
    attometre: val / 1e15,
    femtometre: val / 1e12,
    picometre: val / 1e9,
    nanometre: val / 1e6,
    micrometre: val / 1e3,
    millimetre: val,
    centimetre: val * 1e3,
    decimetre: val * 1e6,
    metre: val * 1e9,
    decametre: val * 1e12,
    hectometre: val * 1e15,
    kilometre: val * 1e18,
    megametre: val * 1e21,
  })

  const centimetreMethod = createMethodPairs({
    yoctometre: val / 1e24,
    zeptometre: val / 1e21,
    attometre: val / 1e18,
    femtometre: val / 1e15,
    picometre: val / 1e12,
    nanometre: val / 1e9,
    micrometre: val / 1e6,
    millimetre: val / 1e3,
    centimetre: val,
    decimetre: val * 1e3,
    metre: val * 1e6,
    decametre: val * 1e9,
    hectometre: val * 1e12,
    kilometre: val * 1e15,
    megametre: val * 1e18,
  })

  const decimetreMethod = createMethodPairs({
    yoctometre: val / 1e27,
    zeptometre: val / 1e24,
    attometre: val / 1e21,
    femtometre: val / 1e18,
    picometre: val / 1e15,
    nanometre: val / 1e12,
    micrometre: val / 1e9,
    millimetre: val / 1e6,
    centimetre: val / 1e3,
    decimetre: val,
    metre: val * 1e3,
    decametre: val * 1e6,
    hectometre: val * 1e9,
    kilometre: val * 1e12,
    megametre: val * 1e15,
  })

  const metreMethod = createMethodPairs({
    yoctometre: val / 1e30,
    zeptometre: val / 1e27,
    attometre: val / 1e24,
    femtometre: val / 1e21,
    picometre: val / 1e18,
    nanometre: val / 1e15,
    micrometre: val / 1e12,
    millimetre: val / 1e9,
    centimetre: val / 1e6,
    decimetre: val / 1e3,
    metre: val,
    decametre: val * 1e3,
    hectometre: val * 1e6,
    kilometre: val * 1e9,
    megametre: val * 1e12,
  })

  const decametreMethod = createMethodPairs({
    yoctometre: val / 1e33,
    zeptometre: val / 1e30,
    attometre: val / 1e27,
    femtometre: val / 1e24,
    picometre: val / 1e21,
    nanometre: val / 1e18,
    micrometre: val / 1e15,
    millimetre: val / 1e12,
    centimetre: val / 1e9,
    decimetre: val / 1e6,
    metre: val / 1e3,
    decametre: val,
    hectometre: val * 1e3,
    kilometre: val * 1e6,
    megametre: val * 1e9,
  })

  const hectometreMethod = createMethodPairs({
    yoctometre: val / 1e36,
    zeptometre: val / 1e33,
    attometre: val / 1e30,
    femtometre: val / 1e27,
    picometre: val / 1e24,
    nanometre: val / 1e21,
    micrometre: val / 1e18,
    millimetre: val / 1e15,
    centimetre: val / 1e12,
    decimetre: val / 1e9,
    metre: val / 1e6,
    decametre: val / 1e3,
    hectometre: val,
    kilometre: val * 1e3,
    megametre: val * 1e6,
  })

  const kilometreMethod = createMethodPairs({
    yoctometre: val / 1e39,
    zeptometre: val / 1e36,
    attometre: val / 1e33,
    femtometre: val / 1e30,
    picometre: val / 1e27,
    nanometre: val / 1e24,
    micrometre: val / 1e21,
    millimetre: val / 1e18,
    centimetre: val / 1e15,
    decimetre: val / 1e12,
    metre: val / 1e9,
    decametre: val / 1e6,
    hectometre: val / 1e3,
    kilometre: val,
    megametre: val * 1e3,
  })

  const megametreMethod = createMethodPairs({
    yoctometre: val / 1e42,
    zeptometre: val / 1e39,
    attometre: val / 1e36,
    femtometre: val / 1e33,
    picometre: val / 1e30,
    nanometre: val / 1e27,
    micrometre: val / 1e24,
    millimetre: val / 1e21,
    centimetre: val / 1e18,
    decimetre: val / 1e15,
    metre: val / 1e12,
    decametre: val / 1e9,
    hectometre: val / 1e6,
    kilometre: val / 1e3,
    megametre: val,
  })

  const lengthMethods = {
    yoctometre: yoctometreMethod,
    zeptometre: zeptometreMethod,
    attometre: attometreMethod,
    femtometre: femtometreMethod,
    picometre: picometreMethod,
    nanometre: nanometreMethod,
    micrometre: micrometreMethod,
    millimetre: millimetreMethod,
    centimetre: centimetreMethod,
    decimetre: decimetreMethod,
    metre: metreMethod,
    decametre: decametreMethod,
    hectometre: hectometreMethod,
    kilometre: kilometreMethod,
    megametre: megametreMethod,
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
