export declare type MuiTreeSelectProps = {
    treeData: TreeData[],
    collapseIcon?: any ,
    expandIcon?: any,
    iconReverse?: boolean,
    checkboxColor?: string,
    expanded?: string[]
}

export declare type StyleProps = {
    iconReverse: boolean
}

export declare type TreeData = {
    name: string,
    id: string,
    parent?: string;
    children?: TreeData[]
}