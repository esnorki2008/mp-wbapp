import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";

export class ContenidoModel extends Model {}

ContenidoModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cuerpo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    tableName: "contenidos"
  }
);
