import React from 'react'
import savor from 'react-savor'
import 'jsdom-global/register'

import CheckboxDemo from '../../src/demos/checkbox'

savor.add('should mount a simple checkbox', function(context, done) {
  const wrapper = context.shallow(<CheckboxDemo/>)
  context.expect(wrapper.length).to.equal(1)
  done()
}).

run('React Material Checkbox')
