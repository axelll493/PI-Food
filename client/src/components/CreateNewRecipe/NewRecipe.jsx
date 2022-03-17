import React, { useState, useEffect } from 'react'
import {
  Formulario,
  GrupoInput,
  ValidationHealth,
  Main,
  InputHealth,
  LabelHealth,
  InputSpoonacularScore,
  LabelSpoonacularScore,
  ValidationSpoonacularScore,
  InputTitle,
  LabelTitle,
  ValidationTitle,
  ContenedorBotonCentrado,
  Boton,
  TextAreaSummaryy,
  LabelSummaryy,
  ValidationSummaryy,
  TextAreaSteps,
	LabelSteps,
	ValidationSteps,
  InputImage,
  ValidationImage,
  LabelImage,
  Label,

} from './NewRecipeStyle'
import { useDispatch, useSelector } from 'react-redux'
import { getTypes, postRecipes } from '../../actions'
import './NewRecipe.css'



export default function NewRecipe() {
  const dispatch = useDispatch()
  const allDiets = useSelector((state) => state.diets);


  //EXPRECIONES REGULARES
  const expresiones = {
    numeros: /^[0-9]{1,5}$/,
    Name: /[a-zA-Z]{1,50}$/,
    Summaryy:/[a-zA-Z ]{1,200}$/,
    Stepss:/[a-zA-Z ]{1,200}$/,
    Imagenes: /(jpg|png|gif)$/i
  }
  const [input, setInput] = useState({
    title: "",
    summary: "",
    spoonacularScore: "",
    healthScore: "",
    steps: [],
    image: "",
    diets: [],
  });
  const { title, summary, spoonacularScore, healthScore, steps, image, diets } = input
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input)
  }
  
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  ////////////DIet

  function handleAddDiet(e) {
    setInput(input => ({
      ...input,
      diets: [...diets, e.target.value]
    }))

  }

  function handleRemoveDiet(e, diet) {
    e.preventDefault()
    setInput({
      ...input,
      diets: diets.filter(r => r !== diet)
    })
  }
  // function handleDeleteDiets(el) {
  //   el.preventDefault()
  //   setInput({
  //     ...input,
  //     diets: diets.filter(diet => diet !== el)
  //   })
  // }

  // function handleSelect(e) {
  //   e.preventDefault()
  //   if (!diets.includes(e.target.value)) {
  //     setInput({
  //       ...input,
  //       diets: [...diets, e.target.value]

  //     });
  //     console.log(input);
  //   }
  // }

  //validar HealthScore
  const [HealthScore, ChangeHealthScore] = useState({
    validationHealthScore: null,
    HealthScoreError: "",
  })

  var { validationHealthScore, HealthScoreError } = HealthScore;

  const validationInputScoreHealth = () => {
    if (expresiones.numeros.test(healthScore)) {
      ChangeHealthScore({
        ...HealthScore,
        validationHealthScore: "true"
      })
    } else {
      return ChangeHealthScore({
        ...HealthScore,
        validationHealthScore: "false",
        HealthScoreError: "You can not add letters or signs, or spaces"
      })
    }
    if (healthScore > 100 || healthScore === "0") {
      ChangeHealthScore({
        ...HealthScore,
        validationHealthScore: "false",
        HealthScoreError: "The number cannot be greater than 100"
      })
    } else {
      ChangeHealthScore({
        ...HealthScore,
        validationHealthScore: "true"

      })
    }
  }

  //validar spoonacularScore
  const [SpoonacularScore, ChangespoonacularScore] = useState({
    validationspoonacularScore: null,
    spoonacularScoreError: "",
  })

  var { validationspoonacularScore, spoonacularScoreError } = SpoonacularScore;

  const validationInputSpoonacularScore = () => {
    if (expresiones.numeros.test(spoonacularScore)) {
      ChangespoonacularScore({
        ...SpoonacularScore,
        validationspoonacularScore: "true"
      })
    } else {
      return ChangespoonacularScore({
        ...SpoonacularScore,
        validationspoonacularScore: "false",
        spoonacularScoreError: "You can not add letters or signs, or spaces"
      })
    }
    if (spoonacularScore > 100 || spoonacularScore === "0") {
      ChangespoonacularScore({
        ...SpoonacularScore,
        validationspoonacularScore: "false",
        spoonacularScoreError: "The number cannot be greater than 100 or 0"

      })
    } else {
      return ChangespoonacularScore({
        ...SpoonacularScore,
        validationspoonacularScore: "true"
      })
    }
  }


  //validation title
  const [Title, ChangeTitle] = useState({
    validationTitle: null,
    TitleError: "",
  })

  var { validationTitle, TitleError } = Title;
  const validationInputTitle = () => {
    if (expresiones.Name.test(title)) {
      ChangeTitle({
        ...Title,
        validationTitle: "true"
      })
    } else {
      return ChangeTitle({
        ...Title,
        validationTitle: "false",
        TitleError: "You can not add numbers, or signs in the name, or empty spaces"
      })
    }
    if (title.length>=4) {
      ChangeTitle({
        ...Title,
        validationTitle: "true"
      })
    } else {
       return ChangeTitle({
        ...Title,
        validationTitle: "false",
        TitleError: "must contain more than 4 letters"
      })
    }
  }

  ////////////////////////////////////////////

  //SUMARY
 
  const [Summaryy, ChangeSummaryy] = useState({
    validationSummaryy: null,
    SummaryyError: "",
  })

  var { validationSummaryy, SummaryyError } = Summaryy;

  const validationInputSummaryy = () => {
    if (expresiones.Summaryy.test(summary)) {
      ChangeSummaryy({
        ...Summaryy,
        validationSummaryy: "true"
      })
    } else {
      return ChangeSummaryy({
        ...Summaryy,
        validationSummaryy: "false",
        SummaryyError: "You can not add signs in the name"
      })
    }
    if (summary.length>=10) {
      ChangeSummaryy({
        ...Summaryy,
        validationSummaryy: "true"


      })
    } else {
       return ChangeSummaryy({
        ...Summaryy,
        validationSummaryy: "false",
        SummaryyError: "must contain more than 10 letters"
      })
    }
  }
    ////////////////////////////////////////////

  //STEPS
 
  const [Steps, ChangeSteps] = useState({
    validationSteps: null,
    StepsError: "",
  })

  var { validationSteps, StepsError } = Steps;

  const validationInputSteps = () => {
    if (expresiones.Stepss.test(steps)) {
      ChangeSteps({
        ...Steps,
        validationSteps: "true"
      })
    } else {
      return ChangeSteps({
        ...Steps,
        validationSteps: "false",
        StepsError: "You can not add signs in the name"
      })
    }
    if (steps.length>=10) {
      ChangeSteps({
        
        ...Steps,
        validationSteps: "true"

      })
    } else {
       return ChangeSteps({
         ...Steps,
        validationSteps: "false",
        StepsError: "Must contain more than 10 letters"
        
      })
    }
  }

  ///////////////////////////////////////////

  /////// VALIDATION IMAGE
  const [Image, ChangeImage] = useState({
    validationImage: null,
    ImageError: "",
   
  })

  var { validationImage, ImageError } = Image;
  const validationInputImage = () => {
 
    if(image.length > 1){
      if (expresiones.Imagenes.test(image)) {
       ChangeImage({

        ...Image,
        
        validationImage: "true"
        
      })

    } else {
      return ChangeImage({
   
        ...Image,
   
        validationImage: "false",
        ImageError: "This is not an image, please add an image url"
        
      })
    }
    }

  }
  

  ////////////////////////////////////////

  /// SUBMIT
  function handleSubmit(e) {
    e.preventDefault();
    if (validationSteps==="true" && validationTitle==="true"&& validationSummaryy==="true" && validationspoonacularScore==="true" && validationHealthScore==="true") {

        dispatch(postRecipes(input));
        setInput({
          title: "",
          summary: "",
          spoonacularScore: "",
          healthScore: "",
          steps: [],
          image: "",
          diets: [],
        });
       
    }else {
        alert('Receta no fue creada')
    }
}



  return (

    <Main>
      
      <Formulario onSubmit={e => handleSubmit(e)}>
   
        <div>
          <LabelTitle validationTitle={validationTitle}>Title</LabelTitle>
          <GrupoInput>
            <InputTitle
              type='text'
              value={title}
              name='title'
              onChange={handleChange}
              validationTitle={validationTitle}
              onKeyUp={validationInputTitle}
              onBlur={validationInputTitle}
            />
          </GrupoInput>
          <ValidationTitle validationTitle={validationTitle}><strong>{TitleError}</strong></ValidationTitle>
        </div>
        <div>
          <LabelSummaryy validationSummaryy={validationSummaryy}>Summary</LabelSummaryy>
          <GrupoInput>
            <TextAreaSummaryy
              type='text'
              value={summary}
              name='summary'
              onChange={handleChange}
              validationSummaryy={validationSummaryy}
              onKeyUp={validationInputSummaryy}
              onBlur={validationInputSummaryy}
            />
          </GrupoInput>
          <ValidationSummaryy validationSummaryy={validationSummaryy}><strong>{SummaryyError}</strong></ValidationSummaryy>

        </div>
        <div>
          <LabelSpoonacularScore validationspoonacularScore={validationspoonacularScore}>Ranking</LabelSpoonacularScore>
          <GrupoInput>
            <InputSpoonacularScore
              type="text"
              value={spoonacularScore}
              name='spoonacularScore'
              onChange={handleChange}
              onKeyUp={validationInputSpoonacularScore}
              onBlur={validationInputSpoonacularScore}
              validationspoonacularScore={validationspoonacularScore}
            />
          </GrupoInput>
          <ValidationSpoonacularScore validationspoonacularScore={validationspoonacularScore}>{spoonacularScoreError}</ValidationSpoonacularScore>
        </div>
        <div>
          <LabelHealth validationHealthScore={validationHealthScore}>Health score</LabelHealth>
          <GrupoInput>
            <InputHealth
              type="text"
              value={healthScore}
              name='healthScore'
              onChange={handleChange}
              onKeyUp={validationInputScoreHealth}
              onBlur={validationInputScoreHealth}
              validationHealthScore={validationHealthScore}
            />
          </GrupoInput>
          <ValidationHealth validationHealthScore={validationHealthScore}><strong>{HealthScoreError}</strong></ValidationHealth>
        </div>
        <div>
          <LabelSteps validationSteps={validationSteps}>Recipe and steps to follow</LabelSteps>
          <GrupoInput>
            <TextAreaSteps
              type='text'
              value={steps}
              name='steps'
              onChange={handleChange}
              validationSteps={validationSteps}
              onKeyUp={validationInputSteps}
              
              
            />
          </GrupoInput>
          <ValidationSteps validationSteps={validationSteps}><strong>{StepsError}</strong></ValidationSteps>
        </div>
        <div>
          <LabelImage validationImage={validationImage}>Image</LabelImage>
          <GrupoInput>
            <InputImage
              type='url'
              value={image}
              name='image'
              accept="image/*"
              id= "image"
              validationImage={validationImage}
              onChange={handleChange}

              onKeyUp={validationInputImage}
              onBlur={validationInputImage}
            />
          </GrupoInput>
            <ValidationImage validationImage={validationImage}><strong>{ImageError}</strong></ValidationImage>
   
        </div>
        <ContenedorBotonCentrado className='diets'>
          <Label>Diets:</Label>
          <select onChange={(e) => handleAddDiet(e)}>
            {allDiets.map((r) => (
              <option value={r.name} key={r.id}>{r.name}</option>
            ))
            }
          </select>
          {diets.map((r, i) => (
            <ul key={i}>
              <li>{r}</li>
              <button onClick={(e) => handleRemoveDiet(e, r)}>X</button>
            </ul>
          ))}

        </ContenedorBotonCentrado>

        <ContenedorBotonCentrado>
          <Boton type='submit'>Enviar</Boton>
        </ContenedorBotonCentrado>

      </Formulario>
    </Main>
  )
}

