import { BuildOptions, Model } from "sequelize";

export interface MigrationsModel extends Model {
  readonly id: number;
  projectId: number;
  type: string;
  timeStamp: string;
  isMigrated: boolean;
  up: string;
  down: string;
  createdAt: Date;
  updatedAt: Date;
}

export type MigrationsModelStatic = typeof Model &
  (new (values?: object, options?: BuildOptions) => MigrationsModel);