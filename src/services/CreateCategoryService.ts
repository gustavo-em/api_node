import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface ICategory {
  name: string;
  description: string;
}

class CreateCategoryService {
  private categoryRepository: CategoriesRepository;
  
  constructor(categoryRepository: CategoriesRepository){
    this.categoryRepository = categoryRepository;
  }

  execute({ name, description }: ICategory){
    let nameAlreadyExists = this.categoryRepository.findByName(name);
    if(nameAlreadyExists){
        throw new Error('Name Aready Exists')
    }

    this.categoryRepository.create({name, description})

  }
}

export { CreateCategoryService }