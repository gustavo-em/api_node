import { ISpecificationRepository } from '../repositories/ISpecificationsRepository'
interface ICreateSpecification {
    name: string;
    description: string;
}
class CreateSpecificationService {
    private repositorySpecification: ISpecificationRepository;

    constructor(specificationsRepository: ISpecificationRepository){
        this.repositorySpecification = specificationsRepository
    }

    execute({name, description}: ICreateSpecification){
        this.repositorySpecification.create({name, description})
        const specifications = this.repositorySpecification.list();
        return specifications;
    }


}

export { CreateSpecificationService}