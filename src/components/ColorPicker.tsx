import { Color } from '../types/Color';
import './ColorPicker.css';

interface Props {
  colors: Color[];
  onColorSelect: (color: Color) => void;
}

const ColorPicker = ({ colors, onColorSelect }: Props) => {
  const renderedColors = colors.map((color) => {
    return (
      <button
        key={color}
        style={{ backgroundColor: color }}
        onClick={() => onColorSelect(color)}
      ></button>
    );
  });

  return <div className="color-picker">{renderedColors}</div>;
};

export default ColorPicker;
