import Episode from '../types/Episode';

interface Props {
  episode: Episode | null;
}

const EpisodeDetail = ({ episode }: Props) => {
  if (episode) {
    const naUrl = `http://www.neighborhoodarchive.com/mrn/episodes/${episode.id}/index.html`;
    const imdbUrl = `https://www.imdb.com/title/${episode.imdbEpisodeId}/`;
    return (
      <div className="episode-detail">
        <h2>
          Season {episode.seasonNumber} Episode {episode.episodeNumber} :{' '}
          {episode.title}
        </h2>
        <p>Released {episode.released}</p>
        <p>{episode.plot}</p>
        <p>
          Find more information about this episode at:{' '}
          <a href={naUrl}>The Neighborhood Archive</a> |{' '}
          <a href={imdbUrl}>IMDb</a>
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default EpisodeDetail;
