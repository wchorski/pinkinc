import styled from 'styled-components'

export default function HoneyBeePage() {

  return (
    <main className='mainBody'>

      <StyledBubbleBg className='canvas'>
        <h1> My Honey 🐝</h1>

        <p>{`As you know, my way with words is as about as dense as a a pack of Styrofoam. Packaging aside, I think we make a good package. I hope that even with the tough love, we can also enjoy the easy going sweet love.   If you don't know already, I care about you deeply and your unrest to make a home with me no matter where we are.`}</p>

        <p>{`I enjoy our chill nights in, and our raging times about. One could say I like you inside & out. The bonds we've created hold us through thick and thin. Our joined  connection of Mild to Spicy flavor, our audacious choice in provocative (synonym for Floozie) sound, and a picture of life that makes us Link & Click.`}</p>

        <p>{`With you there is something always new on the horizon. Even without our festival we'll still find ways to Werk It for summer, cuddle in winter, and everything else in between.`}</p>

        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
      </StyledBubbleBg>
    </main>
  )
}


const StyledBubbleBg = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, #edfffa 0%, #d63185 100%);
  position: relative;
  overflow: hidden;

  .bubble {
    display: block;
    border-radius: 100%;
    opacity: 0.8;
    position: absolute;
  }
  .bubble:nth-child(1) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 90px;
    height: 90px;
    left: 62vw;
    bottom: 31vh;
    -webkit-animation: move1 infinite 7s;
            animation: move1 infinite 7s;
  }
  @-webkit-keyframes move1 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 59vh;
      transform: translate(10px, 0);
      opacity: 0;
    }
  }
  @keyframes move1 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 59vh;
      transform: translate(10px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(2) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 93px;
    height: 93px;
    left: 72vw;
    bottom: 30vh;
    -webkit-animation: move2 infinite 12s;
            animation: move2 infinite 12s;
  }
  @-webkit-keyframes move2 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 13vh;
      transform: translate(120px, 0);
      opacity: 0;
    }
  }
  @keyframes move2 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 13vh;
      transform: translate(120px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(3) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 28px;
    height: 28px;
    left: 85vw;
    bottom: 49vh;
    -webkit-animation: move3 infinite 12s;
            animation: move3 infinite 12s;
  }
  @-webkit-keyframes move3 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 18vh;
      transform: translate(13px, 0);
      opacity: 0;
    }
  }
  @keyframes move3 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 18vh;
      transform: translate(13px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(4) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 89px;
    height: 89px;
    left: 26vw;
    bottom: 88vh;
    -webkit-animation: move4 infinite 13s;
            animation: move4 infinite 13s;
  }
  @-webkit-keyframes move4 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 93vh;
      transform: translate(-67px, 0);
      opacity: 0;
    }
  }
  @keyframes move4 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 93vh;
      transform: translate(-67px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(5) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 82px;
    height: 82px;
    left: 88vw;
    bottom: 89vh;
    -webkit-animation: move5 infinite 4s;
            animation: move5 infinite 4s;
  }
  @-webkit-keyframes move5 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 37vh;
      transform: translate(-75px, 0);
      opacity: 0;
    }
  }
  @keyframes move5 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 37vh;
      transform: translate(-75px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(6) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 9px;
    height: 9px;
    left: 18vw;
    bottom: 44vh;
    -webkit-animation: move6 infinite 5s;
            animation: move6 infinite 5s;
  }
  @-webkit-keyframes move6 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 12vh;
      transform: translate(122px, 0);
      opacity: 0;
    }
  }
  @keyframes move6 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 12vh;
      transform: translate(122px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(7) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 72px;
    height: 72px;
    left: 86vw;
    bottom: 37vh;
    -webkit-animation: move7 infinite 4s;
            animation: move7 infinite 4s;
  }
  @-webkit-keyframes move7 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 94vh;
      transform: translate(61px, 0);
      opacity: 0;
    }
  }
  @keyframes move7 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 94vh;
      transform: translate(61px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(8) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 61px;
    height: 61px;
    left: 1vw;
    bottom: 91vh;
    -webkit-animation: move8 infinite 10s;
            animation: move8 infinite 10s;
  }
  @-webkit-keyframes move8 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 90vh;
      transform: translate(21px, 0);
      opacity: 0;
    }
  }
  @keyframes move8 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 90vh;
      transform: translate(21px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(9) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 23px;
    height: 23px;
    left: 55vw;
    bottom: 10vh;
    -webkit-animation: move9 infinite 13s;
            animation: move9 infinite 13s;
  }
  @-webkit-keyframes move9 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 76vh;
      transform: translate(29px, 0);
      opacity: 0;
    }
  }
  @keyframes move9 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 76vh;
      transform: translate(29px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(10) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 22px;
    height: 22px;
    left: 50vw;
    bottom: 91vh;
    -webkit-animation: move10 infinite 4s;
            animation: move10 infinite 4s;
  }
  @-webkit-keyframes move10 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 53vh;
      transform: translate(-50px, 0);
      opacity: 0;
    }
  }
  @keyframes move10 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 53vh;
      transform: translate(-50px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(11) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 13px;
    height: 13px;
    left: 27vw;
    bottom: 75vh;
    -webkit-animation: move11 infinite 4s;
            animation: move11 infinite 4s;
  }
  @-webkit-keyframes move11 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 97vh;
      transform: translate(112px, 0);
      opacity: 0;
    }
  }
  @keyframes move11 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 97vh;
      transform: translate(112px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(12) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 74px;
    height: 74px;
    left: 19vw;
    bottom: 83vh;
    -webkit-animation: move12 infinite 12s;
            animation: move12 infinite 12s;
  }
  @-webkit-keyframes move12 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 76vh;
      transform: translate(21px, 0);
      opacity: 0;
    }
  }
  @keyframes move12 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 76vh;
      transform: translate(21px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(13) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 32px;
    height: 32px;
    left: 61vw;
    bottom: 53vh;
    -webkit-animation: move13 infinite 13s;
            animation: move13 infinite 13s;
  }
  @-webkit-keyframes move13 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 84vh;
      transform: translate(113px, 0);
      opacity: 0;
    }
  }
  @keyframes move13 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 84vh;
      transform: translate(113px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(14) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 45px;
    height: 45px;
    left: 66vw;
    bottom: 78vh;
    -webkit-animation: move14 infinite 6s;
            animation: move14 infinite 6s;
  }
  @-webkit-keyframes move14 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 3vh;
      transform: translate(70px, 0);
      opacity: 0;
    }
  }
  @keyframes move14 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 3vh;
      transform: translate(70px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(15) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 25px;
    height: 25px;
    left: 8vw;
    bottom: 83vh;
    -webkit-animation: move15 infinite 12s;
            animation: move15 infinite 12s;
  }
  @-webkit-keyframes move15 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 93vh;
      transform: translate(187px, 0);
      opacity: 0;
    }
  }
  @keyframes move15 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 93vh;
      transform: translate(187px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(16) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 36px;
    height: 36px;
    left: 5vw;
    bottom: 57vh;
    -webkit-animation: move16 infinite 3s;
            animation: move16 infinite 3s;
  }
  @-webkit-keyframes move16 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 5vh;
      transform: translate(-87px, 0);
      opacity: 0;
    }
  }
  @keyframes move16 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 5vh;
      transform: translate(-87px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(17) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 21px;
    height: 21px;
    left: 9vw;
    bottom: 98vh;
    -webkit-animation: move17 infinite 11s;
            animation: move17 infinite 11s;
  }
  @-webkit-keyframes move17 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 50vh;
      transform: translate(182px, 0);
      opacity: 0;
    }
  }
  @keyframes move17 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 50vh;
      transform: translate(182px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(18) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 42px;
    height: 42px;
    left: 90vw;
    bottom: 48vh;
    -webkit-animation: move18 infinite 15s;
            animation: move18 infinite 15s;
  }
  @-webkit-keyframes move18 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 76vh;
      transform: translate(192px, 0);
      opacity: 0;
    }
  }
  @keyframes move18 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 76vh;
      transform: translate(192px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(19) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 7px;
    height: 7px;
    left: 1vw;
    bottom: 75vh;
    -webkit-animation: move19 infinite 3s;
            animation: move19 infinite 3s;
  }
  @-webkit-keyframes move19 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 98vh;
      transform: translate(163px, 0);
      opacity: 0;
    }
  }
  @keyframes move19 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 98vh;
      transform: translate(163px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(20) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 23px;
    height: 23px;
    left: 71vw;
    bottom: 9vh;
    -webkit-animation: move20 infinite 7s;
            animation: move20 infinite 7s;
  }
  @-webkit-keyframes move20 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 14vh;
      transform: translate(-36px, 0);
      opacity: 0;
    }
  }
  @keyframes move20 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 14vh;
      transform: translate(-36px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(21) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 33px;
    height: 33px;
    left: 4vw;
    bottom: 68vh;
    -webkit-animation: move21 infinite 4s;
            animation: move21 infinite 4s;
  }
  @-webkit-keyframes move21 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 13vh;
      transform: translate(-62px, 0);
      opacity: 0;
    }
  }
  @keyframes move21 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 13vh;
      transform: translate(-62px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(22) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 98px;
    height: 98px;
    left: 39vw;
    bottom: 70vh;
    -webkit-animation: move22 infinite 9s;
            animation: move22 infinite 9s;
  }
  @-webkit-keyframes move22 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 42vh;
      transform: translate(-4px, 0);
      opacity: 0;
    }
  }
  @keyframes move22 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 42vh;
      transform: translate(-4px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(23) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 8px;
    height: 8px;
    left: 94vw;
    bottom: 8vh;
    -webkit-animation: move23 infinite 13s;
            animation: move23 infinite 13s;
  }
  @-webkit-keyframes move23 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 80vh;
      transform: translate(74px, 0);
      opacity: 0;
    }
  }
  @keyframes move23 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 80vh;
      transform: translate(74px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(24) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 6px;
    height: 6px;
    left: 71vw;
    bottom: 35vh;
    -webkit-animation: move24 infinite 3s;
            animation: move24 infinite 3s;
  }
  @-webkit-keyframes move24 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 27vh;
      transform: translate(-52px, 0);
      opacity: 0;
    }
  }
  @keyframes move24 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 27vh;
      transform: translate(-52px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(25) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 41px;
    height: 41px;
    left: 92vw;
    bottom: 50vh;
    -webkit-animation: move25 infinite 9s;
            animation: move25 infinite 9s;
  }
  @-webkit-keyframes move25 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 60vh;
      transform: translate(200px, 0);
      opacity: 0;
    }
  }
  @keyframes move25 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 60vh;
      transform: translate(200px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(26) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 98px;
    height: 98px;
    left: 10vw;
    bottom: 18vh;
    -webkit-animation: move26 infinite 9s;
            animation: move26 infinite 9s;
  }
  @-webkit-keyframes move26 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 44vh;
      transform: translate(109px, 0);
      opacity: 0;
    }
  }
  @keyframes move26 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 44vh;
      transform: translate(109px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(27) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 39px;
    height: 39px;
    left: 50vw;
    bottom: 53vh;
    -webkit-animation: move27 infinite 7s;
            animation: move27 infinite 7s;
  }
  @-webkit-keyframes move27 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 86vh;
      transform: translate(70px, 0);
      opacity: 0;
    }
  }
  @keyframes move27 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 86vh;
      transform: translate(70px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(28) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 49px;
    height: 49px;
    left: 80vw;
    bottom: 40vh;
    -webkit-animation: move28 infinite 13s;
            animation: move28 infinite 13s;
  }
  @-webkit-keyframes move28 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 56vh;
      transform: translate(36px, 0);
      opacity: 0;
    }
  }
  @keyframes move28 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 56vh;
      transform: translate(36px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(29) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 70px;
    height: 70px;
    left: 1vw;
    bottom: 74vh;
    -webkit-animation: move29 infinite 4s;
            animation: move29 infinite 4s;
  }
  @-webkit-keyframes move29 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 58vh;
      transform: translate(167px, 0);
      opacity: 0;
    }
  }
  @keyframes move29 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 58vh;
      transform: translate(167px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(30) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 69px;
    height: 69px;
    left: 24vw;
    bottom: 26vh;
    -webkit-animation: move30 infinite 10s;
            animation: move30 infinite 10s;
  }
  @-webkit-keyframes move30 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 40vh;
      transform: translate(167px, 0);
      opacity: 0;
    }
  }
  @keyframes move30 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 40vh;
      transform: translate(167px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(31) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 13px;
    height: 13px;
    left: 18vw;
    bottom: 84vh;
    -webkit-animation: move31 infinite 6s;
            animation: move31 infinite 6s;
  }
  @-webkit-keyframes move31 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 93vh;
      transform: translate(77px, 0);
      opacity: 0;
    }
  }
  @keyframes move31 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 93vh;
      transform: translate(77px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(32) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 29px;
    height: 29px;
    left: 12vw;
    bottom: 35vh;
    -webkit-animation: move32 infinite 13s;
            animation: move32 infinite 13s;
  }
  @-webkit-keyframes move32 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 23vh;
      transform: translate(138px, 0);
      opacity: 0;
    }
  }
  @keyframes move32 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 23vh;
      transform: translate(138px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(33) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 67px;
    height: 67px;
    left: 84vw;
    bottom: 58vh;
    -webkit-animation: move33 infinite 4s;
            animation: move33 infinite 4s;
  }
  @-webkit-keyframes move33 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 24vh;
      transform: translate(-43px, 0);
      opacity: 0;
    }
  }
  @keyframes move33 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 24vh;
      transform: translate(-43px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(34) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 94px;
    height: 94px;
    left: 84vw;
    bottom: 66vh;
    -webkit-animation: move34 infinite 8s;
            animation: move34 infinite 8s;
  }
  @-webkit-keyframes move34 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 18vh;
      transform: translate(58px, 0);
      opacity: 0;
    }
  }
  @keyframes move34 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 18vh;
      transform: translate(58px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(35) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 24px;
    height: 24px;
    left: 100vw;
    bottom: 85vh;
    -webkit-animation: move35 infinite 10s;
            animation: move35 infinite 10s;
  }
  @-webkit-keyframes move35 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 58vh;
      transform: translate(-92px, 0);
      opacity: 0;
    }
  }
  @keyframes move35 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 58vh;
      transform: translate(-92px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(36) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 52px;
    height: 52px;
    left: 95vw;
    bottom: 15vh;
    -webkit-animation: move36 infinite 11s;
            animation: move36 infinite 11s;
  }
  @-webkit-keyframes move36 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 43vh;
      transform: translate(162px, 0);
      opacity: 0;
    }
  }
  @keyframes move36 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 43vh;
      transform: translate(162px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(37) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 94px;
    height: 94px;
    left: 47vw;
    bottom: 47vh;
    -webkit-animation: move37 infinite 15s;
            animation: move37 infinite 15s;
  }
  @-webkit-keyframes move37 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 28vh;
      transform: translate(-51px, 0);
      opacity: 0;
    }
  }
  @keyframes move37 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 28vh;
      transform: translate(-51px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(38) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 47px;
    height: 47px;
    left: 68vw;
    bottom: 54vh;
    -webkit-animation: move38 infinite 14s;
            animation: move38 infinite 14s;
  }
  @-webkit-keyframes move38 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 35vh;
      transform: translate(24px, 0);
      opacity: 0;
    }
  }
  @keyframes move38 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 35vh;
      transform: translate(24px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(39) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 48px;
    height: 48px;
    left: 56vw;
    bottom: 58vh;
    -webkit-animation: move39 infinite 9s;
            animation: move39 infinite 9s;
  }
  @-webkit-keyframes move39 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 51vh;
      transform: translate(-29px, 0);
      opacity: 0;
    }
  }
  @keyframes move39 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 51vh;
      transform: translate(-29px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(40) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 23px;
    height: 23px;
    left: 72vw;
    bottom: 1vh;
    -webkit-animation: move40 infinite 6s;
            animation: move40 infinite 6s;
  }
  @-webkit-keyframes move40 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 43vh;
      transform: translate(-15px, 0);
      opacity: 0;
    }
  }
  @keyframes move40 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 43vh;
      transform: translate(-15px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(41) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 24px;
    height: 24px;
    left: 20vw;
    bottom: 47vh;
    -webkit-animation: move41 infinite 14s;
            animation: move41 infinite 14s;
  }
  @-webkit-keyframes move41 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 8vh;
      transform: translate(108px, 0);
      opacity: 0;
    }
  }
  @keyframes move41 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 8vh;
      transform: translate(108px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(42) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 59px;
    height: 59px;
    left: 90vw;
    bottom: 71vh;
    -webkit-animation: move42 infinite 9s;
            animation: move42 infinite 9s;
  }
  @-webkit-keyframes move42 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 73vh;
      transform: translate(131px, 0);
      opacity: 0;
    }
  }
  @keyframes move42 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 73vh;
      transform: translate(131px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(43) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 62px;
    height: 62px;
    left: 62vw;
    bottom: 21vh;
    -webkit-animation: move43 infinite 15s;
            animation: move43 infinite 15s;
  }
  @-webkit-keyframes move43 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 69vh;
      transform: translate(106px, 0);
      opacity: 0;
    }
  }
  @keyframes move43 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 69vh;
      transform: translate(106px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(44) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 15px;
    height: 15px;
    left: 16vw;
    bottom: 84vh;
    -webkit-animation: move44 infinite 14s;
            animation: move44 infinite 14s;
  }
  @-webkit-keyframes move44 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 24vh;
      transform: translate(-49px, 0);
      opacity: 0;
    }
  }
  @keyframes move44 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 24vh;
      transform: translate(-49px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(45) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 19px;
    height: 19px;
    left: 96vw;
    bottom: 28vh;
    -webkit-animation: move45 infinite 3s;
            animation: move45 infinite 3s;
  }
  @-webkit-keyframes move45 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 67vh;
      transform: translate(137px, 0);
      opacity: 0;
    }
  }
  @keyframes move45 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 67vh;
      transform: translate(137px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(46) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 73px;
    height: 73px;
    left: 75vw;
    bottom: 15vh;
    -webkit-animation: move46 infinite 9s;
            animation: move46 infinite 9s;
  }
  @-webkit-keyframes move46 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 9vh;
      transform: translate(40px, 0);
      opacity: 0;
    }
  }
  @keyframes move46 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 9vh;
      transform: translate(40px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(47) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 50px;
    height: 50px;
    left: 42vw;
    bottom: 4vh;
    -webkit-animation: move47 infinite 3s;
            animation: move47 infinite 3s;
  }
  @-webkit-keyframes move47 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 17vh;
      transform: translate(136px, 0);
      opacity: 0;
    }
  }
  @keyframes move47 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 17vh;
      transform: translate(136px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(48) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 52px;
    height: 52px;
    left: 28vw;
    bottom: 24vh;
    -webkit-animation: move48 infinite 4s;
            animation: move48 infinite 4s;
  }
  @-webkit-keyframes move48 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 52vh;
      transform: translate(-84px, 0);
      opacity: 0;
    }
  }
  @keyframes move48 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 52vh;
      transform: translate(-84px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(49) {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 16px;
    height: 16px;
    left: 20vw;
    bottom: 51vh;
    -webkit-animation: move49 infinite 15s;
            animation: move49 infinite 15s;
  }
  @-webkit-keyframes move49 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 83vh;
      transform: translate(140px, 0);
      opacity: 0;
    }
  }
  @keyframes move49 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 83vh;
      transform: translate(140px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(50) {
    background: radial-gradient(ellipse at top right, #b8c6c6 0%, #30b3d3 46%, #20628c 100%);
    width: 61px;
    height: 61px;
    left: 21vw;
    bottom: 80vh;
    -webkit-animation: move50 infinite 14s;
            animation: move50 infinite 14s;
  }
  @-webkit-keyframes move50 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 82vh;
      transform: translate(-7px, 0);
      opacity: 0;
    }
  }
  @keyframes move50 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 82vh;
      transform: translate(-7px, 0);
      opacity: 0;
    }
  }
`