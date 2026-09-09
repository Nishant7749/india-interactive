import {useState, useEffect} from 'react'
import { RiRobot3Line } from "react-icons/ri"
import { RiArrowUpLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import {sendMsg} from '../services/api'

export default function ChatBot() {
    const[isOpen, setIsOpen] = useState(false)
    const[msg, setMsg] = useState("")
    const[messages, setMessages] = useState([
        {role: "bot",
        text: ""}
    ])


    const handleSendMsg = async()=> {
        const userMsg = {
            role: "user",
            text: msg
           }

           setMessages((prev)=> [...prev, userMsg])

           setMsg("")


        try {
           const data = await sendMsg(msg)

           const botMsg = {
            role: "bot",
            text: data.reply || "Sorry, Couldn't help with that."
           }

           setMessages((prev)=> [...prev, botMsg])


        } catch (error) {
            console.error(error.message)

            setMessages((prev)=> [...prev, {
                role: "bot",
                text: "Something went wrong. Please try again!"
            }])
        }
    }


    return(
        <>
        <div className="fixed z-99 right-14 bottom-18 font-space pointer-events-none">
           

{/* chat window */}
            {isOpen &&
               <div className="flex bg-blue-500/80 rounded-2xl p-3 w-72 h-108 flex-col items-center justify-center">

               <button className='bg-red-400 rounded-lg w-8 pointer-events-auto absolute top-0 hover:bg-red-500 flex items-center justify-center right-0 cursor-pointer h-8' onClick={()=> setIsOpen(!isOpen)}>
                   <RxCross2 className='text-2xl text-white' />
               </button>

                <div className="">
                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl font-bold font-croissant'>Saathi</h1>
                    <span className='text-gray-400'>AI assistant</span>
                </div>

               </div>

{/* messages */}
               <div className='h-3/4 mb-1 font-mono text-sm bg-gray-400/40 rounded-xl w-full'>
                {messages.map((msg, index)=> (
                    <>
                    <div key={index}> {msg.text} </div>
                    <div className='h-0.5 w-1/3 bg-blue-400 m-0.5'></div>
                    </>
                ))}
               </div>

{/* chatbox */}
                 <div className="flex items-center gap-1">
                    <input className='bg-gray-400/30 outline-none rounded-xl border border-gray-400/40 p-2 pointer-events-auto' type="text" value={msg} placeholder="Ask about India..." onChange={(e)=> setMsg(e.target.value)} />
                    <button className='bg-purple-400 border border-purple-500 hover:bg-purple-500 cursor-pointer p-2 rounded-full pointer-events-auto' onClick={handleSendMsg}><RiArrowUpLine className='text-2xl'/></button>
                 </div>
               </div>
            }


{/* floating chatbot button */}
                <button onClick={()=> setIsOpen(!isOpen)} className="">
                    {isOpen ? "" : <RiRobot3Line className=" text-white pointer-events-auto bg-blue-400 hover:bg-purple-500/80 shadow-xl shadow-blue-600 cursor-pointer border border-gray-500/40 rounded-full w-15 flex items-center justify-center h-15" />}
                </button>

            </div>
     
        </>
    )
}