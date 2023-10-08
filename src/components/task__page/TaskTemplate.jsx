/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { formatteDate } from "../../lib/functions/formatteDate";
export default function TaskTemplate({ singleTask }) {
	return (
		<>
			<article className="container flex flex-col px-6 py-24 mx-auto md:px-12">
				<span className="ml-auto text-sm font-medium text-gray-400 md:text-md">
					Created at: {formatteDate(singleTask?.createdAt)}
				</span>

				<h1 className="text-3xl font-bold text-start">{singleTask?.title} </h1>
				<p className="py-12 text-lg font-normal leading-loose text-gray-400 text-start">
					{singleTask?.body}
				</p>
			</article>
		</>
	);
}
