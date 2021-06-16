import React from 'react'
import Work from './work'
import './styles.css'

const works = () => {
    return (
        <div className='works'>
          <Work name={'Who wants to be a millionaire'}
                language={'Vanilla javascript + CSS'}
                description={'A question and answer web application game'}
                // link={'samuelbusayojsproject.netlify.app'}
          />
              <Work name={'Who wants to be a millionaire'}
                language={'Vanilla javascript + CSS'}
                description={'A question and answer web application game'}
          />
              <Work name={'Who wants to be a millionaire'}
                language={'Vanilla javascript + CSS'}
                description={'A question and answer web application game'}
          />
              <Work name={'Who wants to be a millionaire'}
                language={'Vanilla javascript + CSS'}
                description={'A question and answer web application game'}
          />
              <Work name={'Who wants to be a millionaire'}
                language={'Vanilla javascript + CSS'}
                description={'A question and answer web application game'}
          />
        </div>
    )
}

export default works
