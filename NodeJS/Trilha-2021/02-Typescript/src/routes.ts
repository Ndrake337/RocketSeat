import { Request, Response } from "express";
import createCourseService from "./createCourseService";

export function createCourse(request: Request, response: Response){
    createCourseService.execute({
        name: "NodeJS",
        educator: "Matheus",
        duration: 10
    })


    return response.send()
}

