/* eslint-disable react/prop-types */
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getId } from "../../store/slices/modals.slice";
import { BsFillTrashFill } from "react-icons/bs";
export default function DropdownMenu({ id }) {
	const dispatch = useDispatch();
	function getDeleteId() {
		dispatch(getId(id));
	}

	return (
		<>
			<div className="dropdown dropdown-end invisible group-hover:visible transition-all delay-75">
				<label tabIndex={0} className="btn m-1 rounded-full opacity-50">
					<BsThreeDotsVertical />
				</label>
				<ul
					tabIndex={0}
					className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li onClick={getDeleteId}>
						<label
							htmlFor="my_modal_6"
							className="flex justify-between text-error font-medium hover:text-error hover:bg-error/25"
						>
							Delete task
							<BsFillTrashFill />
						</label>
					</li>
				</ul>
			</div>
		</>
	);
}
