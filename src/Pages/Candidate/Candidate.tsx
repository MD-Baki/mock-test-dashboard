import { Box, Grid, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { interviewData } from "./data";
import CandidateCard from "./CandidateCard";
import { useEffect, useState } from "react";
import PreLoader from "../../components/PreLoader/PreLoader";

const Candidate = () => {
    const [loading, setLoading] = useState(true);

    const params = useParams();
    const data = interviewData.filter(
        (item) => item.id === Number(params.id)
    )[0];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    if (loading) return <PreLoader />;

    return (
        <>
            <Text pt={4} pb={6} fontWeight="700" fontSize="2xl">
                {`Welcome , ${data.candidateName}`}
            </Text>

            {data?.interviewer.length ? (
                <Grid bg="#EFF5F5" p={10} rounded="lg" gap={5}>
                    {data?.interviewer.map((item, i) => (
                        <CandidateCard
                            key={i}
                            interviewer={item}
                            candidateName={data.candidateName}
                        />
                    ))}
                </Grid>
            ) : (
                <Box bg="#EFF5F5">
                    <Image
                        src="https://i.ibb.co/dKv7y1t/No-data.png"
                        alt="No Data"
                        h={"500px"}
                        mx="auto"
                    />
                </Box>
            )}
        </>
    );
};

export default Candidate;
