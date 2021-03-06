import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: '1',
        userName: 'nerdAlert',
        password: 'nerdsRule',
        firstName: 'Becky',
        lastName: 'Jo',
        token: 'A23NZ1',
      },
      {
        id: '2',
        userName: 'dickensFan1',
        password: 'supersafepassword',
        firstName: 'Delilah',
        lastName: 'Peters',
        token: 'A23NZ2',
      },
    ];

    const weatherstack = {
      city: 'London',
    };
    const characters = [
      {
        id: '1',
        last: 'Allen',
        first: 'Arabella',
        age: '20s',
        description: 'Black eyed beaty',
        book: 'Pickwick Papers',
        location: 'George and Vulture',
      },
      {
        id: '2',
        last: 'Allen',
        first: 'Benjamin',
        age: '20s',
        description: 'Medical Student',
        book: 'Pickwick Papers',
        location: 'George and Vulture',
      },
      {
        id: '3',
        last: 'Badger',
        first: 'Bayham',
        age: '40s',
        description: 'Pink faced wide-eyed doctor',
        book: 'Bleak House',
        location: 'Chelsea',
      },
      {
        id: '4',
        last: 'Badger',
        first: 'Mrs',
        age: '50s',
        description: 'Takes on every hobby',
        book: 'Bleak House',
        location: 'Chelsea',
      },
      {
        id: '5',
        last: 'Bardell',
        first: 'Martha',
        age: '40s',
        description: 'Landlady',
        book: 'Pickwick Papers',
        location: 'Guildhall',
      },
      {
        id: '6',
        last: 'Barnacle',
        first: 'Tite',
        age: '50s',
        description: 'High born senior official',
        book: 'Little Dorrit',
        location: 'Grosvenor Square',
      },
      {
        id: '7',
        last: 'Billickin',
        first: 'Mrs',
        age: '40s',
        description: 'Landlady',
        book: 'The mystery of Edwin Drood',
        location: 'Bond Street',
      },
      {
        id: '8',
        last: 'Boffin',
        first: 'Henrietta',
        age: '30s',
        description: 'Smiley, broad-figured, simple',
        book: '',
        location: 'Cavendish Square',
      },
      {
        id: '9',
        last: 'Brass',
        first: 'Sally',
        age: '35',
        description: 'Guant, bony, resolute secretary and clerk',
        book: 'The Old Curiosity Shop',
        location: 'Bevis Marks',
      },
      {
        id: '10',
        last: 'Brass',
        first: 'Sampson',
        age: '40s',
        description: 'An attorney of no good repute',
        book: 'The Old Curiosity Shop',
        location: 'Bevis Marks',
      },
      {
        id: '11',
        last: 'Bray',
        first: 'Madeline',
        age: '20s',
        description: 'Exquisity shaped beauty shaded by a cloud of sadness',
        book: 'Nicholas Nickleby',
        location: 'Kings Bench Prison',
      },
      {
        id: '12',
        last: 'Bray',
        first: 'Walter',
        age: '50s',
        description: 'Tyrannical father of Madeline, grossly in debt',
        book: 'Nicholas Nickleby',
        location: 'Kings Bench Prison',
      },
      {
        id: '13',
        last: 'Carstone',
        first: 'Richard',
        age: '20',
        description: 'Orphaned ward of Mr Jarndyce, a handsome youth with a most ingenous face',
        book: 'Bleak House',
        location: 'Oxford Street',
      },
    ];
    return { characters, users, weatherstack };
  }
}
