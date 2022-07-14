import styled from "styled-components";

export const Flex = styled.div`
display: flex;
align-item:center;



&> div,
& > ul {
    flex:1;
}

@media(max-width: ${({theme}) => theme.mobile}){
    flex-direction: column;
    text-align:center;
} 

`

// any direct div or ul will set the flex to 1