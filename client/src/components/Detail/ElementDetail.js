import styled from 'styled-components';

export const Background = styled.div`
    display: flex;
   
    justify-content: center;
    ::before{
        content:'';
        background-image: url();
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        filter: brightness(50%);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: fixed;
    } 
`
export const Background2 = styled.div`
    display: flex;
    background-image: url("../../images/Detail.gif");
    justify-content: center;
  
`

export const DetailWrapper = styled.div`
    position: relative;
    width: 80%;
    margin:10px;
    display: flex;
    flex-direction: column;
    background-color: #33333390;
    color:white;
    border-radius: 15px;
    transition: .3s;
    padding: 10px;
    box-sizing: content-box;
    :hover{
        background-color: #2f344690;
    }
`

export const Poster = styled.div`
    width:50%;
    img, video{
        border-radius: 10px;
        width: 100%;
        height:100%;
        object-fit: cover;
    }
    padding:5px;
`

export const DetailText = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 35vh;
    min-height: 250px;
    @media (max-width:750px){
        flex-direction: column;
        position: relative;
        justify-content: flex-start;
        align-items:center;
        height: fit-content;
        ${Poster}{
          width: 100%;
          height: 30vh;
          min-height: 200px;
      }
    }
`




export const Step = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    align-items: flex-start;
    background-color: #808080b1;
    text-align:left;
    margin-top:5px;
    margin-bottom:5px;
    transition: .3s;
    :hover{
        background-color: #3c7c3cd2;
    }
    >span{
        padding-left:4px;
    }
    >p{
        padding-left:10px;
        margin-top:0;
    }
    >hr{
        width: 95%;
        border-left:none;
        border-right:none;
    }
`

export const DietTypes = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Diet = styled.div`
    margin:3px;
    padding:3px;
    padding-top:0;
    background-color: grey;
    border-radius: 7px;
    transition: .3s;
    :hover{
        transform:scale(110%);
    }
`

export const Scores = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    div{
        width: fit-content;
        max-width: 40%;
        display: flex;
        background-color: #3232ff;
        margin:5px;
        align-items: center;
        border-radius: 35px;
        padding-right: 10px;
        text-align:middle;
        position:relative;
        max-width: 215px;
        ::before{
            content: "";
            position: absolute;
            width: 100%;
            height:100%;
            border-radius: 35px;
            -webkit-box-shadow: 13px 11px 2px 0px rgb(0 0 0 / 30%), 1px 1px 1px 0.1px rgb(0 0 0 / 10%);
            -moz-box-shadow: 13px 11px 2px 0px rgb(0 0 0 / 30%), 1px 1px 1px 0.1px rgb(0 0 0 / 10%);
            box-shadow: 13px 11px 2px 0px rgb(0 0 0 / 30%), 1px 1px 1px 0.1px rgb(0 0 0 / 10%);
        }
    }
    img{
        margin-right:10px;
        width: 50px;
    }
    @media (max-width:750px) {
        div{
            max-width: 215px;
        }
}
`

