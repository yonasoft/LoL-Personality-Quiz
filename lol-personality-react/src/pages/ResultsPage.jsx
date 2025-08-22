import { Box, Text, Button } from '@chakra-ui/react';

const ResultsPage = ({ result, onRestart }) => {
  return (
    <Box p={8} bg="gray.50" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box maxW="2xl" w="100%">
        <Box textAlign="center" mb={8}>
          <Box 
            bg="green.100" 
            color="green.800" 
            px={4} 
            py={2} 
            borderRadius="full" 
            display="inline-block"
            mb={4}
          >
            🏆 QUIZ COMPLETE
          </Box>
        </Box>

        <Box bg="white" p={8} borderRadius="lg" boxShadow="xl">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={6} color="gray.600">
            You are...
          </Text>

          <Box textAlign="center" mb={8}>
            <Box
              w="120px"
              h="120px"
              borderRadius="full"
              bg="blue.500"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx="auto"
              mb={4}
            >
              <Text fontSize="4xl" color="white" fontWeight="bold">
                {result.champion.charAt(0)}
              </Text>
            </Box>
            
            <Text fontSize="4xl" fontWeight="bold" color="gray.700" mb={2}>
              {result.champion}
            </Text>
            
            <Box 
              bg="blue.100" 
              color="blue.800" 
              px={3} 
              py={1} 
              borderRadius="full" 
              display="inline-block"
            >
              {result.role}
            </Box>
          </Box>

          <Box mb={8}>
            <Text fontSize="xl" fontWeight="bold" textAlign="center" mb={4} color="gray.700">
              Why {result.champion}?
            </Text>
            
            <Box bg="gray.50" p={5} borderRadius="lg">
              <Text fontSize="lg" color="gray.600" textAlign="center" lineHeight="tall">
                {result.description}
              </Text>
            </Box>
          </Box>

          <Box mb={8}>
            <Text fontSize="lg" fontWeight="bold" textAlign="center" mb={4} color="gray.700">
              Your Traits
            </Text>
            
            <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
              {result.traits.map((trait, index) => (
                <Box 
                  key={index}
                  bg="purple.100" 
                  color="purple.800" 
                  px={3} 
                  py={1} 
                  borderRadius="full" 
                  fontSize="sm"
                >
                  {trait}
                </Box>
              ))}
            </Box>
          </Box>

          <Box>
            <Button
              colorScheme="blue"
              size="lg"
              w="100%"
              mb={3}
              onClick={onRestart}
            >
              Take Quiz Again
            </Button>
            
            <Button
              variant="outline"
              colorScheme="gray"
              size="lg"
              w="100%"
            >
              Share Result
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResultsPage;