import styled from "styled-components";

export const Flex = styled.div`
display: flex;
align-item:center;



&> div,
& > ul {
    flex:1;
}

`

// any direct div or ul will set the flex to 1