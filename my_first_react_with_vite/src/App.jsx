import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Post() {
  return(
    <div className='post'>
      <div>
        <img src='https://media.licdn.com/dms/image/D5603AQHgVncQ45cPvw/profile-displayphoto-shrink_800_800/0/1698215501617?e=1718236800&v=beta&t=wCgZP0rahoAN2F3BKnH5VL4fTTIv6QmEe3XRFbJi0yQ'/>
        <li>
          내 손끝에서 무언가가 만들어지고, 이를 통해 다른 사람을 지탱할 수 있기를 바라는 개발자입니다.
        </li>
      </div>
      <p/>
      좋아요: 5
      <br/>
      댓글 5개
    </div>
  )
}

function App() {

  return (
    <>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </>
  )
}

export default App
