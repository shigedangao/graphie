# Graphie

[![ci](https://github.com/shigedangao/graphie/actions/workflows/ci.yaml/badge.svg)](https://github.com/shigedangao/graphie/actions/workflows/ci.yaml)

Graphie is a GraphQL server which exposes the data provided by the [gRPC server](https://github.com/shigedangao/mask)

## Local dev

To configure the project on your device. You may follow these steps:

1. Clone this repository
2. Clone the submodule from this repository
3. Install the dependencies with the command ```npm install```
4. Generate the TS file from the gRPC schema with the command ```npm run gen-proto```

### Mask

Mask is the repository which contains the protobuf files and grpc server. You may follow the readme guide for the setup in local env. (Docker config is recommended)

5. Once this is done. You may run the project with the command ```npm run watch```

## Give it a try !

Thanks to GraphQL & Apollo. You can easily try the GraphQL API by using this [endpoint](https://preprod.covid19data.fr/graphql)
