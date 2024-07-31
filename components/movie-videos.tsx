import { API_URL } from '../app/(home)/page';
import styles from '../styles/movie-video.module.css';

async function getVideo(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(`Fetching 중: ${Date.now()}`);
  // throw new Error('something broke');
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideo(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
}
