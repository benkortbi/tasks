import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { HiPencilSquare } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
	const navigate = useNavigate();
	return (
		<header className="w-full h-20 bg-neutral">
			<nav className="container flex items-center justify-between h-full px-6 mx-auto">
				<div className="mr-3 ">
					<button
						className="btn btn-square btn-primary"
						onClick={() => navigate(-1)}
					>
						<MdOutlineKeyboardBackspace size={"1.1rem"} />
					</button>
				</div>
				<Link to={"/"} className="btn btn-ghost normal-case text-xl">
					NOTEM
				</Link>

				<div className="pr-0">
					<label
						htmlFor="my_modal_6"
						className="btn gap-2 btn-outline btn-warning"
					>
						Edite
						<HiPencilSquare />
					</label>
				</div>
			</nav>
		</header>
	);
}
