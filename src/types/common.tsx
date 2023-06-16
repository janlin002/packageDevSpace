export type TreeData = {
    name: string,
    id: string,
    parent?: string;
    children: TreeData[]
}