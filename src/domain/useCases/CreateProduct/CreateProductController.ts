import { Request, Response } from "express";
import { CreateProductRequestDTO } from "./CreateProductDTO";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}
  async handle(req: Request, res: Response): Promise<Response>  {

    const { name, category, price }:CreateProductRequestDTO = req.body;

    try {
      await this.createProductUseCase.execute({ name, category, price });
      return res.status(201).json({ ok: "Product created" });
    } catch (error) {
      res.status(400).json({ erro: error.message || "Unexpected error" });
    }
  }
}
