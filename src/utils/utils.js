export const devices = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const colorsGradient = {
  normal: 'linear-gradient(180deg, #9298A4 0%, #A3A49E 98.71%)',
  fighting: 'linear-gradient(180deg, #CE4265 0%, #E74347 98.71%)',
  flying: 'linear-gradient(180deg, #90A7DA 0%, #A6C2F2 100%)',
  poison: 'linear-gradient(180deg, #A864C7 0%, #C261D4 100%)',
  ground: 'linear-gradient(180deg, #C5B489 0%, #D7CD90 100%)',
  rock: 'linear-gradient(180deg, #DC7545 0%, #D29463 98.71%)',
  bug: 'linear-gradient(180deg, #92BC2C 0%, #AFC836 100%)',
  ghost: 'linear-gradient(180deg, #516AAC 0%, #7773D4 98.71%)',
  steel: 'linear-gradient(180deg, #52869D 0%, #58A6AA 100%',
  fire: 'linear-gradient(180deg, #FB9B51 0%, #FBAE46 100%)',
  water: 'linear-gradient(180deg, #4A90DD 0%, #6CBDE4 100%)',
  grass: 'linear-gradient(180deg, #5FBC51 0%, #5AC178 100%)',
  electric: 'linear-gradient(180deg, #EDD53E 0%, #FBE273 98.71%)',
  psychic: 'linear-gradient(180deg, #F66F71 0%, #FE9F92 100%)',
  ice: 'linear-gradient(180deg, #70CCBD 0%, #8CDDD4 100%)',
  dragon: 'linear-gradient(180deg, #0C69C8 0%, #0180C7 98.71%)',
  dark: 'linear-gradient(180deg, #595761 0%, #6E7587 98.71%)',
  fairy: 'linear-gradient(180deg, #EC8CE5 0%, #F3A7E7 98.36%)',
  unknown: '',
  shadow: '',
};

export const colors = {
  normal: '#9298A4',
  fighting: '#CE4265',
  flying: '#90A7DA',
  poison: '#A864C7',
  ground: '#C5B489',
  rock: '#DC7545',
  bug: '#92BC2C',
  ghost: '#516AAC',
  steel: '#52869D',
  fire: '#FB9B51',
  water: '#4A90DD',
  grass: '#5FBC51',
  electric: '#EDD53E',
  psychic: '#F66F71',
  ice: '#70CCBD',
  dragon: '#0C69C8',
  dark: '#595761',
  fairy: '#EC8CE5',
  unknown: '',
  shadow: '',
};

export const stats = {
  speed: 'spd',
  'special-defense': 'sdef',
  'special-attack': 'satk',
  defense: 'def',
  attack: 'atk',
  hp: 'hp',
};

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
