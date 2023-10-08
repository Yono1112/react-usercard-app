/* eslint-disable react-hooks/exhaustive-deps */
import {  Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react"
import { FC, memo, useEffect } from "react"
import { UserCard } from "../organisms/user/UserCard"
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserCardManagement: FC = memo(() => {
	const { getUsers, users, loading} = useAllUsers();
	useEffect(() => getUsers(), []);

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
							/>
						</WrapItem>
					))}
				</Wrap>
			)}
		</>
	)
})