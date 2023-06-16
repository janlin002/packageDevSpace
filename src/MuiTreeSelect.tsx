import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

import { TreeData } from './types/common'

import data from './fakeData.json'

const MuiTreeSelect = () => {
    const renderTree = (node: TreeData) =>{
        const handleExpandClick = () =>{
            console.log('123123')
        }
        const handleNodeSelect = (event: any, id: string) =>{
            console.log(id, 'iddd')
            console.log('123')
        }
        return (
            <TreeItem
              key={node.id}
              nodeId={node.id}
              onClick={handleExpandClick}
              label={
                <>
                  <Checkbox
                    // checked={selectedNodes.indexOf(node.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    onClick={(event) => handleNodeSelect(event, node.id)}
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
    defaultCollapseIcon={<ExpandMoreIcon />}
    defaultExpandIcon={<ChevronRightIcon />}
    // selected={selectedNodes}
  >
    {data.map((node) => renderTree(node))}
  </TreeView>
  )
}

export default MuiTreeSelect

// 按鈕向後
// https://codesandbox.io/s/strange-euclid-ywcjxt?file=/src/App.js
