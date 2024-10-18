/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

function VideoCard({ videoSrc, title, description }) {
  return (
    <Box w="300px" h="400px" mb="10px">
      <Box
        w="100%"
        h="100%"
        borderRadius="12px"
        borderWidth="4px"
        borderColor="#003153"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        overflow="hidden"
        bgColor="#003153"
        bgImage="linear-gradient(-45deg, #003153 25%, transparent 25%, transparent 50%, #003153 50%, #003153 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        display="flex"
        flexDirection="column"
      >
        <Box w="100%" h="70%">
          <video
            src={videoSrc}
            controls
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px 12px 0 0',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box p={3} textAlign="center" bgColor="#F5F5F5" h="30%">
          <Text fontSize="lg" fontWeight="semibold" color="#000000" fontFamily="'Bungee', sans-serif">
            {title}
          </Text>
          <Text mt={2} fontSize="lg" fontWeight="bold" color="#000000" fontFamily="'Titillium Web', sans-serif">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function FootballReels() {
    const videos = [
        {
          videoSrc: "michael-touchdown.MOV",
          title: "Michael's Touchdown",
          description: "Incredible Run to the End Zone",
        },
        {
          videoSrc: "michael-drill.MOV",
          title: "Michael's Agility Drill",
          description: "Mastering Footwork",
        },
        {
          videoSrc: "michael-pass.MOV",
          title: "Michael's Diving Catch",
          description: "Phenomenal Athleticism",
        },
        {
          videoSrc: "michael-catch.MOV",
          title: "Michael's One-Handed Catch",
          description: "Highlight Reel Grab",
        },
        {
          videoSrc: "michael-tackle.MOV",
          title: "Michael Shedding Tackles",
          description: "YAC",
        },
        {
          videoSrc: "game-winner.mp4",
          title: "Michael's Game-Winning Drive",
          description: "Clutch Performance",
        },
        {
          videoSrc: "all-star-play.mp4",
          title: "Michael All-Star Game",
          description: "Top Plays from the All-Star Matchup",
        },
        {
          videoSrc: "highlights.mp4",
          title: "Michael High School Highlights",
          description: "Dominating on the Gridiron",
        }      
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
        Football Reels
      </Text>
      <SimpleGrid columns={columns} spacing={{ base: 3, sm: 5 }} justifyItems="center">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            videoSrc={video.videoSrc}
            title={video.title}
            description={video.description}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default FootballReels;