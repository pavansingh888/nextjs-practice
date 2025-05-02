import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;
  const title  = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${productId}`);
    }, 1000);
  });

  return {
    title : `Product ${title}`,
    description: `Details about product ${productId}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const { productId } = await params;
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}
