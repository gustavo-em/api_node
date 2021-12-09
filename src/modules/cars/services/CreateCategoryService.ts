
import { ICategoriesRepository} from '../modules/cars/repositories/ICategoriesRepository'
interface ICategory {
  name: string;
  description: string;
}

class CreateCategoryService {
  private categoryRepository: ICategoriesRepository;

  constructor(categoryRepository: ICategoriesRepository){
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