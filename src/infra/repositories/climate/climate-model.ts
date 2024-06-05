import {
  Table,
  Model,
  PrimaryKey,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import AddressModel from './address-model';

@Table({
  tableName: "climate",
  timestamps: false,
})
export default class ClimateModel extends Model {
  @PrimaryKey
  @Column
  id: string;

  @ForeignKey(() => AddressModel)
  @Column
  addressId: string;

  @BelongsTo(() => AddressModel)
  address: AddressModel;

  @Column(DataType.DATE)
  dateTime: Date;

  @Column(DataType.FLOAT)
  temperature: number;

  @Column(DataType.INTEGER)
  humidity: number;

  @Column(DataType.FLOAT)
  windSpeed: number;

  @Column
  climateDescription: string;

  @Column
  climate: string;
}