import { useRef } from "react";
import { useInView } from "framer-motion";
import { Box, Button, Container, Flex, Heading, Link, Text } from "@chakra-ui/react";

import HeroIcon from "@/components/svgs/HeroIcon";
import SocialIcons from "@/components/svgs/SocialIcons";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container maxW={"7xl"} mb={[8, 4, 0]} pb={[24, 0, 0]} as="section">
      <Flex
        alignItems="center"
        gap={4}
        direction={["column-reverse", "column-reverse", "row"]}
        minH={"100vh"}
        ref={ref}
      >
        <Flex direction="column" alignItems="start" justifyContent="center" w="100%">
          <Heading
            fontSize={"4xl"}
            mb={4}
            style={{
              transform: isInView ? "none" : "translateY(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s ease 0.5s",
            }}
          >
            <Text as="span" color="primary.500">
              Engineering the Web:
            </Text>
            <br /> Blending Design and Functionality to Perfection!
          </Heading>

          <Text
            mb={4}
            fontSize={"2xl"}
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s ease 0.5s",
            }}
          >
            Hey there! I'm{" "}
            <Text as="span" fontWeight="medium" color="primary.500">
              Rohith Remesh
            </Text>
            , a{" "}
            <Text as="span" fontWeight="medium" color="primary.500">
              DevOps Engineer
            </Text>{" "}
            from Kerala, India. I'm specialized in{" "}
            <Text as="span" fontWeight="medium" color="primary.500">
            CI/CD, cloud infrastructure, automation, and system reliability
            </Text>
            .
          </Text>

          <Flex alignItems="center" gap={4}>
            <Button
              colorScheme="primary"
              as={Link}
              href="mailto:rohithr9037@gmail.com"
              target="_blank"
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "transform 1s ease 0.5s, opacity 1s ease 0.5s",
              }}
            >
              Get in touch
            </Button>
            <Button
              colorScheme="primary"
              variant="outline"
              as={Link}
              href="/Rohith.pdf"
              target="_blank"
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "transform 1s ease 0.5s, opacity 1s ease 0.5s",
              }}
            >
              Résumé
            </Button>
          </Flex>

          <SocialIcons isInView={isInView} />
        </Flex>

        <Box w="100%">
          <HeroIcon />
        </Box>
      </Flex>
    </Container>
  );
};

export default HeroSection;
