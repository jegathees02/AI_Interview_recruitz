import { useState } from 'react';
import NavBar from '../components/navbar';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Userdetails = () => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setStep(step + 1);
    setProgress(progress + 33.33);
  };

  const handleBack = () => {
    setStep(step - 1);
    setProgress(progress - 33.33);
  };

  const handleSubmit = () => {
    // Handle form submission
    toast({
      title: 'Form submitted.',
      description: 'Your form has been submitted successfully.',
      status: 'success',
      duration: 1000,
      isClosable: true,
    });
    navigate('/camera');
  };

  return (
    <>
      <NavBar />
      <br />
      <br />
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 && (
          <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
              Resume Upload
            </Heading>
            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
              <FormLabel htmlFor="resume">Resume</FormLabel>
              <Input
                type="file"
                name="resume"
                id="resume"
                autoComplete="resume"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
                placeholder="Upload Resume"
              />
            </FormControl>
          </>
        )}

        {step === 2 && (
          <>
          <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
              Job Experience
            </Heading>
            <FormControl mt="2%">
              <FormLabel htmlFor="experience">Experience (in Years)</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  placeholder="Enter your Experience"
                />
                <InputRightElement width="4.5rem"></InputRightElement>
              </InputGroup>
            </FormControl>
            
          </>
        )}

        {step === 3 && (
          <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal">
              Select the Level of Assessment
            </Heading>
            <FormControl mt="2%">
              <FormLabel htmlFor="assessmentLevel">Assessment Level</FormLabel>
              <Select placeholder="Select assessment level">
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </Select>
            </FormControl>
          </>
        )}

        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={handleBack}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                onClick={step === 3 ? handleSubmit : handleNext}
                colorScheme="teal"
                variant={step === 3 ? 'solid' : 'outline'}
              >
                {step === 3 ? 'Submit' : 'Next'}
              </Button>
            </Flex>
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default Userdetails;
