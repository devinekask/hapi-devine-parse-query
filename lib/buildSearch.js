const getSearchFields = require(`./getSearchFields`);

module.exports = (Model, q) => {

  if (!q) return false;

  let fields = getSearchFields(Model);

  fields = fields.map(f => {

    const {name, type} = f;

    if (type === String) {
      return {[name]: new RegExp(`${q}`, `i`)};
    } else if (type === Number || !isNaN(q)) {
      return {[name]: q};
    }

  });

  if (fields.length === 0) return false;

  return {
    $or: fields
  };

};
