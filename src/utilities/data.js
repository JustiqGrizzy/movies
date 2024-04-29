const searchHandler = (arr, term) => {
  if (arr.length === 0) {
    return arr;
  }
  return arr.filter((item) => item.name.indexOf(term) > -1);
};

export { searchHandler };
