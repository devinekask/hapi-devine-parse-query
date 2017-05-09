const buildPagination = require(`./lib/buildPagination`);
const buildSort = require(`./lib/buildSort`);

const buildProjection = require(`./lib/buildProjection`);
const buildMeta = require(`./lib/buildMeta`);
const buildFilter = require(`./lib/buildFilter`);
const buildSearch = require(`./lib/buildSearch`);

module.exports = (Model, query = {}, {
  filterBase = {},
  sortDefault = `created`,
  fieldsDefault = ``,
  perPageDefault = 20,
  pageDefault = 1
} = {}) => {

  const {
    page = pageDefault,
    perPage = perPageDefault,
    sort = sortDefault,
    fields = fieldsDefault,
    q = ``
  } = query;

  let filter = buildFilter(query, Model, filterBase);
  const search = buildSearch(Model, q);

  if (search) filter = Object.assign({}, filter, search);

  console.log(filter, page);

  return Model.count(filter)
    .then(count => {

      const {skip, limit} = buildPagination(perPage, page, count);

      return {
        sort: buildSort(Model, sort),
        skip,
        limit,
        filter,
        fields: buildProjection(Model, fields),
        meta: buildMeta(count, perPage, page)
      };

    });

};
