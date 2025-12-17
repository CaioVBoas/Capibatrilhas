import ExploreTrailsClient from './ExploreTrailsClient';

export default async function ExploreTrails() {
  let initialTrails = [];
  let fetchError: string | null = null;

  try {
    const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
    const res = await fetch(`${base}/trails`, { next: { revalidate: 60 } });
    if (res.ok) {
      initialTrails = await res.json();
    } else {
      fetchError = `Falha ao buscar trilhas: ${res.status}`;
    }
  } catch (err) {
    // If fetch fails, the API route will return mock data, but catch unexpected errors
    fetchError = 'Erro ao carregar trilhas';
  }

  return (
    <>
      {fetchError && (
        <div className="p-4 bg-yellow-100 text-yellow-800 text-center">
          {fetchError}
        </div>
      )}
      <ExploreTrailsClient initialTrails={initialTrails} />
    </>
  );
}
