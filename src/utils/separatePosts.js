const separatePosts = (itens, size) => {
  return itens.reduce((arr, item, index) => {
    const group = Math.floor(index / size);
    arr[group] = [...(arr[group] || []), item];
    return arr;
  }, []);
};

export default separatePosts
