import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="Details">
          <h2>Episode Details</h2>
          <p> Select Episode to learn more</p>
        </section>
      );
    }
    return (
      <section className="Details">
        <h2>{selectedEpisode.title}</h2>
        <p>This episode is about {selectedEpisode.description}</p>
        <button>Watch now</button>
      </section>
    );
  }

  function Selection() {
    return (
      <section className="Selection">
        <h2>Selection</h2>
        <ul className="Selection">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <Selection />
        <EpisodeDetails />
      </main>
    </>
  );
}
