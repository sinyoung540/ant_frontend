import React, { useState, Component } from "react";

import ChatList from "./ChatList";
import ChatPlate from "./ChatPlate";

import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";
import { Switch, Label, Example, Div, Br, Text, Container, Anchor, Input, Icon, Button, props, girl, rest, boy } from "atomize";

function ChatTest() {

    let history = useHistory();

    return (
        <Div>
            <Div
                tag="section"
                w="100vw"
                p={{ t: { xs: "3rem", md: "8rem" } }}
                overflow="hidden"
            >
                <Container>
                    <Div
                        d="flex"
                        justify="center"
                        p={{ b: "10.5rem" }}
                        border={{ b: "1px solid" }}
                        borderColor="gray300"
                    >
                        <Div
                            minW={{ xs: "100%", md: "44rem", lg: "59rem" }}
                            d="flex"
                            align="center"
                            flexDir="column"
                            h={{ xs: "auto", md: "21rem", lg: "20rem" }}
                            pos="relative"
                        >

                            {/* Form Component */}
                            <ChatPlate />
                            <ChatList />

                        </Div>
                    </Div>
                </Container>
            </Div>
        </Div>
    )
}

export default ChatTest;