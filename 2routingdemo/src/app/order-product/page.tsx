"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {  
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing Order");
        router.push("/"); 
        // router.replace("/"); // Similar to using replace property in Link component
    }
  return (
    <div>
      <h1>Order Product</h1>
      <p>Order your product here.</p>
      <button onClick={handleClick}>Submit Order</button>
    </div>
  );
}