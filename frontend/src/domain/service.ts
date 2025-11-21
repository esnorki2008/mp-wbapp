export type Service = {
  titulo: string;
  imagen: string;
};

export interface IServiceRepository {
  fetchServices(): Promise<Service[]>;
}
