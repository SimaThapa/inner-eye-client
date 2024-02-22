import React, {useEffect}from "react";
import { Box, Typography,  CircularProgress,
} from "@mui/material";
import OrangeDivider from "src/components/ui/oragne.divider";
import GallaryList from "./gallary_list";
import { fetchGallaryList } from "src/redux/api/home_slice";
import { useSelector, useDispatch, } from "react-redux";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FourthSectionGallery() {
  const dispatch = useDispatch();
    const isGallaryListLoading = useSelector(
    (state) => state.home?.isGallaryListLoading
    );
    const gallaryList = useSelector((state) => state.home?.gallaryList);

    useEffect(() => {
        dispatch(fetchGallaryList());
      }, [dispatch]);
    
      console.log("gallary list state", isGallaryListLoading, gallaryList);
    
   return (
    <Box sx={{ gap: "140px" }}>
      {/* first box */}

      <Box
        sx={{
          // backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "68px",
        }}
      >
        <OrangeDivider>
          <Typography
            sx={{
              fontSize: "13px",
              letterSpacing: "3px",
              color: "secondary.secondary_600",
              //   fontFamily: "arial",
              lineHeight: "18px",
            }}
          >
            WE CAPTURE SOME GLIMPSE OF YOU
          </Typography>
        </OrangeDivider>
        <Typography
          variant="h3"
          className="responsive_fontSize32"
          sx={{
            color: "secondary.secondary_400",
            fontWeight: "bold",
            letterSpacing: "0.25px",
            lineHeight: "43px",
            fontFamily: "Times New Roman",
            mb: "11px",
          }}
        >
          Gallery
        </Typography>
      </Box>
      {/* second Box */}
      <Box>
        {isGallaryListLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress sx={{ color: "red" }} />
          </Box>
        ) : (
          <GallaryList gallaryList={gallaryList} />
        )}
      </Box>
    </Box>
  );
}

export default FourthSectionGallery;