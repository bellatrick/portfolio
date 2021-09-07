import React from 'react'
import Work from './work'
import './styles.css'

const works = () => {
    return (
        <div className='works'>
            <Work name={'Rexha E-Commerce'}
                language={'React, and Commerce js'}
                description={'An E-market app where users can add items to their cart and checkout their products'}
                live={"https://rexhagroup.netlify.app"}
                code={'https://github.com/bellatrick/react-ecommerce'}
          />
           <Work name={'Hulu clone'}
                language={'Next js'}
                description={'A web application that lists out latest movies and their category.'}
                live={"https://huluclone-l3sn6o9fh-bellatrick.vercel.app/"}
                code={'https://github.com/bellatrick/huluclone'}
          />
           <Work name={'Chat app'}
                language={'React JS  Ionic and firebase'}
                description={'A real time web and mobile chat application built with react js and ionic framework and firebase for the backend.'}
                live={"https://ionicchat.netlify.app"}
                code={'https://github.com/bellatrick/mainIonicChat'}
          />
            <Work name={'Landing page'}
                language={'Next js'}
                description={'A fully responsive landing page for a start-up company.'}
                live={"belladevnextjslanding.netlify.app"}
                code={'https://github.com/bellatrick/nextjs-landing'}
          />
          <Work name={'Who wants to be a millionaire'}
                language={'Vanilla javascript + CSS'}
                description={'A question and answer web application game'}
                live={"https://samuelbusayojsproject.netlify.app"}
                code={'https://github.com/bellatrick/jsproject'}
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
