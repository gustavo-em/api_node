import {Specifications} from '../model/Specification'
interface ISpecificationsDTO {
  name: string;
  description: string;
}


interface ISpecificationRepository {
  create({description, name}: ISpecificationsDTO): void;
  list(): Specifications[];
}

export {ISpecificationRepository}