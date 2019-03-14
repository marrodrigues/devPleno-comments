import React from 'react'
import { render } from 'enzyme'

import Comment from './Comment'


describe('<Comment/>', () => {
    it('renderizando o texto', () => {
        const c = { comment: 'test'}
        const wrapper = render(<Comment c={c}/>)
        expect(wrapper.text()).toBe('Comentário: test')
    })
    it('renderizando vazio', () => {
        const wrapper = render(<Comment />)
        expect(wrapper.text()).toBe('Comentário: vazio')
    })
})