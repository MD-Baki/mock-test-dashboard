import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Grid,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PreLoader from "../../components/PreLoader/PreLoader";

const Dashboard = () => {
    const [loading, setLoading] = useState(true);

    const allData = [
        {
            id: 1,
            name: "AB. MD. Faisal Rahama",
            interviewee: 2,
        },
        {
            id: 2,
            name: "Shourov Hasan",
            interviewee: 2,
        },
        {
            id: 3,
            name: "MD Abdulla Hale Baki",
            interviewee: 2,
        },
        {
            id: 4,
            name: "Moinul Islam",
            interviewee: 2,
        },
        {
            id: 5,
            name: "MD. Faizul Osman",
            interviewee: 2,
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    if (loading) return <PreLoader />;

    return (
        <>
            <Text pt={4} pb={6} fontWeight="700" fontSize="2xl">
                Welcome, All Users
            </Text>

            <Grid
                bg="#EFF5F5"
                p={10}
                rounded="lg"
                templateColumns="repeat(3, 1fr)"
                gap={6}
            >
                {allData.map((data) => (
                    <Card key={data.id} bg="white">
                        <CardBody>
                            <Image
                                src="https://i.ibb.co/r56sR83/user.png"
                                alt="user"
                                borderRadius="lg"
                                h={"150px"}
                                mx="auto"
                            />
                            <Stack mt="6" spacing="3" textAlign="center">
                                <Heading size="md">{data.name}</Heading>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup
                                spacing="2"
                                textAlign="center"
                                mx="auto"
                            >
                                <Link to={`/candidate/${data.id}`}>
                                    <Button
                                        variant="solid"
                                        colorScheme="blue"
                                        bg="#3abff8"
                                    >
                                        See Result
                                    </Button>
                                </Link>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                ))}
            </Grid>
        </>
    );
};

export default Dashboard;
