import { Box, Container, Flex, Heading, Link, Text, chakra } from "@chakra-ui/react";
import TimeLineItem from "@/components/timeline/TimeLineItem";
import TimelineIcon from "@/components/svgs/TimelineIcon";

const Experiences = () => {
  return (
    <Container maxW={"7xl"} mb={24} as="section">
      <Heading fontSize={"4xl"} mb={4}>
        Experience
      </Heading>

      <Flex alignItems="center" gap={8} mt={24} direction={["column-reverse", "column-reverse", "row"]}>
        <Box w="100%">

          {/* Jr DevOps Engineer at Qubedynamics */}
          <TimeLineItem>
            <Box>
              <chakra.h2 fontSize={["md", null, "lg"]}>September 2024 – Present</chakra.h2>
              <chakra.h1 fontSize={["lg", null, "2xl"]} mb="2" fontWeight="bold">
                Jr. DevOps Engineer at Qubedynamics Pvt Ltd
              </chakra.h1>
              <Text fontSize="md">
                ● Managed and automated deployments across AWS, DigitalOcean, and Linode.<br />
                ● Built CI/CD pipelines using GitHub Actions and GitLab CI for multiple full-stack applications.<br />
                ● Developed infrastructure as code using Terraform and Ansible for reproducible environments.<br />
                ● Deployed containerized applications using Docker and Kubernetes clusters.<br />
                ● Configured monitoring solutions with Grafana and Nagios for system alerting.<br />
                ● Set up RabbitMQ clusters for message queuing and managed high-availability MySQL clusters.<br />
                ● Deployed and secured mail servers using Postfix and implemented email authentication (DKIM, DMARC, SPF).<br />
                ● Handled Linux server administration, backup recovery, and network/firewall security policies.
              </Text>
            </Box>
          </TimeLineItem>

          {/* DevOps Intern at Sudoskills */}
          <TimeLineItem>
            <Box>
              <chakra.h2 fontSize={["md", null, "lg"]}>April 2024 – September 2024</chakra.h2>
              <chakra.h1 fontSize={["lg", null, "2xl"]} mb="2" fontWeight="bold">
                DevOps Intern at{" "}
                <Link href="https://www.sudoskills.in/" target="_blank" textDecoration="underline" color="primary.500">
                  Sudoskills
                </Link>
              </chakra.h1>
              <Text fontSize="md">
                ● Managed Linux system administration tasks including file system navigation, user/group management,
                package management, and storage solutions using LVM.<br />
                ● Automated Django application deployment using Ansible with Nginx and Gunicorn integration.<br />
                ● Built and deployed scalable web application infrastructure using Terraform on AWS.<br />
                ● Configured CI/CD pipelines for controlled application deployment using GitLab CI.<br />
                ● Deployed and managed Docker containers and Docker Compose setups.
              </Text>
            </Box>
          </TimeLineItem>

          {/* Python Django Intern */}
          <TimeLineItem>
            <Box>
              <chakra.h2 fontSize={["md", null, "lg"]}>February 2023 – June 2023</chakra.h2>
              <chakra.h1 fontSize={["lg", null, "2xl"]} mb="2" fontWeight="bold">
                Python Django Intern at Inmakes Infotech
              </chakra.h1>
              <Text fontSize="md">
                ● Built web applications using Python and Django framework.<br />
                ● Designed database models, views, and templates for dynamic features.<br />
                ● Integrated MySQL databases and developed responsive front-end using HTML, CSS, and Bootstrap.<br />
                ● Implemented user authentication, form handling, and cross-browser compatible UI.<br />
                ● Collaborated using Git for version control and team development practices.
              </Text>
            </Box>
          </TimeLineItem>

          {/* Personal Projects */}
          <TimeLineItem>
            <Box>
              <chakra.h2 fontSize={["md", null, "lg"]}>Personal Projects</chakra.h2>
              <chakra.h1 fontSize={["lg", null, "2xl"]} mb="2" fontWeight="bold">
                AWS & CI/CD Projects
              </chakra.h1>
              <Text fontSize="md" mb={4}>
                <strong>AWS Production Environment Setup for High-Availability Web Application</strong><br />
                ● Designed and deployed a secure, scalable cloud infrastructure following AWS best practices.<br />
                ● Implemented VPCs with public and private subnets, route tables, and NAT gateways.<br />
                ● Configured EC2 instances for web, application, and database layers across multiple availability zones.<br />
                ● Integrated Elastic Load Balancer (ELB) for load distribution and Auto Scaling Groups for fault tolerance.<br />
                ● Secured public endpoints using SSL/TLS certificates via AWS Certificate Manager (ACM).<br />
                <em>Outcome: Delivered a highly available, secure environment providing reliable application performance.</em>
              </Text>

  
            </Box>
          </TimeLineItem>
        </Box>

        <Box w="70%">
          <TimelineIcon />
        </Box>
      </Flex>
    </Container>
  );
};

export default Experiences;