/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react"
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
	const navigate = useNavigate();
	const [ loading, setLoding ] = useState(false);

	const login = useCallback((id: string) => {
		if (!id.trim()) {
			alert("ユーザーIDを入力してください");
			return;
		}
		setLoding(true);
		axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
			if (res.data && res.data.id) {
				console.log(res.data);
				navigate("/home");
			} else {
				alert("ログインできません")
			}
		})
		.catch(() => alert("ユーザーが見つかりません"))
		.finally(() => setLoding(false));
	}, []);
	return { login, loading };
}