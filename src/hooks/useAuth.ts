/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react"
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
	const navigate = useNavigate();
	const [ loading, setLoding ] = useState(false);
	const { ShowMessage } = useMessage();
	const { setLoginUser } = useLoginUser();

	const login = useCallback((id: string) => {
		if (!id.trim()) {
			ShowMessage({ title: "ユーザーIDを入力してください", status: "warning"});
			return;
		}
		setLoding(true);
		axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
			if (res.data && res.data.id) {
				const isAdmin = res.data.id === 10 ? true : false;
				setLoginUser({...res.data, isAdmin});
				ShowMessage({ title: "ログインしました", status: "success"});
				navigate("/home");
			} else {
				ShowMessage({ title: "ログインできません", status: "error"});
			}
		})
		.catch(() => ShowMessage({ title: "ユーザーが見つかりません", status: "error"}))
		.finally(() => setLoding(false));
	}, []);
	return { login, loading , setLoginUser};
}