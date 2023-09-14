import React from 'react';
import HTML from '../assets/logo2/html1.png';
import CSS from '../assets/logo2/css1.png';
import JavaScript from '../assets/logo2/js1.png';
import ReactImg from '../assets/logo2/react1.png';
import NODE from '../assets/logo2/node1.jpg';
import FireBase from '../assets/logo2/fb1.png';
import AWS from '../assets/logo2/aws1.png';
import GitHub from '../assets/logo2/git1.png';
import TailWind from '../assets/logo2/tail1.png';
import Mongo from '../assets/logo2/mongo1.png';
import Express from '../assets/logo2/exp1.png';
import ReactNative from '../assets/logo2/rn1.png'
import Expo from '../assets/logo2/expo1.png'

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
        {/*Container*/}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                    Skills
                </p>
                <p className="py-4">
                    These ate the Technologies that i've worked with
                </p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={HTML} alt="HTML icon"/>
                    <p className="my-4">HTML</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={CSS} alt="HTML icon"/>
                    <p className="my-4">CSS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon"/>
                    <p className="my-4">JavaScript</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon"/>
                    <p className="my-4">React Js</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={TailWind} alt="HTML icon"/>
                    <p className="my-4">TailwindCSS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={NODE} alt="HTML icon"/>
                    <p className="my-4">Node Js</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={FireBase} alt="HTML icon"/>
                    <p className="my-4">Firebase</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Express} alt="HTML icon"/>
                    <p className="my-4">Express Js</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Mongo} alt="HTML icon"/>
                    <p className="my-4">Mongo DB</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={ReactNative} alt="HTML icon"/>
                    <p className="my-4">React Native</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={GitHub} alt="HTML icon"/>
                    <p className="my-4">GitHub</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Expo} alt="HTML icon"/>
                    <p className="my-4">EXpo CLI</p>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Skills