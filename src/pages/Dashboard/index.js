import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// import createStyles from "./styles";
import { getCountries } from "./actions";

const Dashboard = () => {
  // const styles = createStyles();
  const dispatch = useDispatch();
  const countries = useSelector((store) => store?.dashboard?.countries);
  console.log("countries: ", countries);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <FlatList
      data={countries}
      initialNumToRender={5}
      renderItem={({ item }) => <Country data={item} />}
      keyExtractor={(i, index) => {
        return `${i?.name.common}_${index}`;
      }}
    />
  );
};

export default Dashboard;

const Country = ({ data }) => {
  return (
    <View>
      <Text>
        {data?.flag} {data?.name.common}
      </Text>
    </View>
  );
};
