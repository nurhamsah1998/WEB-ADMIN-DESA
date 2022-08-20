import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardComponent({
  image,
  title,
  date,
  tag,
  handleupdate,
  handleDelete,
  handleDetail,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const tagTitle = tag;
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardHeader title={title} subheader={date} />
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {`${tagTitle.slice(0, tag?.length >= 200 ? 200 : tag?.length)} ${
            tag?.length >= 200 ? ". . ." : ""
          }`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleDetail} aria-label="selengkapnya">
          <InfoIcon />
        </IconButton>
        <IconButton onClick={handleupdate} aria-label="edit program">
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleDelete} aria-label="hapus">
          <DeleteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{tagTitle}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
