import "./write.css"

export default function write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://wallpapershome.com/images/pages/ico_h/24640.jpg" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput"><i className="writeIcon fa-solid fa-plus"></i></label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input className="writeInput" type="text" placeholder="Title" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="tell us what u want to say..." type="text" className=" writeText"></textarea>
            </div>
            <button className="writeSubmit">PUBLISH</button>
             </form>
    </div>
  )
}
