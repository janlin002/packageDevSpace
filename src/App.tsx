import React from 'react'
import MuiTreeSelect from './MuiTreeSelect'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import data from './fakeData.json'

function App() {

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

export default App
