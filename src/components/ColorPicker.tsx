import { Color, colorLabels } from '../types/Color';
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
        aria-label={colorLabels[color]}
      ></button>
    );
  });

  return <div className="color-picker">{renderedColors}</div>;
};

export default ColorPicker;
