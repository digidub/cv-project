const maxKeyInArray = (array) => {
  const max = Math.max.apply(
    Math,
    array.map((o) => o.id)
  );
  return max;
};

export default maxKeyInArray;
