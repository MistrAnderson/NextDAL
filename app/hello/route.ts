export async function GET() {
  const jsonObj = {
    "message": "Hello World",
  };
 
  return Response.json(jsonObj);
}
