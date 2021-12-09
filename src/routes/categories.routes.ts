import { Router, Request, Response } from "express";
const categoriesRoutes = Router();

import { CategoriesRepository } from '../repositories/CategoriesRepository'

const categoryRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response)=>{
    const { name, description } = request.body;

    categoryRepository.create({name, description})

    return response.status(201).send()
    
})

categoriesRoutes.get('/', (request: Request, response: Response)=>{
    const categ = categoryRepository.get();
    return response.status(200).json(categ)
})

export { categoriesRoutes }