export interface ProjectEntity {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectDTO {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectInputDTO {
  name: string;
  description: string;
}

export interface ProjectUpdateDTO {
  name?: string;
  description?: string;
}




