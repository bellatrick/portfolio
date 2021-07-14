import React from 'react'
import Work from './work'
import './styles.css'

const works = () => {
    return (
        <div className='works'>
          <Work name={'Who wants to be a millionaire'}
                language={'Vanilla javascript + CSS'}
                description={'A question and answer web application game'}
                live={"https://samuelbusayojsproject.netlify.app"}
                code={'https://https://github.com/bellatrick/jsproject'}
          />
              <Work name={'Rexha E-Commerce'}
                language={'Vanilla javascript + SASS + Node JS'}
                description={'An E-market app where users can add items to their cart and checkout their products'}
                live={"https://rexha-group1.netlify.app"}
                code={'https://https://github.com/Cykic/rexha'}
          />
              <Work name={'Whatsapp Clone'}
                language={'React JS'}
                description={'An imitation of the popular chat App without backend. This clone simulates sending and recieving messages between users and uploading text status.'}
                live={"https://whatsappclonee.netlify.app"}
                code={'https://github.com/bellatrick/WhatsappClone'}
          />
              
        </div>
    )
}

export default works
