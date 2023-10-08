/* eslint-disable react/prop-types */
export default function BodyInputs({ body, onChange }) {
	return (
		<div className="form-control w-full max-w-xs">
			<label className="label">
				<span className="label-text">Your Note description</span>
			</label>
			<textarea
				required
				name="body"
				onChange={(e) => onChange(e)}
				value={body}
				className="textarea mt-1 textarea-primary textarea-bordered h-24 max-w-xs w-full"
				placeholder="Bio"
			></textarea>
		</div>
	);
}
