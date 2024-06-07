import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsBeneficiary1717777421160 implements MigrationInterface {
    name = 'AddIsBeneficiary1717777421160'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isBeneficiary" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isBeneficiary"`);
    }

}
