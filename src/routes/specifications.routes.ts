import express from 'express'
var specificationsRouter = express.Router()

import { SpecificationsRepository} from '../modules/cars/repositories/SpecificationsRepository'
import { CreateSpecificationService} from '../modules/cars/services/CreateSpecificationService'

const specificationsRepository = new SpecificationsRepository();

specificationsRouter.post('/', (request, response)=>{
    const {name, description} = request.body;

    let service = new CreateSpecificationService(specificationsRepository)

    let specifications = service.execute({name,description})
    
    
    return response.status(200).json(specifications)

})

export { specificationsRouter }