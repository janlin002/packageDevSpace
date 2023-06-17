export type MuiTreeSelectProps = {
    treeData: TreeData[],
    collapseIcon?: any ,
    expandIcon?: any,
    iconReverse?: boolean,
    checkboxColor?: string,
    expanded?: string[]
}

export type StyleProps = {
    iconReverse: boolean
}

export type TreeData = {
    name: string,
    id: string,
    parent?: string;
    children?: TreeData[]
}