import { ContenidoRepository } from "../../domain/repositories/ContenidoRepository";

export class GetContenidoUseCase {
  constructor(private contenidoRepo: ContenidoRepository) {}

  async execute() {
    return this.contenidoRepo.findAll();
  }
}
