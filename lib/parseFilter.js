const cleanFilter = require(`./cleanFilter`);

module.exports = v => {

  if (typeof v === `string`) {

    const start = v.startsWith(`%`);
    const end = v.endsWith(`%`);

    const raw = cleanFilter(v, start, end);

    if (start && end) {
      return new RegExp(`${raw}`, `i`);
    } else if (start && !end) {
      return new RegExp(`${raw}$`, `i`);
    } else if (!start && end) {
      return new RegExp(`^${raw}`, `i`);
    }

    return new RegExp(`^${raw}$`, `i`);

  }

  return v;

};
