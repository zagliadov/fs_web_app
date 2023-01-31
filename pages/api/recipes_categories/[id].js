


export default async function handler (req, res) {
  const id = req.body.id;
  const data = await fetch(`http://localhost:3000/api/recipes_categories`);
  console.log(data)
  res.status(200).json(data)
}
