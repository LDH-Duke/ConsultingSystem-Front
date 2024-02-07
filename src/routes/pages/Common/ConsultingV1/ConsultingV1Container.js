import React, { useEffect, useState } from "react";
import { ConsultingV1Presenter } from "./ConsultingV1Presenter";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";
import cookie from "../../../../cookie";

const ConsultingV1Container = ({
  setCookies
}) => {
  
  return (
    <ConsultingV1Presenter />
  )
}

export default ConsultingV1Container;