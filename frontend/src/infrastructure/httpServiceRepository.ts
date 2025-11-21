import type { IServiceRepository, Service } from "../domain/service";

export class HttpServiceRepository implements IServiceRepository {
  private baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_BASE_URL_BACK;
  }

  async fetchServices(): Promise<Service[]> {

    const res = await fetch(`${this.baseUrl}/contenidos`);
    
    
    if (!res.ok) throw new Error("Error al obtener servicios");

    return res.json() as Promise<Service[]>;
  }
}
