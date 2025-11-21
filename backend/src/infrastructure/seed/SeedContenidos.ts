import { ContenidoRepositoryImpl } from "../repositories/ContenidoRepositoryImpl";
import { CreateContenidoUseCase } from "../../application/use-cases/CreateContenidoUseCase";
import { GetContenidoUseCase } from "../../application/use-cases/GetContenidoUseCase";

export async function seedContenidos() {
  const repo = new ContenidoRepositoryImpl();

  const getUseCase = new GetContenidoUseCase(repo);
  const existing = await getUseCase.execute();

  if (existing.length > 0) {
    console.log("Seed: contenidos ya existen, no se inserta nada.");
    return;
  }

  const createUseCase = new CreateContenidoUseCase(repo);

  const seedData = [
    {
      titulo: "Delito cero",
      cuerpo: "CONTENT",
      imagen: "https://www.mp.gob.gt/wp-content/uploads/2024/11/Delito-Cero.png"
    },
    {
      titulo: "Asistencia Alerta Alba-Keneth",
      cuerpo: "CONTENT",
      imagen: "https://www.mp.gob.gt/wp-content/uploads/2024/11/Delito-Cero.png"
    },
    {
      titulo: "Asistencia Alerta Isabel-Claudina",
      cuerpo: "CONTENT",
      imagen: "https://www.mp.gob.gt/wp-content/uploads/2024/11/Logo_4-Alerta-Alba-Keneth.png"
    },
    {
      titulo: "Centro de Llamadas contra la Extorsi[on",
      cuerpo: "CONTENT",
      imagen: "https://www.mp.gob.gt/wp-content/uploads/2024/11/Logo_10-Alrtea-Isabel-Claudina.png"
    }
  ];

  for (const data of seedData) {
    await createUseCase.execute(data);
  }

  console.log("Seed: contenidos creados.");
}
