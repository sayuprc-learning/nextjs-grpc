import { GreetJsonResponse } from './api/route'

export default async function Home() {
  const response = await fetch('http://localhost:3000/api?name=hoge')

  const json: GreetJsonResponse = await response.json()

  return (
    <div>
      {json.message}
    </div>
  );
}

