interface SeedData {
    entries: SeedEntry[]
}

interface SeedEntry {
    description: string,
    status: string,
    createdAt: number,
}

export const seedData: SeedData = {
    entries: [
        {
            description:'Pendiente: Tarea pendiente',
            createdAt: Date.now(),
            status: 'pending',
        },
        {
            description:'En-Progreso: Tarea en Progreso',
            createdAt: Date.now()  - 100000,
            status: 'in-progress',
        },
        {
            description:'Terminadas: Tarea Terminada',
            createdAt: Date.now()  - 100000,
            status: 'finished',
        },
    ]
}