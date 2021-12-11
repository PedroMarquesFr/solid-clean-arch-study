import { response, Router } from "express";

const router = Router();

router.post("/users", (req, res) => {
  response.status(201).json({ ok: "created" });
});

export { router };
