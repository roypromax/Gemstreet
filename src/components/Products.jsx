import {Box,Button,Center,Img,SimpleGrid,Text,VStack,Select,Spinner} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";

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
      url : `http://localhost:3000/products`,
      params : {
        _sort : "discounted-price",
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
    <div>
      <div className="sortingButtons">
        <Button disabled={sortOrder==="asc"} onClick={()=>setSortOrder("asc")} className="sortByCostAsc">
          Sort by Asc
        </Button>
        <Button disabled={sortOrder==="desc"} onClick={()=>setSortOrder("desc")}  className="sortByCostDesc" m={2}>
          Sort by Desc
        </Button>
      </div>
      <Center>
        <Select value = {category} onChange={(e)=>setCategory(e.target.value)} placeholder="select option">
          <option value="rings">Rings</option>
          <option value="earrings">Earrings</option>
          <option value="bracelets">Bracelets</option>
          <option value="necklace">Necklaces</option>
          <option value="pendants">Pendants</option>
        </Select>
      </Center>
      
      {state.isLoading?<Spinner />
      :<SimpleGrid columns={4} spacing={10} className="main_container">
      {state.data.map((el,i)=>{
        return (
          <Box className="productDetails" key={el.id}>
            <Center>
              <Img src={el.image}/>
            </Center>
  
            <VStack spacing={2} p={2}>
              <Text className="name" fontSize={"20px"} fontWeight="bold">{el.name}</Text>
              <Text className="discounted-price">{`${el.price}`}</Text>
              <Text className="price">{el.price}</Text>
              <Text className="category">{el.category}</Text>
              <Button className="addToCart">Add to Cart</Button>
            </VStack>
          </Box>
           )
          })}
        </SimpleGrid>
       }      
    </div>
  );
}