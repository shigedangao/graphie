import { ServiceError } from "@grpc/grpc-js";

/**
 * GrpcCallback
 *    Small generic decorator over the default gRPC client callback
 *    The callback is also partially promisifying the gRPC callback
 *
 * @param err
 * @param res
 * @param resolve
 * @param reject
 * @returns
 */
export function grpcCallback<T>(err: ServiceError | null, res: T | undefined, resolve, reject): Promise<any> {
  if (err) {
    return reject(err);
  }

  return resolve(res);
}
