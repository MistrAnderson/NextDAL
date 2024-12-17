import { Sub } from "/lib/opperations";


export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  const val1 = searchParams.get('val1')
  const val2 = searchParams.get('val2')

  const opp = new Sub();

  return Response.json(opp.Operate(val1, val2));
}
