import {
  Table,
  Model,
  PrimaryKey,
  Column,
} from "sequelize-typescript";

@Table({
  tableName: "climate",
  timestamps: false,
})
export default class ClimateModel extends Model{
  @PrimaryKey
  @Column
  declare id: string;
}