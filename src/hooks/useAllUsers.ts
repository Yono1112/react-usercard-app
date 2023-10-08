/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import { useMessage } from "./useMessage"
import { User } from "../types/api/user";
import axios from "axios";

export const useAllUsers = () => {
	const { ShowMessage } = useMessage();
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState<Array<User>>([]);

	const getUsers = useCallback(() => {
		axios
			.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
			.then((res) => setUsers(res.data))
			.catch( () => {
				ShowMessage({ title: "ユーザー取得に失敗しました", status: "error"});
			}
			)
			.finally(() => {
				setLoading(false);
			})
	}, []);

	return { getUsers, loading, users};
}