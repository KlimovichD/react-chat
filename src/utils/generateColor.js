import tinyColor from 'tinycolor2';

const getCorrectIndex = (number) => {
  return number > 255 ? 255 : number < 0 ? 0 : number;
};

function generateColor(hash) {
  const [r, g, b] = hash
    .substr(0, 3)
    .split('')
    .map((char) => getCorrectIndex(char.charCodeAt(0)));

  return {
    color: tinyColor({ r, g, b }).toHexString(),
    colorLighten: tinyColor({ r, g, b }).lighten(40).toHexString(),
  };
}

export default generateColor;
