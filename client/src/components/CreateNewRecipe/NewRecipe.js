import React, { useState, useEffect } from 'react'
import {
  Formulario,
  GrupoInput,
  Input,
  Label,
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
	ValidationSteps
} from './NewRecipeStyle'
import { useDispatch, useSelector } from 'react-redux'
import { getTypes } from '../../actions'
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
        HealthScoreError: "No puedes agregar letras ni signos, o espacios"
      })
    }
    if (healthScore > 100 || healthScore === "0") {
      ChangeHealthScore({
        ...HealthScore,
        validationHealthScore: "false",
        HealthScoreError: "El numero no puede ser mayor a 100"
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
        spoonacularScoreError: "No puedes agregar letras ni signos, o espacios"
      })
    }
    if (spoonacularScore > 100 || spoonacularScore === "0") {
      ChangespoonacularScore({
        ...SpoonacularScore,
        validationspoonacularScore: "false",
        spoonacularScoreError: "El numero no puede ser mayor a 100 o 0"

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
        TitleError: "No Puedes Agregar Numeros, ni signos en el nombre"
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
        TitleError: "tiene que contener mas de 4 letras"
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
        SummaryyError: "No Puedes Agregar Numeros, ni signos en el nombre"
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
        SummaryyError: "tiene que contener mas de 10 letras"
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
        StepsError: "No Puedes Agregar Numeros, ni signos en el nombre"
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
        StepsError: "tiene que contener mas de 10 letras"
        
      })
    }
  }



  return (
    <Main>
      <Formulario>
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
          <Label>Image</Label>
          <GrupoInput>
            <Input
              type='text'
              value={image}
              name='image'
              onChange={handleChange}
            />
          </GrupoInput>
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
              onBlur={validationInputSteps}
              
            />
          </GrupoInput>
          <ValidationSteps validationSteps={validationSteps}><strong>{StepsError}</strong></ValidationSteps>
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
          <Boton>Enviar</Boton>
        </ContenedorBotonCentrado>

      </Formulario>
    </Main>
  )
}

