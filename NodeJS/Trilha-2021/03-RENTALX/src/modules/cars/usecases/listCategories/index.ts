import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListsCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = null;

const listCategoriesUseCase = new ListsCategoriesUseCase(categoriesRepository);

export const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
);
