export default function handler(req, res) {
  res.status(200).json([
    { name: "Ravi Kumar", role: "Manager" },
    { name: "Dinesh Yadav", role: "HR" },
    { name: "Aman Singh", role: "Developer" },
    { name: "Priya Sharma", role: "Designer" },
    { name: "Rahul Verma", role: "Accountant" }
  ]);
}
