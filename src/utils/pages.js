export const getPagesCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalPages) => {
  let total = [];
  for (let i = 0; i < totalPages; i++) {
    total.push(i + 1);
  }
  return total;
};
