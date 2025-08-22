import { Box, Text, Button } from '@chakra-ui/react';

const EnterQuiz = ({ onStartQuiz }) => {
  return (
    <Box p={8} bg="gray.50" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box bg="white" p={8} borderRadius="lg" boxShadow="lg" maxW="md" w="100%">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={4} color="gray.700">
          LoL Personality Quiz
        </Text>
        
        <Text fontSize="lg" textAlign="center" mb={6} color="gray.600">
          Discover which League of Legends champion matches your personality!
        </Text>
        
        <Button 
          colorScheme="blue" 
          size="lg" 
          w="100%" 
          onClick={onStartQuiz}
        >
          Start Quiz
        </Button>
      </Box>
    </Box>
  );
};

export default EnterQuiz;