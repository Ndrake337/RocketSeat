import { IsNotEmpty } from 'class-validator';

export class CreateMember {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  function: string;
}
