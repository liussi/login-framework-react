const { default: styled } = require("styled-components");

export const Networks = styled.button`
position: relative;
width: 192px;
height: 48px;
border-radius: 6px;
background-color:var(--color-white);
border: 1px solid var(--border); 
color:var(--color-text);
font-size: 14px;
line-height:1.4px ;
font-weight: 500;
padding: 0px 20px;
margin-right: 16px;
`;

export const StyledGoodle = styled.div`
    position: absolute;
    top: 62%;
    left: 75%;
    transform: translate(50%, -50%);
`;

export const StyledGit = styled.div`
       position: absolute;
    top: 62%;
    left: 101%;
    transform: translate(50%, -50%);

`;

export const StyleForm = styled.form`
    margin-top: 76px;

`;