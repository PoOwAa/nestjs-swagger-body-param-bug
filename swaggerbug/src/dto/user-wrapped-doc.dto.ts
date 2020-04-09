import { ApiProperty } from '@nestjs/swagger';
import { UserDocDto } from './user-doc.dto';

export class UserWrappedDocDto {
  @ApiProperty()
  user: UserDocDto;
}
