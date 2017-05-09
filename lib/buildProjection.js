module.exports = (Model, fields) => {

  const keys = Object.keys(Model.schema.paths);
  fields = fields.split(`,`).filter(f => keys.includes(f));

  return fields.join(` `);

};
