import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Background,
  DetailText,
  Poster,
  DietTypes,
  Scores,
  Diet,
  Step,
  DetailWrapper,


}
from './ElementDetail'
import { getDetail } from '../../actions/index'
import Logo from '../../images/Score.png'
import Health from '../../images/Health.png'
import { Main, Formulario, ContenedorBotonCentrado, Label,} from '../CreateNewRecipe/NewRecipeStyle';
import {Link} from 'react-router-dom'
import './Button.css'

export default function DetailRecipe(props){
  const dispatch = useDispatch();
  const recipeInfo = useSelector((state) => state.detail);
  // const replace = (summary) => {
  //   return summary ? summary.toString().replace(/(<([^>]+)>)/gi, "") : summary;
  // };
  // const Join = (diets) => {
  //   return diets ? diets.join(", ") : diets;
  // };
  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  
  


  return(
          <div>
           
         { recipeInfo.length> 0 ? 

        
          <Background>
          
            <DetailWrapper>
              <Main>
              <Formulario>
             <Link to='/home' style={{ textDecoration: 'none' }}><button className="small red button">Home</button></Link> 
             <Link to='/newrecipe' style={{ textDecoration: 'none' }}><button className='small blue button'>Create Recipe</button> </Link>  
              </Formulario>
        </Main>
              <h2>{recipeInfo[0].title}</h2>
              <DetailText>
                <Poster>
                  <img src={recipeInfo[0].image} alt="not found" />
                </Poster>
                <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <p style={{textAlign:'left', margin:0}}>Diets: </p>
                {Array.isArray(recipeInfo[0].diets) ?
                  recipeInfo[0].diets.map((el,i)=>{

                    return <DietTypes key={i}>
                      <Diet key={i}> {el.name}</Diet>
                        </DietTypes>
                  }): recipeInfo[0].diets.split(",").map((el,i)=>{

                    return <DietTypes key={i}>
                      <Diet key={i}> {el}</Diet>
                        </DietTypes>
                  })
                }
                <Scores>
                  {recipeInfo[0].spoonacularScore? <div>
                    <img src={Logo} alt ="not found" />
                    General score: {recipeInfo[0].spoonacularScore}
                  </div> :null
                  }
                  {recipeInfo[0].healthScore? <div>
                    <img src={Health} alt ="not found" />
                    Health score: {recipeInfo[0].healthScore}
                  </div> :null
                  }
                </Scores>
                
                 </div>
                 </DetailText>
                  <Main>
                    <Formulario>
                    <ContenedorBotonCentrado>
                      <Label>SUMARY</Label>
                      <Step><p>{recipeInfo[0].summary.replace( /(<([^>]+)>)/ig, '')}</p></Step>
                    </ContenedorBotonCentrado>
                    <ContenedorBotonCentrado>
                      <Label>STEPS</Label>
                      
                    </ContenedorBotonCentrado>
                        {Array.isArray(recipeInfo[0].steps) ?
                          recipeInfo[0].steps.map((step,i)=>{

                            return(<Step className='step' key={step+i}>
                              <span>Step {i+1}</span>
                              <hr/>
                              <p>{step}</p>
                            </Step>)
                          }): <Step><p>{recipeInfo[0].steps}</p></Step>
                        }
                       
                        
                      </Formulario>
                </Main>  
               
            </DetailWrapper>
            
         </Background>  :
         <div className='loading'>
         
         </div>}    
          </div>
  )
    
}


