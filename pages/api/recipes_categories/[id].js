


export default async function handler (req, res) {
  const id = req.query.id;
  const data = await fetch(`http://localhost:3000/api/recipes_categories`);
  const items = await data.json();
  const recipe = await items.find(item => {
    return item.id === id;
  });
  res.status(200).json(recipe)
}
