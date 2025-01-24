// import React, { useRef } from "react";
// import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/react";
// import Auth from "./auth";

// interface LoginModalProps {
//   isOpen: boolean;
//   onOpenChange: () => void;
// }

// export default function LoginModal(props : LoginModalProps) {
//   const formSubmitRef = useRef<(() => void) | null>(null);

// 	const handleExternalSubmit = () => {
//     if (formSubmitRef.current) {
//       formSubmitRef.current(); // Safely call the submit function
//     } else {
//       console.warn("Form submit function is not registered.");
//     }
//   };

//   return (
// 		<Modal
// 			isOpen={props.isOpen}
// 			placement="top-center"
// 			onOpenChange={props.onOpenChange}
// 		>
// 			<ModalContent>
// 				{(onClose) => (
// 					<>
// 						<ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
// 						<ModalBody>
// 							<Auth mode="login" submitRef={formSubmitRef} />
// 						</ModalBody>
// 						<ModalFooter>
// 							<Button color="danger" variant="flat" onPress={onClose}>
// 								Close
// 							</Button>
// 							<Button
// 								color="primary"
// 								onPress={handleExternalSubmit}
// 							>
// 								Sign in
// 							</Button>
// 						</ModalFooter>
// 					</>
// 				)}
// 			</ModalContent>
// 		</Modal>
// 	);
// }