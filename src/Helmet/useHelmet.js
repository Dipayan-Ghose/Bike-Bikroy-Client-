import { useEffect } from "react";

const useHelmet=(title)=>{
useEffect(()=>{
    document.title= `${title}-Bike Bikroy`;
},[title])
};

export default useHelmet;