/* eslint-disable react/prop-types */
export default function TitleInput({ onChange, value }) {
	return (
		<div className="w-full max-w-xs form-control">
			<label className="label">
				<span className="label-text">Your Note title</span>
			</label>
			<input
				value={value}
				onChange={(e) => onChange(e)}
				type="text"
				required
				name="title"
				placeholder="Enter task title"
				className="w-full max-w-xs mt-1 input input-bordered input-primary input-md"
			/>
		</div>
	);
}
