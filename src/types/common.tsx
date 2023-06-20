import {
    Dispatch,
    SetStateAction,
  } from "react";

export type MuiTreeSelectProps = {
    treeData: TreeData[] | any,
    collapseIcon?: any ,
    expandIcon?: any,
    iconReverse?: boolean,
    checkboxColor?: string,
    expanded?: string[],
    selectedNodes: string[];
    setSelectedNodes: Dispatch<SetStateAction<string[]>>;
    All: string,
    defaultExpanded?: string[]
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