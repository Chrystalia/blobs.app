import {
  Box,
  Container,
  Flex,
  Slider as ChakSlider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
} from "@chakra-ui/react"
import React from "react"
import Hint from "./Hint"

const Slider = ({ name, value, min, max, onChange, info }) => {
  return (
    <Box my="8">
      <Container centerContent maxW="sm">
        <Flex justify="space-between" w="100%" mb="2">
          <Text fontSize="sm" variant="subtle">
            {name}
          </Text>
          <Hint text={info} />
        </Flex>
        <ChakSlider
          value={value}
          min={min}
          max={max}
          onChange={onChange}
          focusThumbOnChange={false}
        >
          <SliderTrack bg="gray.200" _dark={{ bg: "gray.900" }}>
            <Box position="relative" right={10} />
            <SliderFilledTrack bg="gray.400" _dark={{ bg: "gray.400" }} />
          </SliderTrack>
          <Tooltip label={value} aria-label={value} hasArrow rounded="md">
            <SliderThumb
              boxSize={5}
              borderWidth="3px"
              borderColor="gray.400"
              _focus={{ bg: "gray.400" }}
              _dark={{ bg: "blue.800" }}
            ></SliderThumb>
          </Tooltip>
        </ChakSlider>
      </Container>
    </Box>
  )
}

export default Slider
