import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/employees", (req, res) => {
  res.json([
    { name: "Ravi Kumar", role: "Manager" },
    { name: "Dinesh Yadav", role: "HR" },
    { name: "Aman Singh", role: "Developer" },
    { name: "Priya Sharma", role: "Designer" },
    { name: "Rahul Verma", role: "Accountant" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
