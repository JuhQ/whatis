import whatis from './whatis'

const shouldHaveMethods = methods =>
  describe('methods', () => {
    methods.forEach(method => {
      describe(method, () => {
        const base = whatis(1)[method]()

        it('should have method', () => {
          expect(base).toBeDefined()
          expect(base.in[method]()).toBeDefined()
          expect(base.in[method]()).toBe(1)
        })

        describe('inner methods', () => {
          methods.map(inMethod =>
            it(`should have inner method: ${inMethod}`, () => {
              expect(base.in[inMethod]()).toBeDefined()
            }),
          )
        })
      })
    })
  })

const runTestSet = list =>
  list.forEach(item =>
    Object.keys(item).forEach(unit =>
      describe(unit, () => {
        item[unit].forEach(({ val, to, result }) =>
          it(`should convert ${val} ${unit} to ${result} ${to}`, () => {
            expect(
              whatis(val)
                [unit]()
                .in[to](),
            ).toBe(result)
          }),
        )
      }),
    ),
  )

describe('Whatis', () => {
  describe('time units', () => {
    const methods = [
      'planck',
      'plancks',
      'second',
      'seconds',
      'minute',
      'minutes',
      'hour',
      'hours',
      'day',
      'days',
      'week',
      'weeks',
      'month',
      'months',
      'year',
      'years',
      'decade',
      'decades',
      'century',
      'centuries',
      'millennium',
      'millenniums',
    ]

    shouldHaveMethods(methods)

    const list = [
      {
        plancks: [
          { val: 1, to: 'plancks', result: 1 },
          { val: 1, to: 'seconds', result: 1.855287569573284e43 },
          { val: 1, to: 'minutes', result: 3.0921459492888067e41 },
          { val: 1, to: 'hours', result: 5.153576582148011e39 },
          { val: 1, to: 'days', result: 2.1473235758950047e38 },
          { val: 1, to: 'weeks', result: 3.067605108421435e37 },
          { val: 1, to: 'months', result: 7.059693948147961e36 },
          { val: 1, to: 'years', result: 5.883078290123301e35 },
          { val: 1, to: 'decades', result: 5.883078290123301e34 },
          { val: 1, to: 'centuries', result: 5.883078290123301e33 },
          { val: 1, to: 'millenniums', result: 5.883078290123301e32 },
        ],
        seconds: [
          { val: 1, to: 'plancks', result: 5.39e-44 },
          { val: 1, to: 'seconds', result: 1 },
          { val: 1, to: 'minutes', result: 0.016666666666666666 },
          { val: 1, to: 'hours', result: 0.0002777777777777778 },
          { val: 1, to: 'days', result: 0.000011574074074074073 },
          { val: 1, to: 'weeks', result: 0.0000016534391534391535 },
          { val: 1, to: 'months', result: 3.80517503805175e-7 },
          { val: 1, to: 'years', result: 3.1709791983764586e-8 },
          { val: 1, to: 'decades', result: 3.1709791983764586e-9 },
          { val: 1, to: 'centuries', result: 3.1709791983764586e-10 },
          { val: 1, to: 'millenniums', result: 3.1709791983764586e-11 },
        ],
        minutes: [
          { val: 1, to: 'plancks', result: 3.234e-42 },
          { val: 1, to: 'seconds', result: 60 },
          { val: 1, to: 'minutes', result: 1 },
          { val: 1, to: 'hours', result: 0.016666666666666666 },
          { val: 1, to: 'days', result: 0.0006944444444444444 },
          { val: 1, to: 'weeks', result: 0.0000992063492063492 },
          { val: 1, to: 'months', result: 0.0000228310502283105 },
          { val: 1, to: 'years', result: 0.000001902587519025875 },
          { val: 1, to: 'decades', result: 1.9025875190258752e-7 },
          { val: 1, to: 'centuries', result: 1.902587519025875e-8 },
          { val: 1, to: 'millenniums', result: 1.902587519025875e-9 },
        ],
        hours: [
          { val: 1, to: 'plancks', result: 1.9404e-40 },
          { val: 1, to: 'seconds', result: 3600 },
          { val: 1, to: 'minutes', result: 60 },
          { val: 1, to: 'hours', result: 1 },
          { val: 1, to: 'days', result: 0.041666666666666664 },
          { val: 1, to: 'weeks', result: 0.005952380952380952 },
          { val: 1, to: 'months', result: 0.00136986301369863 },
          { val: 1, to: 'years', result: 0.00011415525114155251 },
          { val: 1, to: 'decades', result: 0.000011415525114155251 },
          { val: 1, to: 'centuries', result: 0.0000011415525114155251 },
          { val: 1, to: 'millenniums', result: 1.1415525114155251e-7 },
        ],
        days: [
          { val: 1, to: 'plancks', result: 4.65696e-39 },
          { val: 1, to: 'seconds', result: 86400 },
          { val: 1, to: 'minutes', result: 1440 },
          { val: 1, to: 'hours', result: 24 },
          { val: 1, to: 'days', result: 1 },
          { val: 1, to: 'weeks', result: 0.14285714285714285 },
          { val: 1, to: 'months', result: 0.03287671232876712 },
          { val: 1, to: 'years', result: 0.0027397260273972603 },
          { val: 1, to: 'decades', result: 0.000273972602739726 },
          { val: 1, to: 'centuries', result: 0.000027397260273972603 },
          { val: 1, to: 'millenniums', result: 0.0000027397260273972604 },
        ],
        weeks: [
          { val: 1, to: 'plancks', result: 3.259872e-38 },
          { val: 1, to: 'seconds', result: 604800 },
          { val: 1, to: 'minutes', result: 10080 },
          { val: 1, to: 'hours', result: 168 },
          { val: 1, to: 'days', result: 7 },
          { val: 1, to: 'weeks', result: 1 },
          { val: 1, to: 'months', result: 0.00821917808219178 },
          { val: 1, to: 'years', result: 0.019230769230769232 },
          { val: 1, to: 'decades', result: 0.0019230769230769232 },
          { val: 1, to: 'centuries', result: 0.0001923076923076923 },
          { val: 1, to: 'millenniums', result: 0.00001923076923076923 },
        ],
        months: [
          { val: 1, to: 'plancks', result: 1.416492e-37 },
          { val: 1, to: 'seconds', result: 2628000 },
          { val: 1, to: 'minutes', result: 43800 },
          { val: 1, to: 'hours', result: 730 },
          { val: 1, to: 'days', result: 30.416666666666668 },
          { val: 1, to: 'weeks', result: 4 },
          { val: 1, to: 'months', result: 1 },
          { val: 1, to: 'years', result: 0.08333333333333333 },
          { val: 1, to: 'decades', result: 0.008333333333333333 },
          { val: 1, to: 'centuries', result: 0.0008333333333333333 },
          { val: 1, to: 'millenniums', result: 0.00008333333333333333 },
        ],
        years: [
          { val: 1, to: 'plancks', result: 1.6997904e-36 },
          { val: 1, to: 'seconds', result: 31536000 },
          { val: 1, to: 'minutes', result: 525600 },
          { val: 1, to: 'hours', result: 8760 },
          { val: 1, to: 'days', result: 365 },
          { val: 1, to: 'weeks', result: 52 },
          { val: 1, to: 'months', result: 12 },
          { val: 1, to: 'years', result: 1 },
          { val: 1, to: 'decades', result: 0.1 },
          { val: 1, to: 'centuries', result: 0.01 },
          { val: 1, to: 'millenniums', result: 0.001 },
        ],
        decades: [
          { val: 1, to: 'plancks', result: 1.6997904000000003e-35 },
          { val: 1, to: 'seconds', result: 315360000 },
          { val: 1, to: 'minutes', result: 5256000 },
          { val: 1, to: 'hours', result: 87600 },
          { val: 1, to: 'days', result: 3650 },
          { val: 1, to: 'weeks', result: 520 },
          { val: 1, to: 'months', result: 120 },
          { val: 1, to: 'years', result: 10 },
          { val: 1, to: 'decades', result: 1 },
          { val: 1, to: 'centuries', result: 0.1 },
          { val: 1, to: 'millenniums', result: 0.01 },
        ],
        millenniums: [
          { val: 1, to: 'plancks', result: 1.6997904e-33 },
          { val: 1, to: 'seconds', result: 31536000000 },
          { val: 1, to: 'minutes', result: 525600000 },
          { val: 1, to: 'hours', result: 8760000 },
          { val: 1, to: 'days', result: 365000 },
          { val: 1, to: 'weeks', result: 52000 },
          { val: 1, to: 'months', result: 12000 },
          { val: 1, to: 'years', result: 1000 },
          { val: 1, to: 'decades', result: 100 },
          { val: 1, to: 'centuries', result: 10 },
          { val: 1, to: 'millenniums', result: 1 },
        ],
      },
    ]

    runTestSet(list)
  })

  describe('weight units', () => {
    const methods = ['gram', 'grams', 'kilogram', 'kilograms']

    shouldHaveMethods(methods)

    const list = [
      {
        grams: [
          { val: 1, to: 'grams', result: 1 },
          { val: 1, to: 'kilograms', result: 0.001 },
        ],
        kilograms: [
          { val: 1, to: 'grams', result: 1000 },
          { val: 1, to: 'kilograms', result: 1 },
        ],
      },
    ]

    runTestSet(list)
  })

  describe('length units', () => {
    const methods = [
      'yoctometre',
      'yoctometres',
      'zeptometre',
      'zeptometres',
      'attometre',
      'attometres',
      'femtometre',
      'femtometres',
      'picometre',
      'picometres',
      'nanometre',
      'nanometres',
      'micrometre',
      'micrometres',
      'millimetre',
      'millimetres',
      'centimetre',
      'centimetres',
      'decimetre',
      'decimetres',
    ]

    shouldHaveMethods(methods)

    const list = [
      {
        yoctometres: [
          { val: 1, to: 'yoctometres', result: 1 },
          { val: 1, to: 'zeptometre', result: 0.001 },
          { val: 1, to: 'attometres', result: 1e-6 },
          { val: 1, to: 'femtometres', result: 1e-9 },
          { val: 1, to: 'picometres', result: 1e-12 },
          { val: 1, to: 'nanometres', result: 1e-15 },
          { val: 1, to: 'micrometres', result: 1e-18 },
          { val: 1, to: 'millimetres', result: 1e-21 },
          { val: 1, to: 'centimetres', result: 1.0000000000000001e-24 },
          { val: 1, to: 'decimetre', result: 1e-27 },
        ],
        zeptometre: [
          { val: 1, to: 'yoctometres', result: 1000 },
          { val: 1, to: 'zeptometre', result: 1 },
          { val: 1, to: 'attometres', result: 0.001 },
          { val: 1, to: 'femtometres', result: 1e-6 },
          { val: 1, to: 'picometres', result: 1e-9 },
          { val: 1, to: 'nanometres', result: 1e-12 },
          { val: 1, to: 'micrometres', result: 1e-15 },
          { val: 1, to: 'millimetres', result: 1e-18 },
          { val: 1, to: 'centimetres', result: 1e-21 },
          { val: 1, to: 'decimetre', result: 1.0000000000000001e-24 },
        ],
        attometres: [
          { val: 1, to: 'yoctometres', result: 1000000 },
          { val: 1, to: 'zeptometre', result: 1000 },
          { val: 1, to: 'attometres', result: 1 },
          { val: 1, to: 'femtometres', result: 0.001 },
          { val: 1, to: 'picometres', result: 1e-6 },
          { val: 1, to: 'nanometres', result: 1e-9 },
          { val: 1, to: 'micrometres', result: 1e-12 },
          { val: 1, to: 'millimetres', result: 1e-15 },
          { val: 1, to: 'centimetres', result: 1e-18 },
          { val: 1, to: 'decimetre', result: 1e-21 },
        ],
        femtometres: [
          { val: 1, to: 'yoctometres', result: 1000000000 },
          { val: 1, to: 'zeptometre', result: 1000000 },
          { val: 1, to: 'attometres', result: 1000 },
          { val: 1, to: 'femtometres', result: 1 },
          { val: 1, to: 'picometres', result: 0.001 },
          { val: 1, to: 'nanometres', result: 0.000001 },
          { val: 1, to: 'micrometres', result: 1e-9 },
          { val: 1, to: 'millimetres', result: 1e-12 },
          { val: 1, to: 'centimetres', result: 1e-15 },
          { val: 1, to: 'decimetre', result: 1e-18 },
        ],
        picometres: [
          { val: 1, to: 'yoctometres', result: 1000000000000 },
          { val: 1, to: 'zeptometre', result: 1000000000 },
          { val: 1, to: 'attometres', result: 1000000 },
          { val: 1, to: 'femtometres', result: 1000 },
          { val: 1, to: 'picometres', result: 1 },
          { val: 1, to: 'nanometres', result: 0.001 },
          { val: 1, to: 'micrometres', result: 0.000001 },
          { val: 1, to: 'millimetres', result: 0.000000001 },
          { val: 1, to: 'centimetres', result: 1e-12 },
          { val: 1, to: 'decimetre', result: 1e-15 },
        ],
        nanometres: [
          { val: 1, to: 'yoctometres', result: 1000000000000000 },
          { val: 1, to: 'zeptometre', result: 1000000000000 },
          { val: 1, to: 'attometres', result: 1000000000 },
          { val: 1, to: 'femtometres', result: 1000000 },
          { val: 1, to: 'picometres', result: 1000 },
          { val: 1, to: 'nanometres', result: 1 },
          { val: 1, to: 'micrometres', result: 0.001 },
          { val: 1, to: 'millimetres', result: 0.000001 },
          { val: 1, to: 'centimetres', result: 1e-9 },
          { val: 1, to: 'decimetre', result: 1e-12 },
        ],
        micrometres: [
          { val: 1, to: 'yoctometres', result: 1000000000000000000 },
          { val: 1, to: 'zeptometre', result: 1000000000000000 },
          { val: 1, to: 'attometres', result: 1000000000000 },
          { val: 1, to: 'femtometres', result: 1000000000 },
          { val: 1, to: 'picometres', result: 1000000 },
          { val: 1, to: 'nanometres', result: 1000 },
          { val: 1, to: 'micrometres', result: 1 },
          { val: 1, to: 'millimetres', result: 0.001 },
          { val: 1, to: 'centimetres', result: 0.000001 },
          { val: 1, to: 'decimetre', result: 0.000000001 },
        ],
        millimetre: [
          { val: 1, to: 'yoctometres', result: 1000000000000000000000 },
          { val: 1, to: 'zeptometre', result: 1000000000000000000 },
          { val: 1, to: 'attometres', result: 1000000000000000 },
          { val: 1, to: 'femtometres', result: 1000000000000 },
          { val: 1, to: 'picometres', result: 1000000000 },
          { val: 1, to: 'nanometres', result: 1000000 },
          { val: 1, to: 'micrometres', result: 1000 },
          { val: 1, to: 'millimetres', result: 1 },
          { val: 1, to: 'centimetres', result: 0.001 },
          { val: 1, to: 'decimetre', result: 0.000001 },
        ],
        centimetre: [
          { val: 1, to: 'yoctometres', result: 1000000000000000000000000 },
          { val: 1, to: 'zeptometre', result: 1000000000000000000000 },
          { val: 1, to: 'attometres', result: 1000000000000000000 },
          { val: 1, to: 'femtometres', result: 1000000000000000 },
          { val: 1, to: 'picometres', result: 1000000000000 },
          { val: 1, to: 'nanometres', result: 1000000000 },
          { val: 1, to: 'micrometres', result: 1000000 },
          { val: 1, to: 'millimetres', result: 1000 },
          { val: 1, to: 'centimetres', result: 1 },
          { val: 1, to: 'decimetre', result: 0.001 },
        ],
        decimetre: [
          { val: 1, to: 'yoctometres', result: 1000000000000000000000000000 },
          { val: 1, to: 'zeptometre', result: 1000000000000000000000000 },
          { val: 1, to: 'attometres', result: 1000000000000000000000 },
          { val: 1, to: 'femtometres', result: 1000000000000000000 },
          { val: 1, to: 'picometres', result: 1000000000000000 },
          { val: 1, to: 'nanometres', result: 1000000000000 },
          { val: 1, to: 'micrometres', result: 1000000000 },
          { val: 1, to: 'millimetres', result: 1000000 },
          { val: 1, to: 'centimetres', result: 1000 },
          { val: 1, to: 'decimetre', result: 1 },
        ],
      },
    ]

    runTestSet(list)
  })
})
