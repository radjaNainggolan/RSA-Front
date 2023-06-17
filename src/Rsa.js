import { useState, useEffect , useRef} from "react";
import axios from "axios";

const Rsa = () => {

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const textRef = useRef(null);
    
    const handleCopy = () => {
        textRef.current.select();
        document.execCommand('copy');
        console.log('Text copied to clipboard');
    };

    const callback = (e) => {
        e.preventDefault();
        let input_string = {
            content:input
        };

        axios.get("http://localhost",input_string)
        .then(res => {
            if(res.status !== 200){
                alert(res.status+"\n"+res.message);
            }

            setOutput(res.data)

        }
            
        )

    }


    return (
    <div className="font-bai">
        <div className="flex flex-col justify-center align-middle text-5xl h-max gap-y-10 bg-purple-950 py-10">
            <div className="flex flex-col gap-y-3">
                <h1 className="text-center text-5xl text-orange-400">RSA Online</h1>
                <h2 className="text-center text-3xl text-white">(Rivest–Shamir–Adleman)</h2>
                <h3 className="text-center text-2xl text-white">By Luka and Raden</h3>
            </div>
            <div className="text-white">
                <h3 className="text-3xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolores labore voluptatem. </h3>
                <h3 className="text-2xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolores labore voluptatem. </h3>
            </div>
        </div>
        <div className="flex w-full gap-x-10 justify-center align-middle  px-24 py-10 ">
            <div className="flex flex-col gap-y-7 w-5/12">
                <div className="flex flex-col gap-y-7 w-full">
                    <label htmlFor="" className="text-xl">Input String:</label>
                    <textarea type="textarea" onChange={ e => setInput(e.target.value)} value={input} className="resize-none h-64 border-2 rounded-lg  border-purple-900 focus:outline-none"/>
                    <div className="flex flex-row align-middle justify-center gap-x-16">
                        <button onClick={callback} className="rounded-xl border-2 w-24 h-8 bg-slate-700 text-white hover:scale-110 transition-all ">Generate</button>
                        <button onClick={() => setInput("")} className="rounded-xl border-2 w-24 h-8 hover:scale-110 transition-all ">Clear</button>
                    </div>
                </div>
                <div>
                   
                </div>
            </div>
            <div className="flex flex-col gap-y-7 w-5/12">
                <label className="text-xl" htmlFor="">RSA output:</label>
                <textarea ref={textRef} className="h-64 border-2 rounded-lg  border-purple-900 focus:outline-none resize-none" readOnly value={output} name="" id="" cols="30" rows="10"></textarea>
                <div className="flex flex-row align-middle justify-center gap-x-16">
                    <button onClick={handleCopy} className="rounded-xl border-2 w-24 h-8 hover:scale-110 transition-all ">Copy</button>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Rsa;