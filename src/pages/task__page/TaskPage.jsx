/* eslint-disable no-unused-vars */

import Navbar from "../../components/task__page/Navbar";
import TaskTemplate from "../../components/task__page/TaskTemplate";
import UpdateModal from "../../components/task__page/UpdateModal";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleTask } from "../../store/slices/todo.slice";

export default function TaskPage() {
	const { data } = useSelector((state) => state.todoSlice.singleTask);

	const { id } = useParams();
	const dispatch = useDispatch();
	const [updateTrigger, setUpdateTrigger] = useState(false);

	useEffect(() => {
		dispatch(getSingleTask(id));
	}, [id, updateTrigger]);

	const handleUpdateSuccess = () => {
		setUpdateTrigger(true);
	};

	return (
		<>
			<Navbar />
			{data ? (
				<>
					<TaskTemplate singleTask={data} />
					<UpdateModal
						id={data?._id}
						prevTitle={data?.title}
						prevBody={data?.body}
						onSuccess={handleUpdateSuccess}
					/>
				</>
			) : (
				// <Navigate to={"/"} />
				"loading..."
			)}
		</>
	);
}
