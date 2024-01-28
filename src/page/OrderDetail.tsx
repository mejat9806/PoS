import { useParams } from "react-router-dom";

function OrderDetail() {
  const params = useParams();
  const { id } = params;
  return <div>order detail # {id}</div>;
}

export default OrderDetail;
