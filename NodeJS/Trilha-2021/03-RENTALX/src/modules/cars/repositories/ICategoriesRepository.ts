import { Category } from "../entities/Category";

// DTO => Data Transfer Object
// Cria um objeto que será responsável para fazer a transferência de dados de uma classe até a outra.

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
