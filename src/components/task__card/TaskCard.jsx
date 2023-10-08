/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import DropdownMenu from "./DropdownMenu";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteTask } from "../../store/slices/todo.slice";
import { formatteDate } from "../../lib/functions/formatteDate";

export default function TaskCard({
	title,
	id,
	createdAt,
	badgeType,
	color,
	body,
	deadLine,
}) {
	const dispatch = useDispatch();

	function calculateDaysLeft(deadlineDate) {
		const currentDate = new Date();
		const deadline = new Date(deadlineDate);

		// Calculate the difference in milliseconds
		const timeDifference = deadline - currentDate;

		// Calculate the number of days left
		const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

		// Check if the deadline is in the future
		if (daysLeft > 0) {
			return `${daysLeft} day${daysLeft !== 1 ? "s" : ""} left`;
		} else if (daysLeft === 0) {
			return "Today is the deadline";
		} else {
			return "Deadline has passed";
		}
	}
	useEffect(() => {
		if (deadLine !== null) {
			const daysLeft = calculateDaysLeft(deadLine);

			if (daysLeft === "Deadline has passed") {
				dispatch(deleteTask(id));
			}
		}
	}, [deadLine]);
	return (
		<>
			<div
				id={id}
				className={`${color} flex flex-col rounded-md h-60 cursor-pointer group hover:opacity-90 p-1 transition-all delay-75 opacity-80`}
			>
				{deadLine && (
					<span className="indicator-item opacity-80 badge badge-error text-white font-medium">
						{calculateDaysLeft(deadLine)}
					</span>
				)}
				<div className="flex items-center justify-between gap-5 px-3 py-2 card__head">
					<NavLink
						to={`/${id}`}
						className="text-lg md:text-xl capitalize transition-all delay-75 font-bold line-clamp-2 text-black hover:underline hover:underline-offset-2"
					>
						{title}
					</NavLink>

					<DropdownMenu id={id} />
				</div>
				<div className="card__body">
					<p className="px-3 mt-2 text-sm md:text-md font-medium text-gray-900 line-clamp-3">
						{body}
					</p>
				</div>
				<div className="flex items-end justify-between px-3 pb-2 card__footer grow">
					<div className="capitalize badge badge-ghost">{badgeType}</div>
					<span className="text-slate-900">{formatteDate(createdAt)}</span>
				</div>
			</div>
		</>
	);
}
TaskCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	badgeType: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	deadLine: PropTypes.string,
};
