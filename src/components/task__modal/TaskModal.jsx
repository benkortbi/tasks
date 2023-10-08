import { useEffect, useRef, useState } from "react";
import BodyInputs from "./Inputs/BodyInput";
import ColorPicker from "./Inputs/ColorPicker";
import DeadLinePicker from "./Inputs/DeadLinePicker";
import TitleInput from "./Inputs/TitleInput";
import TypePicker from "./Inputs/TypePicker";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, postTask } from "../../store/slices/todo.slice";
import TaskModalButton from "./skeletons/TaskModalButton";

export default function TaskModal() {
	const modal = useRef();
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.todoSlice.postedTask);

	const [formData, setFormData] = useState({
		title: "",
		color: "",
		body: "",
		deadLine: null,
		badgeType: "personal",
	});
	function getColor(color) {
		setFormData({
			...formData,
			color,
		});
	}
	function handleChange(event) {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();
		if (formData.color == "") {
			alert("fill in the field");
			return;
		}
		await dispatch(postTask(formData));
	}

	function resetForm() {
		modal.current.checked = false;
		setFormData({
			...formData,
			title: "",
			color: "",
			body: "",
			deadLine: null,
			badgeType: "personal",
		});
	}

	useEffect(() => {
		if (!loading) {
			resetForm();
			dispatch(getTasks());
		}
	}, [loading, dispatch]);

	return (
		<>
			<input
				type="checkbox"
				id="my-modal-4"
				className="modal-toggle"
				ref={modal}
			/>
			<label htmlFor="my-modal-4" className="cursor-pointer modal">
				<label className="relative modal-box" htmlFor="">
					<h3 className="text-lg font-bold text-center uppercase">
						Add New Note
					</h3>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col items-center gap-5 px-8 mt-5"
					>
						<TitleInput
							onChange={handleChange}
							value={formData.title}
							name="title"
						/>
						<BodyInputs onChange={handleChange} body={formData.body} />
						<DeadLinePicker onChange={handleChange} />
						<TypePicker
							onChange={handleChange}
							badgeType={formData.badgeType}
						/>
						<ColorPicker getColor={getColor} />
						{loading ? (
							<TaskModalButton />
						) : (
							<button className="w-full max-w-xs btn btn-primary">
								New Note
							</button>
						)}
					</form>
				</label>
			</label>
		</>
	);
}
