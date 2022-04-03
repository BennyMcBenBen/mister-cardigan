import { useEffect, useState } from 'react';
import ColorPicker from './ColorPicker';
import EpisodeDetail from './EpisodeDetail';
import episodesByColor from '../data/episodes_by_color.json';
import { Color, colorLabels } from '../types/Color';
import Episode from '../types/Episode';

const App = () => {
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [colorLabel, setColorLabel] = useState<string | null>(null);
  const [episode, setEpisode] = useState<Episode | null>(null);

  // TODO If same color is re-clicked, I want to pick a new episode.
  // Reducers/actions may be a solution for this?
  useEffect(() => {
    if (selectedColor) {
      console.log('Color changed', selectedColor);

      setColorLabel(colorLabels[selectedColor as keyof typeof colorLabels]);

      const colorEpisodes = episodesByColor[selectedColor];
      console.log(
        `Found ${colorEpisodes.length} episodes with color ${selectedColor}`
      );
      const randomEpisodeIndex = Math.floor(
        Math.random() * colorEpisodes.length
      );
      const episode = colorEpisodes[randomEpisodeIndex];
      setEpisode(episode);
    } else {
      setEpisode(null);
    }
  }, [selectedColor]);

  return (
    <div>
      <ColorPicker
        colors={Object.keys(episodesByColor) as Array<Color>}
        onColorSelect={setSelectedColor}
      />

      {colorLabel && (
        <h2>Mister Rogers wears a {colorLabel} cardigan in this episode:</h2>
      )}

      <EpisodeDetail episode={episode} />
    </div>
  );
};

export default App;
