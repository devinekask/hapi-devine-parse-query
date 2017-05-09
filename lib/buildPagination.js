module.exports = (perPage, page, total) => {

  const pages = Math.ceil(total / perPage);

  if (page > pages) page = pages;
  else if (page <= 0) page = 1;

  return {
    skip: page === 0 ? page : (page - 1) * perPage,
    limit: perPage
  };

};
