export default async function Docs({ params }: { params: Promise<{ slug: string[] }> }) {
  // Extract the slug from the params
  const { slug } = await params; // Await the promise to get the slug
  if(slug?.length==2)   {
    return (
      <div>
        <h1>Docs</h1>
        <p>This is the docs page for feat {slug[0]} and concept {slug[1]}.</p>
      </div>
    );
  } else if(slug?.length==1) {
    return (
      <div>
        <h1>Docs</h1>
        <p>This is the docs page for feat {slug[0]}.</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Docs</h1>
      <p>This is the docs page.</p>
    </div>
  );
}