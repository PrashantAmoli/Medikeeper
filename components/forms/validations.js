export const validateName = (name) => {
  if (name.length < 3) return false;
  if (!/[^a-zA-Z ]/.test(name)) alert(`${name} is false`);
  return true;
};

export const validateID = (ID) => {
  if (ID.length != 12) return false;
  let isnum = /^\d+$/.test(ID);
  if (!isnum) return false;
  return true;
};
