import { AiOutlinePlus } from "react-icons/ai";
export default function EmptyTasks() {
	return (
		<div className="min-w-sm top-1/2 select-none left-1/2 -translate-x-1/2 -translate-y-1/2 absolute grid place-content-center">
			<div className=" p-5 bg-warning/50 rounded-lg border-2 border-dashed border-amber-500 text-center font-lg font-bold">
				There is no notes to show
				<br />
				Try to create one by pressing <br />
				<button className="btn btn-square btn-warning mt-3" disabled>
					<AiOutlinePlus color="white" size="1.1rem" />
				</button>
			</div>
		</div>
	);
}
