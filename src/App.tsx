import { Header } from "@/components/Header";
import { Content } from "./components/Content";

function App() {
  return (
    <main className="flex flex-col w-full max-h-max">
      <Header />
      <Content />
    </main>
  );
}

export default App;
