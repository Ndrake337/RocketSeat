import { AudioRepository } from "../../entities/Audio/repositories/AudioRepositories";
import { IRequest } from "./interfaces/expectedFormats";

export class CreateAudioUseCase {
  constructor(private audioRepository: AudioRepository) {}

  execute({ Name, Author, Path }: IRequest) {
    this.audioRepository.create({ Name, Author, Path });
  }
}
