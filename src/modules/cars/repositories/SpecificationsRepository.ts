import {Specifications} from '../model/Specification'
import {ISpecificationRepository} from './ISpecificationsRepository'
interface ICreateSpecification {
    name: string;
    description: string;
}

class SpecificationsRepository implements ISpecificationRepository{
    private specifications: Specifications[]

    constructor(){
        this.specifications = [];
    }

    create({ name, description}:ICreateSpecification): void{
        const specification = new Specifications();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        })

        this.specifications.push(specification)
    }

    list(){
        return this.specifications
    }
}

export {SpecificationsRepository}