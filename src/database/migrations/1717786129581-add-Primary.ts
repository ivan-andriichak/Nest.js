import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPrimary1717786129581 implements MigrationInterface {
    name = 'AddPrimary1717786129581'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isPrimary" boolean `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isPrimary"`);
    }

}
