// package: greet
// file: greet.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as greet_pb from "./greet_pb";

interface IGreetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    greet: IGreetServiceService_IGreet;
}

interface IGreetServiceService_IGreet extends grpc.MethodDefinition<greet_pb.GreetRequest, greet_pb.GreetResponse> {
    path: "/greet.GreetService/Greet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<greet_pb.GreetRequest>;
    requestDeserialize: grpc.deserialize<greet_pb.GreetRequest>;
    responseSerialize: grpc.serialize<greet_pb.GreetResponse>;
    responseDeserialize: grpc.deserialize<greet_pb.GreetResponse>;
}

export const GreetServiceService: IGreetServiceService;

export interface IGreetServiceServer extends grpc.UntypedServiceImplementation {
    greet: grpc.handleUnaryCall<greet_pb.GreetRequest, greet_pb.GreetResponse>;
}

export interface IGreetServiceClient {
    greet(request: greet_pb.GreetRequest, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    greet(request: greet_pb.GreetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    greet(request: greet_pb.GreetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
}

export class GreetServiceClient extends grpc.Client implements IGreetServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public greet(request: greet_pb.GreetRequest, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    public greet(request: greet_pb.GreetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    public greet(request: greet_pb.GreetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
}
