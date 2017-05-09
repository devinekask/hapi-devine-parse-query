module.exports = (v, start, end) => {
  if (start) v = v.slice(1);
  if (end) v = v.slice(0, v.length - 1);
  return v;
};
