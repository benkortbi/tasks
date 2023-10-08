/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect } from "react";
import TaskCard from "../../components/task__card/TaskCard";
import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "../../store/slices/todo.slice";
import { useSearchQ } from "../../lib/hooks/useSearchQuery";
import ConexError from "../../components/home/alerts/ConexError";
import EmptyTasks from "../../components/home/alerts/EmptyTasks";
import { TaskCardSkeleton } from "../../components/home/skeletons/TaskCard";
export default function Home() {
	const { searchQ } = useSearchQ();
	const dispatch = useDispatch();
	const { data, loading, errors } = useSelector(
		(state) => state.todoSlice.tasks
	);

	useEffect(() => {
		dispatch(getTasks());
	}, [dispatch]);
	return (
		<div className="container grid grid-cols-1 gap-3 px-6 pb-12 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-4">
			{errors ? (
				<ConexError />
			) : loading ? (
				<>
					{Array.from({ length: 8 }).map((_, idx) => (
						<TaskCardSkeleton key={idx} />
					))}
				</>
			) : data?.length === 0 ? (
				<EmptyTasks />
			) : searchQ === "" ? (
				data?.map((task) => (
					<TaskCard
						body={task.body}
						color={task.color}
						badgeType={task.badgeType}
						createdAt={task.createdAt}
						key={task._id}
						id={task._id}
						title={task.title}
						deadLine={task.deadLine}
					/>
				))
			) : data.filter((task) =>
					task.title.toLowerCase().startsWith(searchQ.toLowerCase())
			  ).length !== 0 ? (
				data
					.filter((task) =>
						task.title.toLowerCase().startsWith(searchQ.toLowerCase())
					)
					.map((task) => {
						return (
							<TaskCard
								body={task.body}
								color={task.color}
								badgeType={task.badgeType}
								createdAt={task.createdAt}
								key={task._id}
								id={task._id}
								title={task.title}
								deadLine={task.deadLine}
							/>
						);
					})
			) : (
				`No Result For: ${searchQ}`
			)}
		</div>
	);
}
