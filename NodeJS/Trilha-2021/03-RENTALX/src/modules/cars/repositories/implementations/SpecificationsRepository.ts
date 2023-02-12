import { Specification } from "../../entities/Specification";
import {
    ISpecificationsRepository,
    ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    public static IMPLEMENTS: SpecificationsRepository;

    private constructor() {
        this.specifications = [];
    }

    public static getImplements() {
        if (!SpecificationsRepository.IMPLEMENTS) {
            SpecificationsRepository.IMPLEMENTS =
                new SpecificationsRepository();
        }
        return SpecificationsRepository.IMPLEMENTS;
    }

    create({ description, name }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            createdAt: new Date(),
        });

        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(
            (spec) => spec.name === name
        );
        return specification;
    }
}
