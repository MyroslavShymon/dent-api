import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() userDto: any) {
    return this.userService.create(userDto);
  }
}
