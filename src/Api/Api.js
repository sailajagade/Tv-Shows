import Axios from "axios";

export function getData(FETCHALLSHOWS){
    return Axios.get(FETCHALLSHOWS)
}