import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'upperCase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={'100vh'} p="16" maxW={'container.xl'}>
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>
        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Img
            src={img5}
            h={['40', '400']}
            filter={'hue-rotate(-130deg)'}
          ></Img>
          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign={"center"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quis,
            sint nam neque alias quo architecto expedita debitis error
            temporibus excepturi. Consequatur deleniti vitae culpa, numquam at
            perferendis aliquam minus?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem nesciunt voluptates rerum, ipsum quo dolore
            pariatur nihil facilis nisi delectus aliquam expedita. Itaque,
            officia id repudiandae odio libero aliquid autem! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Consectetur, sed tenetur qui
            asperiores, dolores, itaque maxime repellat corrupti nihil nulla
            magni. Ratione deleniti facere laborum odio commodi eos vero itaque!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showArrows={false}
    showThumbs={false}
    showStatus={false}
    swipeable={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Img src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        {' '}
        Watch the Future{' '}
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Img src={img2} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        {' '}
        Future is Gaming{' '}
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Img src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        {' '}
        Gaming on Console
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Img src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        {' '}
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
