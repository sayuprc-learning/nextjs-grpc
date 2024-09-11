import { NextRequest, NextResponse } from 'next/server'
import { GreetServiceClient } from '../_generated/greet_grpc_pb'
import { GreetRequest, GreetResponse } from '../_generated/greet_pb'
import * as grpc from '@grpc/grpc-js'

const client = new GreetServiceClient('localhost:50051', grpc.ChannelCredentials.createInsecure())

export interface Params {
  name?: string
}

export interface GreetJsonResponse {
  message: string
}

export const GET = async (request: NextRequest): Promise<NextResponse<GreetJsonResponse>> => {
  const params = getParams(request)

  const grpcRequest = new GreetRequest()
  grpcRequest.setName(params?.name ?? '')

  const grpcResponse = await new Promise<GreetResponse>((resolve, reject) => {
    client.greet(grpcRequest, (serviceError: grpc.ServiceError | null, response: GreetResponse) => {
      if (serviceError) {
        reject(serviceError)
      }

      resolve(response)
    })
  })

  return NextResponse.json<GreetJsonResponse>({ message: grpcResponse.getMessage() })
}

const getParams = (request: NextRequest): Params => {
  const searchParams = request.nextUrl.searchParams

  return {
    name: searchParams.get('name') ?? undefined
  }
}
