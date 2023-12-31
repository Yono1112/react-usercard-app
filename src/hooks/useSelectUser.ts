import { useCallback, useState } from "react"
import { User } from "../types/api/user";

type Props = {
	id: number;
	users: Array<User>;
	onOpen: () => void;
}

// 選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
	const [selectUser, setSelectUser] = useState<User>();
	const onSelectUser = useCallback((props: Props) => {
		const { onOpen, id, users} = props;
		const targetUser = users.find((user) => user.id === id);
		setSelectUser(targetUser);
		onOpen();
	}, [])

	return { onSelectUser, selectUser};
}