
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContextProvider';



export default function Login(){

      const [loginData,setLoginData] = useState({email:"",password:""});

      const {login} = useContext(AuthContext);

      const navigate = useNavigate();

      console.log(loginData);

      function formSubmit(){
        
        axios({
          method: 'post',
          url: 'https://reqres.in/api/login',
          data: {...loginData}
        })  
          .then((res)=>{
            console.log(res);
            login();
            navigate("/cart")
          })
            .catch((error)=>{
              console.log(error);
              alert("Wrong Credentials. Please enter correct email and password.");
            })
              .finally(()=>setLoginData({email:"",password:""}));
      }
        // <div>
        //     <Stack spacing={3}>
        //         <Input variant='outline' placeholder='Enter Name' />
        //         <Input variant='outline' placeholder='Enter Email' type='email'/>
        //         <Input variant='outline' placeholder='Enter Password' type='password' />
        //         <Button >Button</Button>
        //     </Stack>
        // </div>
            return (
              <Flex 
                minH={'100vh'}
                // align={'center'}
                justify={'center'}
                bg="#F3E5F5">
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                  <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Login to your account</Heading>
                    <Text>New user? <Link style={{color:"#BA68C8"}} to="/signup">Click here</Link> to create a new account.</Text>
                  </Stack>
                  <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                      <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input value={loginData.email} onChange={(e)=>setLoginData({...loginData,email:e.target.value})} type="email" />
                      </FormControl>
                      <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input value={loginData.password} onChange={(e)=>setLoginData({...loginData,password:e.target.value})}type="password" />
                      </FormControl>
                      <Stack spacing={10}>
                        <Button
                          onClick={formSubmit}
                          bg='#CE93D8'
                          color={'white'}
                          _hover={{
                            bg: "#BA68C8",
                          }}>
                          Sign in
                        </Button>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Flex>
            );
          }
    