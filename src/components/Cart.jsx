import { useContext, useState } from "react";
import { Image,HStack,Heading,VStack,Container,SimpleGrid,Box,Center,Text,Button } from "@chakra-ui/react";
import { Grid,GridItem,Card, CardHeader, CardBody, CardFooter,Stack,Divider,ButtonGroup} from '@chakra-ui/react'
import { AuthContext } from "../contexts/AuthContextProvider";
import { useNavigate,Link } from "react-router-dom";

function getCartItems(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart;
  }

function gettotalItems(cart){
    let totalItems = 0;
    cart.forEach((el)=>{
        totalItems = totalItems + el.quantity;
    })
    return totalItems;
}

function gettotalPrice(cart){
    let totalPrice = 0;
    cart.forEach((el)=>{
        totalPrice += (el.quantity*el.discountedPrice);
    })
    return totalPrice;
}



export default function Cart(){

    const [cart,setCart] = useState(getCartItems());

    const {isAuth} = useContext(AuthContext);

    const navigate = useNavigate();

    function Increment(item){
        let newCart=cart.map((el,i)=>{
            if(el.id===item.id&&el.size===item.size){
                let newObj = {...el};
                newObj.quantity++;               
                return newObj
            }
            return el;
        })
        localStorage.setItem("cart",JSON.stringify(newCart));
        setCart(newCart);
    }


    function Decrement(item){
        let newCart=cart.map((el,i)=>{
            if(el.id===item.id&&el.size===item.size){
                let newObj = {...el};
                newObj.quantity--;               
                return newObj
            }
            return el;
        })
        localStorage.setItem("cart",JSON.stringify(newCart));
        setCart(newCart);
    }

    function Delete(item){
        let newCart = [...cart];
            newCart.forEach(function(el,i){
            if(el.id === item.id && el.size===item.size){
                
                newCart.splice(i,1);
                
            }
        });
        localStorage.setItem("cart",JSON.stringify(newCart));
        setCart(newCart);
    }

    function buyFn(){
        if(isAuth){
            alert("Thank you! for shopping with us. Check your email for order details");
            setCart([]);
            localStorage.setItem("cart",JSON.stringify([]));
            navigate("/");
        }else{
            alert("You are not logged in. Please login to place your order.");
            navigate("/login");
        }
    }

    if(cart.length===0){
        return <Center m={20}><Heading
        color='#4F3267'
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
        Cart is empty!
        </Heading>
        </Center>
    }else{
    
    return (
        <>
            <Grid m={5} p={5} bg="#F3E5F5" templateColumns='repeat(4, 1fr)' gap={4}>
            {/* <SimpleGrid
            columns={[1,1,1,3]}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 5, md: 5 }}
            > */}
            <GridItem colSpan={3}>
            <SimpleGrid m={5} p={5}  columns={[1,2,3]} spacingX={10} spacingY={10} className="main_container">
                {cart.map((el,i)=>{
                    return (
                        <Card maxW='sm' key={i}>
                        <CardBody>
                          <Image
                            src={el.image}
                            alt='product icture'
                            borderRadius='lg'
                          />
                          <Stack mt='6' spacing='3'>
                            <Text>
                              {`${el.name}`}
                            </Text>
                            <Text>
                            ₹{el.discountedPrice}
                            </Text>
                            <Text>
                            {`(${el.size.toUpperCase()} SIZE)`}
                            </Text>
                            <Text>
                            {`Quantity: ${el.quantity}`}
                            </Text>
                            <Center>
                            <ButtonGroup spacing='2'>
                                
                            <Button onClick={()=>Increment(el)}variant='solid' bg='#CE93D8'>
                              +
                            </Button>
                            <Button isDisabled={el.quantity===1} onClick={()=>Decrement(el)}variant='solid' bg='#CE93D8'>
                              -
                            </Button>
                            
                          </ButtonGroup>
                          </Center>
                          <Center>
                          <Button onClick={()=>Delete(el)} variant='solid' bg='#CE93D8'>Delete</Button>
                          </Center>
                          </Stack>
                          
                        </CardBody>
                        <Divider />
                        
                      </Card>
                    )
                    })}
            </SimpleGrid>
            </GridItem>
            <GridItem>
            <VStack m={5} p={5} as={'header'}>
                <Heading
                    color='#4F3267'
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                    Total Cart Items: {gettotalItems(cart)}
                </Heading>
                <Heading
                    color='#4F3267'
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                    Total Price: {gettotalPrice(cart)}
                </Heading>
                <Button
                    onClick={()=>buyFn()}
                    rounded={'none'}
                    w={'full'}
                    mt={8}
                    size={'lg'}
                    py={'7'}
                    bg="#CE93D8"
                    color='#4F3267'
                    textTransform={'uppercase'}
                    _hover={{
                    transform: 'translateY(2px)',
                    boxShadow: 'lg'}}>
                    Buy Now
                </Button>

            </VStack>
            </GridItem>

            {/* </SimpleGrid> */}
            </Grid>
        </>
    )
}
}