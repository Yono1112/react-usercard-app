/* eslint-disable react-hooks/exhaustive-deps */
import {  Center, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Stack, Wrap, WrapItem, useDisclosure } from "@chakra-ui/react"
import { FC, memo, useCallback, useEffect } from "react"
import { UserCard } from "../organisms/user/UserCard"
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserCardManagement: FC = memo(() => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { users, loading, getUsers} = useAllUsers();
	useEffect(() => {
		getUsers();
	}, []);

	const onClickUser = useCallback(() => onOpen(), []);

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
								imageUrd="https://source.unsplash.com/TaCk3NspYe0"
								userName={user.username}
								fullName={user.name}
								onClick={onClickUser}
							/>
						</WrapItem>
					))}
				</Wrap>
			)}
			<UserDetailModal isOpen={isOpen} onClose={onClose} />
		</>
	)
})