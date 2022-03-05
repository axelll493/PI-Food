import styled, { css } from 'styled-components';


const colores = {
    borde: "#0075FF",
    error: "#bb2929",
    exito: "#1ed12d"
}

const Main = styled.main`
max-width: 800px;
width: 100%;
margin: auto;
padding: 40px;
`;
const Formulario = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
	@media (max-width: 800px){
		grid-template-columns: 1fr;
	}
`;

const Label = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;
	${props => props.valido === 'false' && css`
		color: ${colores.error};
	`}
`;


const GrupoInput = styled.div`
	position: relative;
	z-index: 90;
`;

const Input = styled.input`
	width: 50%;
	background: #fff;
	border-radius: 3px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;
	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}
	${props => props.valido === 'true' && css`
		border: 3px solid transparent;
	`}
	${props => props.valido === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
`;
//PUNTUCION DE SALUD VALIDACION

const LabelHealth = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;
	${props => props.validationHealthScore === 'false' && css`
		color: ${colores.error};
	`}
`;

const InputHealth = styled.input`
	width: 50%;
	background: #fff;
	border-radius: 3px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;
	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}
	${props => props.validationHealthScore === 'true' && css`
		border: 3px solid transparent;
	`}
	${props => props.validationHealthScore === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
`;

const ValidationHealth = styled.p`
	font-size: 15px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;
	${props => props.validationHealthScore === 'true' && css`
		display: none;
	`}
	${props => props.validationHealthScore === 'false' && css`
		display: block;
	`}
`;

/////////////////////////////////////////////////// 

//PUNTUCION DE RECETA VALIDACION

const InputSpoonacularScore = styled.input`
	width: 50%;
	background: #fff;
	border-radius: 3px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;
	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}
	${props => props.validationspoonacularScore === 'true' && css`
		border: 3px solid transparent;
	`}
	${props => props.validationspoonacularScore === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
`;

const LabelSpoonacularScore = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;
	${props => props.validationspoonacularScore === 'false' && css`
		color: ${colores.error};
	`}
`;

const ValidationSpoonacularScore = styled.p`
	font-size: 15px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;
	${props => props.validationspoonacularScore === 'true' && css`
		display: none;
	`}
	${props => props.validationspoonacularScore === 'false' && css`
		display: block;
	`}
`;
/////////////////////////////////////////////////////////////

//TITULO VALIDACIÓN

const InputTitle = styled.input`
	width: 50%;
	background: #fff;
	border-radius: 3px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;
	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}
	${props => props.validationTitle === 'true' && css`
		border: 3px solid transparent;
	`}
	${props => props.validationTitle === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
`;

const LabelTitle = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;
	${props => props.validationTitle === 'false' && css`
		color: ${colores.error};
	`}
`;

const ValidationTitle = styled.p`
	font-size: 15px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;
	${props => props.validationTitle === 'true' && css`
		display: none;
	`}
	${props => props.validationTitle === 'false' && css`
		display: block;
	`}
`;
///////////////////////////////////////

const TextAreaSummaryy = styled.textarea`
	width: 50%;
	background: #fff;
	border-radius: 3px;
	height: 45px;
    line-height: 13px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;
	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}
	${props => props.validationSummaryy === 'true' && css`
		border: 3px solid transparent;
	`}
	${props => props.validationSummaryy === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
`;

const LabelSummaryy = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;
	${props => props.validationSummaryy === 'false' && css`
		color: ${colores.error};
	`}
`;

const ValidationSummaryy = styled.p`
	font-size: 15px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;
	${props => props.validationSummaryy === 'true' && css`
		display: none;
	`}
	${props => props.validationSummaryy === 'false' && css`
		display: block;
	`}
`;

/////////////////////////////////////////////////////////////////

////////////////STEPS
const TextAreaSteps = styled.textarea`
	width: 50%;
	background: #fff;
	border-radius: 3px;
	height: 45px;
    line-height: 13px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;
	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}
	${props => props.validationSteps === 'true' && css`
		border: 3px solid transparent;
	`}
	${props => props.validationSteps === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
`;

const LabelSteps = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;
	${props => props.validationSteps === 'false' && css`
		color: ${colores.error};
	`}
`;

const ValidationSteps = styled.p`
	font-size: 15px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;
	${props => props.validationSteps === 'true' && css`
		display: none;
	`}
	${props => props.validationSteps === 'false' && css`
		display: block;
	`}
`;

//////////////////////////////////////////////////
const ContenedorBotonCentrado = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const Boton = styled.button`
	height: 45px;
	line-height: 45px;
	width: 30%;
	background: #000;
	color: #fff;
	font-weight: bold;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	transition: .1s ease all;
	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
	}
`;



export {
    Main,
    Formulario,
    Label,
    GrupoInput,
    Input,
    ValidationHealth,
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
};