import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getTasks } from "../../store/slices/todo.slice";
import { useEffect, useRef } from "react";
import TaskCardButton from "./skeletons/TaskCardButton";
export default function DeleteTaskModal() {
	const modal = useRef();
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.todoSlice.deleteTask);
	const { id } = useSelector((state) => state.modalsSlice.deleteModal);
	async function handleTaskDelete() {
		await dispatch(deleteTask(id));
	}
	useEffect(() => {
		if (!loading) {
			modal.current.checked = false;
			dispatch(getTasks());
		}
	}, [dispatch, loading]);
	return (
		<>
			<input
				type="checkbox"
				id="my_modal_6"
				className="modal-toggle"
				ref={modal}
			/>
			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Disclaimer!</h3>
					<p className="py-4">Are you sure you want to delete this task?</p>
					<div className="modal-action">
						<label htmlFor="my_modal_6" className="btn btn-ghost">
							Close!
						</label>

						{loading ? (
							<TaskCardButton />
						) : (
							<button
								className="btn btn-error btn-outline"
								onClick={handleTaskDelete}
							>
								delete
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
