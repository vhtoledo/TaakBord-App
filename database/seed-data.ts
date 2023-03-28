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
            description:'Pendiente: asdhfkjashdfkjhasdjkhfahjd',
            createdAt: Date.now(),
            status: 'pending',
        },
        {
            description:'En-Progreso: asdhfkjashdfkjhasdjkhfahjd',
            createdAt: Date.now()  - 100000,
            status: 'in-progress',
        },
        {
            description:'Terminadas: asdhfkjashdfkjhasdjkhfahjd',
            createdAt: Date.now()  - 100000,
            status: 'finished',
        },
    ]
}