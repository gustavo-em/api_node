

interface ICategory {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string);
  get();
  create({name, description}: ICategory)
}

export {ICategoriesRepository }