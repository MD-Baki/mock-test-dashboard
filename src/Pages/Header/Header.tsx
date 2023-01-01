import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";

const Header = () => {
    return (
        <Flex
            alignItems="center"
            gap="1"
            fontWeight={500}
            fontSize="md"
            color={"#3C4048"}
        >
            <Link to="/">ALL</Link>
            <FaAngleRight />
            <Link to="/candidate/1">FAISAL</Link>
            <FaAngleRight />
            <Link to="/candidate/2">SHOUROV</Link>
            <FaAngleRight />
            <Link to="/candidate/3">BAKI</Link>
            <FaAngleRight />
            <Link to="/candidate/4">MOINUL</Link>
            <FaAngleRight />
            <Link to="/candidate/5">FAIZUL</Link>
        </Flex>
    );
};

export default Header;
