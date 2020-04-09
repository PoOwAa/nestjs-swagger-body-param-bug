import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { AppService } from './app.service';
import { UserDocDto } from './dto/user-doc.dto';
import { UserWrappedDocDto } from './dto/user-wrapped-doc.dto';
import { UserWrappedDto } from './dto/user-wrapped.dto';
import { UserDto } from './dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('noDoc/param')
  async noDocParam(@Body('user') user: UserDto) {
    return user;
  }

  @Post('noDoc/param/scheme')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        user: {
          properties: {
            id: { type: 'number' },
            username: { type: 'string' },
            email: { type: 'string' },
          },
        },
      },
    },
  })
  async noDocParamScheme(@Body('user') user: UserDto) {
    return user;
  }

  @Post('noDoc/noParam')
  async noDocNoParam(@Body() user: UserDto) {
    return user;
  }

  @Post('noDoc/noParam/wrapperDto')
  async noDocNoParamWrapper(@Body() user: UserWrappedDto) {
    return user;
  }

  @Post('doc/param')
  async docParam(@Body('user') user: UserDocDto) {
    return user;
  }

  @Post('doc/param/scheme')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        user: {
          properties: {
            id: { type: 'number' },
            username: { type: 'string' },
            email: { type: 'string' },
          },
        },
      },
    },
  })
  async docParamScheme(@Body('user') user: UserDocDto) {
    return user;
  }

  @Post('doc/noParam')
  async docNoParam(@Body() user: UserDocDto) {
    return user;
  }

  @Post('doc/noParam/wrapperDto')
  async docNoParamWrapper(@Body() user: UserWrappedDocDto) {
    return user;
  }
}
