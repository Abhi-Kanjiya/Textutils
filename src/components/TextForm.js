import React ,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');
    const [find,setFind] = useState('');
    const [replace,setReplace] = useState('');
    const [extractedValue,setextractedValue] = useState('');
    const handleUpClick = () => 
    {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase !!","success");
    }
    const handleOnChange = (event) => 
    {
        setText(event.target.value);
    }
    const handleloClick = () => 
    {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase !!","success");
    }
    const handleClear = () =>
    {
        setText('');
        props.showAlert("Text Cleared Successfully !!","success");
    }
    const speak = () => 
    {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
    }
    const copyclipboard = () => 
    {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied !!","success");
    }
    const RemoveSpace = () => 
    {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Extra Space Removed !!","success");
    }
    const findHandler = (event) => 
    {
        setFind(event.target.value);
    }
    const replaceHandler = (event) => 
    {
        setReplace(event.target.value);
    }
    const findReplaceAllhandler = () =>
    {
        if(find==="")
        {
            alert("Enter Find Value");        
        }
        else if(replace==="")
        {
            alert("Enter Replace Value");        
        }
        else if(find===replace)
        {
            alert("Find and Replace value should be different");
        }
        else
        {
            if(text.includes(find))
            {
                if(window.confirm("Are you sure to replace all the words"))
                {
                    let newText = text.replaceAll(find,replace);
                    setText(newText);  
                    props.showAlert("Words replaced !!","success");  
                }
            }
            else
            {
                alert("NO WORD FOUND"); 
            }
        }
    }
    const findReplacehandler = () =>
    {
        if(find==="")
        {
            alert("Enter Find Value");        
        }
        else if(replace==="")
        {
            alert("Enter Replace Value");        
        }
        else if(find===replace)
        {
            alert("Find and Replace value should be different");
        }
        else
        {
            if(text.includes(find))
            {
                let newText = text.replace(find,replace);
                setText(newText); 
            }
            else
            {
                alert("NO RESULT FOUND"); 
            }
        }
    }
    const replacefr = () =>
    {
        let f = find;
        let r = replace;
        setFind(r); 
        setReplace(f);
    }
    const emailhandler = () =>
    {
        setextractedValue("No Email Found");
        setTimeout(() => {
            setextractedValue("");    
        }, 2000); 
        let newtext = text.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        let value = "";
        let counter=1;
        for (var i=0; i < newtext.length ; i++) {
            value = value + "  (" + counter++ + ")" + newtext[i];
        }
        setextractedValue(value);
    }
    const phonehandler = () =>
    {
        setextractedValue("No Phone Number Found");
        let newtext = text.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        let value = "";
        let counter=1;
        for (var i=0; i < newtext.length ; i++) {
            value = value + "  (" + counter++ + ")" + newtext[i];
        }
        setextractedValue(value);
    }
    
    return (
    <>
    <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
        <div className="mt-3">
            <label htmlFor="myBox" className='form-Label'><h2>{props.heading}</h2></label>
            <textarea className="form-control" id="myBox" rows="8" placeholder='Enter Text Here' value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'#8e84d1':'white', color : props.mode==='dark'?'white':'#281b7d'}}></textarea>
        </div>
        
        <div>
            <div className="row">
                <div className="col-3">
                    <button className={`btn btn-${props.c} mt-3 me-3 w-100`} onClick={handleUpClick}>Convert to UpperCase</button>
                </div>
                <div className="col-3">
                    <button className={`btn btn-${props.c} mt-3 me-3 w-100`} onClick={handleloClick}>Convert to LowerCase</button>
                </div>
                <div className="col-3">
                    <button className={`btn btn-${props.c} mt-3 me-3 w-100`} onClick={handleClear}>Clear Text</button>
                </div>
                <div className="col-3">
                    <button className={`btn btn-${props.c} mt-3 me-3 w-100`} onClick={speak}>Read Text</button>
                </div>
            </div>
        </div>
        <div>
            <div className="row">
                <div className="col-3">
                    <button className={`btn btn-${props.c} mt-3 me-3 w-100`} onClick={copyclipboard}>Copy To Clipboard</button>
                </div>
                <div className="col-3">
                    <button className={`btn btn-${props.c} mt-3 me-3 w-100`} onClick={RemoveSpace}>Remove Extra Space</button>
                </div>
            </div>
        </div>
    </div>
    <div className='container mt-3' style={{color : props.mode==='dark'?'white':'black'}}>
        <div className="row">
            <div className="col-md-8">
                <div className={`border border-${props.mode==='dark'?'white':'#281b7d'} p-2 pt-3 mb-3`}>
                    <h3>Your Text Summary</h3> 
                    <p className='pt-2 pl-2'>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words and {text.trim().length} characters</p>
                    <p className='pl-2'>{text.length===0?"0":text.split(/[.?!]\s/).length} sentences and {text.length===0?"0":text.split(/\r\n|\r|\n/).length} paragraphs</p>
                    <p>{0.008 * text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} Minutes to read</p>
                    <button className={`btn btn-${props.c} mt-3 me-3`} onClick={emailhandler}>Email Extractor</button>
                    <button className={`btn btn-${props.c} mt-3`} onClick={phonehandler}>Phone no Extractor</button>
                    <p className='text-justify m-2 mb-0'>{extractedValue}</p>
                </div>
                <div className={`border border-${props.mode==='dark'?'white':'#281b7d'} p-2 pt-3 mb-3`}><h3>Preview</h3>
                <p>{text.length>0?text:"Enter Text above to preview"}</p></div>
            </div>
            <div className="col-md-4">
                <div className={`border border-${props.mode==='dark'?'white':'#281b7d'} p-2 pt-3 mb-3`}>
                    <h4>Find and Replace all</h4>
                    <input type="text" id='find' onChange={findHandler} className='form-control mt-2' placeholder='Find' value={find} autoComplete="off" style={{backgroundColor : props.mode==='dark'?'#8e84d1':'white',color : props.mode==='dark'?'white':'#281b7d'}}/>
                    <button className={`btn btn-${props.c} mt-2`} onClick={replacefr}><i className="bi-arrow-down-up"></i></button>
                    <input type="text" id='replace' onChange={replaceHandler} className='form-control mt-2' placeholder='Replace' value={replace} autoComplete="off" style={{backgroundColor : props.mode==='dark'?'#8e84d1':'white',color : props.mode==='dark'?'white':'#281b7d'}}/>
                    <button className={`btn btn-${props.c} mt-2 me-2`} onClick={findReplacehandler}>Replace One by One</button>
                    <button className={`btn btn-${props.c} mt-2`} onClick={findReplaceAllhandler}>Replace All</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
