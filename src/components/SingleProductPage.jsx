import {
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
    Spinner,
    Select
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import Footer from './Footer';

function getCartItems(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart;
}

  
  export default function SingleProductPage() {

    const [data,setData] = useState({});
    const [loading,setloading] = useState(false);
    const params = useParams();
    const cart = getCartItems();

    console.log(cart);
    console.log(params);

    function addtoCart(){
      if(data.size===undefined){
        alert("Please select a size")
      }else{
      let duplicate = false;
      for(let i=0; i<=cart.length-1; i++){
        if(cart[i].id==data.id && cart[i].size==data.size){
          duplicate = true;
          break;
        }
      }

      if(duplicate){
        alert("Product is already in cart")
      }else{
        cart.push({...data,quantity:1});
        localStorage.setItem("cart",JSON.stringify(cart));
        alert("Product is added to cart");
      }
    }
    }

    useEffect(()=>{
        setloading(true);
        axios({
            method : "get",
            url : `https://gem-street-mock-server.onrender.com/products/${params.id}`
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
      <Link to="/products">Go back to products page</Link> 
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 5, md: 5 }}
          >
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
                fontWeight={300}
                fontSize={'xl'}>
                ₹{data.price}
              </Text>
              <Select bg="#E1BEE7" w='400px' h='40px' value={data.size} placeholder="Select size" onChange={(e)=>setData({...data,size:e.target.value})}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </Select>
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
              onClick={addtoCart}
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