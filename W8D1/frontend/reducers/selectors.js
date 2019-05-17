export const asArray = ({ planks }) => (
  Object.keys(planks).map(key => planks[key])
);
