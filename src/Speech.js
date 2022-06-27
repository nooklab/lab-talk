import {useEffect, useRef, useState} from "react";
import './Speech.scss'


export const Speech = props => {
    const [inputText, setInputText] = useState('')
    const [charList, setChatList] = useState([])
    const textInput = useRef()

    useEffect(() => {

    }, [charList])

    function onTextChange(e) {
        setInputText(e.target.value)
    }

    function onClickAdd() {
        const d = [...charList, inputText]
        setChatList(d)
        setInputText('')
        // document.getElementById('myInput').value
        textInput.current.value = ""

    }

    return <>
        {
            charList.map((chat, index) => {
            return <>
                <dir>CHat1:</dir><div className="chatMessage" key={index}>{chat}</div>
            </>
            })
        }
        <input type="text" id="myInput" ref={textInput} onChange={onTextChange}></input>
        <button type="button" onClick={onClickAdd}>Add2</button>
    </>
}