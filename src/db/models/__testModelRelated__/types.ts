import { BuildOptions, Model } from "sequelize";

export interface __testModelRelated__Model extends Model {
  readonly id: number;
  attr1: string;
  attr2: number;
  attr3: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type __testModelRelated__ModelStatic = typeof Model &
  (new (values?: object, options?: BuildOptions) => __testModelRelated__Model);
