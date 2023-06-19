import React from 'react'

import MuiTreeSelect from 'mui-tree-selects'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import data from './fakeData.json'

const Test = () => {
  return (
    <MuiTreeSelect 
      treeData={data}
      collapseIcon={<ExpandMoreIcon />}
      expandIcon={<ChevronRightIcon/>}
      iconReverse={true}
      // checkboxColor={'red'}
      // expanded={['1']}
    />
  )
}

export default Test
