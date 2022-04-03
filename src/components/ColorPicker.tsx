import { Dispatch, SetStateAction } from 'react';
import { Color } from '../types/Color';

interface Props {
  colors: Color[];
  onColorSelect: Dispatch<SetStateAction<Color | null>>;
}

const ColorPicker = ({ colors, onColorSelect }: Props) => {
  const renderedColors = colors.map((color) => {
    return (
      <button
        key={color}
        style={{ backgroundColor: color }}
        onClick={() => onColorSelect(color)}
      >
        &nbsp;&nbsp;&nbsp;
      </button>
    );
  });

  return <div className="color-picker">{renderedColors}</div>;
};

export default ColorPicker;
