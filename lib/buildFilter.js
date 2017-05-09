const {pick, omit} = require(`lodash`);

const buildFields = require(`./buildFields`);
const parseFilter = require(`./parseFilter`);

module.exports = (
  query,
  Model,
  filterBase
) => {

  const f = filterBase;

  const filter = pick(
    omit(query, Object.keys(filterBase)),
    buildFields(Model)
  );

  for (const k in filter) {
    f[k] = parseFilter(filter[k]);
  }

  return f;

};
