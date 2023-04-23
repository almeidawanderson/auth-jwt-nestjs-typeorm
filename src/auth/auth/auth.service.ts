import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt'



const users = [
  {
  id: 1,
  username: 'user1@user@.com',
  password: '$2b$10$yG6UxJcIACYNlaSVyn/Cy.tTf0wg8Ya2AQvOcNT9QndRMbK8m/w7O'
  },
{
  id: 2,
  username: 'user2@user@.com',
  password: '$2b$10$yG6UxJcIACYNlaSVyn/Cy.tTf0wg8Ya2AQvOcNT9QndRMbK8m/w7O'  
},
{
  id: 3,
  username: 'user3@user@.com',
  password: '$2b$10$yG6UxJcIACYNlaSVyn/Cy.tTf0wg8Ya2AQvOcNT9QndRMbK8m/w7O'  
},
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(username: string, password: string) {
    const user = this.validateCredentials(username, password);

    const payload = {
      sub: user?.id,
      name: user?.username        
    }
    return this.jwtService.sign(payload)
    
    
  }

  validateCredentials(username: string, password: string) {
    const user = users.find((u => u.username === username 
      && bcrypt.compareSync(password, u.password))
      );
      
      if(!user) {
        throw new Error('User not found!')
      }
    return user;
  }
  
}
