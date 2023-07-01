import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Skeleton,
  Stack,
} from "@mui/material";

const Loading = () => {
  return (
    <>
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <Skeleton
          variant="circular"
          sx={{ ml: "20px" ,mt: "20px" }}
          width={50}
          height={50}
        />
      </Grid>
      <Grid item xs={6}>
        <Skeleton variant="text" width={350} sx={{ fontSize: "1rem", mt: "30px" }} />
      </Grid>
    </Grid>

    <Grid container spacing={0}>
      <Grid item xs={2}>
        <Skeleton
          variant="circular"
          sx={{ ml: "20px", mt: "20px"  }}
          width={50}
          height={50}
        />
      </Grid>
      <Grid item xs={6}>
        <Skeleton variant="text" width={350} sx={{ fontSize: "1rem", mt: "30px" }} />
      </Grid>
    </Grid>


    <Grid container spacing={0}>
      <Grid item xs={2}>
        <Skeleton
          variant="circular"
          sx={{ ml: "20px" , mt: "20px" }}
          width={50}
          height={50}
        />
      </Grid>
      <Grid item xs={6}>
        <Skeleton variant="text" width={350} sx={{ fontSize: "1rem", mt: "30px" }} />
      </Grid>
    </Grid>
    </> )
};

export default Loading;
