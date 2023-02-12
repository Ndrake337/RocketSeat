
/**
 * name - string
 * duration - number (semanas)
 * educator - string
 * 
 * Se tivermos um ponto de "?"a frente do atributo ele se torna opcional
 * 
 */

interface Course {
    name: string; 
    duration?: number; 
    educator: string
}

class CreateCourseService {

    execute({duration , educator , name}: Course){
        console.log(name, duration ,educator)
    }
}


export default new CreateCourseService()