import { ContenidoRepository } from "../../domain/repositories/ContenidoRepository";
import { Contenido } from "../../domain/entities/Contenido";

export class CreateContenidoUseCase {
  constructor(private contenidoRepo: ContenidoRepository) {}

  async execute(data: Contenido) {
    return this.contenidoRepo.create(data);
  }
}
