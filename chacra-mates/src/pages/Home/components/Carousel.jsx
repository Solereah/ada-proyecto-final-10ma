import React, { useState } from "react"

import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import Slider from "react-slick"

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Carousel = () => {
  const [slider, setSlider] = useState(null)

  const top = useBreakpointValue({ base: "90%", md: "50%" })
  const side = useBreakpointValue({ base: "30%", md: "40px" })

  const cards = [
    {
      title: "Tomá mate y avivate",
      text: 'Tomá mate y avivate, que hay un dicho que dice: "Recordate que el que pisa nuestro suelo, no se va si toma mate." Federico Canago',
      image:
        "https://res.cloudinary.com/dwgelqhvb/image/upload/v1659925083/yerba_M_Ate_3c30e56f5a.jpg",
    },
    {
      title: "Mi viejo mate galleta",
      text: '"En tu pancita verdosa cuántos paisajes miré, cuántos versos hilvané, mientras gozaba tu amargo cuántas veces te hice largo Y vos sabías por qué." José Larralde',
      image:
        "https://res.cloudinary.com/dwgelqhvb/image/upload/v1659925083/Plantacion2_cb0c892c53.jpg",
    },
    {
      title: "El mate",
      text: '"Es el mate el compañero que nos presta gran servicio, aunque diga que es un vicio más de un dotor extranjero." Evaristo Barrios',
      image:
        "https://res.cloudinary.com/dwgelqhvb/image/upload/v1659925083/Plantines_cuidadosamente_seleccionados_94c18a21ee.jpg",
    },
  ]

  return (
    <Box
      position={"relative"}
      height={"400px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="500px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                  {card.title}
                </Heading>
                <Text
                  fontSize={{ base: "md", lg: "lg" }}
                  color="black"
                  fontWeight="600"
                  fontStyle="italic"
                >
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export { Carousel }
