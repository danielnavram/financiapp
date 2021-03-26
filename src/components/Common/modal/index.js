import React from 'react'
import { Flex } from "components/Common";
import { Modal as ChakraModal, ModalOverlay, ModalCloseButton, Heading } from "@chakra-ui/react";

export const Modal = ({ isOpen, onClose, title, children }) => {
    return (
        <ChakraModal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <div className="modal">
              <div className="modal__title modal__title--border">
                  <Flex fullWidth="true" spacebetween="true" aligncenter="true">
                    <Heading as={"h3"} fontSize={"20px"} >{title}</Heading>
                    <ModalCloseButton />
                  </Flex>
              </div>
              <div className="modal__content">
                  {children}
              </div>
            </div>
          </ChakraModal>
    )
}
