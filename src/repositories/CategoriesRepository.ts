import {Category} from '../model/Category'

interface ICreateCategory {
    name: string;
    description: string;
}

class CategoriesRepository {
    private categories: Category[];

    constructor(){
        this.categories = [];
    }

    create({name, description}: ICreateCategory): void{
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })

        this.categories.push(category)

    }

    get(): Category[]{
        
        return this.categories;
    }

    findByName(name: string): Category {
        let category = this.categories.find(c=>c.name === name)
        return category;
    }
}

export { CategoriesRepository }