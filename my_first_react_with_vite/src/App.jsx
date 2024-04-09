import Post  from './componets/Post'
// import info from './assets/mymind.json' // 기존 파일은 이제 API로 외부에서 가져올거라 주석처리
import React, { useState, useEffect } from 'react'; //리액트에서 무언가 가져옴 [REACT]
// import './App.css'


function App() {
  // 데이터를 저장할 상태 변수 [REACT]
  const [info, setData] = useState(null);

  useEffect(() => { //[REACT]
    fetch('https://mutsafeapi.jeje.work/mutsa/Introduction') // 컴포넌트가 마운트된 후에 API로부터 데이터를 가져오는 함수 [JS]
        .then(response => {
            if (response.ok) {
                console.log(response) // 응답을 한번 출력해보자!
                return response.json(); // 응답을 JSON 형태로 변환 [JS]
            }
            throw new Error('Network response was not ok.'); // 응답이 실패하면 에러를 던짐 [JS]
        })
        .then(jsonData => { 
            setData(jsonData); // 변환된 JSON 데이터를 상태 변수에 저장 [JS -> REACT]
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error); // 오류 처리 [JS]
        });
  }, []); // 빈 의존성 배열을 전달하여 컴포넌트가 마운트될 때만 실행되게 함 [REACT]

  console.log(info) //처리된 응답을 한번 확인한다.
  return (
    <>
      {info ? info.map((post, index) => (
        <Post
          key={index} // 고유한 key 사용을 권장 (예: post의 고유 ID)
          src={post.src}
          article={post.article}
          like={post.like}
          commentCnt={post.comment ? post.comment.length : 0}
        />
      )) : <p>Loading...</p>}
    </>
  );
}

export default App
