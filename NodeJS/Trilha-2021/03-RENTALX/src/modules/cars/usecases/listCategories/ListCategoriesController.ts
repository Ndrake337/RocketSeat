import { Request, Response } from "express";

import { ListsCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListsCategoriesUseCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.listCategoriesUseCase.execute();

        return response.json(all);
    }
}
