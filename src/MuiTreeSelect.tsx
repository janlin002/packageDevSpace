import React, {MouseEvent} from 'react'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import { Theme } from '@material-ui/core';

import { TreeData, MuiTreeSelectProps, StyleProps } from './types/common'


export const useStyles = makeStyles<StyleProps>(() => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
    backgroundColor: "#fff",

    "& > .MuiTreeItem-root": {
      border: "1px solid #E4E7EC",
      borderRadius: "10px",
      // "& > .MuiCollapse-root": {
      //   borderTop: "1px solid #E4E7EC",
      //   marginLeft: "0px",
      //   "& > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiTreeItem-root":
      //     {
      //       borderBottom: "1px solid #E4E7EC",
      //       "&:last-child": {
      //         borderBottom: "none",
      //       },
      //     },
      // },
    },
  },
  content: {
    flexDirection: "row-reverse",
  },
  test: {
    flexDirection: "row",
  }
}));

const MuiTreeSelect = ({
  treeData,
  collapseIcon = ChevronRightIcon,
  expandIcon = ExpandMoreIcon,
  iconReverse = false,
  checkboxColor = '#121232',
  expanded = []
}: MuiTreeSelectProps) => {
  const classes = useStyles()

    const renderTree = (node: TreeData) =>{
        const handleExpandClick = () =>{
            console.log('123123')
        }
        
        const handleNodeSelect = (event: MouseEvent<HTMLButtonElement>, id: string) =>{
            console.log(id, 'iddd')
            console.log('123')
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
                    // checked={selectedNodes.indexOf(node.id) !== -1}
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
    classes={{root: classes.root}}
  >
    {treeData?.map((node) => renderTree(node))}
  </TreeView>
  )
}

export default MuiTreeSelect

// 按鈕向後
// 按鈕自定義
// https://codesandbox.io/s/strange-euclid-ywcjxt?file=/src/App.js
