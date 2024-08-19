const { v4: uuidv4 } = require('uuid');

let studentsbd = [
    {
        id: "1",
        nombre: "Miguel Suarez",
        edad: "23",
        carrera: "Ing. Computación",
    },
    {
        id: "2",
        nombre: "Alfonso",
        edad: "18",
        carrera: "Ing. Industrial",
    },
    {
        id: "3",
        nombre: "Maria",
        edad: "21",
        carrera: "Ing. Computación",
    }
];

class StudentsModels {
    listar() {
        return studentsbd;
    }

    uno(id) {
        return studentsbd.find(student => student.id === id);
    }
    crear(student) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    student.id = uuidv4();
                    studentsbd.push(student);
                    resolve(student);
                } catch (error) {
                    reject(error);
                }
            }, 1000);
        });
        }

        editar(id, updatedData) {
            const index = studentsbd.findIndex(student => student.id === id);
            if (index !== -1) {
              studentsbd[index] = { ...studentsbd[index], ...updatedData };
              return studentsbd[index];
            }
            return null;
          }
        
          eliminar(id) {
            const index = studentsbd.findIndex(student => student.id === id);
            if (index !== -1) {
              const deletedStudent = studentsbd.splice(index, 1);
              return deletedStudent[0];
            }
            return null;
          }
}

module.exports = new StudentsModels();
