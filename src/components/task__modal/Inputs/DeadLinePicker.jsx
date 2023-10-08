import PropTypes from "prop-types";

export default function DeadLinePicker({ onChange }) {
	const today = new Date().toISOString().split("T")[0];

	return (
		<div className="form-control w-full max-w-xs">
			<label className="label">
				<span className="label-text">
					Your Note deadline
					<span className="text-gray-500 text-xs font-medium">{`(optional)`}</span>
				</span>
			</label>
			<input
				onChange={(e) => onChange(e)}
				type="date"
				name="deadLine"
				id="deadline"
				className="input mt-1 input-md input-primary"
				min={today}
			/>
		</div>
	);
}

DeadLinePicker.propTypes = {
	onChange: PropTypes.func.isRequired,
};
