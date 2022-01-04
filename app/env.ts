import { env as procenv } from 'process';
import { isNil } from 'ramda';
import { config } from 'dotenv';

// load the environment variable
config();

export const env = {
  hospitalProtoAddr: '',
  pcrProtoAddr: '',
  caCert: '',
  protoPath: ''
};

/**
 * Load Env
 *  Load the environment variable asynchronously
 *
 * @returns
 */
export const loadEnv = async () => {
  env.hospitalProtoAddr = await getEnv('HOSPITAL_PROTO_ADDRESS');
  env.pcrProtoAddr = await getEnv('PCR_PROTO_ADDRESS');
  env.caCert = await getEnv('CA_CERT');
  env.protoPath = await getEnv('PROTO_PATH');

  return env;
}

/**
 * Get Env
 *  Load the env asynchronously. If the env is missing. Return a rejected promise
 *  which will be thrown later on the main function
 *
 * @param name
 * @returns
 */
const getEnv = async (name): Promise<string> => {
  const res = procenv[name];

  if (isNil(res)) {
    return Promise.reject('Env is not defined');
  }

  return Promise.resolve(res);
}
