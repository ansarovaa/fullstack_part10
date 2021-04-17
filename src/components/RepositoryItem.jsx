import React from "react";
import { View, Text } from "react-native";


const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stars,
  ratingAverage,
  reviewCount
}) => (
  
<View>
      <Text>{fullName}</Text>
      <Text>{description}</Text>
      <Text>{language}</Text>
      <Text>{forksCount}</Text>
      <Text>{stars}</Text>
      <Text>{ratingAverage}</Text>
      <Text>{reviewCount}</Text>
      

      </View>
  
);

export default RepositoryItem;