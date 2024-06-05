import {
  Table,
  Model,
  PrimaryKey,
  Column,
  DataType,
  Default,
} from "sequelize-typescript";

@Table({
  tableName: "address",
  timestamps: false,
})
export default class AddressModel extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;
  @Column
  city: string;

  @Column
  stateCode: string;

  @Column
  countryCode: string;

  @Column
  zip: string;
}