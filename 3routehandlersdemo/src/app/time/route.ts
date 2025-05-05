export const dynamic = "force-static"; // ensures the response is cached and served instantly to all users
export const revalidate = 10; // revalidates the data every 10 seconds
export async function GET() {
    const currentTime = new Date().toLocaleTimeString();
    return Response.json({ currentTime });
    }