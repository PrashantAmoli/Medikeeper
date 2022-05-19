export const validateName = (name) => {
  if (name.length < 3) return false;
  return /^[a-zA-Z\s.,]+$/.test(name);
};

export const validateID = (ID) => {
  if (ID.length != 12) return false;
  let isnum = /^\d+$/.test(ID);
  if (!isnum) return false;
  return true;
};
