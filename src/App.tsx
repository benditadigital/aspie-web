import { useState } from 'react'

// Styles
import './index.css';

// Images
import aspieQuiz from '../assets/img/aspieQuiz.png';
import aspieQuizPost from '../assets/img/aspieQuizPost.png';
import authorPP from '../assets/img/authorPP.png';
import logo from '../assets/img/logo.png';

// Icons
import durationIcon from '../assets/icons/duration.svg';
import questionsIcon from '../assets/icons/questions.svg';
import usersIcon from '../assets/icons/users.svg';
import sexIcon from '../assets/icons/sex.svg';
import playIcon from '../assets/icons/play.svg';

function App() {
  const [count, setCount] = useState(0)
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="container max-w-[1024px] mx-auto">
      <nav className='mt-3 mb-5 flex justify-between items-center'>
        <img src={logo} width={70}/>
        <div className='flex gap-8 font-bold text-lg text-white'>
          <h1>
            Sobre Nós
          </h1>
          <h1>
            Blog
          </h1>
          <h1 className='text-[#FFD970]'>
            Aspie Quiz
          </h1>
          <h1>
            Loja
          </h1>
        </div>
        <div>
          <a className='text-lg bg-white text-aspieBlue font-bold px-5 py-1 flex justify-center items-center rounded-lg'>
            Instagram
          </a>
        </div>
      </nav>

      <div className="flex items-center justify-center w-100">
        <img className='py-14' src={aspieQuiz} width={405}/>
      </div>
      <div className='flex'>
        <div className='w-2/4 text-white'>
          <p className='text-2xl font-black '>Bem vindo! ;)</p>
          <h1 className='text-[61px] font-black'>Sobre o Quiz:</h1>
          <p className='w-[360px] text-[18px] font-[500]'>
          Este teste foi criado com a finalidade de
          detectar características neurodiversas e
          neurotípicas em adultos.
          </p>
          <div className='mt-8 '>
            <div className='flex my-4 items-start'>
              <img className='w-6 mr-2' src={durationIcon}/>
              <p><span className='text-xl font-bold mr-2'>Duração:</span> <span>25min.</span></p>
            </div>
            <div className='flex my-4 items-start'>
              <img className='w-6 mr-2' src={questionsIcon}/>
              <p><span className='text-xl font-bold mr-2'>Perguntas:</span> <span>121.</span></p>
            </div>
            <div className='flex my-4 items-start'>
              <img className='w-6 mr-2' src={usersIcon}/>
              <p><span className='text-xl font-bold mr-2'>Já responderam:</span> <span>3.141 pessoas.</span></p>
            </div>
          </div>
        </div>

        <div className='w-2/4'>
          <div className='bg-white rounded-2xl p-5'>
            
            <div className='bg-[#475FEA] mb-3 rounded-2xl h-[300px] flex justify-center'>
              <img className='h-[300px]' src={aspieQuizPost}/>
            </div>
            <div className='flex items-center mb-2'>
              <span className='bg-black text-white px-3 py-1 rounded-2xl text-sm mr-3'>Aspie Quiz</span>
              <span className='text-sm'>8 min. de leitura</span>
            </div>
            
            <h2 className='text-3xl font-bold mb-1'>Como funciona o aspie quiz?</h2>
            <p className='text-justify '>
              Com mais de 120 questões, o aspie quiz é um método desenvolvido para
              detectar características neurodiversas e neurotípicas em adultos.
            </p>

            <div className='flex flex-row mt-3'>
              <div>
                <img src={authorPP} className="bg-aspieBlue rounded-[50%] w-12"></img>
              </div>
              <div className='ml-3 flex flex-col justify-center'>
                <h3 className='font-bold'>Elias de Araújo</h3>
                <p className='text-sm'>Setembro de 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white mt-8 mb-10 rounded-lg flex px-10 py-3'>
        <div className='w-1/4 text-aspieBlue font-medium'>
            <p className='font-bold'>Data de Nascimento:</p>
            <input type='date' className='borderInput rounded-xl p-1 text-center mt-1'/>
        </div>
        <div className='w-1/4 text-aspieBlue font-bold px-10'>
            <p className='font-bold'>Sexo (biológico):</p>
            <div className='selectBox font-medium'>
              <img src={sexIcon} className="selectIcon"/>
              <select className='borderInput rounded-xl p-1 text-center bg-white mt-1'>
                <option value="M">Feminino</option>
                <option value="F">Masculino</option>
              </select>
            </div>
        </div>
        <div className='w-3/4 text-aspieBlue px-10'>
            <p className='font-bold'>Possui Diagnóstico?</p>
            <div className='flex gap-6 items-center font-medium text-[#5F5F5F] mt-3'>
              <div>
                <input type="radio" id="tdah" name="diagnostic"/> TDAH
              </div>
              <div>
                <input type="radio" id="tdah" name="diagnostic"/> Autismo
              </div>
              <div>
                <input type="radio" id="tdah" name="diagnostic"/> Nenhum
              </div>
            </div>
        </div>
        <div className='w-1/4 text-aspieBlue font-bold flex items-end'>
            <button 
            className='bg-aspieBlue hover:bg-[#2844E1]
            text-white p-4 rounded-lg text-2xl flex items-center self-end'>
              Iniciar
              <img className='ml-2' src={playIcon}/>
            </button>
        </div>
      </div>

    </div>
  )
}

export default App
