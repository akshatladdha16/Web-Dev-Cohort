import { GraphQLClient } from "@refinedev/nestjs-query";

export const API_URL='https://api.crm.refine.dev'
export const client =new GraphQLClient(API_URL,{
    fetch: (url: string, options:Request)
})