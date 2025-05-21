// helper function to format a cocktail recipe
function formatCocktail(drink) {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ingredient = drink[`strIngredient${i}`];
        const measure = drink[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push(`${measure ? measure.trim() : ''} ${ingredient}`);
        }
    }
    return `
🍸 ${drink.strDrink} 🍸
-----------------
Category: ${drink.strCategory}
Glass: ${drink.strGlass}
Alcoholic: ${drink.strAlcoholic}

Ingredients:
${ingredients.map(i => `• ${i.trim()}`).join('\n')}

Instructions:
${drink.strInstructions}
`.trim();
}
export default formatCocktail;
