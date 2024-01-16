export function Content() {
  return (
    <>
      <div className="grid grid-flow-row  md:grid-flow-col  w-full gap-4 mt-4">
        <div className="bg-red-300 text-one font-semibold mx-4 rounded py-2 px-4">
          <h2>Backlog</h2>
          <div>
            <div className="flex justify-between">
              <h3>Tarea 1</h3>
              <span>✅</span>
            </div>
            <div className="flex justify-between">
              <h3>Tarea 2</h3>
              <span>✅</span>
            </div>
          </div>
        </div>
        <div className="bg-yellow-300 text-one font-semibold mx-4 rounded py-2 px-4">
          <h2>En Espera</h2>
          <div>
            <div className="flex justify-between">
              <h3>Tarea 3</h3>
              <span>✅</span>
            </div>
            <div className="flex justify-between">
              <h3>Tarea 4</h3>
              <span>✅</span>
            </div>
          </div>
        </div>
        <div className="bg-blue-300 text-one font-semibold mx-4 rounded py-2 px-4">
          <h2>En Progreso</h2>
          <div>
            <div className="flex justify-between">
              <h3>Tarea 5</h3>
              <span>✅</span>
            </div>
            <div className="flex justify-between">
              <h3>Tarea 6</h3>
              <span>✅</span>
            </div>
          </div>
        </div>
        <div className="bg-green-300 text-one font-semibold mx-4 rounded py-2 px-4">
          <h2>Finalizado</h2>
          <div>
            <div className="flex justify-between">
              <h3>Tarea 7</h3>
              <span>✅</span>
            </div>
            <div className="flex justify-between">
              <h3>Tarea 8</h3>
              <span>✅</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
