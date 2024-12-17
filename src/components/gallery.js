// importing images
import img1 from "../assets/images/one.jpeg"
import img2 from "../assets/images/two.jpeg"
import img3 from "../assets/images/three.jpeg"
import img4 from "../assets/images/four.jpeg"
import img5 from "../assets/images/five.jpeg"
import img6 from "../assets/images/six.jpeg"
import img7 from "../assets/images/seven.jpeg"
import img8 from "../assets/images/eight.jpeg"
import img9 from "../assets/images/nine.jpeg"
import img10 from "../assets/images/ten.jpeg"
import img11 from "../assets/images/eleven.jpeg"
import img12 from "../assets/images/twelve.jpeg"

function Gallery(){
    return(
        <div className="imagecontainer">
            <div className="carimg">
                <img src={img1} alt="img1"></img>
                <h2 style={{textAlign:"center",fontSize:"20px"}}>Cadillac Coupe</h2>
            </div>
            <div className="carimg">
                <img src={img2} alt="img2" />
                <h2 style={{textAlign:"center",fontSize:"20px"}}>Vaz-2101</h2>
            </div>
            <div className="carimg">
                <img src={img3} alt="img3" />
                <h2 style={{textAlign:"center",fontSize:"20px"}}>Chevorlet Bel</h2>
            </div>
            <div className="carimg">
                <img src={img4} alt="img4" />
                <h2 style={{textAlign:"center",fontSize:"20px"}}>Moskvitch 407</h2>
            </div>
            <div className="carimg">
                <img src={img5} alt="img5" />
                <h2 style={{textAlign:"center",fontSize:"20px"}}>Ford F150</h2>
            </div>
            <div className="carimg">
                <img src={img6} alt="img6" />
                <h2 style={{textAlign:"center",fontSize:"20px"}}>Volkswagen T2</h2>
            </div>
            <div className="carimg">
                <img src={img7} alt="img7" />
                <h2 style={{textAlign:"center",fontSize:"20px"}}>Fiat 500</h2>
            </div>
            <div className="carimg">
                <img src={img8} alt="img8" />
                <h2 style={{textAlign:"center",fontSize:"20px"}}>GAZ volga</h2>
            </div>
            <div className="carimg">
                <img src={img9} alt="img9" />
                <h2 style={{textAlign:"center",fontSize:"20px"}}>Morris mini</h2>
            </div>
            <div className="carimg">
                <img src={img10} alt="img10" />
                <h2 style={{textAlign:"center",fontSize:"20px"}}>Audi RS5</h2>
            </div>
            <div className="carimg">
                <img src={img11} alt="img11" />
                <h2 style={{textAlign:"center",fontSize:"20px"}}>Chevrolet Carvette</h2>
            </div>
            <div className="carimg">
                <img src={img12} alt="img12" />
                <h2 style={{textAlign:"center",fontSize:"20px"}}>Ford Sierra</h2>
            </div>

        </div>
    )
}

export default Gallery