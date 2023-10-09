import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react"

type Props = {
	imageUrd: string;
	userName: string;
	fullName: string;
	onClick: () => void;
}

export const UserCard: FC<Props> = memo((props) => {
	const { imageUrd, userName, fullName, onClick } = props;
	return (
		<Box
			w="260px"
			h="260px"
			bg="white"
			borderRadius="10px"
			shadow="md"
			p={4}
			_hover={{ cursor: "pointer", opacity: 0.8}}
			onClick={onClick}
		>
			<Stack textAlign="center">
				<Image boxSize="160px" borderRadius="full" alt={userName} m="auto" src={imageUrd} />
				<Text fontSize="lg" fontWeight="bold">{userName}</Text>
				<Text fontSize="sm" color="gray">{fullName}</Text>
			</Stack>
		</Box>
	)
})