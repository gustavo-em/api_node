import { Router } from "express";

import { CategoriesRepository } from '../repositories/CategoriesRepository'

const categoriesRoutes = Router();


categoriesRoutes.post('/', (request, response)=>{
    const { name, description } = request.body;

    const categoryRepository = new CategoriesRepository();

    categoryRepository.create(name, description)
    

    return response.status(201).send()
    
})

export { categoriesRoutes }