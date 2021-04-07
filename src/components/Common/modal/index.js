import React from "react";
import { Flex, Button } from "components/Common";
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalCloseButton,
  Heading,
  ModalFooter,
} from "@chakra-ui/react";

export const Modal = ({ isOpen, onClose, title, children, handleSubmit }) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <div className="modal">
        <div className="modal__title modal__title--border">
          <Flex fullWidth="true" spacebetween="true" aligncenter="true">
            <Heading as={"h3"} fontSize={"20px"}>
              {title}
            </Heading>
            <ModalCloseButton />
          </Flex>
        </div>
        <div className="modal__content">{children}</div>
        <ModalFooter>
          <Button variant="primary" onClick={handleSubmit} name="Save" mr="3" />
          <Button variant="default" onClick={onClose} name="Close" />
        </ModalFooter>
      </div>
    </ChakraModal>
  );
};
