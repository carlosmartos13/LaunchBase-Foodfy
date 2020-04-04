const recipes = require("../../../data")
module.exports = {
    index(req, res){
        let recipesFiltered = []

for (let i = 0; i< 6; i++){
    recipesFiltered.push(recipes[i])
}
    return res.render("index", {items: recipesFiltered})



},
    sobre(req,res){
        return res.render("about")
    }
    
}
