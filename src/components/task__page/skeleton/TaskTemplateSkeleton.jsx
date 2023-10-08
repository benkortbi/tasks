/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

export default function TaskTemplateSkeleton() {
	return (
		<>
			<article className="container flex flex-col px-6 py-24 mx-auto md:px-12">
				<div className="mb-12">
					<div className="h-8 bg-slate-700 rounded"></div>
				</div>
				<div className="flex-1 space-y-6 py-1">
					<div className="h-4 bg-slate-700 rounded"></div>
					<div className="space-y-8">
						<div className="grid grid-cols-3 gap-4">
							<div className="h-6 bg-slate-700 rounded col-span-2"></div>
							<div className="h-6 bg-slate-700 rounded col-span-1"></div>
						</div>
						<div className="grid grid-cols-3 gap-4">
							<div className="h-6 bg-slate-700 rounded col-span-2"></div>
							<div className="h-6 bg-slate-700 rounded col-span-1"></div>
						</div>
						<div className="grid grid-cols-3 gap-4 mt-12">
							<div className="h-6 bg-slate-700 rounded col-span-2"></div>
							<div className="h-6 bg-slate-700 rounded col-span-1"></div>
						</div>
					</div>
				</div>
			</article>
		</>
	);
}
