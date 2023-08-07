const schema = "./models/";

// Endpoint to create a new user
app.post("/api/users", (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  user
    .save()
    .then(() => res.json({ message: "User created successfully" }))
    .catch((error) => res.status(400).json({ message: error.message }));
});
