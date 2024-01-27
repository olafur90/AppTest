import { useState } from "react";
import { Animated, Text, TouchableWithoutFeedback, View } from "react-native"
import tailwind from "twrnc"

export const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <View style={tailwind.style("flex-1 items-center justify-center")}>
    <TouchableWithoutFeedback
    onPress={() => setOpen((prevOpen) => !prevOpen)}
    style={tailwind.style(
   "relative w-20 bg-white h-20 rounded-xl flex justify-center items-center",
  )}
 >
  <View style={tailwind.style("flex flex-col")}>
   <Animated.View
    style={[tailwind.style("flex flex-row justify-start")]}
   >
    <View
     style={tailwind.style("h-1.5 w-5 rounded-md bg-blue-700 mb-1.5")}
    />
   </Animated.View>

   <Animated.View
    style={[tailwind.style("h-1.5 w-10 rounded-md bg-blue-700")]}
   />
   <Animated.View style={[tailwind.style("flex flex-row justify-end")]}>
    <View
     style={tailwind.style("h-1.5 w-5 rounded-md bg-blue-700 mt-1.5")}
    />
   </Animated.View>
  </View>
 </TouchableWithoutFeedback>
</View>
  )
}