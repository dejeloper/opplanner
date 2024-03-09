import { RiMoreFill } from "react-icons/ri";
import { Task } from "@/interfaces";
import { useTaskStore } from "@/store";

interface Props {
  task: Task;
}

export function TaskCard({ task }: Props) {
  const setDraggingTaskId = useTaskStore((s) => s.setDraggingTaskId);
  const removeDraggingTaskId = useTaskStore((s) => s.removeDraggingTaskId);

  return (
    <div
      draggable={true}
      onDragStart={() => setDraggingTaskId(task.id)}
      onDragEnd={() => removeDraggingTaskId()}
      className="flex flex-col items-center p-4 cursor-pointer mb-5 mx-3 bg-white rounded-lg hover:bg-[#f0f9ff]"
    >
      <div className="flex flex-col">
        <div className="flex justify-between w-full">
          <h3 className="font-semibold">{task.title}</h3>
          <span className="flex items-center justify-center rounded-md border border-[#0000001a] text-black bg-white h-6 w-6 font-semibold">
            <RiMoreFill />
          </span>
        </div>
        <span className="font-medium mb-2 pt-3 leading-5 text-[#000000b3] text-sm">
          Improve the rendering of the page in the cart on mobile devices.
        </span>
        <div className="flex flex-wrap">
          <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold me-2 mt-1 px-2 py-1 rounded">
            Optimalization
          </span>
          <span className="bg-indigo-100 text-indigo-800 text-sm font-semibold me-2 mt-1 px-2 py-1 rounded">
            New Project
          </span>
          <span className="bg-green-100 text-green-800 text-sm font-semibold me-2 mt-1 px-2 py-1 rounded">
            Design
          </span>
        </div>
        <div className="flex -space-x-4 mt-2">
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt=""
          />
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
            alt=""
          />
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
            alt=""
          />
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
