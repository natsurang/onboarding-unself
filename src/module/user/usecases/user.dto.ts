export class UserResDTO {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

export class CreatUserDTO {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export class UpdateUserDTO {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}
