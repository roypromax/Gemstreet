import {Box,Button,Center,Img,SimpleGrid,Text,VStack,Select,Spinner,HStack} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import Footer from "./Footer";
import {Link} from "react-router-dom";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state,{type,payload}) => {

  switch(type){
    case "success":{
      let newState = {
        ...state,
        data : payload,
        isLoading : false
      }
      return newState;
    }
    case "request":{
      let newState = {
        ...state,
        isLoading: true
      }
      return newState;
    }
    case "failure":{
      let newState = {
        ...state,
        isLoading: false,
        error : payload
      }
      return newState;
    }
    default:{
      return state;
    }
  }

};

export default function Products() {

  const [state,dispatcher] = useReducer(reducer,initialState);
  const [sortOrder,setSortOrder] = useState("asc");
  const [category,setCategory] = useState(null);

  useEffect(()=>{
    dispatcher({type:"request"})
    axios({
      method : "get",
      url : `https://gem-street-mock-server.onrender.com/products`,
      params : {
        _sort : "discountedPrice",
        _order : sortOrder,
        category : category
      }
    })
      .then((res)=>{
        console.log(res);
        dispatcher({type:"success",payload:res.data})
      })
        .catch((error)=>{
          console.log(error);
          dispatcher({type:"failure",payload:error})
        })
  },[sortOrder,category])

  

  return (
    <Box bg="#EDE7F6">
      <Box  m={2} className="sortingButtons">
        <Button bg="#E1BEE7" disabled={sortOrder==="asc"} onClick={()=>setSortOrder("asc")} className="sortByCostAsc">
          Sort by Asc
        </Button>
        <Button bg="#E1BEE7" disabled={sortOrder==="desc"} onClick={()=>setSortOrder("desc")}  className="sortByCostDesc" m={2}>
          Sort by Desc
        </Button>
      </Box>
      <Center m={2}> 
        <Select bg="#E1BEE7" w='400px' h='40px' value = {category} onChange={(e)=>setCategory(e.target.value||null)}>
          <option value="">{category===null?"Filter By Category":"Remove filter"}</option>
          <option value="rings">Rings</option>
          <option value="earrings">Earrings</option>
          <option value="bracelets">Bracelets</option>
          <option value="necklace">Necklaces</option>
          <option value="pendants">Pendants</option>
        </Select>
      </Center>
      
      {state.isLoading?<Spinner />
      :<SimpleGrid m={5} p={5} bg="#E1BEE7" columns={[1,2,3,4]} spacingX={10} spacingY={10} className="main_container">
      {state.data.map((el,i)=>{
        return (
          <Link to={`/products/${el.id}`}>
          <Box borderWidth='1px' className="productDetails" key={el.id}>
            <Center height="70%" borderWidth='1px'>
              <Img height="100%" width="100%" src={el.image}/>
            </Center>
  
            <VStack height="30%" bg="#EDE7F6" spacing={2} p={2}>
              <Text className="name" color='#4F3267' as='b' fontSize='xl'>{el.name}</Text>
              <HStack>
              <Text as='b' color='#4F3267' fontSize='2xl' className="discountedPrice">₹{el.discountedPrice}</Text>
              <Text as='s' fontSize='sm' className="price">₹{el.price}</Text>
              </HStack>
            </VStack>
          </Box>
          </Link>
           )
          })}
        </SimpleGrid>
       }
       <Footer/>      
    </Box>
  );
}