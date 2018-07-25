const endsIn = (str, endChar) => str[str.length - 1] === endChar;

const inTime = val => {
  const time = ['days', 'months', 'years', 'day', 'month', 'year'];
  let valueFrom;

  const daysInYear = 365;
  const monthsInYear = 12;

  const daysInMonth = daysInYear / monthsInYear;

  const resultInTime = {
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
    }
  };

  return time.reduce((initial, value) => ({
    ...initial,
    [value]: () => {
      valueFrom = endsIn(value, 's') ? value : `${value}s`;
      return {in: resultInTime};
    }
  }), {});
};

const inWeight = val => {
  const time = ['kilograms', 'kilogram', 'gram', 'grams'];
  let valueFrom;

  const resultInWeight = {
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
    }
  };

  return time.reduce((initial, value) => ({
    ...initial,
    [value]: () => {
      valueFrom = endsIn(value, 's') ? value : `${value}s`;
      return {in: resultInWeight};
    }
  }), {});
};


const whatis = val => {
  return {...inTime(val), ...inWeight(val)};
};


export default whatis;
