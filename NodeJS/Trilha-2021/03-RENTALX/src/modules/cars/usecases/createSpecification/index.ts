import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = SpecificationsRepository.getImplements();

const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationRepository
);

export const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase
);
