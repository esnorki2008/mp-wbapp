import { Contenido } from "../entities/Contenido";

export interface ContenidoRepository {
  create(data: Contenido): Promise<Contenido>;
  findAll(): Promise<Contenido[]>;
}
