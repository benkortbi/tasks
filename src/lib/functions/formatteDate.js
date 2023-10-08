export function formatteDate(date) {
	const readyDate = new Date(date).toLocaleString("en-GB", {
		day: "numeric",
		month: "numeric",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
	});
	return readyDate;
}
