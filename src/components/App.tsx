import { useState } from 'react';
import ColorPicker from './ColorPicker';
import EpisodeDetail from './EpisodeDetail';
import episodesByColor from '../data/episodes_by_color.json';
import { Color, colorLabels } from '../types/Color';
import Episode from '../types/Episode';

const App = () => {
  const [colorName, setColorName] = useState<string | null>(null);
  const [numEpisodes, setNumEpisodes] = useState<number | null>(null);
  const [episode, setEpisode] = useState<Episode | null>(null);

  const onColorSelect = (color: Color) => {
    if (color) {
      console.log('Color changed', color);

      const colorName = colorLabels[color as keyof typeof colorLabels];
      setColorName(colorName);

      const colorEpisodes = episodesByColor[color];
      const numColorEpisodes = colorEpisodes.length;
      setNumEpisodes(numColorEpisodes);

      console.log(
        `Found ${numColorEpisodes} episodes with color ${colorName} (${color})`
      );

      const randomEpisodeIndex = Math.floor(Math.random() * numColorEpisodes);
      const episode = colorEpisodes[randomEpisodeIndex];
      setEpisode(episode);
    } else {
      setEpisode(null);
    }
  };

  return (
    <div className="app">
      <h2>What should Mister Rogers wear today? Select a cardigan</h2>

      <ColorPicker
        colors={Object.keys(episodesByColor) as Array<Color>}
        onColorSelect={onColorSelect}
      />

      {colorName && (
        <h2>
          Mister Rogers wears a {colorName} cardigan in {numEpisodes} episodes.
          Here is one:
        </h2>
      )}

      <EpisodeDetail episode={episode} />
    </div>
  );
};

export default App;
