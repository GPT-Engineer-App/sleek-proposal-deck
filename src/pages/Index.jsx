import React from "react";
import { Box, Heading, Text, VStack, HStack, Image, Slide, useDisclosure } from "@chakra-ui/react";
import { FaUsers, FaLightbulb, FaChartLine, FaCalendarAlt, FaDollarSign } from "react-icons/fa";

const theme = {
  colors: {
    primary: "#1A365D",
    secondary: "#4A5568",
    light: "#F7FAFC",
  },
  fontSizes: {
    heading: "4xl",
    subheading: "2xl",
    body: "lg",
  },
};

const SlideLayout = ({ children, bgImage }) => (
  <Slide transition={["fade"]} bgImage={bgImage} bgSize="cover" bgPosition="center">
    <VStack spacing={6} p={12} bgColor="rgba(255,255,255,0.8)" h="100vh" justify="center">
      {children}
    </VStack>
  </Slide>
);

const IconText = ({ icon, text }) => (
  <HStack spacing={3}>
    <Box as={icon} color={theme.colors.primary} fontSize="3xl" />
    <Text fontSize={theme.fontSizes.body}>{text}</Text>
  </HStack>
);

const Index = () => {
  const { isOpen, onOpen } = useDisclosure(); // For controlling slide visibility

  return (
    <>
      {/* Title Slide */}
      <SlideLayout bgImage="https://images.unsplash.com/photo-1486848538113-ce1a4923fbc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBibHVlJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3MTExNTkxNDB8MA&ixlib=rb-4.0.3&q=80&w=1080">
        <Heading size={theme.fontSizes.heading} color={theme.colors.light}>
          Project Proposal
        </Heading>
        <Text>Prepared for ACME Inc.</Text>
        <Text>By InnovateX Solutions</Text>
      </SlideLayout>

      {/* Agenda */}
      <SlideLayout>
        <Heading size={theme.fontSizes.subheading} color={theme.colors.primary}>
          Agenda
        </Heading>
        <VStack spacing={6} align="stretch">
          <Text>1. Introduction</Text>
          <Text>2. Problem Statement</Text>
          <Text>3. Proposed Solution</Text>
          <Text>4. Benefits</Text>
          <Text>5. Timeline</Text>
          <Text>6. Budget</Text>
        </VStack>
      </SlideLayout>

      {/* Team Intro */}
      <SlideLayout>
        <Heading size={theme.fontSizes.subheading} color={theme.colors.primary}>
          Our Team
        </Heading>
        <HStack spacing={8}>
          <VStack>
            <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG9mJTIwYSUyMG1hbnxlbnwwfHx8fDE3MTExNTkxNDB8MA&ixlib=rb-4.0.3&q=80&w=1080" />
            <Text>John Smith</Text>
            <Text fontSize="sm">Project Lead</Text>
          </VStack>
          <VStack>
            <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1440589473619-3cde28941638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG9mJTIwYSUyMHdvbWFufGVufDB8fHx8MTcxMTE1OTE0MHww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Text>Jane Doe</Text>
            <Text fontSize="sm">UX Designer</Text>
          </VStack>
        </HStack>
      </SlideLayout>

      {/* Problem Statement */}
      <SlideLayout>
        <Heading size={theme.fontSizes.subheading} color={theme.colors.primary}>
          Problem Statement
        </Heading>
        <Text>ACME Inc. is facing challenges with their current software system, leading to operational inefficiencies and poor user experience.</Text>
      </SlideLayout>

      {/* Solution */}
      <SlideLayout>
        <Heading size={theme.fontSizes.subheading} color={theme.colors.primary}>
          Proposed Solution
        </Heading>
        <Text>We propose developing a new, modern web application with improved UI/UX, streamlined workflows, and integration with existing systems.</Text>
        <Image src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZCUyMG1vY2t1cHxlbnwwfHx8fDE3MTExNTkxNDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" />
      </SlideLayout>

      {/* Benefits */}
      <SlideLayout>
        <Heading size={theme.fontSizes.subheading} color={theme.colors.primary}>
          Benefits
        </Heading>
        <VStack spacing={8} align="stretch">
          <IconText icon={FaLightbulb} text="Increased productivity" />
          <IconText icon={FaChartLine} text="Improved business metrics" />
          <IconText icon={FaUsers} text="Enhanced user satisfaction" />
        </VStack>
      </SlideLayout>

      {/* Timeline */}
      <SlideLayout>
        <Heading size={theme.fontSizes.subheading} color={theme.colors.primary}>
          Timeline
        </Heading>
        <HStack spacing={12}>
          <VStack>
            <Text fontWeight="bold">Q1</Text>
            <Text fontSize="sm">Requirements</Text>
            <Text fontSize="sm">Design</Text>
          </VStack>
          <VStack>
            <Text fontWeight="bold">Q2</Text>
            <Text fontSize="sm">Development</Text>
            <Text fontSize="sm">Testing</Text>
          </VStack>
          <VStack>
            <Text fontWeight="bold">Q3</Text>
            <Text fontSize="sm">Deployment</Text>
            <Text fontSize="sm">Training</Text>
          </VStack>
        </HStack>
        <IconText icon={FaCalendarAlt} text="Est. Completion: Q3 2023" />
      </SlideLayout>

      {/* Budget */}
      <SlideLayout>
        <Heading size={theme.fontSizes.subheading} color={theme.colors.primary}>
          Budget
        </Heading>
        <HStack spacing={12}>
          <VStack>
            <Text fontWeight="bold">Design</Text>
            <Text>$20,000</Text>
          </VStack>
          <VStack>
            <Text fontWeight="bold">Development</Text>
            <Text>$100,000</Text>
          </VStack>
          <VStack>
            <Text fontWeight="bold">Deployment</Text>
            <Text>$10,000</Text>
          </VStack>
        </HStack>
        <IconText icon={FaDollarSign} text="Total: $130,000" />
      </SlideLayout>

      {/* Closing */}
      <SlideLayout bgImage="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm58ZW58MHx8fHwxNzExMTU5MTQyfDA&ixlib=rb-4.0.3&q=80&w=1080">
        <Heading size={theme.fontSizes.heading} color={theme.colors.light}>
          Thank You
        </Heading>
        <Text>We look forward to partnering with you.</Text>
        <Text>Questions?</Text>
      </SlideLayout>
    </>
  );
};

export default Index;
