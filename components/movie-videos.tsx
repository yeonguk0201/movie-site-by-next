import { API_URL } from '../app/(home)/page';

async function getVideo(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(`Fetching 중: ${Date.now()}`);
  throw new Error('something broke');
  // const response = await fetch(`${API_URL}/${id}/videos`);
  // return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideo(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
