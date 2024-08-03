const getImage = (name) =>
  new URL(`../assets/images/avatars/${name}`, import.meta.url);

export { getImage };
