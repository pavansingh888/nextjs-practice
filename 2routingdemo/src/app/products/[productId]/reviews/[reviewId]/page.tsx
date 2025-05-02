import { redirect } from "next/navigation";

// function getRandomInt(count: number) {
//     return Math.floor(Math.random() * count);
// }

export default async function ReviewPage({ params } : {params: Promise<{productId: string, reviewId: string}>}) {
    // const randomInt = getRandomInt(2);
    // if(randomInt === 1) {
    //     throw new Error("Simulated error for testing error handling in Next.js 13.4+");
    // }
    const { productId, reviewId } = await params;
if(parseInt(reviewId)>1000) {
    // Simulate a 404 error if the reviewId is greater than 1000
    // notFound();
    redirect("/products"); 
}
  

    return (
        <div>
            <h1>Review {reviewId} for Product {productId} </h1>
        </div>
    );
}