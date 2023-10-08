import { Outlet } from "react-router-dom";
import TaskModal from "../components/task__modal/TaskModal";
import DeleteTaskModal from "../components/task__card/DeleteTaskModal.";
import Navbar from "../components/shared/Navbar";

export default function Root() {
	return (
		<>
			<div className="w-full h-screen">
				<Navbar />
				<Outlet />
				<TaskModal />
				<DeleteTaskModal />
			</div>
		</>
	);
}
