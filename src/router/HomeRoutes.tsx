import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserCard } from "../components/pages/UserCard";

export const HomeRoutes = [
	{
		path: "/",
		children: <Home />
	},
	{
		path: "/user_card",
		children: <UserCard />
	},
	{
		path: "/setting",
		children: <Setting />
	},
	{
		path: "/*",
		children: <Page404 />
	}
]