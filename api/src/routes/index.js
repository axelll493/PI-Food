const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const {Recipe, Diet} = require("../db");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => {
    const apiUrl = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=5`
    );
    const apiInfo = await apiUrl.data.results.map(el => {
        return {
            title: el.title,
            id: el.id,
            image: el.image,
            summary: el.summary,
            spoonacularScore: el.spoonacularScore,
            healthScore: el.healthScore,
            diets: el.diets.join(", "),
            steps: el.analyzedInstructions[0]?.steps.map(pos=>{
                return pos.step
            })  
        }
    })

    return apiInfo;
    
};

const GetDbInfo = async () => {
    return await Recipe.findAll({
        include:{
            model: Diet,
            atributes: ["name"],
            through:{
                attributes: [],
            },
        }
    })
}

const getAllRecipes = async () => {
    let apiInfo = await getApiInfo();
    const dbInfo = await GetDbInfo();
    const infoTotal =apiInfo.concat(dbInfo);
    return infoTotal
}
router.get("/recipes", async (req, res) => {
    const { name } = req.query;

        const recipesTotal = await getAllRecipes()
        if (name) {
            let recipeTitle = await recipesTotal.filter((r) =>
                r.title.toLowerCase().includes(
                    name.toLowerCase())
            );
            recipeTitle.length
                ? res.status(200).json(recipeTitle)
                : res.status(400).send("This recipe doesn't exist");
        } else {
            res.status(200).json(recipesTotal);
        }
 
});


const DBDietTypes = [
    'Gluten Free',
    'Ketogenic', 
    'Vegetarian',
    'Lacto-Vegetarian', 
    'Ovo-Vegetarian',
    'Vegan',
    'Pescatarian', 
    'Paleo', 
    'Primal', 
    'Low FODMAP',
    'Whole30'
]

router.get("/types", async (req, res) => {

    DBDietTypes.forEach((diet) => {
        Diet.findOrCreate({
            where: { name: diet },
        });
    });
    const allDiets = await Diet.findAll();
    res.json(allDiets);
});


router.get('/ordenamiento/:ordenamiento', async (req, res) => {
    const { ordenamiento } = req.params
    const recipesTotal = await getApiInfo()
    try {
        const sortedName = ordenamiento === 'asc' ?
            //acede a mi estado dogs que se esta rendelizando
            recipesTotal.sort(function (a, b) {
                //el sort lo que va haciendo es poniendo a la derecha o a la izquierda
                //antes o primero
                //dependiendo si son mas grandes o smas chicos
                if (a.title > b.title) {
                    //este es mas grande que este devolvemelo si
                    return 1;
                }
                //si este es mas grande que este devolvemelo si
                if (b.title > a.title) {
                    return -1;
                }
                //si son iguales los deja igual
                return 0
            }) : // si no ordenamelo de la forma decendente
            recipesTotal.sort(function (a, b) {
                if (a.title > b.title) {
                    return -1;
                }
                if (b.title > a.title) {
                    return 1;
                }
                return 0;
            })
        res.status(200).json(sortedName)
    } catch (error) {
        console.log(error)
    }
})
router.get('/ordenamientoScore/:ordenamientoScore', async (req, res) => {
    const { ordenamientoScore } = req.params
    const recipesTotal = await getApiInfo()
    try {
        const sortedName = ordenamientoScore === 'acd' ?
            //acede a mi estado dogs que se esta rendelizando
            recipesTotal.sort(function (a, b) {
                //el sort lo que va haciendo es poniendo a la derecha o a la izquierda
                //antes o primero
                //dependiendo si son mas grandes o smas chicos
                if (a.spoonacularScore > b.spoonacularScore) {
                    //este es mas grande que este devolvemelo si
                    return 1;
                }
                //si este es mas grande que este devolvemelo si
                if (b.spoonacularScore > a.spoonacularScore) {
                    return -1;
                }
                //si son iguales los deja igual
                return 0
            }) : // si no ordenamelo de la forma decendente
            recipesTotal.sort(function (a, b) {
                if (a.spoonacularScore > b.spoonacularScore) {
                    return -1;
                }
                if (b.spoonacularScore > a.spoonacularScore) {
                    return 1;
                }
                return 0;
            })
        res.status(200).json(sortedName)
    } catch (error) {
        console.log(error)
    }
})
router.post("/recipe", async (req, res) => {
    try{
        let {
        title,
        summary,
        spoonacularScore,
        healthScore,
        steps,
        image,
        diets,
    } = req.body;
   
    let recipeCreated = await Recipe.create({
        title,
        summary,
        spoonacularScore,
        healthScore,
        steps,
        image,
    });
    let dietDb = await Diet.findAll({ where: { name: diets } });
    recipeCreated.addDiet(dietDb);
    res.send("Recipe created successfully");
    console.log(recipeCreated)
    }catch(error){
        console.log(error)
    }
    
});

//Nombre
//Resumen del plato
//Puntuación
//Nivel de "comida saludable"
//Paso a paso

router.get("/recipe/:id", async (req, res) => {
    try{
        const { id } = req.params;
    const recipesTotal = await getAllRecipes();
    if (id) {
        let recipeId = await recipesTotal.filter((r) => r.id == id);
        recipeId.length
            ? res.status(200).json(recipeId)
            : res.status(404).send("Recipe not found");
    }
    }catch(error){
        console.log(error)
    }
    
});

module.exports = router
