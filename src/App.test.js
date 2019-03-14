import React from 'react'
import { shallow } from 'enzyme'

import App from './App'
import Comments from './Comments'
import NewComment from './NewComment'

describe('<App />', () => {
  it('renderizando sem quebrar', () => {
      const database = {
        ref: jest.fn()
      }
      database.ref.mockReturnValue({
        on: jest.fn()
      })
      const wrapper = shallow(<App database={database} />)
      expect(wrapper.find(Comments).length).toBe(1)
      expect(wrapper.find(NewComment).length).toBe(1)
      expect(wrapper.find('p').length).toBe(1)
  });
})

