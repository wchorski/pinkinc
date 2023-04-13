import  Head  from "next/head";
import  Image  from "next/image";
import { Navbar } from "../components/Navbar";
import  styled  from "styled-components";

export default function jeff() {
  return (<>
  
    <Head>
      <title>Jeff</title>
      <meta name="description" content="A love letter by William Chorski" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

      <Navbar />

      <main className='mainBody'>
        <StyledJeff>

          <div className="hearts one">
            <div className="heart"></div>
            <div className="heart"></div>
            <div className="heart"></div>
            <div className="heart"></div>
          </div>

          <div className="hearts two">
            <div className="heart"></div>
            <div className="heart"></div>
            <div className="heart"></div>
            <div className="heart"></div>
          </div>
          <div className="hearts three">
            <div className="heart"></div>
            <div className="heart"></div>
            <div className="heart"></div>
            <div className="heart"></div>
          </div>

          <h2>The Cutest Picture You Will Ever See</h2>

          <Image 
            src={'/assets/images/cutestpictureyoucouldeverfind.png'}
            alt={'cute picture'}
            // layout="fill"
            // objectFit='contain'
            width={600}
            height={400}
          />
        </StyledJeff>
      </main>
    </> )
}


const StyledJeff = styled.div`

  background-color: pink;
  padding: 1em;

  max-width: 1000px;
  margin: 0 auto;

  position: relative;

  img{
    width: 100%;
    height: auto;
    margin: 0 auto;
  }

  .hearts {
    width: 5%;
    min-width: 100px;
    height: 25%;
    min-height: 250px;
    position: absolute;
    z-index: 10;
    bottom: 0;

    &.one{
      left: 10%;
    }
    &.two{
      left: 50%;
    }
    &.three{
      left: 75%;
    }
    
  }


  .heart {
    opacity: 0;
    position: absolute;
    height: 20%;
    min-height: 25px;
    width: 20%;
    min-width: 25px;
    background-color: pink;
    -webkit-mask-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>');
            mask-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>');
    -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
    -webkit-mask-position: bottom;
            mask-position: bottom;
    animation: floating-heart 10s infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);
  }

  .heart:nth-child(1) {  
    animation-delay: 1s;
  }

  .heart:nth-child(2) {
    animation-delay: 2.5s;
  }

  .heart:nth-child(3) {
    animation-delay: 3.5s;
  }

  .heart:nth-child(4) {
    animation-delay: 4.5s;
  }

  @keyframes floating-heart {
    0% {
      opacity: 0;
      bottom: 0%;
      left: 0%;
    }
    10% {
      opacity: 1;
      bottom: 20%;
      left: 70%;
    }
    20% {
      bottom: 40%;
      left: 10%;
    }
    30% {
      bottom: 60%;
      left: 50%;
    }
    40% {
      opacity: 1;
      bottom: 80%;
      left: 5%;
    }
    48% {
      opacity: 0;
      bottom: 100%;
      left: 60%;
    }
    100% {
      opacity: 0;
      bottom: 100%;
      left: 90%;
    }
  }
`


