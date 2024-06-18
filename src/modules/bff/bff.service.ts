import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { response } from 'express';
import { map } from 'rxjs';

@Injectable()
export class BffService {
    constructor(private readonly httpService: HttpService){}

    getData(){
        return this.httpService.get('http://localhost:3000/pedidos').pipe(
            map(response => response.data)
        );
    }

    getById(id: string){
        return this.httpService.get(`http://localhost:3000/pedidos/${id}`).pipe(
            map(response => response.data)
        );
    }

    createData(createDto: any){
        return this.httpService.post('http://localhost:3000/pedidos', createDto).pipe(
            map(response => response.data)
        );
    }

    updateData(id: string, updateDto: any){
        return this.httpService.put(`http://localhost:3000/pedidos/${id}`, updateDto).pipe(
            map(response => response.data)
        );
    }

    deleteData(id: string){
        return this.httpService.delete(`http://localhost:3000/pedidos/${id}`).pipe(
            map(response => response.data)
        );
    }

}
