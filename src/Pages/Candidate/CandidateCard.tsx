import {
    Box,
    Card,
    CardBody,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import { FaCalendarCheck } from "react-icons/fa";
import { FC } from "react";

interface CandidateCardProps {
    interviewer: {
        name: string;
        date: string;
        duration: string;
        result: number;
    };
    candidateName: string;
}
//sound  ,

const CandidateCard: FC<CandidateCardProps> = ({
    interviewer,
    candidateName,
}) => {
    const { name, date, duration, result } = interviewer;

    return (
        <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            bg={"white"}
            align="center"
        >
            <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src="https://i.ibb.co/r56sR83/user.png"
                alt="user"
            />

            <Stack w={"100%"}>
                <CardBody>
                    <Flex
                        align={"center"}
                        justifyContent="space-between"
                        pb="5px"
                    >
                        <Flex gap={1}>
                            <Text
                                fontSize={"md"}
                                fontWeight="500"
                                align={"center"}
                            >
                                Candidate:
                            </Text>
                            <Heading size="sm">{candidateName}</Heading>
                        </Flex>
                        <Heading size="sm" color="#3abff8">
                            Got {result} out of 70
                        </Heading>
                    </Flex>

                    <Flex gap={1} align={"center"} pb="5px">
                        <Text fontSize={"md"} fontWeight="500">
                            Interviewer:
                        </Text>
                        <Heading size="sm">{name}</Heading>
                    </Flex>

                    <Flex gap={1} align={"center"} pb="5px">
                        <Text fontSize={"md"} fontWeight="500">
                            Interviewee Duration:
                        </Text>
                        <Heading size="sm">{duration} Minute</Heading>
                    </Flex>

                    <Flex
                        fontSize={"md"}
                        fontWeight="700"
                        align={"center"}
                        gap="1"
                        pb="5px"
                    >
                        <FaCalendarCheck />
                        <Text>{date}</Text>
                    </Flex>

                    <Box>
                        <Text as="span" fontWeight={"700"}>
                            {" "}
                            Examiner Feedback:{" "}
                        </Text>
                        <Text as="span" fontWeight={"500"}>
                            Work hard regularly so that you can crack the
                            interview and get your dream job. best wishes for
                            you. Good luck.
                        </Text>
                    </Box>
                </CardBody>
            </Stack>
        </Card>
    );
};

export default CandidateCard;
