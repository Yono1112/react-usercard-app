/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Drawer, DrawerBody, DrawerContent } from "@chakra-ui/react"
import { FC, memo, useCallback } from "react"
import { useNavigate } from "react-router-dom";

type Props = {
	onClose: () => void;
	isOpen: boolean;
	onClickHome: () => void;
}

export const MenuDrawer: FC<Props> = memo((props) => {
	const {onClose, isOpen, onClickHome} = props;
	const navigate = useNavigate();

	const onClickSetting = useCallback(() => {
		navigate("/home/setting");
		onClose();
	}, [])
	const onClickUserCard = useCallback(() => {
		navigate("/home/user_card");
		onClose();
	}, [])
	return (
		<Drawer
			placement="left"
			size="xs"
			onClose={onClose}
			isOpen={isOpen}
		>
			<DrawerContent>
				<DrawerBody p={0} bg="gray.200">
					<Button w="100%" bg="gray.200" onClick={onClickHome}>Top</Button>
					<Button w="100%" bg="gray.200" onClick={onClickUserCard}>ユーザー一覧</Button>
					<Button w="100%" bg="gray.200" onClick={onClickSetting}>設定</Button>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	)
})