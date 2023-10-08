import { AiOutlineReload } from "react-icons/ai";
export default function ConexError() {
	return (
		<div className="min-w-sm top-1/2 select-none left-1/2 -translate-x-1/2 -translate-y-1/2 absolute grid place-content-center">
			<div className="p-5 bg-error/50 rounded-lg border-2 border-dashed border-red-500 text-center font-lg font-bold">
				We could not process this at the right time. <br />
				Check you internet connection and try agian!
				<a
					className="btn btn-error mt-3 text-white mx-auto flex gap-3"
					href="/tasks"
				>
					<AiOutlineReload />
					Refresh
				</a>
			</div>
		</div>
	);
}
