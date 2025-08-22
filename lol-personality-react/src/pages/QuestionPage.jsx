import { Box, Text, Button } from '@chakra-ui/react';

const QuestionPage = ({ 
  questionNumber, 
  totalQuestions, 
  scenario, 
  question, 
  answers, 
  onAnswerSelect 
}) => {
  return (
    <Box p={8} bg="gray.50" minH="100vh">
      <Box maxW="2xl" mx="auto">
        <Box mb={6}>
          <Text fontSize="sm" color="gray.600" mb={2}>
            Question {questionNumber} of {totalQuestions}
          </Text>
          <Box bg="blue.200" h="2" borderRadius="full">
            <Box 
              bg="blue.500" 
              h="2" 
              borderRadius="full" 
              w={`${(questionNumber / totalQuestions) * 100}%`}
            />
          </Box>
        </Box>

        <Box bg="white" p={8} borderRadius="lg" boxShadow="lg" mb={6}>
          <Box bg="blue.50" p={4} borderRadius="lg" mb={6}>
            <Text fontSize="lg" color="blue.800">
              {scenario}
            </Text>
          </Box>

          <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={6} color="gray.700">
            {question}
          </Text>

          <Box>
            {answers.map((answer, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                w="100%"
                mb={3}
                p={4}
                height="auto"
                minH="60px"
                textAlign="left"
                justifyContent="flex-start"
                whiteSpace="normal"
                onClick={() => onAnswerSelect(answer, index)}
                _hover={{ bg: "blue.50", borderColor: "blue.300" }}
              >
                <Box mr={3}>
                  <Box
                    bg="gray.100"
                    borderRadius="full"
                    w="24px"
                    h="24px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    {String.fromCharCode(65 + index)}
                  </Box>
                </Box>
                <Text fontSize="md">
                  {answer.text}
                </Text>
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionPage;