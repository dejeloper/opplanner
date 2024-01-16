import { Header } from "@/components/Header";
import { Content } from "./components/Content";

function App() {
  return (
    <main className="flex flex-col w-full">
      <Header />
      <Content />
      {/* <section className=" bg-slate-400 mt-[1px]">Main</section>
      <section className=" bg-slate-400 mt-[1px]">Footer</section> */}
    </main>
  );
}

export default App;
