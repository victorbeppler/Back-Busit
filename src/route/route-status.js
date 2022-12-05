import express from "express";

const router = express.Router();

router.get(`/status`, (req, res) => {
  res.send("Server is running on port 3005");
});

export default router;
