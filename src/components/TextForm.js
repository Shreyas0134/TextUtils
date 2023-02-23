import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('')
    // const [btnText,setBtnText]=useState('Enable Dark mode')
    // const [myStyle , setMyStyle]=useState({
    //     color:'#404040',
    //     backgroundColor:'white'
    // })

    const handleChange = (event) => {

        setText(event.target.value)
    }

    const UpCase = () => {

        let newText = text.toUpperCase()
        setText(newText)
        if (newText.trim() === '') {
            props.showAlert('Please Enter text in the Textbox','danger')   
        }
        else
        {
            props.showAlert('Converted to UPPERCASE','success')
        }


    }
    const loCase = () => {
        let lcase = text.toLowerCase()
        setText(lcase)
        if (lcase.trim() === '') {
            props.showAlert('Please Enter text in the Textbox','danger')   
        }
        else
        {
            props.showAlert('Converted to lowercase','success')
        }
    }
    const clear = () => {
        let tt=('')
        setText(tt)
        props.showAlert('Cleared Successfully','success')

        
    }
    

    const handelCopy=()=>
    {
         let cpy=document.getElementById('myBox')
         cpy.select()
         navigator.clipboard.writeText(cpy.value)
         props.showAlert('Copied to CLipBoard','success')

        //  if (cpy.trim() === '') {
        //     props.showAlert('Please Enter text in the Textbox','danger')   
        // }
        // else
        // {
        //     navigator.clipboard.writeText(cpy.value)
        //     props.showAlert('Converted to lowercase','success')
        // }
    }
         
    

    // const revSpace=()=>
    // {
       
    //     let newq = text.split(/[]+/);
    //     setText(newq.join(''))
    // }

    // const toggleMode=()=>
    // {
    //     if(myStyle.color === '#404040')
    //     {
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'#404040'
    //         })
    //         setBtnText('Enable Light Mode')

    //     }
    //     else
    //     {
    //         setMyStyle({
    //             color:'#404040',
    //             backgroundColor:'white'
    //         }) 
    //         setBtnText('Enable Dark Mode')  
    //     }
       
    // } 


    return (
        <div >
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control m-auto" value={text} onChange={handleChange} id="myBox" rows="10" ></textarea>
                </div>
                <button className='btn btn-primary mx-2 my-2' onClick={UpCase}>Convert to UPPERCASE</button>
                <button className='btn btn-secondary mx-2 my-2' onClick={loCase}>Convert to lowercase</button>
                <button className='btn btn-danger mx-2 my-2' onClick={clear}>Reset</button>
                {/* <button className='btn btn-dark mx-2 my-2' onClick={toggleMode}>{btnText}</button> */}
                <button className='btn btn-primary mx-2 my-2' onClick={handelCopy}>Copy</button>
                {/* <button className='btn btn-primary mx-2 my-2' onClick={revSpace}>Remove Extra Spaces</button> */}

            </div>
            <div className="container ">
                <h2>Your Text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Time required to read the words = {0.008 * text.split(" ").length}</p>
                <h2>Preview Below</h2>
                <p>{text.length>0?text:"Enter something in Textarea above to preview it here"}</p>
            </div>

        </div>

    )
}
