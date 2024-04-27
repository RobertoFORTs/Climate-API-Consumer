import {
  Table,
  Model,
  PrimaryKey,
  Column,
} from "sequelize-typescript";

@Table({
  tableName: "address",
  timestamps: false,
})
export default class AddressModel extends Model {
  @PrimaryKey
  @Column
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