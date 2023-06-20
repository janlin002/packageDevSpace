/* eslint-disable no-param-reassign */
import React, {MouseEvent, useEffect}  from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from "@mui/styles";

import { TreeData, MuiTreeSelectProps, StyleProps } from './types/common'


export const useStyles = makeStyles<StyleProps>(() => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
    backgroundColor: "#fff",

    // "& > .MuiTreeItem-root > .MuiTreeItem-content":
    //   {
    //     borderBottom: "1px solid #E4E7EC",
    //   },


    //   "& > .MuiTreeItem-root > .MuiTreeItem-content:last-child":
    //   {
    //     borderBottom: "none",
    //   },


    "&": {
      border: "1px solid #E4E7EC",
      borderRadius: "10px",
      "& > .MuiTreeItem-root > .MuiTreeItem-content":{
        borderBottom: "1px solid #E4E7EC",
        // "&:last-child":{
        //   borderBottom: "none",
        // }
      }
    },
    "@global": {
      '.MuiTreeItem-content': {
        padding: '0px'
      },
    }
  },
  content: {
    flexDirection: "row-reverse",
  },
  test: {
    flexDirection: "row",
  }
}));

const bfsSearch = (graph: TreeData[], targetId: string) => {
  const queue = [...graph];

  while (queue.length > 0) {
    const currNode = queue.shift() as TreeData;
    if (currNode.id === targetId) {
      return currNode;
    }
    if (currNode.children) {
      queue.push(...currNode.children);
    }
  }
  return []; // Target node not found
};

const MuiTreeSelect:React.FC<MuiTreeSelectProps> = ({
  treeData,
  collapseIcon = ChevronRightIcon,
  expandIcon = ExpandMoreIcon,
  iconReverse = false,
  checkboxColor = '#121232',
  expanded = [],
  selectedNodes,
  setSelectedNodes,
  All,
  defaultExpanded
}) => {
  const classes = useStyles()

    const renderTree = (node: TreeData) =>{
        const handleExpandClick = () =>{
            console.log('123123')
        }

        function getAllIds(node: any, idList: string[] = []) {
          idList.push(node.id);
          // idList = [...idList, node?.id]
          if (node.children) {
            node?.children?.forEach((child: any) => getAllIds(child, idList));
          }
          return idList;
        }

        const getAllChild = (id: string) => {
          return getAllIds(bfsSearch(treeData, id));
        };

        const getAllFathers = (id: string, list: string[] = []): string[] => {
          const node = bfsSearch(treeData, id) as TreeData;
          if (node.parent) {
            list.push(node.parent);
      
            return getAllFathers(node.parent, list);
          }
      
          return list;
        };

        function isAllChildrenChecked(node: TreeData, list: string[]) {
          const allChild = getAllChild(node.id);
          const nodeIdIndex = allChild.indexOf(node.id);
          allChild.splice(nodeIdIndex, 1);
      
          return allChild.every((nodeId) =>
            selectedNodes.concat(list).includes(nodeId)
          );
        }

        const handleNodeSelect = (event: MouseEvent<HTMLButtonElement>, nodeId: string) => {
          event.stopPropagation();
          const allChild = getAllChild(nodeId);
          const fathers = getAllFathers(nodeId);

          if (selectedNodes.includes(nodeId)) {
            // Need to de-check
            setSelectedNodes((prevSelectedNodes) =>
              prevSelectedNodes.filter((id) => !allChild.concat(fathers).includes(id))
            );
          } else {
            // Need to check
            const ToBeChecked = allChild;
            for (let i = 0; i < fathers.length; ++i) {
              if (isAllChildrenChecked(bfsSearch(treeData, fathers[i]) as TreeData, ToBeChecked)) {
                ToBeChecked.push(fathers[i]);
              }
            }
            setSelectedNodes((prevSelectedNodes) =>
              [...prevSelectedNodes].concat(ToBeChecked)
            );
          }
        }

        return (
            <TreeItem
              key={node.id}
              nodeId={node.id}
              onClick={handleExpandClick}
              classes={{
                content: iconReverse ? classes.content : classes.test,
              }}
              label={
                <>
                  <Checkbox
                    checked={selectedNodes.indexOf(node.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    onClick={(event) => handleNodeSelect(event, node.id)}
                    style={{color: checkboxColor}}
                  />
                  {node.name}
                </>
              }
            >
              {Array.isArray(node.children)
                ? node.children.map((node: TreeData) => renderTree(node))
                : null}
            </TreeItem>
        )
    }
      return (
        <TreeView
          multiSelect
          defaultCollapseIcon={expandIcon}
          defaultExpandIcon={collapseIcon}
          selected={[]} // 可考慮 props
          className={classes.root}
          defaultExpanded={ defaultExpanded ? defaultExpanded : [All]}
        >
          {treeData?.map((node: TreeData) => renderTree(node))}
        </TreeView>
  )
}

export default MuiTreeSelect

// 按鈕向後
// 按鈕自定義
// https://codesandbox.io/s/strange-euclid-ywcjxt?file=/src/App.js

// 不能勾選






