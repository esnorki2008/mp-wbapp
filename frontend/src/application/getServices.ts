import type { IServiceRepository } from "../domain/service";

export class GetServices {
  constructor(private repo: IServiceRepository) {}

  async getAll() {
    return this.repo.fetchServices();
  }
}
