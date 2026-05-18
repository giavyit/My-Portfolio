import Sidebar from "@/components/organisms/sidebar";
import { HomeTemplate } from "@/components/templates/home-template";

export default function HomePage() {
  return (
    <HomeTemplate>
      <aside className="w-[20%] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-foreground shadow-xl p-4">
        <Sidebar />
      </aside>
      <main className="flex-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-foreground shadow-xl p-4">
        <h1>Welcome to My First Page!</h1>
        <p>This is my first HTML page built with Next.js.</p>
      </main>
    </HomeTemplate>
  );
}
