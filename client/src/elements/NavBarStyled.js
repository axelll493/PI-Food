import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #23394d; ;
`;

export const Title = styled.p`
margin-right: 20px;

`;


export const Img = styled.img`
width: 50px;
height: 50px;
margin: 10px;
margin-left: 10px;
@media screen and (max-width: 1221px) {
    margin-left: 100px;
    }
  }
`;


export const Img2 = styled.img`
width: 50px;
height: 50px;
margin: 10px;
background-color: #23394d;
curso: pointer;
align-items: center;
display: flex;

      margin-right: 0.5rem;
      margin-left: 100px;
`;

export const Image = styled.img`
display:none;
@media screen and (max-width: 960px) {
    width: 50px;
height: 50px;
margin: 10px;
background-color: #23394d;
curso: pointer;
align-items: center;
display: flex;
&:hover {
    color: #fff;
    background-color: #e0792a;
    transition: 0.5s all ease;
  }

  }
`;


export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;
  p {
    &:nth-child(2) {
      color: #fff;
    }
    &:nth-child(3) {
      font-size: 1.5rem;
      font-weight: 500;
      color: #e07924;
    }
  }
  svg {
    fill: #e07924;
    margin-right: 0.5rem;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media screen and (max-width: 1221px) {
    background-color: #23394d;
    position: absolute;
    top: 70px;
    // SI OPEN ES VERDADERO SI QUIERO QUE SE MUESTRE EL MENU
    //EN OTRO CASO QUIERO QUE TENGA EL -100% PARA QUE SE OCULTE
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItems = styled.li`
  height: 100%;
  @media screen and (max-width: 1221px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: ce;
    align-items: center;
  }
`;


export const MenuItemLinks = styled.a`
  
  display:none;
  img { display:none;
  }
@media screen and (max-width: 1221px) {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
  color: #64b2ff;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    color: #fff;
    background-color: #e0792a;
    transition: 0.5s all ease;
  }
    img{
        width: 50px;
height: 50px;
margin: 10px;

curso: pointer;
align-items: center;
display: flex;
    }
    div {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
}
  }
  @media screen and (max-width: 1221px) {
    width: 100%;
    div {
      width: 30%;
      justify-content: left;
    }
  }
  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;

    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;

    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
   
    }
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  @media screen and (max-width: 1221px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: ce;
    align-items: center;
  }
`;
export const MenuItemLinke = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
  color: #64b2ff;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;
 
  
}
  &:hover {
    color: #fff;
    background-color: #e0792a;
    transition: 0.5s all ease;
  }
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img { display:none;
  }
@media screen and (max-width: 1221px) {
  display:none
`;
export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
  color: #64b2ff;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;
  
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img { display:none;
  }
@media screen and (max-width: 1221px) {
    img{
        width: 50px;
height: 50px;
margin: 10px;

curso: pointer;
align-items: center;
display: flex;
    }
    
}
  }
  @media screen and (max-width: 1221px) {
    width: 100%;
    div {
      width: 30%;
      justify-content: left;
    }
  }
  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;

    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;

    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
   
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 1221px) {
    display: flex;
    align-items: center;
    cursor: pointer;
 
  }
`;