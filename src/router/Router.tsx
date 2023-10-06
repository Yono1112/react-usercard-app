import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: FC = memo(() => {

	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/home/*" element={
				<Routes>
					{HomeRoutes.map((route) => (
						<Route
							key={route.path}
							path={route.path}
							element={
								<HeaderLayout>
									{route.children}
								</HeaderLayout>
							}
						/>
					))}
				</Routes>
			} />
			<Route path="/*" element={
				<Page404 />
			} />
		</Routes>
	)
});