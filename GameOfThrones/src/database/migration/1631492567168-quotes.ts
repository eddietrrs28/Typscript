import {MigrationInterface, QueryRunner} from "typeorm";

export class quotes1631492567168 implements MigrationInterface {
    name = 'quotes1631492567168'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`gameofthronesquotes\`.\`quotes\` (\`quote_id\` int NOT NULL AUTO_INCREMENT, \`sentence\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`slug\` varchar(255) NOT NULL, \`house_name\` varchar(255) NOT NULL, \`house_slug\` varchar(255) NOT NULL, PRIMARY KEY (\`quote_id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`gameofthronesquotes\`.\`quotes\``);
    }

}
