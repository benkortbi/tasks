import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import SearchQueryWrapper from "./lib/hooks/useSearchQuery";
import LoadingFallBackScreen from "./components/shared/skeleton/LoadingFallBackScreen";

//layoutss
const Root = lazy(() => import("./layouts/Root"));
//pages
const Home = lazy(() => import("./pages/home/Home"));
const TaskPage = lazy(() => import("./pages/task__page/TaskPage"));
const NotFount = lazy(() => import("./pages/errors/NotFount"));

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Root />,
			errorElement: <NotFount />,
			children: [
				{
					index: true,
					element: <Home />,
				},
			],
		},
		{
			path: "/:id",
			element: <TaskPage />,
		},
	],
	{ basename: "/tasks" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Suspense fallback={<LoadingFallBackScreen />}>
			<Provider store={store}>
				<SearchQueryWrapper>
					<RouterProvider router={router}></RouterProvider>
				</SearchQueryWrapper>
			</Provider>
		</Suspense>
	</React.StrictMode>
);
