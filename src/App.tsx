import React, { useState } from 'react'

import MuiTreeSelect from './MuiTreeSelect'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import data from './fakeData.json'
import allData from './fakeDataWithAll.json'

const ALL_RANGE = '所有範圍'

const Test = () => {
  const [selectedNodes, setSelectedNodes] = useState<string[]>([])

  console.log(selectedNodes, 'selectedNodes')

  console.log(allData, data, 'datadta')
  return (
    <MuiTreeSelect 
      treeData={allData}
      collapseIcon={<ExpandMoreIcon />}
      expandIcon={<ChevronRightIcon/>}
      iconReverse={true}
      // checkboxColor={'red'}
      // expanded={['1']}
      selectedNodes={selectedNodes}
      setSelectedNodes={setSelectedNodes}
      All={ALL_RANGE}
      // defaultExpanded={['1']}
    />
  )
}

export default Test

