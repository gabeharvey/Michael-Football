import { Box, Text, VStack, Heading, Grid, Input, Button, FormControl, FormLabel, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

function StatTracker() {
  const [stats, setStats] = useState({
    carries: '',
    rushingYards: '',
    rushingTDs: '',
    receptions: '',
    receivingYards: '',
    receivingTDs: '',
  });

  const [gameInfo, setGameInfo] = useState({
    team: '',
    opponent: '',
    date: '',
  });

  const [games, setGames] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStats((prevStats) => ({
      ...prevStats,
      [name]: value,
    }));
  };

  const handleGameInfoChange = (e) => {
    const { name, value } = e.target;
    setGameInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleAddGame = () => {
    setGames([...games, { ...gameInfo, ...stats }]);
    setStats({
      carries: '',
      rushingYards: '',
      rushingTDs: '',
      receptions: '',
      receivingYards: '',
      receivingTDs: '',
    });
    setGameInfo({
      team: '',
      opponent: '',
      date: '',
    });
  };

  // Function to calculate averages
  const calculateAverages = (statName) => {
    const total = games.reduce((sum, game) => sum + (parseFloat(game[statName]) || 0), 0);
    return games.length ? (total / games.length).toFixed(2) : 0;
  };

  const averagesHS = {
    carries: calculateAverages('carries'),
    rushingYards: calculateAverages('rushingYards'),
    rushingTDs: calculateAverages('rushingTDs'),
    receptions: calculateAverages('receptions'),
    receivingYards: calculateAverages('receivingYards'),
    receivingTDs: calculateAverages('receivingTDs'),
  };

  const averagesTexasHardwork = {
    carries: calculateAverages('carries'),
    rushingYards: calculateAverages('rushingYards'),
    rushingTDs: calculateAverages('rushingTDs'),
    receptions: calculateAverages('receptions'),
    receivingYards: calculateAverages('receivingYards'),
    receivingTDs: calculateAverages('receivingTDs'),
  };

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={16}
    >
      <Heading fontSize="2xl" fontWeight="medium" color="#003153" fontFamily="'Bungee', sans-serif">
        Game Stat Tracker
      </Heading>
      <Flex gap={4} mb={6} justifyContent="center">
        <MotionBox
          w={{ base: '90%', md: '250px' }}
          bgColor="#4B4B4B"
          borderRadius="12px"
          p={4}
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          borderColor="#003153"
          borderWidth="4px"
        >
          <Text 
            color="#F8F8F8" 
            fontWeight="bold" 
            fontFamily="'Bungee', sans-serif" 
            fontSize="sm"
            textAlign="center" 
          >
            Alamo Heights HS Stats
          </Text>
          <Text color="#F8F8F8" fontFamily="'Titillium Web', sans-serif" >Carries: {averagesHS.carries}</Text>
          <Text color="#F8F8F8" fontFamily="'Titillium Web', sans-serif" >Rushing Yards: {averagesHS.rushingYards}</Text>
          <Text color="#F8F8F8" fontFamily="'Titillium Web', sans-serif" >Rushing TDs: {averagesHS.rushingTDs}</Text>
          <Text color="#F8F8F8" fontFamily="'Titillium Web', sans-serif" >Receptions: {averagesHS.receptions}</Text>
          <Text color="#F8F8F8" fontFamily="'Titillium Web', sans-serif" >Receiving Yards: {averagesHS.receivingYards}</Text>
          <Text color="#F8F8F8" fontFamily="'Titillium Web', sans-serif" >Receiving TDs: {averagesHS.receivingTDs}</Text>
        </MotionBox>

        <MotionBox
          w={{ base: '90%', md: '250px' }}
          bgColor="#4B4B4B"
          borderRadius="12px"
          p={4}
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          borderColor="#003153"
          borderWidth="4px"
        >
          <Text 
            color="#F8F8F8" 
            fontWeight="bold" 
            fontFamily="'Bungee', sans-serif" 
            fontSize="sm"
            textAlign="center" 
          >
            Elite Club Stats
          </Text>
          <Text color="#F8F8F8" fontFamily="'Titillium Web', sans-serif">Carries: {averagesTexasHardwork.carries}</Text>
          <Text color="#F8F8F8" fontFamily="'Titillium Web', sans-serif">Rushing Yards: {averagesTexasHardwork.rushingYards}</Text>
          <Text color="#F8F8F8" fontFamily="'Titillium Web', sans-serif">Rushing TDs: {averagesTexasHardwork.rushingTDs}</Text>
          <Text color="#F8F8F8" fontFamily="'Titillium Web', sans-serif">Receptions: {averagesTexasHardwork.receptions}</Text>
          <Text color="#F8F8F8" fontFamily="'Titillium Web', sans-serif">Receiving Yards: {averagesTexasHardwork.receivingYards}</Text>
          <Text color="#F8F8F8" fontFamily="'Titillium Web', sans-serif">Receiving TDs: {averagesTexasHardwork.receivingTDs}</Text>
        </MotionBox>
      </Flex>
      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#F8F8F8"
        borderRadius="12px"
        borderColor="#38393d"
        borderWidth="5px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <Heading fontSize="md" color="#000000" fontFamily="'Bungee', sans-serif" mb={1}>
          Player Stats:
        </Heading>
        {games.length === 0 ? (
          <Text color="#000000">No games added yet.</Text>
        ) : (
          <Grid gap={4}>
            {games.map((game, index) => (
              <Box key={index} p={3} bgColor="transparent" borderRadius="8px">
                <Text color="#000000" fontWeight="bold" fontFamily="'Bungee', sans-serif">
                  Game {index + 1} - Michael Terry III:
                </Text>
                <Text color="#000000">Team: {game.team}</Text>
                <Text color="#000000">Opponent: {game.opponent}</Text>
                <Text color="#000000">Date: {game.date}</Text>
                <Text color="#000000">Carries: {game.carries}</Text>
                <Text color="#000000">Rushing Yards: {game.rushingYards}</Text>
                <Text color="#000000">Rushing TDs: {game.rushingTDs}</Text>
                <Text color="#000000">Receptions: {game.receptions}</Text>
                <Text color="#000000">Receiving Yards: {game.receivingYards}</Text>
                <Text color="#000000">Receiving TDs: {game.receivingTDs}</Text>
              </Box>
            ))}
          </Grid>
        )}
      </MotionBox>

      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#4B4B4B"
        bgImage="linear-gradient(-45deg, #38393d 25%, transparent 25%, transparent 50%, #38393d 50%, #38393d 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        borderRadius="12px"
        borderColor="#003153"
        borderWidth="4px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Bungee', sans-serif" fontSize="md">
              Team
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#000000"
              name="team"
              value={gameInfo.team}
              onChange={handleGameInfoChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Bungee', sans-serif" fontSize="md">
              Opponent
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#000000"
              name="opponent"
              value={gameInfo.opponent}
              onChange={handleGameInfoChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Bungee', sans-serif" fontSize="md">
              Date
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#000000"
              name="date"
              type="date"
              value={gameInfo.date}
              onChange={handleGameInfoChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Bungee', sans-serif" fontSize="md">
              Carries
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#000000"
              name="carries"
              value={stats.carries}
              onChange={handleInputChange}
              type="number"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Bungee', sans-serif" fontSize="md">
              Rushing Yards
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#000000"
              name="rushingYards"
              value={stats.rushingYards}
              onChange={handleInputChange}
              type="number"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Bungee', sans-serif" fontSize="md">
              Rushing TDs
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#000000"
              name="rushingTDs"
              value={stats.rushingTDs}
              onChange={handleInputChange}
              type="number"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Bungee', sans-serif" fontSize="md">
              Receptions
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#000000"
              name="receptions"
              value={stats.receptions}
              onChange={handleInputChange}
              type="number"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Bungee', sans-serif" fontSize="md">
              Receiving Yards
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#000000"
              name="receivingYards"
              value={stats.receivingYards}
              onChange={handleInputChange}
              type="number"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Bungee', sans-serif" fontSize="md">
              Receiving TDs
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#000000"
              name="receivingTDs"
              value={stats.receivingTDs}
              onChange={handleInputChange}
              type="number"
            />
          </FormControl>
          <Button onClick={handleAddGame}             mt={4}
            bgColor="#003153"
            color="#F8F8F8"
            minW="100%"
            maxW="45%"
            alignSelf="center"
            fontFamily="'Bungee', sans-serif"
            fontWeight="medium"
            fontSize="md"
            borderRadius="8px"
            borderColor="#003153"
            borderWidth="3px"
            _hover={{ borderColor: '#F8F8F8' }}>
            Add Game
          </Button>
        </VStack>
      </MotionBox>
    </VStack>
  );
}

export default StatTracker;
