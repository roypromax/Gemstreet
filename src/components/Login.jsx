import {Stack,Input,Button} from "@chakra-ui/react";





export default function Login(){
    return(
        <div>
            <Stack spacing={3}>
                <Input variant='outline' placeholder='Enter Name' />
                <Input variant='outline' placeholder='Enter Email' type='email'/>
                <Input variant='outline' placeholder='Enter Password' type='password' />
                <Button >Button</Button>
            </Stack>
        </div>

    )
}