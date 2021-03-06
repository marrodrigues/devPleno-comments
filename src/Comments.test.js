import React from 'react'
import { shallow } from 'enzyme'

import Comments from './Comments'
import Comment from './Comment'

describe('<Comments />', () => {
    it('rederizando comentários', () => {
        const comments = { 
            a: { id:'a', comment: 'test'},
            b: { id:'b', comment: 'test 2'}
        }
        const wrapper = shallow(<Comments comments={comments} />)

        expect(wrapper.find(Comment).length).toBe(2)

        expect(wrapper.find(Comment).get(0).props.c.comment).toBe(comments.a.comment)
        expect(wrapper.find(Comment).get(1).props.c.comment).toBe(comments.b.comment)

        expect(wrapper.find(Comment).get(0).key).toBe(comments.a.id)
        expect(wrapper.find(Comment).get(1).key).toBe(comments.b.id)
        
    })
    it('executando sem comentários', () => {
        const comments = {}
        const wrapper = shallow(<Comments commets={comments}/>)
        
        expect(wrapper.find(Comment).length).toBe(0)
    })
})