const getLocalStorage = () => {
  const storage = JSON.parse(localStorage.getItem('listStorage')) || [];
  return storage;
};

const clearCompleted = () => {
  let unchecked = getLocalStorage().filter((item) => {
    if (!item.completed) {
      return item;
    }
    return null;
  });

  unchecked = unchecked.map((item, id) => {
    item.index = id + 1;
    return item;
  });

  localStorage.setItem('listStorage', JSON.stringify(unchecked));
  window.location.reload();
};

export default clearCompleted;