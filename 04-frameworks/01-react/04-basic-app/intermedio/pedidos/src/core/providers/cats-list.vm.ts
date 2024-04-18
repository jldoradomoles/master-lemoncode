export interface catEntityContext {
    cats: catEntity[];
}

export interface catEntity {
    id: string;
    picUrl: string;
    title: string;
    setCats: (cats: catEntityContext) => void;
}
