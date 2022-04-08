import { Color, colorLabels } from '../types/Color';
import CardiganIcon from './CardiganIcon';
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
        onClick={() => onColorSelect(color)}
        aria-label={colorLabels[color]}
      >
        <CardiganIcon height="50px" width="50px" color={color} />
      </button>
    );
  });

  return <div className="color-picker">{renderedColors}</div>;
};

export default ColorPicker;
