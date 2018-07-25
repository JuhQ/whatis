const last = str => str[str.length - 1];

const endsIn = (str, endChar) => last(str) === endChar;

const idunno = ({ list, resultIn }) => list.reduce(
  (initial, value) => ({
    ...initial,
    [value]: () => {
      const valueFrom = endsIn(value, 's') ? value : `${value}s`;
      return { in: resultIn(valueFrom) };
    },
  }),
  {},
);

const inTime = (val) => {
  const time = ['days', 'day', 'months', 'month', 'years', 'year'];

  const daysInYear = 365;
  const monthsInYear = 12;

  const daysInMonth = daysInYear / monthsInYear;

  const resultInTime = valueFrom => ({
    days: () => {
      switch (valueFrom) {
        case 'days':
          return val;
        case 'months':
          return val * daysInMonth;
        case 'years':
          return val / daysInYear;

        default:
          return undefined;
      }
    },
    months: () => {
      switch (valueFrom) {
        case 'days':
          return val / daysInMonth;
        case 'months':
          return val;
        case 'years':
          return val / monthsInYear;

        default:
          return undefined;
      }
    },
    years: () => {
      switch (valueFrom) {
        case 'days':
          return val / daysInYear;
        case 'months':
          return val / monthsInYear;
        case 'years':
          return val;

        default:
          return undefined;
      }
    },
  });

  return idunno({ list: time, resultIn: resultInTime });
};

const inWeight = (val) => {
  const weights = ['kilograms', 'kilogram', 'gram', 'grams'];

  const resultInWeight = valueFrom => ({
    grams: () => {
      switch (valueFrom) {
        case 'grams':
          return val;
        case 'kilograms':
          return val * 1000;

        default:
          return undefined;
      }
    },
    kilograms: () => {
      switch (valueFrom) {
        case 'grams':
          return val / 1000;
        case 'kilograms':
          return val;

        default:
          return undefined;
      }
    },
  });

  return idunno({ list: weights, resultIn: resultInWeight });
};

const whatis = val => ({ ...inTime(val), ...inWeight(val) });

export default whatis;
