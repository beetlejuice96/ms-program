import { MigrationInterface, QueryRunner } from "typeorm";

export class MigiratinWithWodExercise1689295760184 implements MigrationInterface {
    name = 'MigiratinWithWodExercise1689295760184'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pr_type_wod\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`description\` varchar(400) NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pr_exercise\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`description\` varchar(400) NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pr_wod_exercise\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`exercise_id\` int NULL, \`wod_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pr_wod\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`description\` varchar(400) NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`type_wod_id\` int NULL, \`program_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pr_type_program\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`description\` varchar(400) NULL, \`amount_days_week\` int NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pr_program\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`description\` varchar(400) NULL, \`file_url\` varchar(100) NULL, \`init_date\` timestamp NULL, \`end_date\` timestamp NULL, \`status\` enum ('archived', 'active', 'complete', 'other') NOT NULL DEFAULT 'other', \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`type_program_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pr_wod_exercise\` ADD CONSTRAINT \`FK_378d5e6fcc2be07d5bf8b737085\` FOREIGN KEY (\`exercise_id\`) REFERENCES \`pr_exercise\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pr_wod_exercise\` ADD CONSTRAINT \`FK_c701b11553ac5ab79835ff2237a\` FOREIGN KEY (\`wod_id\`) REFERENCES \`pr_wod\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pr_wod\` ADD CONSTRAINT \`FK_d5f7eace902d7bd8731b6379fd2\` FOREIGN KEY (\`type_wod_id\`) REFERENCES \`pr_type_wod\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pr_wod\` ADD CONSTRAINT \`FK_c2433996552c50b2e12b1ac4d8e\` FOREIGN KEY (\`program_id\`) REFERENCES \`pr_program\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pr_program\` ADD CONSTRAINT \`FK_4907d45837eb187953292983af9\` FOREIGN KEY (\`type_program_id\`) REFERENCES \`pr_type_program\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pr_program\` DROP FOREIGN KEY \`FK_4907d45837eb187953292983af9\``);
        await queryRunner.query(`ALTER TABLE \`pr_wod\` DROP FOREIGN KEY \`FK_c2433996552c50b2e12b1ac4d8e\``);
        await queryRunner.query(`ALTER TABLE \`pr_wod\` DROP FOREIGN KEY \`FK_d5f7eace902d7bd8731b6379fd2\``);
        await queryRunner.query(`ALTER TABLE \`pr_wod_exercise\` DROP FOREIGN KEY \`FK_c701b11553ac5ab79835ff2237a\``);
        await queryRunner.query(`ALTER TABLE \`pr_wod_exercise\` DROP FOREIGN KEY \`FK_378d5e6fcc2be07d5bf8b737085\``);
        await queryRunner.query(`DROP TABLE \`pr_program\``);
        await queryRunner.query(`DROP TABLE \`pr_type_program\``);
        await queryRunner.query(`DROP TABLE \`pr_wod\``);
        await queryRunner.query(`DROP TABLE \`pr_wod_exercise\``);
        await queryRunner.query(`DROP TABLE \`pr_exercise\``);
        await queryRunner.query(`DROP TABLE \`pr_type_wod\``);
    }

}
