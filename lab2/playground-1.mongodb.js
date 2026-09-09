
// ЛАБОРАТОРНАЯ РАБОТА №2
// Вариант 1 — Университет
// Университет: ATU
// Студент: Абаев Арман


use("universityDB");


// 1. СОЗДАНИЕ КОЛЛЕКЦИЙ


db.students.drop();
db.courses.drop();

db.createCollection("students");
db.createCollection("courses");



// 2. СОЗДАНИЕ 10 СТУДЕНТОВ

db.students.insertMany([
    {
        studentId: 1001,
        name: "Абаев Арман",
        age: 19,
        group: "IS-24-1",
        gpa: 3.5,
        university: "ATU",

        contact: {
            city: "Almaty",
            email: "arman.abaev@example.com"
        },

        skills: [
            "Python",
            "Java",
            "MongoDB"
        ]
    },

    {
        studentId: 1002,
        name: "Ермекова Алина",
        age: 20,
        group: "IS-24-1",
        gpa: 3.8,
        university: "ATU",

        contact: {
            city: "Almaty",
            email: "alina.ermekova@example.com"
        },

        skills: [
            "Java",
            "SQL",
            "Git"
        ]
    },

    {
        studentId: 1003,
        name: "Сериков Данияр",
        age: 19,
        group: "IS-24-2",
        gpa: 3.2,
        university: "ATU",

        contact: {
            city: "Almaty",
            email: "daniyar.serikov@example.com"
        },

        skills: [
            "Python",
            "MongoDB",
            "Docker"
        ]
    },

    {
        studentId: 1004,
        name: "Касымова Мадина",
        age: 18,
        group: "IS-24-2",
        gpa: 3.9,
        university: "ATU",

        contact: {
            city: "Almaty",
            email: "madina.kassymova@example.com"
        },

        skills: [
            "Java",
            "Python",
            "Git"
        ]
    },

    {
        studentId: 1005,
        name: "Нурланов Алихан",
        age: 20,
        group: "IS-24-3",
        gpa: 3.1,
        university: "ATU",

        contact: {
            city: "Almaty",
            email: "alikhan.nurlanov@example.com"
        },

        skills: [
            "C++",
            "SQL",
            "Linux"
        ]
    },

    {
        studentId: 1006,
        name: "Омарова Жания",
        age: 19,
        group: "IS-24-3",
        gpa: 3.7,
        university: "ATU",

        contact: {
            city: "Almaty",
            email: "zhaniya.omarova@example.com"
        },

        skills: [
            "Python",
            "Java",
            "SQL"
        ]
    },

    {
        studentId: 1007,
        name: "Садыков Тимур",
        age: 21,
        group: "IS-23-1",
        gpa: 3.4,
        university: "ATU",

        contact: {
            city: "Almaty",
            email: "timur.sadykov@example.com"
        },

        skills: [
            "JavaScript",
            "MongoDB",
            "NodeJS"
        ]
    },

    {
        studentId: 1008,
        name: "Бекова Аружан",
        age: 18,
        group: "IS-24-1",
        gpa: 4.0,
        university: "ATU",

        contact: {
            city: "Almaty",
            email: "aruzhan.bekova@example.com"
        },

        skills: [
            "Python",
            "MongoDB",
            "Java"
        ]
    },

    {
        studentId: 1009,
        name: "Ахметов Дамир",
        age: 20,
        group: "IS-23-2",
        gpa: 2.9,
        university: "ATU",

        contact: {
            city: "Almaty",
            email: "damir.akhmetov@example.com"
        },

        skills: [
            "C++",
            "Git",
            "Linux"
        ]
    },

    {
        studentId: 1010,
        name: "Ибраева Диана",
        age: 19,
        group: "IS-24-2",
        gpa: 3.6,
        university: "ATU",

        contact: {
            city: "Almaty",
            email: "diana.ibrayeva@example.com"
        },

        skills: [
            "Java",
            "SQL",
            "MongoDB"
        ]
    }
]);



// 3. МАССИВ ДОКУМЕНТОВ grades


db.students.updateOne(
    { studentId: 1001 },
    {
        $set: {
            grades: [
                { course: "NoSQL", grade: 90 },
                { course: "Algorithms", grade: 85 }
            ]
        }
    }
);

db.students.updateOne(
    { studentId: 1002 },
    {
        $set: {
            grades: [
                { course: "NoSQL", grade: 92 },
                { course: "Algorithms", grade: 88 }
            ]
        }
    }
);

db.students.updateOne(
    { studentId: 1003 },
    {
        $set: {
            grades: [
                { course: "NoSQL", grade: 84 },
                { course: "Algorithms", grade: 80 }
            ]
        }
    }
);

db.students.updateOne(
    { studentId: 1004 },
    {
        $set: {
            grades: [
                { course: "NoSQL", grade: 95 },
                { course: "Algorithms", grade: 91 }
            ]
        }
    }
);

db.students.updateOne(
    { studentId: 1005 },
    {
        $set: {
            grades: [
                { course: "NoSQL", grade: 78 },
                { course: "Algorithms", grade: 75 }
            ]
        }
    }
);

db.students.updateOne(
    { studentId: 1006 },
    {
        $set: {
            grades: [
                { course: "NoSQL", grade: 89 },
                { course: "Algorithms", grade: 86 }
            ]
        }
    }
);

