const recipes = require("../../../data")
module.exports = {
   
    
    index(req, res){
        return res.render("./recipes/recipes", {items: recipes})
    },
    show(req, res){
        const { id: recipeIndex } = req.params
            const recipe = recipes[recipeIndex]
        
            if (!recipe) return res.send("recipe Not found!")
        
            // console.log(recipe)
            return res.render("./recipes/recipe", {item: recipe})
    },
    create(req, res){

        return res.render("./admin/recipes/create")

    }





}


    
   
    
    
    // server.get("/recipes/:index", function(req, res){
    
    //     const { index: recipeIndex } = req.params
    //     const recipe = recipes[recipeIndex]
    
    //     if (!recipe) return res.send("recipe Not found!")
    
    //     // console.log(recipe)
    //     return res.render("recipe", {item: recipe})
    // })
    