module.exports = (total, perPage, page) => {

  const pages = Math.ceil(total / perPage);

  if (page > pages) page = pages;
  else if (page < pages) page = 1;

  return {

    total,

    pages: {
      perPage,
      total: pages,
      current: page
    }

  };

};
