import { useDispatch, useSelector } from "react-redux";
import "../styleFiles/wishList.css"

function WishList() {
    const state = useSelector((state)=>{
        return {
          wishList: state.WishListReducer.wishList,
        }
    })
    console.log("in wishlist");
    return (
        
        <div>
            {state.wishList.map(e=>{
                console.log("in map");
            return(
                <div className="wishList">
                    <div className="gridList">
                    <img src={e.imgPr} className="imgSize"/>
                    <p>{e.namePr}</p>
                    <p>{e.pricePr}SR</p>
                    </div>
                </div>
            )
            })}
        </div>
    );
}
  
export default WishList;