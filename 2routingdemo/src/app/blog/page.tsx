export const metadata = {
  title: {
    absolute: 'Blog', //when we want to break free from the template pattern set by parent segments.
  },
}

export default async function Blog() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
  return (
    <div>
      <h1>Blog</h1>
      <p>This is the blog page.</p>
    </div>
  );
}