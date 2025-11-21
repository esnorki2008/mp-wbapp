import { Request, Response } from "express";
import { ContenidoRepositoryImpl } from "../repositories/ContenidoRepositoryImpl";
import { GetContenidoUseCase } from "../../application/use-cases/GetContenidoUseCase";

const repo = new ContenidoRepositoryImpl();

export class ContenidoController {
  static async getAll(req: Request, res: Response) {
    try {
      const getUseCase = new GetContenidoUseCase(repo);
      const contenidos = await getUseCase.execute();
      res.json(contenidos);
    } catch (e) {
      res.status(500).json({ error: "Error obteniendo contenidos" });
    }
  }
}
