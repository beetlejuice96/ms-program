import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationMigration1688611949170 implements MigrationInterface {
    name = 'AddRelationMigration1688611949170'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pr_wod\` ADD \`program_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pr_wod\` ADD CONSTRAINT \`FK_c2433996552c50b2e12b1ac4d8e\` FOREIGN KEY (\`program_id\`) REFERENCES \`pr_program\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pr_wod\` DROP FOREIGN KEY \`FK_c2433996552c50b2e12b1ac4d8e\``);
        await queryRunner.query(`ALTER TABLE \`pr_wod\` DROP COLUMN \`program_id\``);
    }

}
