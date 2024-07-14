import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {message:string,author:string} {
    return {message:'Hello, Welcome to TODO Rest-API. This API is built using NestJS',author:'Rohit Kumar Dey'};
  }
}