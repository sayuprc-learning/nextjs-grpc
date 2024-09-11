import * as grpc from '@grpc/grpc-js'
import { GreetServiceService } from './app/_generated/greet_grpc_pb'
import { GreetRequest, GreetResponse } from './app/_generated/greet_pb'

const greet = (call: grpc.ServerUnaryCall<GreetRequest, GreetResponse>, callback: grpc.sendUnaryData<GreetResponse>) => {
  const response = new GreetResponse()

  response.setMessage(`Hello ${call.request.getName()}`)

  callback(null, response)
}

const getServer = (): grpc.Server => {
  const server = new grpc.Server()

  server.addService(GreetServiceService, {
    greet: greet
  })

  return server
}

const server = getServer()

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  server.start()
})
