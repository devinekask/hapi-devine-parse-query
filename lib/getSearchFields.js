const getSchema = require(`./getSchema`);

module.exports = Model => {

  const schema = getSchema(Model);
  const fields = [];

  for (const k  in schema) {

    const o = schema[k];

    if (o.type === String || o.type === Number) {
      o.name = k;
      fields.push(o);
    }

  }

  return fields;

};
