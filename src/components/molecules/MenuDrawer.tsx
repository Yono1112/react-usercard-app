import { Button, Drawer, DrawerBody, DrawerContent } from "@chakra-ui/react"
import { FC, memo } from "react"

type Props = {
	onClose: () => void;
	isOpen: boolean;
}

export const MenuDrawer: FC<Props> = memo((props) => {
	const {onClose, isOpen} = props;
	return (
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
	)
})