import { Contenido } from "../../domain/entities/Contenido";
import { ContenidoRepository } from "../../domain/repositories/ContenidoRepository";
import { ContenidoModel } from "../orm/models/ContenidoModel";

export class ContenidoRepositoryImpl implements ContenidoRepository {
  async create(data: any): Promise<Contenido> {
    const creado = await ContenidoModel.create(data);
    return creado.toJSON() as Contenido;
  }

  async findAll(): Promise<Contenido[]> {
    const rows = await ContenidoModel.findAll();
    return rows.map(r => r.toJSON() as Contenido);
  }
}
