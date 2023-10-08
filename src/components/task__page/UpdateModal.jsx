import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../../store/slices/todo.slice";
import UpdateLoadingButton from "./skeleton/UpdateLoadingButton";
export default function UpdateModal({ id, prevTitle, prevBody, onSuccess }) {
	const { loading } = useSelector((state) => state.todoSlice.updateTask);
	const modal = useRef();
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		newTitle: prevTitle,
		newBody: prevBody,
	});
	function handleChange(e) {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	}
	function resetModal() {
		modal.current.checked = false;
	}
	async function handleSubmit(e) {
		e.preventDefault();
		if (formData.newTitle === prevTitle && formData.newBody === prevBody) {
			return;
		}
		const newData = {
			id,
			title: formData.newTitle,
			body: formData.newBody,
		};
		try {
			await dispatch(updateTask(newData));
			onSuccess();
		} catch (error) {
			throw new Error(error);
		}
	}
	useEffect(() => {
		if (!loading) {
			resetModal();
		}
	}, [loading]);

	return (
		<>
			<input
				type="checkbox"
				id="my_modal_6"
				className="modal-toggle"
				ref={modal}
			/>
			<div className="modal ">
				<div className="w-11/12 max-w-5xl modal-box">
					<h3 className="mb-12 text-lg font-bold">Update Note!</h3>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col w-11/12 max-w-5xl gap-10 mx-auto"
					>
						<div className="w-full form-control">
							<label className="label">
								<span className="capitalize label-text">Update note title</span>
							</label>
							<input
								onChange={handleChange}
								value={formData.newTitle}
								type="text"
								required
								name="newTitle"
								className="w-full mt-1 input input-bordered input-warning input-md"
							/>
						</div>
						<div className="w-full form-control">
							<label className="label">
								<span className="capitalize label-text">Update Note body</span>
							</label>
							<textarea
								onChange={handleChange}
								value={formData.newBody}
								name="newBody"
								className="w-full h-24 mt-1 textarea textarea-warning textarea-bordered"
							></textarea>
						</div>
						<div className="flex gap-5 modal-action">
							<label htmlFor="my_modal_6" className="btn btn-info btn-outline">
								Close!
							</label>
							{!loading ? (
								<button className="btn btn-warning btn-outline">Update</button>
							) : (
								<UpdateLoadingButton />
							)}
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

UpdateModal.propTypes = {
	id: PropTypes.string.isRequired,
	prevTitle: PropTypes.string.isRequired,
	prevBody: PropTypes.string.isRequired,
	onSuccess: PropTypes.func.isRequired,
};
