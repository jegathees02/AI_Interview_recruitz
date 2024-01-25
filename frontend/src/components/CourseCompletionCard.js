import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Button,
  Text,
  Heading,
  Image,
  Progress,
} from "@chakra-ui/react";
import "../styles/CourseCompletionCard.css";

const CourseCompletionCard = () => {
  return (
    <div className="course-completion-card">
      <div className="course-completion-div">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          w="100%"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody className="course-card-completion">
              <div className="progress-div">
                <Heading size="md">Fundamentals of C++</Heading>
                <Progress
                  value={85}
                  size="xs"
                  colorScheme="teal"
                  width="100%"
                />
                <Text py="2">
                  85% <br /> 6hr 30min
                </Text>
              </div>
            </CardBody>
          </Stack>
        </Card>
      </div>
      <div className="course-completion-div">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          w="100%"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />
          <Stack>
            <CardBody>
              <div className="progress-div">
                <Heading size="md">Introduction to AI</Heading>
                <Progress
                  value={35}
                  size="xs"
                  colorScheme="teal"
                  width="100%"
                />
                <Text py="2">
                  35% <br /> 4hr 30min{" "}
                </Text>
              </div>
            </CardBody>
          </Stack>
        </Card>
      </div>
    </div>
  );
};

export default CourseCompletionCard;
