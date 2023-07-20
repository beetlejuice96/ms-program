import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEntityMultimediaLink1689812300158 implements MigrationInterface {
    name = 'AddEntityMultimediaLink1689812300158'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pr_multimedia_link\` (\`id\` int NOT NULL AUTO_INCREMENT, \`link\` varchar(400) NOT NULL, \`exercise_id\` int NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`exerciseIdId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pr_multimedia_link\` ADD CONSTRAINT \`FK_8c3a14ff9584ff20f6588bf10cd\` FOREIGN KEY (\`exerciseIdId\`) REFERENCES \`pr_exercise\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pr_multimedia_link\` DROP FOREIGN KEY \`FK_8c3a14ff9584ff20f6588bf10cd\``);
        await queryRunner.query(`DROP TABLE \`pr_multimedia_link\``);
    }

}
