import whatis from './whatis';

describe('Whatis', () => {
  describe('dates', () => {
    it('should give correct days for 365 days', () => {
      expect(
        whatis(365)
          .days()
          .in.days(),
      ).toBe(365);
    });

    it('should give correct months for 365 days', () => {
      expect(
        whatis(365)
          .days()
          .in.months(),
      ).toBe(12);
    });

    it('should give correct year for 365 days', () => {
      expect(
        whatis(365)
          .days()
          .in.years(),
      ).toBe(1);
    });
  });
});
