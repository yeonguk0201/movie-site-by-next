import { API_URL } from '../../../(home)/page';

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log(`Fetching 중: ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideo(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log(`Fetching 중: ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  const [movie, videos] = await Promise.all([getMovie(id), getVideo(id)]);
  return (
    <div>
      <h1>{movie.title}</h1>
      <h2>{videos.title}</h2>
    </div>
  );
}
