
function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
} 

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   const randomInt = getRandomInt(2);
    if(randomInt === 1) {
        throw new Error("Error loading product");
    }
  return (
    <div>
      <h1>Product Detail Layout</h1>
      {children}
    </div>
  );
}