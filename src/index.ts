import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({
    message:
      "Hay, I am running on AWS ECS Fargate with Docker image from AWS ECR Updated!!!",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is healthy" });
});

export default app;
