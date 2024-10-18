/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, bio, flipSound }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    flipSound.play();
    setFlipped(!flipped);
  };

  return (
    <Box w="300px" h="400px" perspective="1000px" mb="10px">
      <Box
        w="100%"
        h="100%"
        position="relative"
        style={{ transformStyle: 'preserve-3d' }}
        transition="transform 0.6s"
        transform={flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        onClick={handleFlip}
      >
        <Box
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        >
          <Box
            bgImage={`url(${frontImg})`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="12px"
          borderColor="#003153"
          borderWidth="3px"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          ></Box>
        </Box>
        <Box
          bgColor="#4B4B4B"
          bgImage="linear-gradient(-45deg, #ebebeb 25%, transparent 25%, transparent 50%, #38393d 50%, #000000 75%, transparent 75%, transparent)"
          bgSize="1px 1px;"
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          borderColor="#003153"
          borderWidth="3px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transform="rotateY(180deg)"
          p={5}
        >
          {/* <Text fontSize="2xl" fontWeight="bold" color="#F28C28" fontFamily="'Bungee', sans-serif">
            {name}
          </Text> */}
          <Text mt={4} color="#F8F8F8" fontFamily="'Bungee', sans-serif" fontSize="lg" fontWeight="medium" textAlign="center">
          {bio}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function PlayerCards() {
  const flipSound = new Audio('/card-flip.mp3');

  const players = [
    {
      frontImg: "michael-1.png",
      name: "Michael Terry III",
      bio: "Michael Terry III is a game-breaking running back, known for his ability to turn short runs into long touchdowns with explosive speed.",
    },
    {
      frontImg: "michael-1.png",
      name: "Michael Terry III",
      bio: "Michael Terry III, as a wide receiver, runs crisp routes and has an impressive catch radius, making him a top target in the red zone.",
    },
    {
      frontImg: "michael-1.png",
      name: "Michael Terry III",
      bio: "Michael Terry III is a versatile back, able to catch passes out of the backfield and create mismatches against linebackers in coverage.",
    },
    {
      frontImg: "michael-1.png",
      name: "Michael Terry III",
      bio: "Michael Terry III is a standout wide receiver, known for his ability to make contested catches and deliver big plays in crucial moments.",
    },
    {
      frontImg: "michael-1.png",
      name: "Michael Terry III",
      bio: "Michael Terry III dominates the ground game, weaving through defenders with his quick cuts and elite vision as a running back.",
    },
    {
      frontImg: "michael-1.png",
      name: "Michael Terry III",
      bio: "Michael Terry III is a go-to wide receiver, consistently beating press coverage and making big plays down the sideline.",
    },
    {
      frontImg: "michael-1.png",
      name: "Michael Terry III",
      bio: "Michael Terry III is a hard-nosed running back, breaking tackles and grinding out tough yards in short-yardage situations.",
    },
    {
      frontImg: "michael-1.png",
      name: "Michael Terry III",
      bio: "Michael Terry III is a dynamic slot receiver, creating separation with quick moves and racking up yards after the catch.",
    },
  ];
  

  const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4 });

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={{ base: 12, md: 16 }} 
      mb={{ base: 12, md: 16 }} 
    >
      <Text fontSize="2xl" fontWeight="medium" color="#003153" fontFamily="'Bungee', sans-serif">
        Player Cards    
      </Text>
      <Text fontSize="md" fontWeight="medium" color="#003153" fontFamily="'Bungee', sans-serif">
        Click on a card to see player card info
        </Text>

      <SimpleGrid
        columns={columns}
        spacing={{ base: 3, sm: 5 }} 
        justifyItems="center"
      >
        {players.map((player, index) => (
          <Card 
            key={index} 
            frontImg={player.frontImg} 
            name={player.name} 
            bio={player.bio}
            flipSound={flipSound} 
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default PlayerCards;