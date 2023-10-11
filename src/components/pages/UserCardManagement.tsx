/* eslint-disable react-hooks/exhaustive-deps */
import {  Center, Spinner, Wrap, WrapItem, useDisclosure } from "@chakra-ui/react"
import { FC, memo, useCallback, useEffect } from "react"
import { UserCard } from "../organisms/user/UserCard"
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserCardManagement: FC = memo(() => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { users, loading, getUsers} = useAllUsers();
	const { onSelectUser, selectUser } = useSelectUser();
	const { loginUser } = useLoginUser();
	useEffect(() => {
		getUsers();
	}, []);

	const onClickUser = useCallback((id: number) => {
		onSelectUser({ onOpen, id, users})
	}, [users, onSelectUser, onOpen]);

	return (
		<>
			{loading ? (
				<Center h="100vh">
					<Spinner />
				</Center>
			): (
				<Wrap p={{ base: 4, md: 10}}>
					{users.map((user) => (
						<WrapItem key={user.id} mx="auto">
							<UserCard
								id={user.id}
								imageUrd="https://source.unsplash.com/TaCk3NspYe0"
								userName={user.username}
								fullName={user.name}
								onClick={onClickUser}
							/>
						</WrapItem>
					))}
				</Wrap>
			)}
			<UserDetailModal user={selectUser} isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose} />
		</>
	)
})