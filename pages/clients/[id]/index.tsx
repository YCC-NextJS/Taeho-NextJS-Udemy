import { useRouter } from "next/router";

export default function ClientsProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  const loadProject = () => {
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: router.query.id, clientProjectId: "Project A" },
    });
  };

  return (
    <div>
      <h1>The Clients Projects Page</h1>
      <button onClick={loadProject}>Project A</button>
    </div>
  );
}
