const categoryFilter = (data, category) => {
  const categoryFilteredData = data.filter((item) =>
    category.includes(item.categoryName)
  );
  if (category.length > 0) {
    return categoryFilteredData;
  }
  return data;
};

export { categoryFilter };
