import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Button, Drawer, DrawerBody, DrawerContent, Flex, Heading, IconButton, useDisclosure} from "@chakra-ui/react"
import { FC, memo } from "react"
import { Link } from "react-router-dom"

export const Header: FC = memo(() => {
	const { isOpen, onOpen, onClose } = useDisclosure();
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
				<Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer"}}>
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
						<Link to="">ユーザー一覧</Link>
					</Box>
					<Link to="">設定</Link>
				</Flex>
				<IconButton
					isRound={true}
					variant='unstyled'
					size="sm"
					aria-label='メニューボタン'
					icon={<HamburgerIcon />}
					display={{ base: "block", md: "none"}}
					onClick={onOpen}
				/>
			</Flex>
			<Drawer
				placement="left"
				size="xs"
				onClose={onClose}
				isOpen={isOpen}
			>
				<DrawerContent>
					<DrawerBody p={0} bg="gray.200">
						<Button w="100%" bg="gray.200">Top</Button>
						<Button w="100%" bg="gray.200">ユーザー一覧</Button>
						<Button w="100%" bg="gray.200">設定</Button>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
})