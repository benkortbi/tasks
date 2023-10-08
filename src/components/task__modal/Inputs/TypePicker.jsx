/* eslint-disable react/prop-types */
export default function TypePicker({ onChange, badgeType }) {
	return (
		<div className="form-control w-full max-w-xs">
			<label className="label">
				<span className="label-text">Your Note type</span>
			</label>
			<select
				defaultValue={badgeType}
				className="select select-primary mt-1 w-full max-w-xs"
				onChange={(e) => onChange(e)}
				name="badgeType"
			>
				<option disabled>What is the type of this note?</option>
				<option>Personal</option>
				<option>Work</option>
				<option>Education</option>
				<option>Home</option>
				<option>Finance</option>
				<option>Social</option>
			</select>
		</div>
	);
}
