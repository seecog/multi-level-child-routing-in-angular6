import { Observable } from '../../../node_modules/rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    private users: any[] = [
        {

            id: 1,
            name: 'Hardik',
            education: {
                matric: 2012,
                intermeduate: 2014,
                graduate: 2018
            },
            health: {
                height: 5.9,
                weight: 82,
                bloodGroup: 'b+'
            }
        },
        {

            id: 2,
            name: 'Pavitra',
            education: {
                matric: 2003,
                intermeduate: 2005,
                graduate: 2011
            },
            health: {
                height: 2.0,
                weight: 40,
                bloodGroup: 'b+'
            }
        }];

    getUser(userId) {
        return new Observable((observer) => {
            let tmpUser = this.users.find((user) => user.id == userId);
            console.log('tmpuser',tmpUser);
            observer.next(tmpUser);
        })
    }

    getAllUsers()
    {
        return this.users;
    }



}