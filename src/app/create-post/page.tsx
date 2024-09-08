import Form from "@/components/form";

export default function Page() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create post</h1>

      <Form />
    </main>
  );
}
// this is a server component call Form component which is also server component
// actions are server action component so we need to use "use server"
