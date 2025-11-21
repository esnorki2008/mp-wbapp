import express from "express";
import cors from "cors";
import healthRoutes from "../routes/HealthRoutes";
import contenidoRoutes from "../routes/ContenidoRoutes";
import { sequelize } from "../orm/sequelize";
import "../orm/models/ContenidoModel";
import { seedContenidos } from "../seed/SeedContenidos";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));

app.use(express.json());

app.use("/", healthRoutes);
app.use("/contenidos", contenidoRoutes);

sequelize.sync({ alter: true }).then(async () => {
  await seedContenidos();
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
