import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Images from "./Images";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView
        vertical
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          width: "100%",
        }}
      >
        <ImageBackground
          source={require("./res/bg-photo.jpg")}
          style={styles.container}
        >
          <View style={styles.topmost}>
            <Text style={styles.heading}>💖 Dear Dad 💖,</Text>
            <Text style={styles.heading}>🎈 Happy Birthday!! 🎈</Text>
          </View>
          <Images />
          <Text>{"\n"}</Text>
          <Text style={styles.content}>
            On this special day, I want to wish you all the love, happiness, and
            good health in the world. You mean everything to me, and I'm
            grateful for all the love, wisdom, and support you've provided
            throughout my life.
            {"\n\n"}
            As a birthday gift, I want to share some exciting news with you.
            It's not wrapped in a box, but it's something that will make this
            day even more memorable. I want you to know that I've been working
            hard to prepare for a series of interview rounds, and I promise you
            that I'm giving my absolute best to clear them. If all goes well,
            I'm expecting to receive an offer letter! This is a significant step
            forward in my journey, and I couldn't have done it without your
            guidance and encouragement.
            {"\n\n"}
            Your unwavering belief in me has been my greatest strength. Just as
            you've always been there for me, I want you to know that I'll always
            be there for you. Your happiness is my priority, and I hope this
            news brings an extra sparkle to your special day.
            {"\n\n"}
            It is also my wish that my loving dad has to take care of his own
            health. Health is the most valuable asset to one's life. Please do
            not neglect this. Your health and wellbeing will be the greatest
            gift you can bestow upon us in return.
            {"\n\n"}
            Once again, Happy Birthday, Dad! May this day be filled with joy,
            laughter, and wonderful moments. I look forward to celebrating many
            more birthdays with you.
            {"\n\n"}
            💖 With all my love 💖,
            {"\n\n"}
            Your Son,
            {"\n"}
            Kicchu
          </Text>
          <StatusBar style="auto" />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ec6396",
    alignItems: "center",
    justifyContent: "center",
  },

  topmost: {
    marginTop: 100,
  },

  heading: {
    fontSize: 32,
    // backgroundColor: "rgba(0,0,0,0)",
    color: "white",
    textShadowColor: "rgba(0,0,0,0.75)",
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 10,
    fontWeight: "bold",
    alignContent: "center",
    textAlign: "center",
  },

  content: {
    color: "white",
    // backgroundColor: "rgba(0,0,0,0)",
    textShadowColor: "rgba(0,0,0,0.75)",
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginBottom: 50,
    textAlign: "center",
  },
});
