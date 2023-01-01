import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <Container maxW="1280px" my={20}>
            <Outlet />
        </Container>
    );
};

export default Main;
