 
 import React, {useState} from "react"



export default function Contactform(props) {
    const handleupclick=()=>{
      // console.log("You clicked" +text)
    let newtext=text.toUpperCase();
    setText(newtext)
    props.showalert("converted to uppercase","success")
    // let newtext2=text.toLowerCase();
    // setText(newtext2)
    }
    const handlelowerclick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext)
    props.showalert("converted to lowercase","success")
    }
      const handleconcateclick=()=>{
      var text=document.getElementById("mybox")
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showalert("copied","success")
      }

      const handleremoveexclick=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showalert("Extra Space Removed From Text ","success")
        }

        const handlecomclick=()=>{
          let newtext=text.concat(text);
         setText(newtext)
         props.showalert("Text Duplicated","success")
          }
    const handleremoveclick=()=>{
      let newtext=("");
      setText(newtext)
      props.showalert("Text Cleared","success")
      }
    const handleonchange=(event)=>{
      // console.log("You change")
      setText(event.target.value)
    }
     const [text, setText] = useState("");
  let mytext=text.trim()
  let words=mytext.split(/\s+/)
  let wrodcount=words.length
  return (
    <>
    <div className={`container`} style={{color:props.mode==='dark' ?'white':'black'}} >
      <h4>{props.title}</h4>
      <div className="mb-3">
      <textarea style={{backgroundColor:props.mode==='dark' ?'gray':'white' ,color:props.mode==='dark' ?'white':'black'}} value={text}  onChange={handleonchange} className="form-control" id="mybox" rows="10"></textarea>
       </div> 
       <button className='btn btn-primary mx-4 my-2' onClick={handleupclick}>Covert To Upercase</button>
       <button className='btn btn-primary mx-4 my-2' onClick={handlelowerclick}>Covert To Lowercase</button>
       <button className='btn btn-primary mx-4 my-2' onClick={handleremoveclick}>Clear Text</button>
       <button className='btn btn-primary mx-4 my-2' onClick={handleconcateclick}>Copy Text</button>
       <button className='btn btn-primary mx-4 my-2' onClick={handleremoveexclick}>Remove Extra Spaces</button>
       <button className='btn btn-primary mx-4 my-2' onClick={ handlecomclick}>Duplicate</button>
       <div className="container my-3">
      <h4 className={`text-light`}>text Summary</h4>
      <p> Total Charicter {text.length}<br></br>Total Words {wrodcount}
      <br></br>Time To Read {0.008 *text.split(" ").length} Minuts</p>
      <h4>text Preview</h4>
      <p style={{color:props.mode==='dark' ?'white':'black'}}>{text}</p>
    </div>
      
    </div>
    

    </>
  )
}


