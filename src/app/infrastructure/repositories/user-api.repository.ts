import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserRepository } from '../../core/domain/repositories/user.repository';
import { User } from '../../core/domain/entities/user.entity';

@Injectable({
  providedIn: 'root'
})
export class UserApiRepository implements UserRepository {
  constructor(private http: HttpClient) {}

  getUserById(id: string): Observable<User> {
    // Simulación
    return of({
      id,
      name: 'John Doe',
      email: 'john@example.com'
    });

    // Real API:
    // return this.http.get<User>(`/api/users/${id}`);
  }
}