db.students.updateOne(
    { studentId: 1007 },
    {
        $set: {
            grades: [
                { course: "NoSQL", grade: 83 },
                { course: "Algorithms", grade: 81 }
            ]
        }
    }
);

db.students.updateOne(
    { studentId: 1008 },
    {
        $set: {
            grades: [
                { course: "NoSQL", grade: 98 },
                { course: "Algorithms", grade: 96 }
            ]
        }
    }
);

db.students.updateOne(
    { studentId: 1009 },
    {
        $set: {
            grades: [
                { course: "NoSQL", grade: 72 },
                { course: "Algorithms", grade: 70 }
            ]
        }
    }
);

db.students.updateOne(
    { studentId: 1010 },
    {
        $set: {
            grades: [
                { course: "NoSQL", grade: 91 },
                { course: "Algorithms", grade: 87 }
            ]
        }
    }
);




// Поиск студентов из Алматы

db.students.find({
    "contact.city": "Almaty"
});


// Алматы + GPA >= 3.0

db.students.find({
    "contact.city": "Almaty",
    gpa: {
        $gte: 3.0
    }
});


// Поиск по email Армана

db.students.find({
    "contact.email": "arman.abaev@example.com"
});


// 5. РАБОТА С МАССИВАМИ


// Поиск по MongoDB

db.students.find({
    skills: "MongoDB"
});


// $all

db.students.find({
    skills: {
        $all: [
            "Java",
            "MongoDB"
        ]
    }
});


// $push

db.students.updateOne(
    { studentId: 1001 },
    {
        $push: {
            skills: "Docker"
        }
    }
);


// Проверка skills Армана

db.students.findOne(
    { studentId: 1001 },
    {
        _id: 0,
        studentId: 1,
        name: 1,
        skills: 1
    }
);


// 6. СОЗДАНИЕ COURSES

db.courses.insertMany([
    {
        _id: 501,
        name: "NoSQL",
        credits: 5,
        teacher: "Кайратов Ерлан",
        university: "ATU"
    },

    {
        _id: 502,
        name: "Algorithms",
        credits: 5,
        teacher: "Смагулов Руслан",
        university: "ATU"
    },

    {
        _id: 503,
        name: "Programming",
        credits: 6,
        teacher: "Ахметова Айгуль",
        university: "ATU"
    },

    {
        _id: 504,
        name: "Databases",
        credits: 5,
        teacher: "Жумабеков Марат",
        university: "ATU"
    },

    {
        _id: 505,
        name: "Computer Networks",
        credits: 4,
        teacher: "Омаров Данияр",
        university: "ATU"
    }
]);


// 7. REFERENCING

// Арман

db.students.updateOne(
    { studentId: 1001 },
    {
        $set: {
            courseIds: [501, 502, 503]
        }
    }
);


// 1002-1004

db.students.updateMany(
    {
        studentId: {
            $in: [1002, 1003, 1004]
        }
    },
    {
        $set: {
            courseIds: [501, 503, 504]
        }
    }
);


// 1005-1007

db.students.updateMany(
    {
        studentId: {
            $in: [1005, 1006, 1007]
        }
    },
    {
        $set: {
            courseIds: [502, 504, 505]
        }
    }
);


// 1008-1010

db.students.updateMany(
    {
        studentId: {
            $in: [1008, 1009, 1010]
        }
    },
    {
        $set: {
            courseIds: [501, 504, 505]
        }
    }
);



// 8. ПРОВЕРКА REFERENCE

db.students.findOne({
    studentId: 1001
});


// 9. EMBEDDING

db.students.findOne(
    {
        studentId: 1001
    },
    {
        _id: 0,
        name: 1,
        contact: 1,
        skills: 1,
        grades: 1
    }
);


// 10. REFERENCING


db.students.findOne(
    {
        studentId: 1001
    },
    {
        _id: 0,
        name: 1,
        courseIds: 1
    }
);


// 11. $LOOKUP

db.students.aggregate([
    {
        $lookup: {
            from: "courses",
            localField: "courseIds",
            foreignField: "_id",
            as: "courseInfo"
        }
    }
]);


// 12. ДОПОЛНИТЕЛЬНЫЕ ЗАПРОСЫ


// GPA > 3.5

db.students.find({
    gpa: {
        $gt: 3.5
    }
});


// Возраст > 19

db.students.find({
    age: {
        $gt: 19
    }
});


// Студенты, изучающие NoSQL

db.students.find({
    courseIds: 501
});


// Алматы + Python

db.students.find({
    "contact.city": "Almaty",
    skills: "Python"
});


// NoSQL с оценкой выше 85

db.students.find({
    grades: {
        $elemMatch: {
            course: "NoSQL",
            grade: {
                $gt: 85
            }
        }
    }
});


// 13. ФИНАЛЬНАЯ ПРОВЕРКА

db.students.countDocuments();

db.courses.countDocuments();

db.students.find();

db.courses.find();


// Финальный $lookup

db.students.aggregate([
    {
        $lookup: {
            from: "courses",
            localField: "courseIds",
            foreignField: "_id",
            as: "courseInfo"
        }
    }
]);
