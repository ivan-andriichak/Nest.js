import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsBeneficiaryToUser1717837524188 implements MigrationInterface {
    name = 'AddIsBeneficiaryToUser1717837524188'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isBeneficiary" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isPrimary" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isPrimary" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isPrimary" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isPrimary" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isBeneficiary" DROP DEFAULT`);
    }

}
