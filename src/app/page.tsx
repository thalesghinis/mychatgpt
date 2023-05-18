import { Sidebar } from "@/components/Sidebar";

const Page = () => {
  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar>
        ...
      </Sidebar>
      <section className="flex flex-col w-full">
        ...
      </section>
    </main>
  );
}

export default Page;