import {  Wrap, WrapItem } from "@chakra-ui/react"
import { FC, memo } from "react"
import { UserCard } from "../organisms/user/UserCard"

export const UserCardManagement: FC = memo(() => {
	return (
		<Wrap p={{ base: 4, md: 10}}>
			<WrapItem>
				<UserCard imageUrd="https://source.unsplash.com/TaCk3NspYe0" userName="hoge" fullName="hogehoge"/>
			</WrapItem>
		</Wrap>
	)
})