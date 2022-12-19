class API{
    static getData(){
        return new Promise((resolve, reject)=>{
            let xml= new XMLHttpRequest()

            xml.open("get", "data.json")
            xml.onreadystatechange=function(){
                if(xml.readyState===4&&xml.status===200){
                    resolve(JSON.parse(xml.responseText))
                }
            }
            xml.send()
        })
    }
}