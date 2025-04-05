import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    MinLength,
} from 'class-validator';

export class registerDTO {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsNumber()
    @IsNotEmpty()
    age: number;
}

export class loginDTO {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
