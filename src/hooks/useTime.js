import React,{useState} from "react";
import { View, Text } from "react-native";

export const useTime = () => {
    const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false });
    const [time, setTime] = useState(getTime());

    setTimeout(() => {
        setTime(getTime());
      }, 1000);

    return time;
}