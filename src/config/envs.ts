import "dotenv/config";

import * as joi from "joi";

interface EnvVars {

    PORT: number;
    DATABASE_URL: string


}

const envSchema = joi.object<EnvVars>({

    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required()

}).unknown(true);


const { error, value } = envSchema.validate(process.env);

if (error) {

    throw new Error(`Config validation error: ${error}`);
}

const ennVars: EnvVars = value;

export const envs = {
    port: ennVars.PORT,
    databaseUrl: ennVars.DATABASE_URL
}