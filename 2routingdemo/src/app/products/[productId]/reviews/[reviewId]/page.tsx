import { notFound } from "next/navigation";

export default async function ReviewPage({ params } : {params: Promise<{productId: string, reviewId: string}>}) {
    const { productId, reviewId } = await params;
if(parseInt(reviewId)>1000) {
    // Simulate a 404 error if the reviewId is greater than 1000
    notFound();
}
  

    return (
        <div>
            <h1>Review {reviewId} for Product {productId} </h1>
        </div>
    );
}