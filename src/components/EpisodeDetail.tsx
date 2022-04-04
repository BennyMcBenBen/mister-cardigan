import Episode from '../types/Episode';

interface Props {
  episode: Episode | null;
}

const EpisodeDetail = ({ episode }: Props) => {
  if (episode) {
    return (
      <div className="episode-detail">
        <h2>
          Season {episode.seasonNumber} Episode {episode.episodeNumber} :{' '}
          {episode.title}
        </h2>
        <p>Released {episode.released}</p>
        <p>{episode.plot}</p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default EpisodeDetail;
