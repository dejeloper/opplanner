import { Button } from "../ui/Button";

export function ContentHeader() {
  return (
    <div className="flex flex-row flex-0 justify-between items-center mt-2 mb-4">
      <h1 className="text-3xl font-semibold leading-9">Tablero</h1>
      <Button type="button">Crear tarea</Button>
    </div>
  );
}
