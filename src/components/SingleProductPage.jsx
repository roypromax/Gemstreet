import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Spinner,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
//   import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
//   import { MdLocalShipping } from 'react-icons/md';
  
  export default function SingleProductPage() {

    const [data,setData] = useState({});
    const [loading,setloading] = useState(false);
    const params = useParams();

    useEffect(()=>{
        setloading(true);
        axios({
            method : "get",
            url : `http://localhost:3000/products/${params.id}`
        })
            .then((res)=>setData(res.data))
                .catch((error)=>console.log(error))
                    .finally(setloading(false))
    },[]);

    if(loading){
        return <Spinner/>
    }else{
    return (
    <>
      <Container maxW={'7xl'} bg="#F3E5F5">
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={data.image}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <VStack as={'header'}>
              <Heading
                color='#4F3267'
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {data.name}
              </Heading>
              <Text
                as = "b"
                color='#4F3267'
                fontWeight={300}
                fontSize={'3xl'}>
                ₹{data.discountedPrice}
              </Text>
              <Text
                as = "s"
                // color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'xl'}>
                ₹{data.price}
              </Text>
            </VStack>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                borderColor='#4F3267'
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color='#4F3267'
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text>
                <Text fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg="#E1BEE7"
              color='#4F3267'
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              {/* <MdLocalShipping /> */}
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Footer/>
      </>
    );
    }
  }