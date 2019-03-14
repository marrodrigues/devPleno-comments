import React from 'react'
import { shallow } from 'enzyme'

import NewComment from './NewComment'

describe('<New Comment />', () => {
    it('trocando valores no textarea', () => {
        const event = {
            target: {
                value: 'test'
            }
        }
        const wrapper = shallow(<NewComment />)
        wrapper.find('textarea').simulate('change', event)
        expect(wrapper.state().newComment).toBe('test')
    })

    it('chamando sendComment ao clicar no botão', () =>{
        const event = {
            target: {
                value: 'test'
            }
        }
        const sendComment = jest.fn()
        const wrapper = shallow(<NewComment sendComment={sendComment} />)
        wrapper.find('textarea').simulate('change', event)
        wrapper.find('button').simulate('click')
        expect(sendComment).toBeCalledWith('test')
        expect(wrapper.state().newComment).toBe('')
    })
})