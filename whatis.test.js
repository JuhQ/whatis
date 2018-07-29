import whatis from './whatis'

const shouldHaveMethods = methods =>
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

describe('Whatis', () => {
  describe('time units', () => {
    describe('methods', () => {
      const methods = [
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
    })

    describe('seconds', () => {
      it('should give correct seconds for 1 second', () => {
        expect(
          whatis(1)
            .seconds()
            .in.seconds(),
        ).toBe(1)
      })

      it('should give correct hours for 3600 second', () => {
        expect(
          whatis(3600)
            .seconds()
            .in.hours(),
        ).toBe(1)
      })

      it('should give correct days for 86400 seconds', () => {
        expect(
          whatis(86400)
            .seconds()
            .in.days(),
        ).toBe(1)
      })

      it('should give correct months for 86400 seconds', () => {
        expect(
          whatis(86400)
            .seconds()
            .in.months(),
        ).toBe(0.03287671232876712)
      })

      it('should give correct years for 86400 seconds', () => {
        expect(
          whatis(86400)
            .seconds()
            .in.years(),
        ).toBe(0.0027397260273972607)
      })

      it('should give correct decades for 864000 seconds', () => {
        expect(
          whatis(864000)
            .seconds()
            .in.decades(),
        ).toBe(0.0027397260273972603)
      })

      it('should give correct centuries for 864000 seconds', () => {
        expect(
          whatis(864000)
            .seconds()
            .in.centuries(),
        ).toBe(0.000273972602739726)
      })

      it('should give correct millenniums for 864000 seconds', () => {
        expect(
          whatis(864000)
            .seconds()
            .in.millenniums(),
        ).toBe(0.0000273972602739726)
      })
    })

    describe('hours', () => {
      it('should give correct seconds for 1 hour', () => {
        expect(
          whatis(1)
            .hours()
            .in.seconds(),
        ).toBe(3600)
      })

      it('should give correct hours for 1 hour', () => {
        expect(
          whatis(1)
            .hours()
            .in.hours(),
        ).toBe(1)
      })

      it('should give correct days for 24 hours', () => {
        expect(
          whatis(24)
            .hours()
            .in.days(),
        ).toBe(1)
      })

      it('should give correct months for 100 hours', () => {
        expect(
          whatis(100)
            .hours()
            .in.months(),
        ).toBe(0.136986301369863)
      })

      it('should give correct years for 100 hours', () => {
        expect(
          whatis(100)
            .hours()
            .in.years(),
        ).toBe(0.01141552511415525)
      })

      it('should give correct years for 1000 hours', () => {
        expect(
          whatis(1000)
            .hours()
            .in.decades(),
        ).toBe(0.01141552511415525)
      })

      it('should give correct centuries for 1000 hour', () => {
        expect(
          whatis(1000)
            .hours()
            .in.centuries(),
        ).toBe(0.001141552511415525)
      })

      it('should give correct millenniums for 1000 hour', () => {
        expect(
          whatis(1000)
            .hours()
            .in.millenniums(),
        ).toBe(0.00011415525114155251)
      })
    })

    describe('days', () => {
      it('should give correct seconds for 1 day', () => {
        expect(
          whatis(1)
            .days()
            .in.seconds(),
        ).toBe(86400)
      })

      it('should give correct hours for 1 day', () => {
        expect(
          whatis(1)
            .days()
            .in.hours(),
        ).toBe(24)
      })

      it('should give correct days for 365 days', () => {
        expect(
          whatis(365)
            .days()
            .in.days(),
        ).toBe(365)
      })

      it('should give correct months for 30 days', () => {
        expect(
          whatis(30)
            .days()
            .in.months(),
        ).toBe(0.9863013698630136)
      })

      it('should give correct years for 365 days', () => {
        expect(
          whatis(365)
            .days()
            .in.years(),
        ).toBe(1)
      })

      it('should give correct decades for 365 days', () => {
        expect(
          whatis(365)
            .days()
            .in.decades(),
        ).toBe(0.1)
      })

      it('should give correct centuries for 365 days', () => {
        expect(
          whatis(365)
            .days()
            .in.centuries(),
        ).toBe(0.01)
      })

      it('should give correct millenniums for 365 days', () => {
        expect(
          whatis(365)
            .days()
            .in.millenniums(),
        ).toBe(0.001)
      })
    })

    describe('months', () => {
      it('should give correct seconds for 1 month', () => {
        expect(
          whatis(1)
            .months()
            .in.seconds(),
        ).toBe(2628000)
      })

      it('should give correct hours for 1 month', () => {
        expect(
          whatis(1)
            .months()
            .in.hours(),
        ).toBe(730)
      })

      it('should give correct days for 1 month', () => {
        expect(
          whatis(1)
            .months()
            .in.days(),
        ).toBe(30.416666666666668)
      })

      it('should give correct months for 12 months', () => {
        expect(
          whatis(12)
            .months()
            .in.months(),
        ).toBe(12)
      })

      it('should give correct years for 12 months', () => {
        expect(
          whatis(12)
            .months()
            .in.years(),
        ).toBe(1)
      })

      it('should give correct decades for 12 months', () => {
        expect(
          whatis(12)
            .months()
            .in.decades(),
        ).toBe(0.1)
      })

      it('should give correct centuries for 12 months', () => {
        expect(
          whatis(12)
            .months()
            .in.centuries(),
        ).toBe(0.01)
      })

      it('should give correct millenniums for 12 months', () => {
        expect(
          whatis(12)
            .months()
            .in.millenniums(),
        ).toBe(0.001)
      })
    })

    describe('years', () => {
      it('should give correct seconds for 1 year', () => {
        expect(
          whatis(1)
            .years()
            .in.seconds(),
        ).toBe(31536000)
      })

      it('should give correct hours for 1 year', () => {
        expect(
          whatis(1)
            .years()
            .in.hours(),
        ).toBe(8760)
      })

      it('should give correct days for 1 year', () => {
        expect(
          whatis(1)
            .years()
            .in.days(),
        ).toBe(365)
      })

      it('should give correct months for 1 year', () => {
        expect(
          whatis(1)
            .years()
            .in.months(),
        ).toBe(12)
      })

      it('should give correct years for 1 year', () => {
        expect(
          whatis(1)
            .years()
            .in.years(),
        ).toBe(1)
      })

      it('should give correct decades for 1 year', () => {
        expect(
          whatis(1)
            .years()
            .in.decades(),
        ).toBe(0.1)
      })

      it('should give correct centuries for 1 year', () => {
        expect(
          whatis(1)
            .years()
            .in.centuries(),
        ).toBe(0.01)
      })

      it('should give correct millenniums for 1 year', () => {
        expect(
          whatis(1)
            .years()
            .in.millenniums(),
        ).toBe(0.001)
      })
    })

    describe('decades', () => {
      it('should give correct seconds for 1 decade', () => {
        expect(
          whatis(1)
            .decades()
            .in.seconds(),
        ).toBe(315360000)
      })

      it('should give correct hours for 1 decade', () => {
        expect(
          whatis(1)
            .decades()
            .in.hours(),
        ).toBe(87600)
      })

      it('should give correct days for 1 decade', () => {
        expect(
          whatis(1)
            .decades()
            .in.days(),
        ).toBe(3650)
      })

      it('should give correct months for 1 decade', () => {
        expect(
          whatis(1)
            .decades()
            .in.months(),
        ).toBe(120)
      })

      it('should give correct year for 1 decade', () => {
        expect(
          whatis(1)
            .decades()
            .in.years(),
        ).toBe(10)
      })

      it('should give correct decades for 1 decade', () => {
        expect(
          whatis(1)
            .decades()
            .in.decades(),
        ).toBe(1)
      })

      it('should give correct centuries for 1 decade', () => {
        expect(
          whatis(1)
            .decades()
            .in.centuries(),
        ).toBe(0.1)
      })

      it('should give correct millenniums for 1 decade', () => {
        expect(
          whatis(1)
            .decades()
            .in.millenniums(),
        ).toBe(0.01)
      })
    })

    describe('centuries', () => {
      it('should give correct seconds for 1 century', () => {
        expect(
          whatis(1)
            .centuries()
            .in.seconds(),
        ).toBe(3153600000)
      })

      it('should give correct hours for 1 century', () => {
        expect(
          whatis(1)
            .centuries()
            .in.hours(),
        ).toBe(876000)
      })

      it('should give correct days for 1 century', () => {
        expect(
          whatis(1)
            .centuries()
            .in.days(),
        ).toBe(36500)
      })

      it('should give correct months for 1 century', () => {
        expect(
          whatis(1)
            .centuries()
            .in.months(),
        ).toBe(1200)
      })

      it('should give correct year for 1 century', () => {
        expect(
          whatis(1)
            .centuries()
            .in.years(),
        ).toBe(100)
      })

      it('should give correct centuries for 1 century', () => {
        expect(
          whatis(1)
            .centuries()
            .in.decades(),
        ).toBe(10)
      })

      it('should give correct centuries for 1 century', () => {
        expect(
          whatis(1)
            .centuries()
            .in.centuries(),
        ).toBe(1)
      })

      it('should give correct centuries for 1 millennium', () => {
        expect(
          whatis(1)
            .centuries()
            .in.millenniums(),
        ).toBe(0.1)
      })
    })

    describe('millenniums', () => {
      it('should give correct seconds for 1 millennium', () => {
        expect(
          whatis(1)
            .millenniums()
            .in.seconds(),
        ).toBe(31536000000)
      })

      it('should give correct hours for 1 millennium', () => {
        expect(
          whatis(1)
            .millenniums()
            .in.hours(),
        ).toBe(8760000)
      })

      it('should give correct days for 1 millennium', () => {
        expect(
          whatis(1)
            .millenniums()
            .in.days(),
        ).toBe(365000)
      })

      it('should give correct months for 1 millennium', () => {
        expect(
          whatis(1)
            .millenniums()
            .in.months(),
        ).toBe(12000)
      })

      it('should give correct year for 1 millennium', () => {
        expect(
          whatis(1)
            .millenniums()
            .in.years(),
        ).toBe(1000)
      })

      it('should give correct millenniums for 1 millennium', () => {
        expect(
          whatis(1)
            .millenniums()
            .in.decades(),
        ).toBe(100)
      })

      it('should give correct millenniums for 1 century', () => {
        expect(
          whatis(1)
            .millenniums()
            .in.centuries(),
        ).toBe(10)
      })

      it('should give correct millenniums for 1 millennium', () => {
        expect(
          whatis(1)
            .millenniums()
            .in.millenniums(),
        ).toBe(1)
      })
    })
  })

  describe('weight units', () => {
    describe('methods', () => {
      const methods = ['gram', 'grams', 'kilogram', 'kilograms']

      shouldHaveMethods(methods)
    })

    describe('grams', () => {
      it('should give correct grams for 1 gram', () => {
        expect(
          whatis(1)
            .grams()
            .in.grams(),
        ).toBe(1)
      })

      it('should give correct kilograms for 1000 grams', () => {
        expect(
          whatis(1000)
            .grams()
            .in.kilograms(),
        ).toBe(1)
      })
    })

    describe('kilograms', () => {
      it('should give correct grams for 1 kilogram', () => {
        expect(
          whatis(1)
            .kilograms()
            .in.grams(),
        ).toBe(1000)
      })

      it('should give correct kilograms for 1 kilogram', () => {
        expect(
          whatis(1)
            .kilograms()
            .in.kilograms(),
        ).toBe(1)
      })
    })
  })

  describe('length units', () => {
    describe('methods', () => {
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
      ]

      shouldHaveMethods(methods)
    })

    describe('yoctometres', () => {
      it('should give correct yoctometres for 1 yoctometre', () => {
        expect(
          whatis(1)
            .yoctometres()
            .in.yoctometres(),
        ).toBe(1)
      })

      it('should give correct zeptometre for 1000 yoctometres', () => {
        expect(
          whatis(1000)
            .yoctometres()
            .in.zeptometre(),
        ).toBe(1)
      })

      it('should give correct attometres for 1 yoctometre', () => {
        expect(
          whatis(1)
            .yoctometres()
            .in.attometres(),
        ).toBe(0.000001)
      })

      it('should give correct femtometres for 1 yoctometre', () => {
        expect(
          whatis(1)
            .yoctometres()
            .in.femtometres(),
        ).toBe(1e-9)
      })

      it('should give correct picometres for 1 yoctometre', () => {
        expect(
          whatis(1)
            .yoctometres()
            .in.picometres(),
        ).toBe(1e-12)
      })

      it('should give correct nanometres for 1 yoctometre', () => {
        expect(
          whatis(1)
            .yoctometre()
            .in.nanometres(),
        ).toBe(1e-15)
      })

      it('should give correct micrometres for 1 yoctometre', () => {
        expect(
          whatis(1)
            .yoctometres()
            .in.micrometres(),
        ).toBe(1e-18)
      })
    })

    describe('zeptometres', () => {
      it('should give correct yoctometres for 1 zeptometre', () => {
        expect(
          whatis(1)
            .zeptometres()
            .in.yoctometres(),
        ).toBe(1000)
      })

      it('should give correct zeptometres for 1 zeptometre', () => {
        expect(
          whatis(1)
            .zeptometres()
            .in.zeptometres(),
        ).toBe(1)
      })

      it('should give correct attometres for 1 zeptometre', () => {
        expect(
          whatis(1)
            .zeptometres()
            .in.attometres(),
        ).toBe(0.001)
      })

      it('should give correct femtometres for 1 zeptometre', () => {
        expect(
          whatis(1)
            .zeptometres()
            .in.femtometres(),
        ).toBe(1e-6)
      })

      it('should give correct picometres for 1 zeptometre', () => {
        expect(
          whatis(1)
            .zeptometres()
            .in.picometres(),
        ).toBe(1e-9)
      })

      it('should give correct nanometres for 1 zeptometre', () => {
        expect(
          whatis(1)
            .zeptometre()
            .in.nanometres(),
        ).toBe(1e-12)
      })

      it('should give correct micrometres for 1 zeptometre', () => {
        expect(
          whatis(1)
            .zeptometres()
            .in.micrometres(),
        ).toBe(1e-15)
      })
    })

    describe('attometres', () => {
      it('should give correct yoctometres for 1 attometre', () => {
        expect(
          whatis(1)
            .attometres()
            .in.yoctometres(),
        ).toBe(1000000)
      })

      it('should give correct zeptometres for 1 attometres', () => {
        expect(
          whatis(1)
            .attometres()
            .in.zeptometres(),
        ).toBe(1000)
      })

      it('should give correct attometres for 1 attometre', () => {
        expect(
          whatis(1)
            .attometres()
            .in.attometres(),
        ).toBe(1)
      })

      it('should give correct femtometres for 1 attometres', () => {
        expect(
          whatis(1)
            .attometres()
            .in.femtometres(),
        ).toBe(0.001)
      })

      it('should give correct picometres for 1 attometre', () => {
        expect(
          whatis(1)
            .attometres()
            .in.picometres(),
        ).toBe(0.000001)
      })

      it('should give correct nanometres for 1 attometre', () => {
        expect(
          whatis(1)
            .attometre()
            .in.nanometres(),
        ).toBe(1e-9)
      })

      it('should give correct micrometres for 1 attometre', () => {
        expect(
          whatis(1)
            .attometres()
            .in.micrometres(),
        ).toBe(1e-12)
      })
    })

    describe('femtometres', () => {
      it('should give correct yoctometres for 1 femtometre', () => {
        expect(
          whatis(1)
            .femtometres()
            .in.yoctometres(),
        ).toBe(1000000000)
      })

      it('should give correct zeptometres for 1 femtometres', () => {
        expect(
          whatis(1)
            .femtometres()
            .in.zeptometres(),
        ).toBe(1000000)
      })

      it('should give correct attometres for 1 femtometre', () => {
        expect(
          whatis(1)
            .femtometres()
            .in.attometres(),
        ).toBe(1000)
      })

      it('should give correct femtometres for 1 femtometre', () => {
        expect(
          whatis(1)
            .femtometres()
            .in.femtometres(),
        ).toBe(1)
      })

      it('should give correct picometres for 1 femtometre', () => {
        expect(
          whatis(1)
            .femtometres()
            .in.picometres(),
        ).toBe(0.001)
      })

      it('should give correct nanometres for 1 femtometre', () => {
        expect(
          whatis(1)
            .femtometres()
            .in.nanometres(),
        ).toBe(0.000001)
      })

      it('should give correct micrometres for 1 femtometre', () => {
        expect(
          whatis(1)
            .femtometres()
            .in.micrometres(),
        ).toBe(0.000000001)
      })
    })

    describe('picometres', () => {
      it('should give correct yoctometres for 1 picometre', () => {
        expect(
          whatis(1)
            .picometres()
            .in.yoctometres(),
        ).toBe(1000000000000)
      })

      it('should give correct zeptometres for 1 picometres', () => {
        expect(
          whatis(1)
            .picometres()
            .in.zeptometres(),
        ).toBe(1000000000)
      })

      it('should give correct attometres for 1 picometre', () => {
        expect(
          whatis(1)
            .picometres()
            .in.attometres(),
        ).toBe(1000000)
      })

      it('should give correct femtometres for 1 picometre', () => {
        expect(
          whatis(1)
            .picometres()
            .in.femtometres(),
        ).toBe(1000)
      })

      it('should give correct picometres for 1 picometre', () => {
        expect(
          whatis(1)
            .picometres()
            .in.picometres(),
        ).toBe(1)
      })

      it('should give correct nanometres for 1 picometre', () => {
        expect(
          whatis(1)
            .picometres()
            .in.nanometres(),
        ).toBe(0.001)
      })

      it('should give correct micrometres for 1 picometre', () => {
        expect(
          whatis(1)
            .picometres()
            .in.micrometres(),
        ).toBe(0.000001)
      })
    })

    describe('nanometres', () => {
      it('should give correct yoctometres for 1 nanometre', () => {
        expect(
          whatis(1)
            .nanometres()
            .in.yoctometres(),
        ).toBe(1000000000000000)
      })

      it('should give correct zeptometres for 1 nanometres', () => {
        expect(
          whatis(1)
            .nanometres()
            .in.zeptometres(),
        ).toBe(1000000000000)
      })

      it('should give correct attometres for 1 nanometre', () => {
        expect(
          whatis(1)
            .nanometres()
            .in.attometres(),
        ).toBe(1000000000)
      })

      it('should give correct femtometres for 1 nanometre', () => {
        expect(
          whatis(1)
            .nanometres()
            .in.femtometres(),
        ).toBe(1000000)
      })

      it('should give correct picometres for 1 nanometre', () => {
        expect(
          whatis(1)
            .nanometres()
            .in.picometres(),
        ).toBe(1000)
      })

      it('should give correct nanometres for 1 nanometre', () => {
        expect(
          whatis(1)
            .nanometres()
            .in.nanometres(),
        ).toBe(1)
      })

      it('should give correct micrometres for 1 nanometre', () => {
        expect(
          whatis(1)
            .nanometres()
            .in.micrometres(),
        ).toBe(0.001)
      })
    })

    describe('micrometres', () => {
      it('should give correct yoctometres for 1 micrometre', () => {
        expect(
          whatis(1)
            .micrometres()
            .in.yoctometres(),
        ).toBe(1000000000000000000)
      })

      it('should give correct zeptometres for 1 micrometres', () => {
        expect(
          whatis(1)
            .micrometres()
            .in.zeptometres(),
        ).toBe(1000000000000000)
      })

      it('should give correct attometres for 1 micrometre', () => {
        expect(
          whatis(1)
            .micrometres()
            .in.attometres(),
        ).toBe(1000000000000)
      })

      it('should give correct femtometres for 1 micrometre', () => {
        expect(
          whatis(1)
            .micrometres()
            .in.femtometres(),
        ).toBe(1000000000)
      })

      it('should give correct picometres for 1 micrometre', () => {
        expect(
          whatis(1)
            .micrometres()
            .in.picometres(),
        ).toBe(1000000)
      })

      it('should give correct micrometres for 1 micrometre', () => {
        expect(
          whatis(1)
            .micrometres()
            .in.nanometres(),
        ).toBe(1000)
      })

      it('should give correct micrometres for 1 micrometre', () => {
        expect(
          whatis(1)
            .micrometres()
            .in.micrometres(),
        ).toBe(1)
      })
    })
  })
})
