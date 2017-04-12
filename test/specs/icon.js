import React from 'react'
import savor from 'react-savor'
import 'jsdom-global/register'

import { Icon } from '../..'

savor.add('should mount a simple icon', function(context, done) {
  const wrapper = context.shallow(<Icon/>)
  context.expect(wrapper.length).to.equal(1)
  done()
}).

run('React Material Icon')
