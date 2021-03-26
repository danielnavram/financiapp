import React from 'react'
import { Flex } from "components/Common";
import { Heading } from "@chakra-ui/react";

export const Card = ({ title, border, options, children }) => {
    return (
        <div className="card">
            <div className={`card__title ${border ? "card__title--border" : ""}`}>
                <Flex fullWidth="true" spacebetween="true" aligncenter="true">
                    <Heading as={"h3"} fontSize={"20px"}>{title}</Heading>
                    {options?.button || options?.context}
                </Flex>
            </div>
            <div className="card__body">
                {children}
            </div>
        </div>
    )
}
