import React, { useEffect, useState } from "react";
import { ConsultingV2Presenter } from "./ConsultingV2Presenter";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";
import cookie from "../../../../cookie";

const ConsultingV2Container = ({
  setCookies
}) => {
  
  return (
    <ConsultingV2Presenter />
  )
}

export default ConsultingV2Container;