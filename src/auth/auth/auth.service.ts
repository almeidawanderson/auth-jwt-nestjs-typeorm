import { Injectable } from '@nestjs/common';

const users = [{
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
}
]

@Injectable()
export class AuthService {
  login(username: string, password: string) {
    console.log(username, password)
  }
}
