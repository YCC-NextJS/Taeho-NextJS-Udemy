import { useRouter } from "next/router";

export default function ClientsProjectPage() {
  const { query } = useRouter();

  console.log(query);

  return (
    <div>
      <h1>The Client Project Page</h1>
    </div>
  );
}
