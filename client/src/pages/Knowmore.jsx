import React, {useState, useEffect} from 'react';
import DOMPurify from 'dompurify'


function Knowmore () {

  const [isloading, setloading]=useState(true);
  const [data, setData] = useState(null);
  let result;
  let str;
  const [htmlData, setHtmlData] = useState(null);



    useEffect(() => {
    fetch("https://sketchfab.com/oembed?url=https://sketchfab.com/models/dGUrytaktlDeNudCEGKk31oTJY")
    .then(response => response.json())
    .then(data_ => {
      setData(data_);
      
    const regex = /style="(.*?)"/gm;
    const str = data_.html;
    setHtmlData(data_.html);
    const subst = ``;
    
    // The substituted value will be contained in the result variable
     result = str.replace(regex, subst);
      console.log(str);
      console.log(result);
   })
   str=""+  str
   console.log(str);
   console.log(data);
   setloading(false);
  },[])

  const sanitizedData = (str) => ({
    __html: str
  })

  useEffect(() => {console.log("htmlData:",htmlData);console.log("sanitized:",DOMPurify.sanitize(htmlData))}, [htmlData])
  


  // function htmlDecode(content) {
  //   let e = document.createElement('div');
  //   e.innerHTML = content;
  //   return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  // }
  
  return (
    <>

<div dangerouslySetInnerHTML={sanitizedData(htmlData)} />

      </>
  );
}


export default Knowmore;
