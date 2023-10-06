import { HamburgerIcon } from "@chakra-ui/icons"
import { IconButton } from "@chakra-ui/react"
import { FC, memo } from "react"

type Props = {
	onOpen: () => void;
}

export const MenuIconButton: FC<Props> = memo((props) => {
	const { onOpen } = props;
	return (
		<IconButton
			isRound={true}
			variant='unstyled'
			size="sm"
			aria-label='メニューボタン'
			icon={<HamburgerIcon />}
			display={{ base: "block", md: "none"}}
			onClick={onOpen}
		/>
	)
})