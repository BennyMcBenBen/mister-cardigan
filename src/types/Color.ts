import episodesByColor from '../data/episodes_by_color.json';
export type Color = keyof typeof episodesByColor;

// Color names from: https://www.color-blindness.com/color-name-hue/
// Pale Sky comes from: https://chir.ag/projects/name-that-color/#667386
export const colorLabels = {
  '#000000': 'Black',
  '#006600': 'Green',
  '#0099ff': 'Dodger Blue',
  '#02658f': 'Cerulean',
  '#18b1f6': 'Deep Sky Blue',
  '#247b5b': 'Sea Green',
  '#27a14a': 'Eucalyptus',
  '#526083': 'Kashmir Blue',
  '#56667d': 'Kashmir Blue',
  '#663300': 'Maroon',
  '#6666cc': 'Slate Blue',
  '#667386': 'Pale Sky',
  '#696c5b': 'Willow Grove',
  '#905b2c': 'Rusty Nail',
  '#977e46': 'Muesli',
  '#999999': 'Nobel',
  '#a5b9f7': 'Light Sky Blue',
  '#b4a588': 'Chino',
  '#b83255': 'Old Rose',
  '#cc6600': 'Tenne',
  '#ccd2f2': 'Quartz',
  '#dfd799': 'Sapling',
  '#e4ce94': 'Double Colonial White',
  '#eb767f': 'Geraldine',
  '#ebd896': 'Dairy Cream',
  '#f5ecdd': 'Rum Swizzle',
  '#fcffa4': 'Canary',
  '#ff0000': 'Red',
};
