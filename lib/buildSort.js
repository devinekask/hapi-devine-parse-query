module.exports = (Model, sort) => {

  const keys = Object.keys(Model.schema.paths);

  const obj = {};

  sort = sort.split(`,`);

  sort.forEach(s => {
    const clean = s.startsWith(`-`) ? s.slice(1) : s;
    if (!keys.includes(clean)) return;
    obj[clean] = s.startsWith(`-`) ? - 1 : 1;
  });

  return obj;

};
