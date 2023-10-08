import PropTypes from "prop-types";
export default function ColorPicker({ getColor }) {
	function toggleColorBadge(e) {
		document.querySelectorAll(".badge").forEach((item) => {
			item.classList.remove(
				"outline",
				"outline-offset-2",
				"outline-2",
				"outline-gray-300"
			);
		});
		e.currentTarget.classList.add(
			"outline",
			"outline-offset-2",
			"outline-2",
			"outline-gray-300"
		);
		getColor(e.currentTarget.dataset.color);
	}

	return (
		<div className="form-control w-full max-w-xs">
			<label className="label">
				<span className="label-text">Choose your Note background</span>
			</label>
			<div className="flex justify-evenly mt-2">
				<div
					data-color="bg-blue-500/75"
					onClick={toggleColorBadge}
					className="badge bg-blue-500/50 badge-lg"
				></div>
				<div
					data-color="bg-violet-500/75"
					onClick={toggleColorBadge}
					className="badge bg-violet-500/50 badge-lg transition-all delay-50"
				></div>
				<div
					data-color="bg-green-500/75"
					onClick={toggleColorBadge}
					className="badge bg-green-500/75 badge-lg transition-all delay-50"
				></div>
				<div
					data-color="bg-amber-500/75"
					onClick={toggleColorBadge}
					className="badge bg-amber-500 badge-lg transition-all delay-50"
				></div>
			</div>
		</div>
	);
}

ColorPicker.propTypes = {
	getColor: PropTypes.func.isRequired,
};
