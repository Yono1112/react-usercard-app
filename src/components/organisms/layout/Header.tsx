/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, Heading, useDisclosure} from "@chakra-ui/react"
import { FC, memo, useCallback } from "react"
import { Link, useNavigate } from "react-router-dom"
import { MenuIconButton } from "../../atoms/button/MenuIconButton"
import { MenuDrawer } from "../../molecules/MenuDrawer"

export const Header: FC = memo(() => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();

	const onClickHome = useCallback(() => {
		navigate("/home");
		onClose();
	}, [])
	return (
		<>
			<Flex
				as="nav"
				bg="teal.500"
				color="gray.50"
				align="center"
				justify="space-between"
				padding={{ base: 3, md: 5}}
			>
				<Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer"}} onClick={onClickHome}>
					<Heading as="h1" fontSize={{ base: "md", md: "lg"}}>
						ユーザー管理アプリ
					</Heading>
				</Flex>
				<Flex
					align="center"
					fontSize="md"
					flexGrow={2}
					display={{ base: "none", md: "flex"}}
				>
					<Box pr={4}>
						<Link to="/home/user_card">ユーザー一覧</Link>
					</Box>
					<Link to="/home/setting">設定</Link>
				</Flex>
				<MenuIconButton onOpen={onOpen}/>
			</Flex>
			<MenuDrawer isOpen={isOpen} onClose={onClose} onClickHome={onClickHome} />
		</>
	)
})