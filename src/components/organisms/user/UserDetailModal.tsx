import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { FC, memo } from "react"

type Props = {
	isOpen: boolean;
	onClose: () => void;
}

export const UserDetailModal: FC<Props> = memo((props) => {
	const {isOpen, onClose} = props;
	return (
		<Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
			<ModalOverlay />
			<ModalContent pb={6}>
				<ModalHeader>ユーザー詳細</ModalHeader>
				<ModalCloseButton />
				<ModalBody mx={4}>
					<Stack spacing={4}>
						<FormControl>
							<FormLabel>名前</FormLabel>
							<Input isReadOnly />
						</FormControl>
						<FormControl>
							<FormLabel>フルネーム</FormLabel>
							<Input isReadOnly />
						</FormControl>
						<FormControl>
							<FormLabel>mail</FormLabel>
							<Input isReadOnly />
						</FormControl>
						<FormControl>
							<FormLabel>TEL</FormLabel>
							<Input isReadOnly />
						</FormControl>
					</Stack>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
})