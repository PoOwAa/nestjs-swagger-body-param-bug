import { ApiProperty } from '@nestjs/swagger';

export class UserDocDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  username: string;
  @ApiProperty()
  email: string;
}
