import { AiOutlinePlus } from "react-icons/ai";
import { useSearchQ } from "../../lib/hooks/useSearchQuery";
import { Link } from "react-router-dom";
export default function Navbar() {
	const { searchQ, handleSearchQ } = useSearchQ();
	return (
		<header className="w-full h-20 bg-neutral">
			<nav className="container flex items-center justify-between h-full px-3 mx-auto">
				<div className="mr-3 ">
					<Link
						to={"/"}
						className="text-sm bg-gray-600 btn btn-ghost md:text-xl btn-md"
					>
						NOTEM
					</Link>
				</div>
				<div className="flex items-center h-full gap-3 md:gap-12">
					<div className="form-control">
						<input
							value={searchQ}
							onChange={(e) => handleSearchQ(e.target.value)}
							type="text"
							placeholder="Search"
							className="input input-secondary input-bordered input-md md:w-64"
						/>
					</div>
					<div className="pr-0">
						<label htmlFor="my-modal-4" className="btn-md btn btn-secondary">
							<AiOutlinePlus color="white" size="1.1rem" />
						</label>
					</div>
				</div>
			</nav>
		</header>
	);
}
