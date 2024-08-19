var studentsModels = require("../models/students.m.js");

class studentsController {
    async listar() {
        try {
            const students = await studentsModels.listar();
            return students;
        } catch (error) {
            throw new Error('Error al listar los estudiantes');
        }
    }

    async uno(id) {
        try {
            const student = await studentsModels.uno(id);
            if (!student) {
                throw new Error(`No se encontró el estudiante con el ID: ${id}`);
            }
            return student;
        } catch (error) {
            throw new Error('Error al obtener el estudiante');
        }
    }

    async crear(students) {
            await studentsModels.crear(students); // Crear un nuevo estudiante
            return await this.listar(); // Retornar la lista completa de estudiantes
    }

    async editar(id, updatedData) {
            const updatedStudent = await studentsModels.editar(id, updatedData);
            if (!updatedStudent) {
                throw new Error(`No se encontró el estudiante con el ID: ${id}`);
            }
            return updatedStudent;
        }
    

    async eliminar(id) {
       try {
            const deletedStudent = await studentsModels.eliminar(id);
            if (!deletedStudent) {
                throw new Error(`No se encontró el estudiante con el ID: ${id}`);
            }
            return deletedStudent;
        } catch(error){
            throw error;
        }
    }
}

module.exports = new studentsController;
