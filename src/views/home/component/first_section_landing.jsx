import React from "react";
import { Box, Button } from "@mui/material";
import OgrangeDivider from "src/components/ui/oragne.divider";
import yoga from "../../../assets/images/yoga.png";
// import {  useSelector,useDispatch } from "react-redux";
// import { increment,decrement,incrementByAmount ,decrementByAmount,incrementByAge,decrementAge} from "src/redux/api/home_slice";
function FirstSectionLanding() {
    // const dispatch=useDispatch();
    // const value =useSelector((state)=>state.home?.value)
    // const age=useSelector((state)=>state.home?.age)

    // function handleIncrement(){
    //   dispatch(increment());
    // }
    // function handleDecrement(){
    //   dispatch(decrement())
    // }
    // function handleIncrementAmount(){
    //   dispatch(incrementByAmount(10))
    // }
    // function handledecrementAmount(){
    //   dispatch((decrementByAmount(5)))
    // }
    // function handleincrementAge(){
    //   dispatch((incrementByAge()))
    // }
    // function handledecrementAge(){
    //   dispatch((decrementAge()))
    // }
 return (

  <Box
        sx={{
          display: "flex",
          flexDirection:{xs:"column-reverse" , md:"row" },
          backgroundColor:"#F3ECF1",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* <h1>My value:{value}</h1>
        <h1>My age:{age}</h1> */}
        {/* LEFT SIDE / */}
        <Box
          sx={{
            maxWidth: "40rem",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
      <OgrangeDivider>
        <h1 className="responsive_fontsize32"
            style={{
              fontWeight: "600",
            }}
          >
            Inner Eye
          </h1>
      </OgrangeDivider>
      
          <p className="responsive_fontsize20">
            Nestled in the lap of the Himalayas in Nepal, Inner Eye is not just a
            retreat; it's a sanctuary for the mind, body, and spirit. Our
            personalized packages cater to your unique needs, offering a blend of
            yoga, meditation, sound healing, breath work, naval treatment,
            psychosocial counseling, spiritual counseling, and past life
            regression. At Inner Eye, our commitment goes beyond providing a
            retreat experience. We empower you to integrate wellness into your
            everyday life. Join us on this transformative journey, and let the
            Inner Eye guide you to a life of balance, clarity, and inner harmony.
          </p>
          <Button
            variant="contained" className="responsive_fontsize20"
            sx={{
              backgroundColor: "secondary.secondary_600",
              opacity: "0.8",
              color: "white",
              "&:hover": {
                backgroundColor: "secondary.main",
                opacity: "1",
              },
            }}
          >
            About Us
          </Button>
          {/* <Button onClick={handleIncrement} style={{border:"2px solid black" ,color:"Black"}}>      
             Increment me
          </Button>
          <Button onClick={handleDecrement}style={{border:"2px solid black",color:"black"}}>
            Decrement me
          </Button>
          <Button 
              onClick={handleIncrementAmount}style={{border:"2px solid black",color:"black"}}
          >  
               Increment by amount
          </Button>
          <Button 
              onClick={handledecrementAmount}style={{border:"2px solid black",   color:"black"}}
          >   
               Decrement By Amount
          </Button>
          <Button 
              onClick={handleincrementAge}style={{border:"2px solid black",   color:"black"}}
          >   
               increment By Age
          </Button>
          <Button 
              onClick={handledecrementAge}style={{border:"2px solid black",   color:"black"}}
          >   
               decrement By Age
          </Button>
 */}

        </Box>
        {/* RIGHT SIDE */}
        <Box>
        <img src={yoga} alt="Yoga" style={{ maxHeight: "550px" }} />

        <p className="responsive_fontsize32" 
            style={{fontFamily: "Roboto Serif",
                    fontStyle: "italic",
                    fontWeight: "700",
                    lineHeight: "37px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color:"#510C4F"
            }}>
          
              "Nestled in the lap of Himalayas in Nepal"
        </p>
      </Box>
  </Box>  


  );
}

export default FirstSectionLanding;
