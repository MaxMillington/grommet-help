import React, { Component } from 'react';
import { Grommet, Box, DropButton, Select, Button, base as grommetBase } from 'grommet'
import { FormNextLink } from 'grommet-icons'
import { DatepickerInput } from '@sae/ui-components'
import { App as Hawkins } from '@nflx/hawkins-react'
import { defaultTheme as hawkinsBase } from '@nflx/hawkins-react'
import { deepMerge } from '@nflx/hawkins-styles'
import './App.css';

const THEME = deepMerge(grommetBase, hawkinsBase)

class App extends Component {

  state = {
    selectedStartDate: null,
    selectedEndDate: null
  }

  render() {
    const { selectedStartDate, selectedEndDate } = this.state

    return (
      <Hawkins theme={THEME} full={true}>
        <Box
          align='center'
          justify='center'
          fill={true}
        >
          <DropButton
            label='fancy'
            primary={false}
            plain={true}
            onClose={() => { console.log('close') }}
            onOpen={() => { console.log('open')}}
            dropAlign={{ left: 'right' }}
            dropContent={
              <Box pad="small">
                <Box
                  direction='column'
                >
                  <Box direction="row" justify="between" align="center" pad={{ bottom: '20px' }}>
                    <Select
                      options={['one', 'two', 'three']}
                      value={'one'}
                      onChange={(e) => { console.log(' hey', e)}}
                    />
                    <Select
                      options={['one', 'two', 'three']}
                      value={'two'}
                      onChange={(e) => { console.log(' hey', e)}}
                    />
                  </Box>
                  <Box direction="row" justify="between" align="center" pad={{ bottom: '20px' }}>
                    <DatepickerInput
                      placeholder='From'
                      selected={selectedStartDate}
                      onDateSelected={( date ) => { console.log(date) }}
                    />
                    <FormNextLink size='medium' />
                    <DatepickerInput
                      placeholder='To'
                      selected={selectedEndDate}
                      onDateSelected={( date ) => { console.log(date) }}
                    />
                  </Box>
                </Box>
                <Box
                  direction="row"
                  justify="end"
                  style={{ padding: '25px 25px 10px 25px', borderTop: '1px grey solid' }}
                >
                  <Button label="Cancel" width="100px" />
                  <Button label="Apply" width="100px" />
                </Box>
              </Box>
            }
            >
          </DropButton>
        </Box>
      </Hawkins>
    );
  }
}

export default App;
