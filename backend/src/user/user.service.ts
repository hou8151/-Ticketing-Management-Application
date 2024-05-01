
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
    
  ) { }

 async create(userBody: any) {
    const newuser = this.UserRepository.create(userBody);
    return await this.UserRepository.save(newuser) ;
  }
  

 // create(createUserDto: any) {
//const newUser = { ...createUserDto, UserID: this.users.length + 1 };
 //   this.users.push(newUser);
 //   return newUser;
//  }

 // findAll() {
 //   return this.users;
//  }
async findAll() {
  return await this.UserRepository.find() ;
}

  //findOne(id: number) {
  //  return this.users.find(user => user.UserID === id);
//  }
async findOne(id: any): Promise<User> {
  const User = await this.UserRepository.findOne(id);
  if (!User) {
    throw new NotFoundException(`user #${id} not found`);
  }
  return User   ;
}
 // update(id: number, updateUserDto: any) {
   // const index = this.users.findIndex(user => user.UserID === id);
  //  if (index !== -1) {
   //   this.users[index] = { ...this.users[index], ...updateUserDto };
  //    return this.users[index];
  //  }
  //  return null;
 // }
 async update(UserID: any, updateUserDto: any) {
  const findOptions: FindOneOptions = {
    where: { id: UserID },
  };

  const user = await this.UserRepository.findOne(findOptions);

  if (!user) {
    throw new NotFoundException(`User #${UserID} not found`);
  }

  Object.assign(user, updateUserDto);
  await this.UserRepository.save(user);

  return user;
}

 // remove(id: number) {
  //  const index = this.users.findIndex(user => user.UserID === id);
   // if (index !== -1) {
   //   const removedUser = this.users.splice(index, 1);
   //   return removedUser[0];
   // }
   // return null;
 // }
  async remove(id: number) {
    await this.UserRepository.update(id,{isDeleted : true});
  }
  async findByUsername(Username: string): Promise<User | undefined> {
    return this.UserRepository.findOne({ where: { Username } });
  }

  async createUser(username: any, email: any, password: any): Promise<User> {
    const user = new User();
    user.Username = username;
    user.Email = email;
    user.Password = password; // Remember to hash the password before saving in production
    return this.UserRepository.save(user);
  }

  async getUserById(UserID: any): Promise<User | undefined> {
    return this.UserRepository.findOne(UserID);
  }
  
}
